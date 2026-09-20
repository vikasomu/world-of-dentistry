export interface ClinicContact {
  phone: string;
  phoneDisplay: string;
  email: string;
  address: {
    line1: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    full: string;
  };
  hours: {
    label: string;
    value: string;
  }[];
  emergency: {
    label: string;
    numbers: { display: string; href: string }[];
  };
  internationalCoordinator: {
    name: string;
    numbers: { display: string; href: string }[];
  };
  whatsapp: {
    number: string;
    href: string;
  };
  mapEmbedUrl: string;
  mapDirectionsUrl: string;
}

export interface Doctor {
  slug: string;
  name: string;
  title: string;
  qualifications: string[];
  specializations: string[];
  experience: string;
  areasOfExpertise: string[];
  biography: string;
  education: string[];
  patientPhilosophy: string;
  treatments: string[];
  imageAlt: string;
}

export interface Treatment {
  slug: string;
  name: string;
  category: TreatmentCategory;
  shortDescription: string;
  overview: string;
  whoMayNeedIt: string[];
  whatToExpect: string[];
  journey: { step: number; title: string; description: string }[];
  technologyUsed: string[];
  faqs: { question: string; answer: string }[];
  recovery?: string[];
  relatedDoctorSlugs: string[];
}

export type TreatmentCategory =
  | "general"
  | "cosmetic"
  | "pediatric"
  | "surgical"
  | "orthodontic"
  | "restorative";

export interface Technology {
  slug: string;
  name: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  treatment?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  readTime: string;
}

export type BlogCategory =
  | "Dental Health"
  | "Implants"
  | "Root Canal"
  | "Aligners"
  | "Cosmetic Dentistry"
  | "Children's Dentistry"
  | "Oral Hygiene";

export interface TrustItem {
  title: string;
  description: string;
  icon: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  icon: string;
}

export interface PatientJourneyStep {
  step: number;
  title: string;
  description: string;
}

export interface AppointmentRequest {
  fullName: string;
  phone: string;
  email: string;
  treatment: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface AIChatResponse {
  message: string;
  actions?: {
    type: "book_appointment" | "call_clinic" | "continue_learning";
    label: string;
  }[];
  disclaimer?: string;
}
