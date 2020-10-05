import React, {useState, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import M from 'materialize-css'

import './Signin.css'

const Signin = () =>{
    const {state, dispatch} = useContext(UserContext)
    const history = useHistory()
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const PostData = () => {

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
                return M.toast({html: data.error, classes: "#c62828 red darken-3"})
            }
            else{
                localStorage.setItem("jwt", data.token)
                localStorage.setItem("User", JSON.stringify(data.user))
                dispatch({type:"USER", payload:data.user})
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
            <h2>Instagram</h2>
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
                Signin
            </button>
            <p className='pointer link'>Forgot Password?</p>
        </div>
        <Link to='/signup'>
            <div className='have-account card link'>
                <h6>
                    <Link to="/signup">Don't have an account? <span className='link'>Sign Up</span> </Link>
                </h6>
            </div>
        </Link>
      </div>  
    )
}

export default Signin