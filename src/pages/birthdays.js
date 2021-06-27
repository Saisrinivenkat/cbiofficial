import React from 'react';
import List from '../components/list';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Birthdays({user}) {
  const history = useHistory()
  return (
    <main className="min-h-screen h-full bg-friends bg-center bg-cover flex items-center justify-center ">
      <Navbar position={'absolute'} />
      <section className='my-14 mx-14 sm:mx-8 py-8 px-4 md:px-8 max-w-sm bg-white shadow-2xl space-y-2 '>
        <h3 className="p-2 text-center text-indigo-500 font-bold text-xl border-2 bg-gray-200 cursor-pointer"> Birthdays </h3>
        <List data={user} />
        <button className="border-2 border-purple-500 hover:border-gray-500 w-full p-2" onClick={() =>history.push('/upload')}>Add New</button>
      </section>
    </main>
  )
}
