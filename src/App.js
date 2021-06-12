import { Route,BrowserRouter as Router,Switch } from 'react-router-dom';
import home from './pages/home';
import bday from './pages/birthdays';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={home}/>
      <Route path="/bday" component={bday}/>
      <Route render={()=> <div><h1>404 NOT FOUND</h1><h3>Kindly Return Back</h3></div> } />
      </Switch>
    </Router>

  );
}

export default App;
