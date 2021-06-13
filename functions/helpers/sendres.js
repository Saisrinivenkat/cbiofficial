module.exports = (status,data)=>{
  return {
    statusCode:status,
    body:JSON.stringify(data)
  }
}