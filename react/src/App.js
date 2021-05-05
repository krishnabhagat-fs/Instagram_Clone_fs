import React,{useEffect,createContext,useReducer,useContext} from 'react';
import NavBar from './components/nav'
import "./App.css"
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom' 
import Home from './components/screen/home'
import Signin from './components/screen/signin'
import Signup from './components/screen/signup'
import Profile from './components/screen/profile'
import Create_post from './components/screen/createpost'
import {initalState,reducer } from './reducer/userReducer'

export const Usercontex = createContext()

const Routing = ()=>
{
  const history = useHistory()
  const {state,dispatch} = useContext(Usercontex)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
    
    dispatch({type:"USER",payload:user})
    }
    else
    history.push('/signin')
  },[])
  return(
    <Switch>
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
    </Switch>
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,initalState)
  return (
    <Usercontex.Provider value={{state,dispatch}}>
    <BrowserRouter>
    <NavBar/>
    <Routing/>
    </BrowserRouter>
    </Usercontex.Provider>
  );
}

export default App;
