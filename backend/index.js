import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { Resend } from "resend";
import speechRoute from "./routes/speechRoute.js";

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
    from: "onboarding@resend.dev", // default Resend sender
    to: ["subhammondal735@gmail.com"],        // receiver email
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

// app.post("/chat", (req, res) => {
//     console.log(req.body)
//     const { message } = req.body;
//     console.log("message:", message)

//     if (!message) {
//         return res.status(400).json({ reply: "Message is empty" })
//     }

//     const text = message.toLowerCase();

//     let reply = "Sorry, I didn't understand that ☹️";

//     if (text.includes("menu")) {
//         reply = "Here is our menu: Espresso, Cappuccino, Latte";
//     }

//     else if (text.includes("cappuccino")) {
//         reply = "Cappuccino added to your cart!"
//     }

//     else if (text.includes("latte")) {
//         reply = "Latte added to your cart"
//     }

//     else if (text.includes("cart")) {
//         reply = "You have 4 cart items"
//     }

//     else if (text.includes("tirtha da")) {
//         reply = "Hello....Tirtha da"
//     }

//     else if (text.includes("hello") || text.includes("hi")) {
//         reply = "Hello, how can I help you?"
//     }

//     res.json({ reply })


// })
app.use("/api", speechRoute);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




// const Server_mail_id = process.env.Server_mail_id;
// const Server_pass_key = process.env.Server_pass_key;
// const Reciever_mail_id = process.env.Reciever_mail_id;
// const PORT = process.env.PORT || 5000;

// if (!Server_mail_id || !Server_pass_key || !Reciever_mail_id) {
//   console.error("Missing environment variables");
//   process.exit(1);
// }

// /* ---------------- MAIL FUNCTION ---------------- */

// const sendMail = async (name, phone_No, emailId, message) => {
//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     auth: {
//       user: Server_mail_id,
//       pass: Server_pass_key,
//     },
//     connectionTimeout: 10000,
//     greetingTimeout: 10000,
//     socketTimeout: 10000,
//   });

//   console.log("Attempting to send mail...");

//   const info = await transporter.sendMail({
//     from: Server_mail_id,
//     to: Reciever_mail_id,
//     replyTo: emailId,
//     subject: `New request for Chatbot from ${emailId}`,
//     text: `
// Sender: ${name}
// Email Id: ${emailId}
// Phone No: ${phone_No}

// ${message}
//     `,
//   });

//   console.log("Mail sent:", info.response);
// };

// /* ---------------- ROUTES ---------------- */

// app.post("/mail", (req, res) => {
//   const { name, phone_No, emailId, message } = req.body;

//   if (!name || !phone_No || !emailId || !message) {
//     return res.status(400).json({ error: "All fields are required" });
//   }

//   // Respond immediately (IMPORTANT)
//   res.status(200).json({ message: "Request received" });

//   // Send mail asynchronously
//   sendMail(name, phone_No, emailId, message)
//     .then(() => console.log("Mail process completed"))
//     .catch((err) => console.error("Mail failed:", err));
// });

// app.get("/", (req, res) => {
//   res.send("Welcome to backend server");
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });