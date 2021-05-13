import React,{useState,useEffect,useContext} from 'react'
import {Usercontex} from '../../App'

const Home = ()=>
{
    const [data,setdata] = useState([])
    const {state,dispatch} = useContext(Usercontex)
    useEffect(()=>
    {
        fetch('/allpost',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            //console.log(result);
            setdata(result.posts)
        })
    },[])
    const likePost = (id)=>
    {
        fetch('/like',{
            method:"put",
            headers:{
                "Content-Type": "application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id
            })
        }).then(res=>{
            res.json()
            .then(result=>
                {
                    //console.log(result);
                    const newData = data.map(item=>
                        {
                            if(item._id == result._id)
                            {
                                return result
                            }
                            else
                            {
                                return item
                            }
                        }
                        )
                        setdata(newData)
                })
        }).catch(err=>
            {
                console.log(err);
            })
    }
    const unlikePost = (id)=>
    {
        fetch('/unlike',{
            method:"put",
            headers:{
                "Content-Type": "application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id
            })
        }).then(res=>{
            res.json()
            .then(result=>
                {
                    //console.log(result);
                    const newData = data.map(item=>
                        {
                            if(item._id == result._id)
                            {
                                return result
                            }
                            else
                            {
                                return item
                            }
                        }
                        )
                        setdata(newData)
                })
        }).catch(err=>
            {
                console.log(err);
            })
    
    }
    return(
    <div className="home">
        {
            data.map(item=>{
                return(
                    <div className="card home-card" key={item._id}>
                    <h5>{item.postedBy.name}</h5>
                    <div className="card-image">
                    <img src={item.photo}/>
                    </div>
                    <div className="card-content">
                    {
                       item.likes.includes(state._id)
                       ? <i className="material-icons"
                       onClick={()=>{
                        unlikePost(item._id);
                       }}
                       >favorite</i> :
                       <i className="material-icons"
                    onClick={()=>{
                       likePost(item._id);
                    }}
                    >favorite_border</i>
                    }

                    
                    
                        <h6>{item.likes.length}</h6>
                        <h6>{item.title}</h6>
                        <p>{item.body}</p>  
                        <input/>              
                    </div>
                </div>
                )
            })
        }
       
       
        
        
    </div>
    )
}
export default Home