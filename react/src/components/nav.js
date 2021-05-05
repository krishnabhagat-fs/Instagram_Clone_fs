import React, {useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {Usercontex} from '../App'
const NavBar = ()=>
{
  const {state,dispatch} = useContext(Usercontex)
  const history = useHistory()

  const renderList = ()=>
  {
    if(state)
    {
      return [
        <li><Link to="/profile">Profile</Link></li>,
        <li><Link to="/create_post">Create Post</Link></li>,
        <li><button className="btn waves-effect waves-light #d32f2f red darken-2" onClick={()=>{
          localStorage.clear()
          dispatch({type:"CLEAR"})
          history.push('/signin')
        }
        }>Log out</button></li>
      ]
    }
    else{
      return[
        <li><Link to="/signin">Signin</Link></li>,
        <li><Link to="/signup">Signup</Link></li>
      ]
    }
  }
    return(
        <nav>
    <div className="nav-wrapper white">
      <Link to={state?'/':'/signin'} className="brand-logo left">Instagram</Link>
      <ul id="nav-mobile" className="right">
        {renderList()}
      </ul>
    </div>
  </nav>
    )
}
export default NavBar