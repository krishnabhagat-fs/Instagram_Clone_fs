import React from 'react';
import NavBar from './components/nav'
import "./App.css"
import {BrowserRouter,Route} from 'react-router-dom' 
import Home from './components/screen/home'
import Signin from './components/screen/signin'
import Signup from './components/screen/signup'
import Profile from './components/screen/profile'
import Create_post from './components/screen/createpost'

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/signin">
      <Signin/>
    </Route>
    <Route path="/signup">
      <Signup/>
    </Route>
    <Route path="/profile">
      <Profile/>
    </Route>
    <Route path="/create_post">
      <Create_post/>
    </Route>
    </BrowserRouter>
  );
}

export default App;
