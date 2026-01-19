import { useState, useEffect, useRef } from "react";
import { Drawer, Box, Typography, IconButton, TextField, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MicIcon from "@mui/icons-material/Mic";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import "../styles/ChatAssistant.css";
// import SpeechRecognition,{ useSpeechRecognition,} from "react-speech-recognition";
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
//   const {
//   transcript,
//   listening: speechListening,
//   resetTranscript,
//   browserSupportsSpeechRecognition,
// } = useSpeechRecognition();

// const { finalTranscript } = useSpeechRecognition();


  

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


  
  /* ---------------- Voice recording ---------------- */


//   const speakText = (text) => {
// const synth = window.speechSynthesis;

//   if (!synth) {
//     console.error("Speech Synthesis not supported");
//     return;
//   }

//   synth.cancel();

//   const utterance = new SpeechSynthesisUtterance(text);

//   utterance.lang = "en-US";
//   utterance.pitch = 1.0;  // Higher pitch = child-like
//   utterance.rate = 1.0;  // Slightly faster
//   utterance.volume = 1.05;

//   // Try to select a lighter voice if available
//   const voices = synth.getVoices();
//   const preferredVoice = voices.find(v =>
//     v.name.toLowerCase().includes("female") ||
//     v.name.toLowerCase().includes("google")
//   );

//   if (preferredVoice) {
//     utterance.voice = preferredVoice;
//   }

//   synth.speak(utterance);
// };
  // const startListening = async () => {
  //   try {
  //     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  //     mediaRecorderRef.current = new MediaRecorder(stream);
  //     audioChunksRef.current = [];

  //     mediaRecorderRef.current.ondataavailable = (e) => {
  //       audioChunksRef.current.push(e.data);
  //     };

  //     mediaRecorderRef.current.onstop = async () => {
  //       const audioBlob = new Blob(audioChunksRef.current, {
  //         type: "audio/webm",
  //       });

  //       const formData = new FormData();
  //       formData.append("audio", audioBlob, "speech.webm");

  //       setListening(true);

  //       const res = await fetch("https://chatbot-launch.onrender.com/api/speech-to-text", {
  //         method: "POST",
  //         body: formData,
  //       });

  //       const data = await res.json();
  //       setListening(false);

  //       if (data?.text) {
  //         sendMessage(data.text);
  //       }
  //     };

  //     mediaRecorderRef.current.start();
  //     setListening(true);

  //     setTimeout(() => {
  //       mediaRecorderRef.current.stop();
  //     }, 5000);
  //   } catch (err) {
  //     console.error("Microphone error:", err);
  //     setListening(false);
  //   }
  // };

// const startListening = () => {
//   if (!browserSupportsSpeechRecognition) {
//     console.error("Browser does not support speech recognition");
//     return;
//   }

//   resetTranscript();
//   setListening(true);

//   SpeechRecognition.startListening({
//     continuous: false,
//     language: "en-US",
//   });
// };

// // Handle when speech stops
// useEffect(() => {
//   // Only process if we were listening and now stopped
//   if (listening && !speechListening) {
//     setListening(false);
    
//     // Small delay to ensure transcript is fully captured
//     setTimeout(() => {
//       if (transcript && transcript.trim()) {
//         sendMessage(transcript);
//         resetTranscript();
//       }
//     }, 300);
//   }
// }, [speechListening]);

// // Backup timeout to stop after 5 seconds
// useEffect(() => {
//   if (speechListening) {
//     const timeout = setTimeout(() => {
//       SpeechRecognition.stopListening();
//     }, 5000);
    
//     return () => clearTimeout(timeout);
//   }
// }, [speechListening]);


  /* ---------------- Chat logic ---------------- */

  // const detectName = (text) => {
  //   const match = text.match(/(?:my name is|i am|i'm)\s+([a-zA-Z]+)/i);
  //   return match?.[1] || null;
  // };

  const sendMessage = async (voiceText) => {
    const finalMessage = voiceText ?? message;
    if (!finalMessage?.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: finalMessage }]);
    setMessage("");

    // const name = detectName(finalMessage);
    // if (name) {
    //   setTimeout(() => {
    //     setMessages((prev) => [
    //       ...prev,
    //       {
    //         sender: "bot",
    //         text: `Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}! How are you?`,
    //       },

    //     ]);
    //   }, 600);
    //   return;
    // }

    try {
      const res = await fetch("https://chatbot-llm-6ogk.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: finalMessage }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.reply },
      ]);
    } catch (err) {
      console.error("Chat error:", err);
    }
  };
/* voice to voice command*/
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

  window.speechSynthesis.cancel();
};
const voiceConversationLoop = async () => {
  while (voiceModeRef.current) {
    const userText = await recordAndTranscribe();

    if (!userText || !voiceModeRef.current) break;

    setMessages((prev) => [...prev, { sender: "user", text: userText }]);

    const botReply = await fetchBotReply(userText);
    if (!voiceModeRef.current) break;

    setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);

    await speakTextAsync(botReply);
  }
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
      const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });

      const formData = new FormData();
      formData.append("audio", audioBlob);

      const res = await fetch(
        "https://chatbot-launch.onrender.com/api/speech-to-text",
        { method: "POST", body: formData }
      );

      const data = await res.json();
      resolve(data?.text || null);
    };

    recorder.start();

    setTimeout(() => {
      recorder.stop();
    }, 4000);
  });
};
const speakTextAsync = (text) => {
  const synth = window.speechSynthesis;

  if (!synth) {
    console.error("Speech Synthesis not supported");
    return;
  }

  synth.cancel();

  const utterance = new SpeechSynthesisUtterance(text);

  utterance.lang = "en-US";
  utterance.pitch = 1.0;  // Higher pitch = child-like
  utterance.rate = 1.0;  // Slightly faster
  utterance.volume = 1.05;

  // Try to select a lighter voice if available
  const voices = synth.getVoices();
  const preferredVoice = voices.find(v =>
    v.name.toLowerCase().includes("female") ||
    v.name.toLowerCase().includes("google")
  );

  if (preferredVoice) {
    utterance.voice = preferredVoice;
  }

  synth.speak(utterance);
};

const fetchBotReply = async (text) => {
try{
    const res = 
      await fetch("https://chatbot-llm-6ogk.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: text }),
      });

      const data = await res.json();

      return data.reply;
  }
  catch(err){
    console.error("Chat error:", err);
  }
}








  /* ---------------- UI ---------------- */

  return (
    <>
      {!open && (
        <div className="assistant-wrapper " >
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

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} class="box-on-above" >
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
