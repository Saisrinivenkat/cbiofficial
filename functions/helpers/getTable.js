const {table} = require('./airtable')
const response = require('./sendres')

module.exports = async (event)=>{
  const people = await table.select().firstPage();
  const formatPeople = people.map((person) =>({
    ...person.fields,
  }))
  return response(200,formatPeople);
}