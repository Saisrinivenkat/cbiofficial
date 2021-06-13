const {table} = require('./airtable')
const response = require('./sendres')

module.exports = async(event) =>{
  const fields = JSON.parse(event.body);
  const model = await table.create([{fields}])

  return response(200,"sucess");

}