import './Home.css'

import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
   const [posts, setposts] = useState({
     loadedPosts:[
       {user:'Stephin Reji',profile:'https://images.unsplash.com/photo-1550927407-50e2bd128b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        post:'https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
        {user:'Stephin Reji',profile:'https://images.unsplash.com/photo-1550927407-50e2bd128b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        post:'https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
        {user:'Stephin Reji',profile:'https://images.unsplash.com/photo-1550927407-50e2bd128b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        post:'https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}
     ]
   })
    return(
      <div>
      {
        posts.loadedPosts.map(post =>(
          <div className="home">
            <div className="card home-card">
              <Link to='/profile'>
                  <img className='profile-image' src={post.profile} /> {post.user}
                  <h6 className='link'> </h6>
              </Link>
            
              <div className="card-image">
                <img 
                  src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" 
                  alt=""
                />
              </div>
              <div className="card-content">
              <i className="material-icons like" title='Like'>favorite</i>
                <h6>Title</h6>
                <p>This is an amazing post</p>
                <div className='add-comment'>
                    <input 
                      type="text"
                      placeholder="Add a comment"
                    />
                    <h3 className='comment-button'>Post</h3>
                 </div>
              </div>
            </div>
          </div>
        ))
      }
      </div>  
    )
}

export default Home