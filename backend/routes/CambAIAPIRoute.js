import express from "express";
import { CambClient } from "@camb-ai/sdk";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

const client = new CambClient({
  apiKey: process.env.CAMB_API_KEY,
});

const VOICE_ID = 165288;

router.post("/ttscamb", async (req, res) => {
  try {
    const { text } = req.body;

    if (!process.env.CAMB_API_KEY) {
      return res.status(500).json({ message: "Missing CAMB_API_KEY" });
    }
    if (!text || !text.trim()) {
      return res.status(400).json({ message: "Text is required" });
    }

    const response = await client.textToSpeech.tts({
      text,
      voice_id: VOICE_ID,
      language: "en-us",
      speech_model: "mars-pro",
      output_configuration: { format: "wav" },
    });

    console.log("Response type:", typeof response);
    console.log("Response:", response);

    res.set("Content-Type", "audio/wav");

    if (response && typeof response.pipe === "function") {
      // it's a stream
      response.pipe(res);
    } else if (Buffer.isBuffer(response)) {
      // it's already a Buffer
      res.send(response);
    } else if (response && typeof response.arrayBuffer === "function") {
      // it's a Blob/Response
      const buffer = await response.arrayBuffer();
      res.send(Buffer.from(buffer));
    } else if (response && response.audio) {
      // it's wrapped in an object
      res.send(Buffer.from(response.audio));
    } else {
      // fallback
      res.send(Buffer.from(response));
    }
  } catch (err) {
    console.error("CAMB.AI TTS error:", err.message);
    res.status(500).json({ message: "CAMB.AI TTS failed" });
  }
});

export default router;
