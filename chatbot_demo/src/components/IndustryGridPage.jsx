import { useState } from "react";
import IndustryGrid from "./IndustryGrid";

// ─── Data ─────────────────────────────────────────────────────────────────────

const industriesData = [
  {
    title: "Corporate Offices & Reception",
    description:
      "Greets visitors, verifies appointments, provides basic directions, and informs staff of arrivals.",
    checks: [
      "Touchless visitor check-in",
      "Multilingual assistance for guests (Hindi, English, Bengali).",
    ],
  },
  {
    title: "Banks & Financial Services",
    description:
      "Provides quick answers about banking services and directs customers to the appropriate queue or counter.",
    checks: [
      "Automated token generation",
      "Real-time service availability info",
    ],
  },
  {
    title: "Retail & Customer Care",
    description:
      "Helps customers find information quickly such as product details, service desk location, or billing help.",
    checks: ["Return & exchange policy FAQs", "Store service desk routing"],
  },
  {
    title: "Hotels & Hospitality",
    description:
      "Acts as a friendly digital concierge to help with check-in prompts, amenity queries, and general information.",
    checks: [
      "Multilingual tourist assistance (Hindi, English, Bengali).",
      "Restaurant & service desk info",
    ],
  },
  {
    title: "Government Offices",
    description:
      "Guides visitors to the correct department, explains document requirements, and supports basic inquiry handling.",
    checks: [
      "Multilingual citizen support",
      "Ticketing and appointment confirmation",
    ],
  },
  {
    title: "Educational Institutions",
    description:
      "Assists students and visitors with campus inquiries, administrative office directions, and event information.",
    checks: [
      "Admission and course FAQs",
      "Attendance hours and department guidance",
    ],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

const IndustryGridPage = ({ show = false }) => {
  return <IndustryGrid industries={industriesData} show={show} />;
};

export default IndustryGridPage;
