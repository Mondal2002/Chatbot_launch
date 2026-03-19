import { useState, useEffect, useRef } from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MicIcon from "@mui/icons-material/Mic";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import "../styles/ChatAssistant.css";

const ChatAssistant = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [bubbleText, setBubbleText] = useState(1);
  const [listening] = useState(false);
  const bottomRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const [voiceMode, setVoiceMode] = useState(false);
  const voiceModeRef = useRef(false);

  /* ---------------- UI effects ---------------- */

  useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => setBubbleText(2), 6000);
      return () => clearTimeout(timer);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* ---------------- Helpers ---------------- */

  function getUserId() {
    let id = localStorage.getItem("user_id");
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem("user_id", id);
    }
    return id;
  }

  /* ---------------- Chat logic ---------------- */

  const sendMessage = async (voiceText) => {
    const finalMessage = voiceText ?? message;
    if (!finalMessage?.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: finalMessage }]);
    setMessage("");

    try {
      const res = await fetch("https://chatbot-llm-6ogk.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: getUserId(), question: finalMessage }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
    } catch (err) {
      console.error("Chat error:", err);
    }
  };

  /* ---------------- Voice mode ---------------- */

  const toggleVoiceMode = () => {
    if (voiceModeRef.current) {
      stopVoiceConversation();
    } else {
      startVoiceConversation();
    }
  };

  const startVoiceConversation = async () => {
    voiceModeRef.current = true;
    setVoiceMode(true);
    await voiceConversationLoop();
  };

  const stopVoiceConversation = () => {
    voiceModeRef.current = false;
    setVoiceMode(false);

    if (mediaRecorderRef.current?.state !== "inactive") {
      mediaRecorderRef.current.stop();
    }

    if (window.currentAudio) {
      window.currentAudio.pause();
      window.currentAudio = null;
    }
  };

  const voiceConversationLoop = async () => {
    if (!voiceModeRef.current) return;

    const userText = await recordAndTranscribe();
    if (!userText || !voiceModeRef.current) return;

    setMessages((p) => [...p, { sender: "user", text: userText }]);

    const botReply = await fetchBotReply(userText);
    if (!voiceModeRef.current) return;

    setMessages((p) => [...p, { sender: "bot", text: botReply }]);

    await speakTextAsync(botReply); // waits for speech to finish

    voiceConversationLoop(); // continue conversation
  };

  const recordAndTranscribe = () => {
    return new Promise(async (resolve) => {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);

      mediaRecorderRef.current = recorder;
      audioChunksRef.current = [];

      recorder.ondataavailable = (e) => {
        audioChunksRef.current.push(e.data);
      };

      recorder.onstop = async () => {
        stream.getTracks().forEach((t) => t.stop());

        if (!voiceModeRef.current) return resolve(null);

        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });
        const formData = new FormData();
        formData.append("audio", audioBlob);

        const res = await fetch(
          "https://chatbot-launch.onrender.com/api/speech-to-text",
          { method: "POST", body: formData },
        );

        const data = await res.json();
        resolve(data?.text || null);
      };

      recorder.start();
      setTimeout(() => recorder.stop(), 4000);
    });
  };

  const fetchBotReply = async (text) => {
    try {
      const res = await fetch("https://chatbot-llm-6ogk.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: getUserId(), question: text }),
      });
      const data = await res.json();
      return data.reply;
    } catch (err) {
      console.error("Chat error:", err);
    }
  };

  /* ---------------- TTS: SpeechSynthesis ---------------- */

  // const speakTextAsync = (text) => {
  //   return new Promise((resolve) => {
  //     window.speechSynthesis?.cancel(); // stop any ongoing speech

  //     const utterance = new SpeechSynthesisUtterance(text);
  //     utterance.lang = "en-US";
  //     utterance.rate = 1;
  //     utterance.pitch = 1;
  //     utterance.onend = resolve; // wait for speech to finish
  //     utterance.onerror = resolve; // resolve even on error so loop continues

  //     window.speechSynthesis.speak(utterance);
  //   });
  // };

  /* ---------------- TTS: ElevenLabs direct ---------------- */

  /* ---------------- TTS: Smallest.ai Waves direct ---------------- */

  /* ---------------- TTS: Smallest.ai via backend ---------------- */

  const speakTextAsync = async (text) => {
    try {
      if (window.currentAudio) {
        window.currentAudio.pause();
        window.currentAudio = null;
      }

      const response = await fetch(
        "https://chatbot-launch.onrender.com/api/smallai/tts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }),
        },
      );

      if (!response.ok) throw new Error("TTS failed");

      const audioBlob = await response.blob();
      const audio = new Audio(URL.createObjectURL(audioBlob));
      window.currentAudio = audio;

      return new Promise((resolve) => {
        audio.onended = resolve;
        audio.onerror = resolve;
        audio.play();
      });
    } catch (error) {
      console.error("TTS Error:", error);
    }
  };
  /* ---------------- UI ---------------- */

  return (
    <>
      {!open && (
        <div className="assistant-wrapper">
          <div className="assistant-bubble">
            {bubbleText === 1 ? (
              <>
                Hey!! How are you?
                <br />
                <span>Talk to me</span>
              </>
            ) : (
              <>How can I help you today?</>
            )}
          </div>
        </div>
      )}

      {!open && (
        <div className="chat-fab">
          <img
            src="assets/images/Todung_head.png"
            alt="Chat Assistant"
            className="chat-assistant"
            onClick={() => setOpen(true)}
          />
        </div>
      )}

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        class="box-on-above"
      >
        <Box
          sx={{
            width: 360,
            height: "100vh",
            background:
              "linear-gradient(rgba(47, 141, 218, 0.85), rgba(27, 49, 82, 0.9))",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(19, 45, 83, 0.3)",
            }}
          >
            <Typography variant="h6" sx={{ color: "#6aaccaff" }}>
              Todung is here to help
            </Typography>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon sx={{ color: "#fff" }} />
            </IconButton>
          </Box>

          {/* Chat Body */}
          <Box sx={{ p: 2, flex: 1, overflowY: "auto" }}>
            {messages.length === 0 ? (
              <Box textAlign="center" opacity={0.9}>
                <Typography variant="h6" sx={{ color: "#8abae6ff" }}>
                  Hi 👋
                </Typography>
                <Typography>How can I help you today?</Typography>
              </Box>
            ) : (
              messages.map((msg, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    justifyContent:
                      msg.sender === "user" ? "flex-end" : "flex-start",
                    mb: 1,
                  }}
                >
                  <Box
                    sx={{
                      bgcolor:
                        msg.sender === "user" ? "#788686ff" : "#5abed0ff",
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      maxWidth: "60%",
                    }}
                  >
                    {msg.text}
                  </Box>
                </Box>
              ))
            )}
            <div ref={bottomRef} />
          </Box>

          {/* Input */}
          <Box sx={{ p: 2, display: "flex", gap: 1 }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Type or speak"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              sx={{ bgcolor: "#dbccb5", borderRadius: 2 }}
            />

            <IconButton
              onClick={toggleVoiceMode}
              sx={{ bgcolor: voiceMode ? "#ff6b6b" : "#e6d3b1" }}
            >
              {listening ? <GraphicEqIcon /> : <MicIcon />}
            </IconButton>

            <Button
              variant="contained"
              sx={{ bgcolor: "#d0a35a", color: "#000" }}
              onClick={() => sendMessage()}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default ChatAssistant;
