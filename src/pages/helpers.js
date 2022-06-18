import people from '../assets/validator.js';

export const getname = (name) =>{
  name = name.toLowerCase();
  name = name.split(' ');
  name = name.sort((a,b)=>{ return b.length - a.length });
  return name[0];
}


export function validate(_name){
  if(_name.length <= 4 || _name.length >=20 || !_name.match(/[^0-9]+$/i)) return false;
  _name = getname(_name)

  for (let i = 0; i < people.length; i++) {
    const name =  getname(people[i]);
    if(name.includes(_name)){
      return people[i];
    }
    
  }
  return false;
}
export function isPresent(people,_name){
  for (let i = 0; i < people.length; i++) {
      if(people[i].name === _name) return true;
    
  }
  return false;
}