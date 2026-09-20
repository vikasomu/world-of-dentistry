import type { ChatMessage, AIChatResponse } from "@/types";
import {
  clinicName,
  contact,
  treatments,
  doctors,
  faqs,
  technologies,
  dentalTourism,
  aiDisclaimer,
  emergencyGuidance,
  medicalDisclaimer,
} from "@/data/clinic";

export interface KnowledgeEntry {
  id: string;
  category: string;
  content: string;
  keywords: string[];
}

function buildKnowledgeBase(): KnowledgeEntry[] {
  const entries: KnowledgeEntry[] = [
    {
      id: "clinic-info",
      category: "clinic",
      content: `${clinicName} is a super specialty dental clinic in Gurgaon at ${contact.address.full}. Phone: ${contact.phoneDisplay}. Email: ${contact.email}. Hours: ${contact.hours[0].value}. Emergency: ${contact.emergency.numbers.map((n) => n.display).join(", ")}.`,
      keywords: ["clinic", "location", "address", "hours", "timing", "contact", "phone", "email", "where", "open"],
    },
    {
      id: "emergency",
      category: "emergency",
      content: `For dental emergencies, call ${contact.emergency.numbers.map((n) => n.display).join(" or ")}. ${emergencyGuidance}`,
      keywords: ["emergency", "urgent", "pain", "swelling", "bleeding", "severe"],
    },
    {
      id: "international",
      category: "dental-tourism",
      content: `${dentalTourism.description} Coordinator: ${dentalTourism.coordinator.name}, ${dentalTourism.coordinator.numbers.map((n) => n.display).join(", ")}. Services include treatment planning, airport pick and drop, and coordinated care.`,
      keywords: ["international", "tourism", "travel", "airport", "foreign", "abroad"],
    },
  ];

  treatments.forEach((t) => {
    entries.push({
      id: `treatment-${t.slug}`,
      category: "treatment",
      content: `${t.name}: ${t.shortDescription}. ${t.overview}`,
      keywords: [t.name.toLowerCase(), t.slug.replace(/-/g, " "), t.category],
    });
  });

  doctors.forEach((d) => {
    entries.push({
      id: `doctor-${d.slug}`,
      category: "doctor",
      content: `${d.name}, ${d.title}. Qualifications: ${d.qualifications.join(", ")}. Specializations: ${d.specializations.join(", ")}. ${d.experience}`,
      keywords: [d.name.toLowerCase(), ...d.specializations.map((s) => s.toLowerCase())],
    });
  });

  faqs.forEach((f, i) => {
    entries.push({
      id: `faq-${i}`,
      category: "faq",
      content: `Q: ${f.question} A: ${f.answer}`,
      keywords: f.question.toLowerCase().split(" ").filter((w) => w.length > 3),
    });
  });

  technologies.forEach((t) => {
    entries.push({
      id: `tech-${t.slug}`,
      category: "technology",
      content: `${t.name}: ${t.description}`,
      keywords: [t.name.toLowerCase(), t.slug.replace(/-/g, " ")],
    });
  });

  return entries;
}

const knowledgeBase = buildKnowledgeBase();

export function retrieveRelevantKnowledge(query: string, limit = 5): KnowledgeEntry[] {
  const queryLower = query.toLowerCase();
  const queryWords = queryLower.split(/\s+/).filter((w) => w.length > 2);

  const scored = knowledgeBase.map((entry) => {
    let score = 0;
    const contentLower = entry.content.toLowerCase();

    queryWords.forEach((word) => {
      if (contentLower.includes(word)) score += 2;
      entry.keywords.forEach((kw) => {
        if (kw.includes(word) || word.includes(kw)) score += 3;
      });
    });

    if (queryLower.includes("appointment") || queryLower.includes("book")) {
      if (entry.category === "clinic" || entry.category === "faq") score += 2;
    }

    return { entry, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.entry);
}

const SAFETY_PATTERNS = {
  diagnosis: /\b(you have|you definitely|you are diagnosed|your condition is|you need to take|prescribe|dosage|mg|antibiotic for you)\b/i,
  emergency: /\b(severe swelling|uncontrolled bleeding|difficulty breathing|difficulty swallowing|can't breathe|face is swelling)\b/i,
  sensitivity: /\b(sensitive|sensitivity|cold water|hot food|tooth hurts|toothache|pain when)\b/i,
};

export function generateResponse(
  message: string,
  _history: ChatMessage[] = []
): AIChatResponse {
  const relevant = retrieveRelevantKnowledge(message);

  if (SAFETY_PATTERNS.emergency.test(message)) {
    return {
      message: `I'm concerned about what you're describing. ${emergencyGuidance}\n\nPlease call our emergency line at ${contact.emergency.numbers.map((n) => n.display).join(" or ")} for dental guidance, or seek urgent medical care if needed.`,
      actions: [
        { type: "call_clinic", label: "Call Clinic" },
        { type: "book_appointment", label: "Request Appointment" },
      ],
      disclaimer: aiDisclaimer,
    };
  }

  if (SAFETY_PATTERNS.sensitivity.test(message)) {
    return {
      message: `Tooth sensitivity can have several causes — such as enamel wear, gum recession, cavities, or recent dental work. I can explain some common possibilities, but I can't diagnose your condition.\n\nIf the pain is persistent, worsening, or severe, a dental examination is recommended. Would you like to book an appointment or learn more about what to expect during a visit?`,
      actions: [
        { type: "book_appointment", label: "Book Appointment" },
        { type: "call_clinic", label: "Call Clinic" },
        { type: "continue_learning", label: "Continue Learning" },
      ],
      disclaimer: medicalDisclaimer,
    };
  }

  if (/\b(appointment|book|schedule|visit)\b/i.test(message)) {
    return {
      message: `I'd be happy to help you request an appointment at ${clinicName}. We're open ${contact.hours[0].value}.\n\nYou can:\n• Submit an appointment request on our website\n• Call us at ${contact.phoneDisplay}\n• Message us on WhatsApp\n\nWould you like to start an appointment request?`,
      actions: [
        { type: "book_appointment", label: "Start Appointment Request" },
        { type: "call_clinic", label: "Call Clinic" },
      ],
    };
  }

  if (/\b(hours|timing|open|when)\b/i.test(message)) {
    return {
      message: `${clinicName} is open ${contact.hours[0].value}, Monday through Sunday. For emergencies, our 24/7 emergency line is available at ${contact.emergency.numbers.map((n) => n.display).join(" or ")}.`,
      actions: [
        { type: "book_appointment", label: "Book Appointment" },
      ],
    };
  }

  if (/\b(location|address|where|directions)\b/i.test(message)) {
    return {
      message: `We're located at ${contact.address.full}. You can call ${contact.phoneDisplay} for directions or use the Get Directions button on our contact page.`,
      actions: [
        { type: "call_clinic", label: "Call for Directions" },
      ],
    };
  }

  if (relevant.length > 0) {
    const topEntry = relevant[0];
    let response = "";

    if (topEntry.category === "treatment") {
      response = `Here's what I can share based on our clinic information:\n\n${topEntry.content}\n\n${medicalDisclaimer}\n\nWould you like to book a consultation to discuss this further?`;
    } else if (topEntry.category === "doctor") {
      response = `${topEntry.content}\n\nWould you like to request an appointment with our team?`;
    } else {
      response = topEntry.content;
    }

    return {
      message: response,
      actions: [
        { type: "book_appointment", label: "Book Appointment" },
        { type: "continue_learning", label: "Ask Another Question" },
      ],
      disclaimer: topEntry.category === "treatment" ? medicalDisclaimer : undefined,
    };
  }

  return {
    message: `Thank you for your question. I'm Smile Assistant, an AI tool that provides general information about ${clinicName}. I can help with clinic information, treatment explanations, appointment requests, and general dental education.\n\n${aiDisclaimer}\n\nHow can I help you today?`,
    actions: [
      { type: "book_appointment", label: "Book Appointment" },
      { type: "continue_learning", label: "Learn About Treatments" },
    ],
  };
}

export function getSystemPrompt(): string {
  return `You are Smile Assistant for ${clinicName}. You provide general information only. Never diagnose, prescribe, or claim certainty about medical conditions. Always encourage professional examination when appropriate. Use verified clinic information only.`;
}

export { knowledgeBase };
