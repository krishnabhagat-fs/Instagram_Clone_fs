import React,{useState,useEffect} from 'react'

const Home = ()=>
{
    const [data,setdata] = useState([])
    useEffect(()=>
    {
        fetch('/allpost',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            setdata(result.posts)
        })
    },[])
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
                    <i className="material-icons heart-red">favorite</i>
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