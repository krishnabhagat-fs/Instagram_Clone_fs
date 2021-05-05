import React,{useEffect,useState,useContext} from 'react'
import {Usercontex} from '../../App'
const Profile = ()=>
{
    const [mypic,setpic] = useState([])
    const {state,dispatch} = useContext(Usercontex)
    useEffect(()=>
    {
        fetch('/allpost',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            setpic(result.posts)
        })
    },[])
    return(
        <div style={{maxWidth:"550px", margin:"0px auto"}}>
        <div style={{display:'flex',justifyContent:"space-around",margin:"18px 0px", borderBottom:"1px solid grey"}}>
            <div style={{}}>
                <img src={state}
                style={{height:"180px", width:"180px",borderRadius:"100px" }} alt="This is profile pic"
                />
            </div>
            <div>
                <h4>{state?state.name:null}</h4>
                <div style={{display:"flex",justifyContent:"space-between", width:"110%"}}>
                    <h6>40 posts</h6>
                    <h6>15 followers</h6>
                    <h6>25 followings</h6>
                </div>
            </div>
        </div>
        <div className="gallery">
            {
                mypic.map(item=>{
                    return(
                        <img className="item" src={item.photo}  alt={item.title}/>
                    )
                })
            }
        </div>
    </div>
    )
}
export default Profile