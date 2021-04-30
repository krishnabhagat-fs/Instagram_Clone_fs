import React from 'react'
import {Link} from 'react-router-dom'

const Create_post = ()=>
{
    return(
        <div>
            <div className="card cr_post_card input-field">
                <input placeholder="title" type="text"/>
                <input placeholder="body" type="text"/>
                <div className="file-field input-field">
      <div className="btn waves-effect waves-light #42a5f5 blue darken-1">
        <span>image</span>
        <input type="file"/>
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text"/>
      </div>
    </div>
    <button className="btn waves-effect waves-light #42a5f5 blue darken-1">Post</button>
            </div>
            </div>
    )
}
export default Create_post