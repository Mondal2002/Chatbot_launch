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

const sendMail = async (name, phone_No, emailId, message) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 465,
    auth: {
      user: Server_mail_id,
      pass: Server_pass_key,
    },
  });

  return await transporter.sendMail({
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
};

app.post("/mail", async (req, res) => {
  try {
    const { name, phone_No, emailId, message } = req.body;

    if (!name || !phone_No || !emailId || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    await sendMail(name, phone_No, emailId, message);

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Mail sending failed" });
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to backend server");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
