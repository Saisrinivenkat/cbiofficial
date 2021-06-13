const getdata = require('./helpers/getTable')
const postdata = require('./helpers/postData')
const response = require('./helpers/sendres')

exports.handler = async(event) =>{
  if(event.httpMethod === 'GET'){
    return await getdata(event);
  }
  if (event.httpMethod === 'POST') {
    return await postdata(event);
  }
  return await response(200,"Error mapping")
}