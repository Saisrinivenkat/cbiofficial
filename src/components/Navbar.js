import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar({ position }) {

  return (
    <header className={`col-span-5  ${position} top-0`} >

      <nav className="trans-cls">
        <ul className={`flex  justify-center `}>
          <li className="text-gray-700 text-center text-base md:text-2xl sm:text-normal  p-3 hover:text-white  hover:bg-green-200 transition duration-300"><Link to="/" >Home</Link> </li>
          <li className="text-gray-700 text-center p-3 text-base md:text-2xl sm:text-normal hover:text-white hover:bg-indigo-300 transition duration-300"><Link to="/bday" >Birthdays</Link> </li>
        </ul>
      </nav>
    </header>
  )
}
