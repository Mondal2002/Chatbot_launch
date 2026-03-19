import express from "express";
import axios from "axios";

const router = express.Router();

const SMALLEST_API_KEY = process.env.SMALLEST_API_KEY;
const VOICE_ID = process.env.VOICE_ID || "Kavya";

router.post("/tts", async (req, res) => {
  try {
    const { text } = req.body;

    if (!SMALLEST_API_KEY) {
      return res.status(500).json({ message: "Missing SMALLEST_API_KEY" });
    }
    if (!text || !text.trim()) {
      return res.status(400).json({ message: "Text is required" });
    }

    const response = await axios.post(
      "https://waves-api.smallest.ai/api/v1/lightning-large/get_speech",
      {
        text,
        voice_id: VOICE_ID,
        sample_rate: 24000,
        speed: 1.0,
        add_wav_header: true,
      },
      {
        headers: {
          Authorization: `Bearer ${SMALLEST_API_KEY}`,
          "Content-Type": "application/json",
        },
        responseType: "arraybuffer",
      },
    );

    res.set("Content-Type", "audio/wav");
    res.send(response.data);
  } catch (err) {
    console.error("Smallest.ai TTS error:", err.response?.data || err.message);
    res.status(500).json({ message: "Smallest.ai TTS failed" });
  }
});

export default router;
