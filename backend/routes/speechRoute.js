import express from "express";
import multer from "multer";
import axios from "axios";
//import openai from "../utils/openai.js";
import { Readable } from "stream";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

const AAI_KEY = process.env.ASSEMBLY_AI_API_KEY;
const ELEVENLABS_API_KEY=process.env.ELEVENLABS_API_KEY;
const VOICE_ID=process.env.VOICE_ID;

const bufferToStream = (buffer) => {
    const stream = new Readable();
    stream.push(buffer);
    stream.push(null);
    return stream;
};


router.post("/speech-to-text", upload.single("audio"), async (req, res) => {
    try {
        console.log("Inside api")

        if (!req.file) {
            return res.status(400).json({ message: "No audio received" });
        }
        console.log("Trying to call assemblyai api call");


        // * !!!!!!!! OPENAI COMMENTED CODE !!!!!!! *



        // const transcription = await openai.audio.transcriptions.create({
        //     file: audioStream,
        //     model: "whisper-1",
        // });

        // console.log("Transcription:", transcription.text)
        // res.json({ text: transcription.text });

        // ***** IMPLEMENT ASSEMBLYAI'S LOGIC ******

        // 1️⃣ Upload audio to AssemblyAI

        const audioStream = bufferToStream(req.file.buffer);
        console.log("API KEY:", AAI_KEY)

        const uploadResponse = await axios({
            method: "post",
            url: "https://api.assemblyai.com/v2/upload",
            headers: {
                Authorization: process.env.ASSEMBLY_AI_API_KEY ,
                "transfer-encoding": "chunked",
            },
            data: audioStream,
        });

        const audioUrl = uploadResponse.data.upload_url;

        // 2️⃣ Request transcription

        const transcriptionResponse = await axios({
            method: "post",
            url: "https://api.assemblyai.com/v2/transcript",
            headers: {
                Authorization: process.env.ASSEMBLY_AI_API_KEY,
            },
            data: {
                audio_url: audioUrl,
            },

        });

        const transcriptId = transcriptionResponse.data.id;

        // 3️⃣ Poll until transcription is done

        let transcriptResult;
        while (true) {
            const pollingResponse = await axios({
                method: "get",
                url: `https://api.assemblyai.com/v2/transcript/${transcriptId}`,
                headers: {
                    Authorization: process.env.ASSEMBLY_AI_API_KEY,
                },
            });
            transcriptResult = pollingResponse.data;

            if (transcriptResult.status === "completed") break;
            if (transcriptResult.status === "error") {
                return res.status(500).json({ message: "Transcription failed" });
            }

            // Wait a bit before next poll
            await new Promise((r) => setTimeout(r, 1000));
        }

        // send back transcript text

        res.json({ text: transcriptResult.text })



    } catch (err) {
        console.error("AssemblyAI error:", err.response?.data || err.message);
        res.status(500).json({ message: "AssemblyAI failed" });
    }


})
router.post("/tts", async (req, res) => {
  const { text } = req.body;

  const response = await axios.post(
    `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
    { text },
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
});


export default router;