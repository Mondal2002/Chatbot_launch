import express from 'express';
const app = express();
import "nodemailer";
app.use(express.json());
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config(); 

app.use(
  cors({
    origin: ["https://chatbot-launch.vercel.app/"],
    credentials: true,
  })
);


const Server_mail_id=process.env.Server_mail_id;
const Server_pass_key=process.env.Server_pass_key;
const Reciever_mail_id=process.env.Reciever_mail_id;

const sendMail=async(name,phone_No,emailId,message)=>{
    const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true, // Use true for port 465, false for port 587
  port:465,
  auth: {
            user: Server_mail_id,
            pass: Server_pass_key
  },
});

// Send an email using async/await
(async () => {
  const info = await transporter.sendMail({
    from: Server_mail_id,
    to: Reciever_mail_id ,
    replyTo:emailId,
    subject: `New request for Chatbot from ${emailId}`,
    text: `
    Sender: ${name}.
    Email Id: ${emailId}.
    Phone No. ${phone_No}.
    
    ${message}`, // Plain-text version of the message // HTML version of the message
  });

  console.log("Message sent:", info);
})();
}
app.post('/mail',(req,res)=>{
    const{ emailId , message }=req.body;
    try{

        const{ name,phone_No,emailId , message }=req.body;
        if(!name||!phone_No||!emailId||!message){
            res.send("Something is wrong Cannot Get User Mail Id or password");
        }
        sendMail(name,phone_No,emailId, message);
        return res.status(200).json({
      message: "Messesge sent  successfully"
    });


    }catch(error){
        console.log(error);
    }
});

app.get('/',(req,res)=>{
    res.send('welcome to backend server');
})
export default app;