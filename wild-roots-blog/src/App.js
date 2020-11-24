import React from 'react';
import './App.css';
import Navigation from './components/Navigation.js';
import Home from './components/Home';
import Blog from './components/Blog.js';
import Contact from './components/Contact.js';
import Login from './components/Login.js';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Axios from 'axios';


function App() {
  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home">
            <Navigation/>
            <Home/>
            <h1>I am a Home page welcome home!</h1>
          </Route>
          <Route path="/blog">
            <Navigation/>
            <Blog/>
            <h1>I am a Blog Page can't wait to hear your stories!</h1>
          </Route>
          <Route path="/contact-us">
          <Navigation/>
          <Contact/>
            <h1>contact Page</h1>
          </Route>
          <Route path="/login">
          <Navigation/>
            <h1>Login page</h1>
          </Route>
          {/* Makes sure default route is always at the bottom
          or else it won't get picked up */}
          <Route path="/">
            <Navigation/>
            <h1>Default Home Page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
