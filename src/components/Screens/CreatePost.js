import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import M from 'materialize-css'

const CreatePost = () =>{
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [image, setImage] = useState('')
    const [url, setUrl] = useState('')

    const postDetails = ()=>{

        //Following post request is to submit photo in the cloud and to get the url of the photo which can be stored in the database
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset','insta-clone')
        data.append('cloud_name','stephin') //here stephin is the cloud name from cloudinary
        fetch('https://api.cloudinary.com/v1_1/stephin/image/upload',{
            method:'post',
            body: data
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setUrl(data.url)
        })
        .catch(err=>{
            console.log(err)
        })

        fetch("/createpost",{
            method:'post',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                body,
                picUrl: url
            })
        })
        .then(res=>res.json())  //parsing response to json
        .then(data=>{
            console.log(data)
            if(data.error){
                M.toast({html: data.error, classes: "#c62828 red darken-3"})
            }
            else{
                M.toast({html: "Post uploaded successfully", classes:"#388e3c green darken-2"})
                history.push('/')
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return(
        <div className="card input-field" style={{
            margin:"30px auto",
            maxWidth:"500px",
            padding:"20px",
            textAlign:"center"
        }}>
            <input 
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />
            <input 
                type="text"
                placeholder="Body"
                value={body}
                onChange={(e)=>setBody(e.target.value)}
            />
            <div className="file-field input-field">
                <div className="btn #64b5f6 blue darken-2">
                    <span>Upload Image</span>
                    <input 
                        type="file" 
                        onChange={(e)=>setImage(e.target.files[0])}
                    />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>
            <button 
                className="btn waves-effect waves-light #64b5f6 blue darken-2"
                onClick={()=>postDetails()}
            >
                Submit Post
            </button>
        </div>
    )
}


export default CreatePost