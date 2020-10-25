import React, {useState, useEffect} from 'react'

import './Profile.css'

const Profile = () =>{
  const [myPics, setMypics] = useState([])
  useEffect(()=>{
    fetch('/mypost',{
      headers:{
        "Authorization" : "Bearer " + localStorage.getItem("jwt")
      }
    })
    .then(res=>res.json())
    .then(result=>{
      console.log(result)
      setMypics(result.mypost)
    })
  }, [])
    return(
      <div style={{maxWidth:"550px", 
        margin:"0px auto"
      }}>
          <div style={{
            display:"flex",
            justifyContent:"space-around",
            margin: "18px 0px",
            borderBottom:"1px solid grey"
          }}>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1550927407-50e2bd128b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" 
                alt="" 
                style={{width:"160px", height:"160px", borderRadius:"80px"}}

              />
            </div>
            <div>
              <h4>Stephin Reji</h4>
              <div 
              style={{
                display:"flex", 
                justifyContent:"space-between",
                width:"108%"
              }}>
                <h5>40 posts</h5>
                <h5>40 Followers</h5>
                <h5>40 Following</h5>
              </div>
            </div>
          </div>
          
          <div className="gallery">
            {
              myPics.map(item=>{
                return (
                  <img key={item._id} className="item"
                    src={item.photo} 
                    alt={item.title}
                  />
                )
              })
            }
          </div>

      </div>  
    )
}

export default Profile