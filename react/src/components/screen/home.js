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

    const makeComments = (text,postId)=>
    {
        fetch('/comments',{
            method:"put",
            headers:{
                "Content-Type": "application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId,
                text
            })
        }).then(res=>res.json())
        .then(result=>{
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
        }).catch(err=>
            {
                console.log(err);
            })
    }


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

        const deletePost = (postId)=>
        {
            fetch(`/deletePost/${postId}`,{
                method:"delete",
                headers:{
                    Authorization:"Bearer "+localStorage.getItem("jwt")
                }
            }).then(res=>res.json())
            .then(result=>{
                console.log(result)
                const newData = data.filter(item=>{
                    return item._id !== result._id
                })
                setdata(newData)
            })
        }



    return(
    <div className="home">
        {
            data.map(item=>{
                return(
                    <div className="card home-card" key={item._id}>
                    <h5>{item.postedBy.name}
                    {item.postedBy._id == state._id && <i style={{float:'right'}} className="material-icons" 
                    onClick={()=>deletePost(item._id)}
                    >delete</i>
                    
                    }</h5>
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
                        {
                            item.comments.map(record=>{
                                return(
                                    <h6 key={record._id}><span>{record.postedBy.name} </span>{record.text}</h6>
                                )
                            })
                        }
                        <form onSubmit={(e)=>
                        {
                           e.preventDefault()
                           makeComments(e.target[0].value,item._id)
                        }}>
                        <input/>       
                        </form>
                              
                    </div>
                </div>
                )
            })
        }
       
       
        
        
    </div>
    )
}
export default Home