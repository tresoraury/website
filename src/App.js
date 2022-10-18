import React from 'react';
import './App.css';
import Navbar from './components/inc/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Fouter from './components/inc/Fouter';

function App() {
  return (
    <Router> 

       <div>
          <Navbar />
       <Switch>
        
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/About">
            <About />
          </Route>

          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
      <Fouter />
        
       </div>
    </Router>
  );
}

export default App;
