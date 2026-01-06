import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { Resend } from "resend";

dotenv.config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

const PORT = process.env.PORT || 5000;
const RESEND_API_KEY = process.env.RESEND_API_KEY;

if (!RESEND_API_KEY) {
  console.error("Missing RESEND_API_KEY");
  process.exit(1);
}

const resend = new Resend(RESEND_API_KEY);

/* ---------------- MAIL FUNCTION ---------------- */

const sendMail = async (name, phone_No, emailId, message) => {
  console.log("Attempting to send mail via Resend...");

  const { error } = await resend.emails.send({
    from: "Chatbot <onboarding@resend.dev>", // default Resend sender
    to: ["sub0.wheeljack@gmail.com"],        // receiver email
    reply_to: emailId,
    subject: `New request for Chatbot from ${emailId}`,
    html: `
      <h3>New Chatbot Request</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${emailId}</p>
      <p><strong>Phone:</strong> ${phone_No}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });

  if (error) {
    throw error;
  }

  console.log("Mail sent successfully via Resend");
};

/* ---------------- ROUTES ---------------- */

app.post("/mail", (req, res) => {
  const { name, phone_No, emailId, message } = req.body;

  if (!name || !phone_No || !emailId || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Respond immediately
  res.status(200).json({ message: "Request received" });

  // Send email asynchronously
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
