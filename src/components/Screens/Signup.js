import React from 'react'
import {Link} from 'react-router-dom'

import './Signup.css'

const Signin = () =>{
    return(
      <div className="mycard">
          <div className="card auth-card input-field">
            <h2>MoGram</h2>
            <input 
                type="text"
                placeholder="Name"
            />
            <input 
                type="text"
                placeholder="Email"
            />
            <input 
                type="text"
                placeholder="Password"
            />
            <button className="btn waves-effect waves-light #64b5f6 blue darken-2">
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