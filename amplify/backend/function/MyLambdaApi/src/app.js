const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const multer = require('multer')
const upload = multer({ dest: '/tmp/' })
const fs = require('fs')
const utils = require('util')

const unlink = utils.promisify(fs.unlink)

const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

const { uploadFile,getFile } = require("./db")


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


app.get('/image/:key', function(req, res) {
  console.log(req)
  const key = req.params.key;
  const readfs = getFile(key);

  readfs.pipe(res)
  
  res.json({success: 'get call succeed!', url: req.url});
});


app.post('/image',upload.single('image') ,async function(req, res) {
  console.log(req.file);
  const file = req.file;
  const result = await uploadFile(file);
  await unlink(file.path);
  console.log(result);
  res.json({success: 'post call succeed!', url: req.url})
});


app.listen(3000, function() {
    console.log("App started On port 3000")
});

module.exports = app
