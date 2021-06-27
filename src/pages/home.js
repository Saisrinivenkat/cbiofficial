import React from 'react'
import '../assets/main.css'
import '../assets/custom.css'
import Navbar from '../components/Navbar';
import Container from '../components/container';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = { toggle : 'hidden' }
  }
  render(){
    return (
      <div className="container">
        <div className="grid-temp w-screen  h-screen bg-friends bg-center bg-cover bg-no-repeat">
          <Navbar/>
          <Container/>
        </div>
      </div>
    )
  }
}




export default Home;