require("dotenv").config()
const aws  = require("aws-sdk")
const fs = require('fs')

const bucketName = process.env.BUCKET_NAME
const region = process.env.REGION
const accessKey = process.env.BUCKET_ACCESS_KEY
const secretKey = process.env.BUCKET_SECRET_KEY


const s3 = new aws.S3({
  region:region,
  accessKeyId: accessKey,
  secretAccessKey:secretKey
})


function uploadFile(file){
  const fstream = fs.createReadStream(file.path)
  const uploadParams = {
    Bucket: bucketName,
    Body: fstream,
    Key:file.filename
  }


  return s3.upload(uploadParams).promise();
}

exports.uploadFile = uploadFile


function getFile(key){
  const DownParams = {
    Key: key,
    Bucket: bucketName
  }

  return s3.getObject(DownParams).createReadStream()
}

exports.getFile = getFile;