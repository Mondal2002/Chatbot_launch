import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import Coverpage from './pages/coverpage';
import Chatbox from './pages/chatbox'
import ChatAssistant from './components/coffee_chatbot';

export const App = () => {
  return (
    <Routes>
      <Route path='/'element={<Home />}/>
      <Route path='/coverpage'element={<Coverpage/>}/>
      <Route path='/chatbot' element={<ChatAssistant/>}></Route>
    </Routes>
  )
}

export default App;
