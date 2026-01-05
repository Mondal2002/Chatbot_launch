import React, { useState } from 'react'
import '../styles/home1.css'
import {X,Send} from 'lucide-react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/home1.css";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Model = ({ onClose }) => {
    const[name,setName]=useState('');
    const[phone_No,setPhone_No]=useState('');
    const[emailId,setEmailId]=useState('');
    const[message,setMessage]=useState('');
    const navigate = useNavigate();
   const sendmessage = async () => {
  const data = {
    name,
    phone_No,
    emailId,
    message,
  };

  try {
    await axios.post("https://chatbot-launch.onrender.com/mail", data, {
      withCredentials: true,
    });
    onClose();
    await Swal.fire({
      icon: "success",
      title: "Message Sent",
      text: "Your message has been sent successfully.",
      timer: 2000,
      showConfirmButton: false,
    });

    navigate("/");
  } catch (error) {
    await Swal.fire({
      icon: "error",
      title: "Error",
      text: "Something went wrong. Please try again.",
    });

    navigate("/");
  }
};


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
    <form action="">
    <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            value={name} 
            onChange={(e)=>setName(e.target.value)}
          />
          <label htmlFor="floatingInput">Enter Your Name</label>
        </div>


        <div className="form-floating mb-3">
          <input
            type="tel"
            className="form-control"
            maxLength="10"
            value={phone_No} 
            required
            onChange={(e)=>setPhone_No(e.target.value)}
          />
          <label htmlFor="floatingInput">Enter your Phone No.</label>
        </div>


        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            value={emailId} 
            onChange={(e)=>setEmailId(e.target.value)}
          />
          <label htmlFor="floatingInput">Enter your Gmail</label>
        </div>

      <br/>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            value={message} 
            onChange={(e)=>setMessage(e.target.value)}
            rows='3'
          />
          <label htmlFor="floatingInput">enter your message</label>
      </div>
      </form>
      <div class="modal-footer">
        {/* <button type="button" class="btn btn-secondary" onClick={'/'} ></button> */}
        <button type="button" class="btn btn-primary" onClick={ sendmessage }><Send/></button>
  </div>

        {/* Add form or content here */}
      </div>
    </div>
    </div>

    
  );
};

export default Model;



