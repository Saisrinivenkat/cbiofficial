import React,{ useState,useEffect } from 'react';
import List from '../components/list';
import { Redirect,useHistory } from 'react-router-dom';

export default function Birthdays() {
  const [people, setPeople] = useState([])
  const [image, setImage] = useState("")
  const history = useHistory()
  const upload = () =>{
    return history.push('/upload')
  }
  const loadData = async()=>{
    try {
      const res = await fetch('/.netlify/api/data');
      const people = await res.json();
      setPeople(people)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <main className="h-screen bg-friends bg-center bg-cover bg-no-repeat flex items-center justify-center">
      <section className='py-8 px-8 max-w-sm bg-white shadow-2xl space-y-2 '>
        <h3 className="p-2 text-center text-indigo-500 font-bold text-xl border-2 bg-gray-200 cursor-pointer"> Birthdays </h3>
        <List data={people} />
        <button className="border-2 border-purple-500 hover:border-gray-500 w-full p-2" onClick={upload}>Add New</button>
      </section>
    </main>
  )
}
