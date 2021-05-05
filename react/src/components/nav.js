import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {Usercontex} from '../App'
const NavBar = ()=>
{
  const {state,dispatch} = useContext(Usercontex)

  const renderList = ()=>
  {
    if(state)
    {
      return [
        <li><Link to="/profile">Profile</Link></li>,
        <li><Link to="/create_post">Create Post</Link></li>
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