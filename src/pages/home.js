import React,{ useState } from 'react'
import { Link } from "react-router-dom";
import '../assets/main.css'
import '../assets/custom.css'

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = { toggle : 'hidden' }
  }
  render(){
    return (
      <div className="container">
        <div className="grid-temp  h-screen bg-friends bg-center bg-cover bg-no-repeat">
          <Navbar/>
          <div className=" col-span-5">
            <div className="flex flex-col items-center justify-center h-full">
              <h1 className="font-rhyme text-4xl font-black text-green-300 tracking-widest ">CBI</h1>
              <h2 className="font-rhyme font-medium tracking-wider text-1xl text-white mt-6 cs-style" data-t="the notorious gang">THE NOTORIOUS GANG</h2>
              <h2 className="font-rhyme font-medium text-1xl tracking-wider text-green-300 mt-6 pb-10 cs-style">MANDA PATHIRAM</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


function Navbar(){
  const [view,changeview] = useState("hidden");
  const [bgcolor,changecolor] = useState("none");

  function shownav(){
    if(view === 'hidden'){
      changeview('flex-cls');
      changecolor("bg-gray-100")
    }else{
      changeview('hidden')
      changecolor('none')
    }
    
  }
  return(
    <header className={`col-span-5 ${bgcolor}`}>
      <div className="flex md:hidden relative w-full h-10 cursor-pointer" onClick={shownav}>
        <div className="absolute top-3 right-8">
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" className="h-6 w-6" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
        </div>
      </div>
      <nav className="trans-cls">
        <ul className={`md:flex md:text-white md:flex-row justify-center flex-col  ${view}`}>
          <li className="text-center text-2xl p-3 hover:bg-green-200 transition duration-300"><Link to="/" >Home</Link> </li>
          <li className="text-center p-3 text-2xl hover:bg-indigo-300 transition duration-300"><Link to="/bday" >Birthdays</Link> </li>
        </ul>
      </nav>
    </header>
  );

}

export default Home;