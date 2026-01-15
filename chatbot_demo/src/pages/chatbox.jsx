import ChatBot from 'react-chatbotify';
import { useState } from 'react';
import React from 'react'
import settings from "../chatbot_style/settings.json";
import styles from "../chatbot_style/styles.json";
import "../chatbot_style/styles.css";

const Chatbox = () => {
const [count, setCount] = useState(0)

  const flow = {
    "start": {
      "message": "Hi , I am Todung "
    }
  }
  return (
    <>


      <div className="card">
 

      </div>
      <ChatBot 
      settings={settings}
      styles={styles}
      flow={flow}/>
    </>
  )
}


export default Chatbox;
