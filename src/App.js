import {useState, useEffect} from 'react';
import { Route,BrowserRouter as Router,Switch } from 'react-router-dom';
import home from './pages/home';
import Adduser from './pages/form';
// import data from './assets/data.json';
import Birthdays from './pages/birthdays';



function App() {
  const [user, setUser] = useState([])

  const fetchusers = async ()=>{
    try {
      const res =  await fetch(process.env.REACT_APP_GET);
      const people =  await res.json();
      setUser(people)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchusers();
  }, []);
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={home}/>
      <Route path="/bday">
        <Birthdays user={user} />
      </Route>
      <Route path="/upload" >
        <Adduser user={user} refresh={fetchusers}/>
      </Route>
      <Route render={()=> <div><h1>404 NOT FOUND</h1><h3>Kindly Return Back</h3></div> } />
      </Switch>
    </Router>

  );
}

export default App;
