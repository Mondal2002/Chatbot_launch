import IndustrySection from "./Industrysection";

// ─── Icons ────────────────────────────────────────────────────────────────────

const healthcareIcon = (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 12H18L15 21L9 3L6 12H2" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const healthcareFeatures = [
  {
    title: "Smart Triage & Direction",
    description: "Patients simply state their problem and get directed to the correct floor, ward, or counter instantly.",
    bullets: [
      "Real-time doctor availability tracking",
      "Department routing based on symptoms",
    ],
  },
  {
    title: "Touchless Check-In Kiosk",
    description: "Verify appointments, print tokens, and assign waiting rooms without long queues.",
    bullets: [
      "QR code scanning for instant check-in",
      "Automated token generation & queue updates",
    ],
  },
  {
    title: "24/7 FAQ Handler",
    description: "Answer repetitive questions about visiting hours, cafeteria, pharmacy locations, and billing.",
    bullets: [
      "Multilingual support (Hindi, Bengali, English)",
      "Reduces receptionist workload by 70%",
    ],
  },
  {
    title: "Patient Education & Comfort",
    description: "Explain medical procedures like MRI, CT scans in simple terms to reduce patient anxiety.",
    bullets: [
      "Queue management with wait time estimates",
      "Pre-procedure preparation instructions",
    ],
  },
  {
    title: "Emergency & Safety Assist",
    description: "Detect emergency keywords and trigger immediate alerts to medical staff.",
    bullets: [
      "Visual alarm system with flashing lights",
      "Instant ping to nearest nurse station",
    ],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

const IndustriesPage = () => (
  <div>
    <IndustrySection
      icon={healthcareIcon}
      title="Healthcare & Hospitals"
      features={healthcareFeatures}
    />

    {/* Add more industries below — just copy the pattern above */}
    {/* 
    <IndustrySection
      icon={retailIcon}
      title="Retail & Shopping"
      features={retailFeatures}
    />
    <IndustrySection
      icon={educationIcon}
      title="Education"
      features={educationFeatures}
    />
    */}
  </div>
);

export default IndustriesPage;
