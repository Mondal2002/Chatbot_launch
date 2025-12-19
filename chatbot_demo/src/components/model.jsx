import React, { useState } from 'react'
import '../styles/home1.css'
import {X,Send} from 'lucide-react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/home1.css";
import axios from 'axios';

const Model = ({ onClose }) => {
    const[name,setName]=useState('');
    const[phone_No,setPhone_No]=useState('');
    const[emailId,setEmailId]=useState('');
    const[message,setMessage]=useState('');
    const sendmessage=async()=>{
        const data={
            name,
            phone_No,
            emailId,
            message
        }
        await axios.post('http://localhost:5555/mail',data,{
            withCredentials : true
        }).then(()=>{
            onClose();
        })
    }


  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h2>Contact Us</h2>
    <div >
    <p>Give us Your messege</p>
    <label >Enter your Name  </label>
    <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            value={name} 
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
    <label >Enter your Phone No.  </label>
        <div className="form-floating mb-3">
          <input
            type="tel"
            className="form-control"
            maxLength="10"
            value={phone_No} 
            onChange={(e)=>setPhone_No(e.target.value)}
          />
        </div>

    <label >Enter your Gmail  </label>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            value={emailId} 
            onChange={(e)=>setEmailId(e.target.value)}
          />
        </div>
      <br/>

    <label >enter your message</label>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            value={message} 
            onChange={(e)=>setMessage(e.target.value)}
          />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>close</button>
        <button type="button" class="btn btn-primary" onClick={sendmessage}><Send/></button>
  </div>

        {/* Add form or content here */}
      </div>
    </div>
    </div>

    
  );
};

export default Model;



