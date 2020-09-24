import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Screens/Home'
import Signin from './components/Screens/Signin'
import Profile from './components/Screens/Profile'
import Signup from './components/Screens/Signup'
import CreatePost from './components/Screens/CreatePost'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/signin'>
        <Signin />
      </Route>
      <Route path='/signup'>
        <Signup />
      </Route>
      <Route path='/profile'>
        <Profile />
      </Route>
      <Route path='/create'>
        <CreatePost />
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
