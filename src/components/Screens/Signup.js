import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import './Signup.css'

const Signin = () =>{
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const PostData = () => {
        fetch("/signup",{
            method:'post',
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name:'',
                password:'',
                email:''
            })
        })
        .then(res=>res.json)  //parsing response to json
        .then(data=>{
            console.log(data)
        })
    }

    return(
      <div className="mycard">
          <div className="card auth-card input-field">
            <h2>MoGram</h2>
            <input 
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
            <input 
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
            <input 
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
            <button 
                className="btn waves-effect waves-light #64b5f6 blue darken-2"
                onClick={()=>PostData()}
            >
                Sign Up
            </button>

            <h5>
                <Link to="/signin"> Already have an account?</Link>
            </h5>

        </div>
      </div>  
    )
}

export default Signin