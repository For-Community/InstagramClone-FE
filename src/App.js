import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Screens/Home'
import Signin from './components/Screens/Login'
import Profile from './components/Screens/Profile'
import Signup from './components/Screens/Signup'

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
      </BrowserRouter>
    </div>
  );
}

export default App;
