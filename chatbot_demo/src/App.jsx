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
    </Routes>
  )
}

export default App;
