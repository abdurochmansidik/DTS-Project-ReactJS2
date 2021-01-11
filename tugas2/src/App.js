import React from 'react';
import Jumbotron from './Jumbotron.js';
import Navigation from './Navigation.js';
import Cuaca from './Cuaca.js';
import Gempa from './Gempa.js';
import Tsunami from './Tsunami.js';
import Home from './Home.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <Router>
      <div className="App">
        <Jumbotron/>
        <Navigation/>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/cuaca" component={Cuaca}/>
        <Route path="/gempa" component={Gempa}/>
        <Route path="/tsunami" component={Tsunami}/>
        </Switch>
      </div>  
      </Router>
    );
  }
}

export default App;
