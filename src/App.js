import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Route path='/'></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
