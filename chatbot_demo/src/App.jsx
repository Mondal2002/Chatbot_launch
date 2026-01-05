import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import Coverpage from './pages/coverpage';
import Chatbox from './pages/chatbox'

export const App = () => {
  return (
    <Routes>
      <Route path='/'element={<Home />}/>
      <Route path='/coverpage'element={<Coverpage/>}/>
      {/* <Route path='/chatbot' element={<Chatbox/>}></Route> */}
    </Routes>
  )
}

export default App;
