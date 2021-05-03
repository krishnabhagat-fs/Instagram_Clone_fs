import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import M from 'materialize-css'


const Create_post = ()=>
{
  const history = useHistory()
  const [title,setTitle] = useState("")
  const [body,setBody] =useState("")
  const [image,setImage] =useState("")
  const [url,setUrl] =useState("")
  const postdetails = ()=>
  {
    const data = new FormData()
    data.append("file",image)
    data.append("upload_preset","insta-clone")
    data.append("cloud_name","krish-fs")
    fetch('	https://api.cloudinary.com/v1_1/krish-fs/image/upload',
    {
      method:"post",
      body:data
    }).then(res=>res.json())
    .then(data=>{
      setUrl(data.url)
    }).catch(err=>{
      console.log(err);
    })
    fetch("http://localhost:5000/createpost",{
      method:"post",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
          title,
          body,
          photo:url
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
      M.toast({html: "Created post sucesfully"})
      history.push('/')
      }
  })
  }
    return(
        <div>
            <div className="card cr_post_card input-field">
                <input placeholder="title" type="text"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}/>
                <input placeholder="body" type="text"
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                />
                <div className="file-field input-field">
      <div className="btn waves-effect waves-light #42a5f5 blue darken-1">
        <span>image</span>
        <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text"/>
      </div>
    </div>
    <button className="btn waves-effect waves-light #42a5f5 blue darken-1"
    onClick={()=>postdetails()}>Post</button>
            </div>
            </div>
    )
}
export default Create_post