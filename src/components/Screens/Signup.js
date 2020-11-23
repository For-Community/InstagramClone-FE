import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import M from 'materialize-css'

import './Signup.css'

const Signup = () =>{
    const history = useHistory()
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const PostData = () => {
        fetch("/signup",{
            method:'post',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                password,
                email
            })
        })
        .then(res=>res.json())  //parsing response to json
        .then(data=>{
            if(data.error){
                return M.toast({html: data.error, classes: "#c62828 red darken-3"})
            }
            else{
                M.toast({html: data.message, classes:"#388e3c green darken-2"})
                history.push('/signin')
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return(
      <div className="mycard">
          <div className="card auth-card input-field">
            <h2>Instagram</h2>
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
                type="password"
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
            Already have an account?<Link to="/signin"> &nbsp;<span style={{color: "blue", textDecoration: "underline", fontSize: 20+"px" }}>sign in</span></Link>
            </h5>

        </div>
      </div>  
    )
}

export default Signup