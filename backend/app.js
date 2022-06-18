const express = require("express")
const cors = require('cors')
const multer = require('multer')



const upload = multer({ dest: 'uploads/' })

const app = express();

app.use(cors())

const PORT = 5020;

app.post("/imgs", upload.single('image') , async (req,res)=>{
  console.log(req.file)
  res.send(`Lambda Send `)
})

app.listen(PORT,()=>{
  console.log(`App Running on port: ${PORT}`)
})