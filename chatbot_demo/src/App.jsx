import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import Coverpage from './pages/coverpage';

export const App = () => {
  return (
    <Routes>
      <Route path='/'element={<Home />}/>
      <Route path='/coverpage'element={<Coverpage/>}/>
    </Routes>
  )
}

export default App;
