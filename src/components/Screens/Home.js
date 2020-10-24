import React, {useState, useEffect} from 'react'

import './Home.css'

const Home = () =>{
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('/allpost',{
      headers:{
        "Authorization": "Bearer "+localStorage.getItem("jwt")
      }
    })
      .then(res=>res.json())
      .then(result=>{
        console.log(result)
        setData(result.posts)
      })
  },[])
    return(
      <div>
          <div className="home">
            {
              data.map(item=>{
                return(
                  <div className="card home-card" key={item._id} >
                    <h5>{item.postedBy.name}</h5>
                    <div className="card-image">
                      <img 
                        src={item.photo} 
                        alt="User Uploaded Image"
                      />
                    </div>
                    <div className="card-content">
                    <i className="material-icons">favorite</i>
                      <h6>{item.title}</h6>
                      <p>{item.body}</p>
                      <input 
                        type="text"
                        placeholder="Add a comment"
                      />
                    </div>
                  </div>
                )
              })
            }
            
          </div>
      </div>  
    )
}

export default Home