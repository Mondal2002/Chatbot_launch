import AmazingFeatures from "./AmazingFeatures";

// ─── Data ─────────────────────────────────────────────────────────────────────

const amazingFeaturesData = [
  {
    title: "AI Call Handling",
    description: "Attends customer calls with natural human-like conversation and instant responses.",
    image: "assets/images/AI_Call_Handling-removebg-preview.png",
    bgClass: "",
    animationIn: "fadeInLeft",
  },
  {
    title: "Effortless Scheduling",
    description: "Automatically calls customers for reminders, confirmations, and important updates.",
    image: "assets/images/Effortless_Scheduling-removebg-preview.png",
    bgClass: "bg-green",
    animationIn: "fadeInUp",
  },
  {
    title: "Secure & Fully Customizable",
    description: "Tailored for each industry with complete data privacy and enterprise compliance.",
    image: "assets/images/Secure___Fully_Customizable-removebg-preview.png",
    bgClass: "",
    animationIn: "fadeInRight",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

const AmazingFeaturesPage = () => (
  <AmazingFeatures features={amazingFeaturesData} />
);

export default AmazingFeaturesPage;
