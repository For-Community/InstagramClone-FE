import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import M from 'materialize-css'

import './Signin.css'

const Signin = () =>{
    const history = useHistory()
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const PostData = () => {
        // Email Validity Checking
        if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            M.toast({html:"INVALID EMAIL",classes:"#c62828 red darken-3"})
            return
        }
        fetch("/signin",{
            method:'post',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                password,
                email
            })
        })
        .then(res=>res.json())  //parsing response to json
        .then(data=>{
            console.log(data)
            if(data.error){
                M.toast({html: data.error, classes: "#c62828 red darken-3"})
            }
            else{
                M.toast({html: "Signed In Successfully", classes:"#388e3c green darken-2"})
                history.push('/')
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return(
      <div className="mycard">
          <div className="card auth-card input-field">
            <h2>MoGram</h2>
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
                Signin
            </button>

            <h5>
                <Link to="/signup">Don't have an account?</Link>
            </h5>

        </div>
      </div>  
    )
}

export default Signin