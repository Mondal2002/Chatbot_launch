import React from 'react'
import '../styles/home1.css'
import {X,Send} from 'lucide-react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/home1.css";

const Model = ({ onClose }) => {
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
          <div class="modal-dialog">
        <p>Give us Your messege</p>
            <form>
                    <input 
                    type="email" 
                    placeholder='Enter Your Email'
                    className='w-full px-4 py-3 border black rounded md'/>
                    <br/>
                    <input 
                    type='text' 
                    placeholder='Enter your messege'
                    className='w-full px-4 py-3 border black rounded md'/>
            </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">close</button>
        <button type="button" class="btn btn-primary"><Send/></button>
  </div>

        {/* Add form or content here */}
      </div>
    </div>
  );
};

export default Model;



