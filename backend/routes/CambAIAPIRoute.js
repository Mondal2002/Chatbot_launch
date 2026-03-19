import express from "express";
import { CambClient, CambApi } from "@camb-ai/sdk";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

const client = new CambClient({
  apiKey: process.env.CAMB_API_KEY,
});

const VOICE_ID = 165288;

router.post("/tts2", async (req, res) => {
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

    res.set("Content-Type", "audio/wav");
    response.pipe(res);
  } catch (err) {
    console.error("CAMB.AI TTS error:", err.message);
    res.status(500).json({ message: "CAMB.AI TTS failed" });
  }
});

export default router;
