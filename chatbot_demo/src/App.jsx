import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import Coverpage from './pages/coverpage';
import ChatAssistant from './components/coffee_chatbot';
import Speech_check from './components/speech_check';

export const App = () => {
  return (
    <Routes>
      <Route path='/'element={<Home />}/>
      <Route path='/coverpage'element={<Coverpage/>}/>
      <Route path='/chatbot' element={<ChatAssistant/>}></Route>
      <Route path='/speech-check' element={<Speech_check/>}></Route>
    </Routes>
  )
}

export default App;
