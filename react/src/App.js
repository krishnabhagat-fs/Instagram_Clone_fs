import React from 'react';
import NavBar from './components/nav'
import "./App.css"
import {BrowserRouter,Route} from 'react-router-dom' 
import Home from './components/screen/home'
import Login from './components/screen/login'
import Sigin from './components/screen/signup'
import Profile from './components/screen/profile'

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/login">
      <Login/>
    </Route>
    <Route path="/signup">
      <Sigin/>
    </Route>
    <Route path="/profile">
      <Profile/>
    </Route>
    </BrowserRouter>
  );
}

export default App;
