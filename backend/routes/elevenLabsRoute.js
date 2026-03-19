import express from "express";
import axios from "axios";

const router = express.Router();

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = process.env.VOICE_ID;

router.post("/tts", async (req, res) => {
  try {
    const { text } = req.body;

    if (!ELEVENLABS_API_KEY) {
      return res.status(500).json({ message: "Missing ELEVENLABS_API_KEY" });
    }
    if (!VOICE_ID) {
      return res.status(500).json({ message: "Missing VOICE_ID" });
    }
    if (!text || !text.trim()) {
      return res.status(400).json({ message: "Text is required" });
    }

    const response = await axios.post(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
      {
        text,
        model_id: "eleven_multilingual_v2",
        output_format: "mp3_44100_128",
      },
      {
        headers: {
          "xi-api-key": ELEVENLABS_API_KEY,
          "Content-Type": "application/json",
          Accept: "audio/mpeg",
        },
        responseType: "arraybuffer",
      }
    );

    res.set("Content-Type", "audio/mpeg");
    res.send(response.data);
  } catch (err) {
    console.error("ElevenLabs TTS error:", err.response?.data || err.message);
    res.status(500).json({ message: "ElevenLabs TTS failed" });
  }
});

export default router;
