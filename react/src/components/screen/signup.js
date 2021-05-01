import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import M from 'materialize-css'
const Signup = ()=>
{
    const history = useHistory()
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")

    const postData=()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        .test(email))
        return M.toast({html: "Not a valid email"})
        
        fetch("http://localhost:5000/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            //M.toast({html: 'I am a toast!'})
            if(data.error)
            {
               return M.toast({html: data.error})
            }
            else{
            M.toast({html: data.message})
            history.push('/signin')
            }
        })
        
    }

    return(
        <div className="MyCard">
        <div className="card auth-card input-field">
            <h2 className="brand-logo">Instagram</h2>
            <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input
            type="text"
            placeholder="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <button className="btn waves-effect waves-light #42a5f5 blue darken-1"
            onClick={()=>postData()}>SignUp</button>
            <h5><Link to="/signin">Already have an account</Link></h5>
        </div>
    </div>
    )
}
export default Signup