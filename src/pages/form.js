import React,{ useState } from 'react'
import {useHistory} from 'react-router-dom'


export default function Form() {
  const [name, setName] = useState("") ;
  const [dob, setDob] = useState("");
  const [warn, setWarn] = useState("hidden")
  const [success, setSuccess] = useState("hidden")
  const [error, setError] = useState("Wrong Details")
  const history = useHistory();
  const goback = () =>{
    return history.push('/bday')
  }
  const fecthimg = async()=>{
      let img;
      try {
        const url = "https://api.unsplash.com/search/photos?page=1&query=flowers&client_id=7L7YtljEENevbzklJHU0aSTXaj3Ihkxzhjdu4xb0vBQ"
        const results = await fetch(url)
        img = await results.json();
      } catch (error) {
        console.log(error)
      }
      const random = Math.floor(Math.random() * (9 - 0) + 0);
      return img.results[random].urls.small;
    } 
    
    const save = async(e)=>{
      e.preventDefault();
      if (name.length <= 4|| name.length >=20 || !name.match(/[^0-9]+$/i)) {
        setWarn("block")
        setSuccess("hidden")
        setError("Incorrect Name")
        return ;
      }
      const img = await fecthimg();
    const person ={
      id: String(Date.now()),
      name: name,
      dob:dob,
      image:img

    }
    try {
      await fetch('/api/data',{
        method: 'POST',
        body: JSON.stringify( person )
      });
      
    } catch (error) {
      console.log(error)
    }

    setName("")
    setDob("")
    setWarn("hidden")
    setSuccess("block")
  }

  return (
    <div className="h-screen flex items-center justify-center bg-friends bg-cover bg-center">
      <form className="py-8 px-10 bg-white flex flex-col" onSubmit={save}>
        <h1 className="p-2 text-center text-pink-400 font-bold text-xl border-2 bg-gray-200 cursor-pointer">Enter Details</h1>
        <input
          className="border-b-2 border-pink-300 p-2 my-4 font-mono"
          id="name"
          type="text"
          placeholder="Your name"
          name = "name"
          onChange={(e)=>setName(e.target.value)}
        />
        <input
        className="border-b-2 border-pink-300 p-2 my-4 font-mono"
          id="dob"
          type="date"
          name = "dob"
          min="1999-01-01"
          max="2003-11-01"
          onChange={(e)=>setDob(e.target.value)}
        />
         
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
