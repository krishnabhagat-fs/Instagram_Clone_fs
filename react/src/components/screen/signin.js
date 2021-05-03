import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import M from 'materialize-css'

const Signin = ()=>
{
    const history = useHistory()

    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")

    const postData=()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        .test(email))
        return M.toast({html: "Not a valid email"})
        
        fetch("http://localhost:5000/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            //M.toast({html: 'I am a toast!'})
            console.log(data);
            if(data.error)
            {
               return M.toast({html: data.error})
            }
            else{
                localStorage.setItem("jwt",data.token)
                
                localStorage.setItem("user",JSON.stringify(data.user))
            M.toast({html: "signedin sucess"})
            history.push('/')
            }
        })
        
    }
    return(
    <div className="MyCard">
        <div className="card auth-card input-field">
            <h2 className="brand-logo">Instagram</h2>
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
            <button className="btn waves-effect waves-light #42a5f5 blue darken-1" onClick={()=>postData()}>Login</button>
            <h5><Link to="/signup">Not have an account</Link></h5>
        </div>
    </div>
    )
}
export default Signin