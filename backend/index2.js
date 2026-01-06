import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

const Server_mail_id = process.env.Server_mail_id;
const Server_pass_key = process.env.Server_pass_key;
const Reciever_mail_id = process.env.Reciever_mail_id;
const PORT = process.env.PORT || 5000;

if (!Server_mail_id || !Server_pass_key || !Reciever_mail_id) {
  console.error("Missing environment variables");
  process.exit(1);
}

/* ---------------- MAIL FUNCTION ---------------- */

const sendMail = async (name, phone_No, emailId, message) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: Server_mail_id,
      pass: Server_pass_key,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000,
  });

  console.log("Attempting to send mail...");

  const info = await transporter.sendMail({
    from: Server_mail_id,
    to: Reciever_mail_id,
    replyTo: emailId,
    subject: `New request for Chatbot from ${emailId}`,
    text: `
Sender: ${name}
Email Id: ${emailId}
Phone No: ${phone_No}

${message}
    `,
  });

  console.log("Mail sent:", info.response);
};

/* ---------------- ROUTES ---------------- */

app.post("/mail", (req, res) => {
  const { name, phone_No, emailId, message } = req.body;

  if (!name || !phone_No || !emailId || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Respond immediately (IMPORTANT)
  res.status(200).json({ message: "Request received" });

  // Send mail asynchronously
  sendMail(name, phone_No, emailId, message)
    .then(() => console.log("Mail process completed"))
    .catch((err) => console.error("Mail failed:", err));
});

app.get("/", (req, res) => {
  res.send("Welcome to backend server");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
