import React from 'react'

const Profile = ()=>
{
    return(
        <div style={{maxWidth:"550px", margin:"0px auto"}}>
        <div style={{display:'flex',justifyContent:"space-around",margin:"18px 0px", borderBottom:"1px solid grey"}}>
            <div style={{}}>
                <img src="https://images.unsplash.com/photo-1596935884413-260a972dab44?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
                style={{height:"180px", width:"180px",borderRadius:"100px" }} alt="This is profile pic"
                />
            </div>
            <div>
                <h4>Sebestian sulgth</h4>
                <div style={{display:"flex",justifyContent:"space-between", width:"110%"}}>
                    <h6>40 posts</h6>
                    <h6>15 followers</h6>
                    <h6>25 followings</h6>
                </div>
            </div>
        </div>
        <div className="gallery">
            <img className="item" src="https://images.unsplash.com/photo-1596935884413-260a972dab44?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"  alt="This is post 1"/>
            <img className="item" src="https://images.unsplash.com/photo-1596935884413-260a972dab44?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"  alt="This is post 2"/>
            <img className="item" src="https://images.unsplash.com/photo-1596935884413-260a972dab44?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"  alt="This is post 3"/>
            <img className="item" src="https://images.unsplash.com/photo-1596935884413-260a972dab44?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"  alt="This is post 4"/>
            <img className="item" src="https://images.unsplash.com/photo-1596935884413-260a972dab44?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"  alt="This is post 5"/>
            <img className="item" src="https://images.unsplash.com/photo-1596935884413-260a972dab44?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"  alt="This is post 6"/>
            <img className="item" src="https://images.unsplash.com/photo-1596935884413-260a972dab44?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"  alt="This is post 7"/>
            <img className="item" src="https://images.unsplash.com/photo-1596935884413-260a972dab44?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"  alt="This is post 8"/>
            <img className="item" src="https://images.unsplash.com/photo-1596935884413-260a972dab44?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"  alt="This is post 9"/>
        </div>
    </div>
    )
}
export default Profile