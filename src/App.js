import './App.css';
import React from 'react';
import Jumbo from './Jumbo';
import Navigation from './Navigation';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <Jumbo />
      <div className='row mt-3 container'>
        <Navigation />
        <Switch>
          <Route exact path='/resume'><Resume /></Route>
          <Route exact path='/projects'><Projects /></Route>
          <Route exact path='/contact'><Contact /></Route>
          <Route exact path='/'><About /></Route>
          <Redirect to='/' />
        </Switch>

      </div>
    </div>

  );
}

export default App;
