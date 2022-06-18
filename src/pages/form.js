import React,{ useState } from 'react'
import {useHistory} from 'react-router-dom';
import Navbar from '../components/Navbar.js';
import { validate,isPresent } from "./helpers";
import { API } from "aws-amplify";
 

export default function Form( { user,refresh } ) {

  async function postImages(){
    const formData = new FormData();
    formData.append("image", file)
    formData.append("description", name)
    API.post("myimageapi","/image",{body:formData})
    // fetch("http://localhost:3000/image",{
    //   method:"POST",
    //   body:formData})
      .then(res => {
        setSuccess(res)
        console.log(`Response ${res}`);
        return res.body
      })
      .catch(error => {
        console.log(`Error ${error.response}`);
      })

  }

  const [name, setName] = useState("") ;
  const [dob, setDob] = useState("");
  const [description, setDescription] = useState("")
  const [file,setFile] = useState("")
  const [upstate, setUpstate] = useState('Upload')
  const [warn, setWarn] = useState("hidden")
  const [success, setSuccess] = useState("hidden")
  const [error, setError] = useState("Wrong Details")
  const history = useHistory();

  const changestate = (warn,sucess)=>{
    setWarn(warn)
    // setSuccess(sucess)
    setName("")
    setDob("")
    return;
  }

  const fileSelected = event => {
    const file = event.target.files[0]
		setFile(file)
	}

  const goback = () =>{
    return history.push('/bday')
  }
  const save = async(e)=>{
    e.preventDefault();
    // const val = validate(name);
    // const category = e.target.querySelector('#categ').value;
    // if (val === false) {
    //   setError("Incorrect Name")
    //   changestate('block','hidden')
    //   return ;
    // }
    // if( isPresent(user,val)){
    //   setError("User Already There");
    //   changestate('block','hidden')
    //   return ;
    // }
    // if(category === ''){
    //   setError("Select Category for Profile")
    //   return ;
    // }
    // if(dob === ''){
    //   changestate('block','hidden')
    //   setError("Select Dob")
    //   return ;
    // }
    
    try {
      const rslt = await postImages();
      
    } catch (error) {
      console.log(error)
      setWarn("block")
      return;
    }
    
    // changestate('hidden','block')
    // refresh();
    // e.target.querySelector('#btn').disabled = false;
    // setUpstate('Upload');
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
       <input  className="border-b-2 border-pink-300 p-2 my-4 font-mono" onChange={fileSelected} type="file" accept="image/*"></input>
       <input value={description} onChange={e => setDescription(e.target.value)} type="text"></input>

        <div className="flex">
          <button id="btn" className="mr-2 border-2 border-gray-500 hover:border-indigo-500 w-full p-2rounded-sm" type="submit">{upstate}</button>
          <button className=" border-2 border-gray-500 hover:border-indigo-500 w-full p-2 rounded-sm " onClick={goback}>Go Back</button>
        </div>
        <div className={`${warn} text-red-700 text-md font-medium mt-2 text-center`}>{error}</div>
        <div className={`${success} text-green-700 text-md font-medium mt-2 text-center`}>Succesfully Updated!</div>
      </form>
    </div>
  )
}


