import React,{ useState } from 'react'
import {useHistory} from 'react-router-dom';
import people from '../assets/validator.js';
import Navbar from '../components/Navbar.js';

const getname = (name) =>{
  name = name.toLowerCase();
  name = name.split(' ');
  name = name.sort((a,b)=>{ return b.length - a.length });
  return name[0];
}


function validate(_name){
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
function isPresent(people,_name){
  for (let i = 0; i < people.length; i++) {
      if(people[i].name === _name) return true;
    
  }
  return false;
}

export default function Form( { user,refresh } ) {
  const [name, setName] = useState("") ;
  const [dob, setDob] = useState("");
  const [warn, setWarn] = useState("hidden")
  const [success, setSuccess] = useState("hidden")
  const [error, setError] = useState("Wrong Details")
  const history = useHistory();


  const goback = () =>{
    return history.push('/bday')
  }
  const save = async(e)=>{
    e.preventDefault();
    const val = validate(name);
    const category = e.target.querySelector('#categ').value;
    if (val === false) {
      setWarn("block")
      setSuccess("hidden")
      setError("Incorrect Name")
      setName("")
      setDob("")
      return ;
    }
    if( isPresent(user,val)){
      setWarn("block")
      setSuccess("hidden")
      setName("")
      setDob("")
      setError("User Already There");
      return ;
    }
    if(category === ''){
        setWarn("block")
        setSuccess("hidden")
        setError("Select Category for Profile")
        setName("")
        setDob("")  
        return ;
    }
    if(dob === ''){
      setWarn("block")
      setSuccess("hidden")
      setError("Select Dob")
      setName("")
      setDob("")  
      return ;
    }
    const unplash = `https://api.unsplash.com/photos/random/?query=${category}&client_id=${process.env.REACT_APP_UNSPLASH}`;
    const res = await fetch(unplash);
    const img = await res.json();
    const person ={
      id: String(Date.now()),
      name: val,
      dob:dob,
      image:img.urls.small
    }
    try {
      await fetch(process.env.REACT_APP_POST,{
        method: 'POST',
        body: JSON.stringify( person )
      });
      
    } catch (error) {
      console.log(error)
      setWarn("block")
      return;
    }

    setName("")
    setDob("")
    refresh();
    setWarn("hidden")
    setSuccess("block")
  }

  return (
    <div className="h-screen flex items-center flex-col justify-center bg-friends bg-cover bg-center">
      <Navbar position={'absolute'} mobile={'hidden'}/>
      <form className="py-8 px-10 bg-white flex flex-col" onSubmit={save}>
        <h1 className="p-2 text-center text-pink-400 font-bold text-xl border-2 bg-gray-200 cursor-pointer">Enter Details</h1>
        <input
          className="border-b-2 border-pink-300 p-2 my-4 font-mono"
          id="name"
          type="text"
          placeholder="Your name"
          name = "name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <input
        className="border-b-2 border-pink-300 p-2 my-4 font-mono"
          id="dob"
          type="date"
          name = "dob"
          min="1999-01-01"
          max="2003-11-01"
          value={dob}
          onChange={(e)=>setDob(e.target.value)}
        />
        <select name="catgeory" id="categ"  className="border-b-2 border-pink-300 p-2 my-4 font-mono">
          <option value=''>Select Category</option>
          <option value='cat'>Cat</option>
          <option value='dog'>Dog</option>
          <option value='flower'>Flower</option>
        </select>

        <div className="flex">
          <button className="mr-2 border-2 border-gray-500 hover:border-indigo-500 w-full p-2rounded-sm" type="submit">Upload</button>
          <button className=" border-2 border-gray-500 hover:border-indigo-500 w-full p-2 rounded-sm " onClick={goback}>Go Back</button>
        </div>
        <div className={`${warn} text-red-700 text-md font-medium mt-2 text-center`}>{error}</div>
        <div className={`${success} text-green-700 text-md font-medium mt-2 text-center`}>Succesfully Updated!</div>
      </form>
    </div>
  )
}
