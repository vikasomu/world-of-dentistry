import type {
  ClinicContact,
  Doctor,
  Treatment,
  Technology,
  Testimonial,
  FAQ,
  BlogPost,
  TrustItem,
  WhyChooseItem,
  PatientJourneyStep,
} from "@/types";

export const clinicName = "World of Dentistry";
export const clinicTagline = "Advanced Dentistry. Designed Around You.";
export const clinicDescription =
  "World of Dentistry is a super specialty dental clinic in Gurgaon offering advanced dental care, oral surgery, pediatric dentistry, general dentistry, and cosmetic dentistry under one roof.";

export const clinicVision =
  "Establishing a quality dental care facility across the globe, equipped with state of the art digital technology.";

export const clinicMission =
  "We believe your smile is one of your most important assets and says a lot about your overall health.";

export const patientRating = {
  score: 5,
  maxScore: 5,
  reviewCount: 212,
  source: "Patient ratings published on clinic website",
};

export const contact: ClinicContact = {
  phone: "+919899350991",
  phoneDisplay: "+91-9899350991",
  email: "worldofdentistry1757@gmail.com",
  address: {
    line1: "H No - 1757, Sector 46, HUDA Market Road",
    city: "Gurugram",
    state: "Haryana",
    postalCode: "122003",
    country: "India",
    full: "H No - 1757, Sector 46, HUDA Market Road, Gurugram, Haryana - 122003",
  },
  hours: [
    {
      label: "Monday – Sunday",
      value: "9:00 AM – 11:00 PM",
    },
  ],
  emergency: {
    label: "24/7 Emergency",
    numbers: [
      { display: "0124-4001676", href: "tel:+911244001676" },
      { display: "+91-9899350991", href: "tel:+919899350991" },
    ],
  },
  internationalCoordinator: {
    name: "Ms. Fatima",
    numbers: [
      { display: "8373962491", href: "tel:+918373962491" },
      { display: "9999245964", href: "tel:+919999245964" },
    ],
  },
  whatsapp: {
    number: "+919899350991",
    href: "https://wa.me/919899350991",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.0!2d77.059!3d28.431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI1JzUxLjYiTiA3N8KwMDMnMzIuNCJF!5e0!3m2!1sen!2sin!4v1",
  mapDirectionsUrl:
    "https://www.google.com/maps/search/?api=1&query=World+of+Dentistry+Sector+46+Gurugram",
};

export const trustStrip: TrustItem[] = [
  {
    title: "Experienced Dental Team",
    description:
      "Specialists in prosthodontics, implantology, root canal therapy, and cosmetic dentistry.",
    icon: "users",
  },
  {
    title: "Advanced Technology",
    description:
      "CBCT, CAD/CAM, Dental T-Scan, Biolase, and Philips Zoom whitening systems.",
    icon: "cpu",
  },
  {
    title: "Patient-Centered Care",
    description:
      "A warm environment focused on comfortable, painless treatment experiences.",
    icon: "heart",
  },
  {
    title: "Emergency Support",
    description:
      "Open daily until 11 PM with 24/7 emergency calling for urgent dental guidance.",
    icon: "phone",
  },
];

export const whyChooseUs: WhyChooseItem[] = [
  {
    title: "Personalized Care",
    description:
      "Treatment plans tailored to your concerns, comfort level, and long-term oral health goals.",
    icon: "user-check",
  },
  {
    title: "Advanced Technology",
    description:
      "Digital dentistry tools including CBCT imaging, CAD/CAM, and laser-assisted procedures.",
    icon: "sparkles",
  },
  {
    title: "Comfort-Focused Treatment",
    description:
      "Our forte is providing a warm environment to ensure painless and comfortable treatment.",
    icon: "smile",
  },
  {
    title: "Sterilization & Safety",
    description:
      "Strict sterilization, hygiene protocols, and COVID-19 safety measures as prescribed by government agencies.",
    icon: "shield",
  },
  {
    title: "Experienced Specialists",
    description:
      "Led by specialists with postgraduate training and extensive clinical experience.",
    icon: "award",
  },
  {
    title: "Comprehensive Dental Care",
    description:
      "General, cosmetic, pediatric, surgical, and implant dentistry for your entire family under one roof.",
    icon: "layers",
  },
];

export const patientJourney: PatientJourneyStep[] = [
  {
    step: 1,
    title: "Tell us what is bothering you",
    description:
      "Share your concerns by phone, WhatsApp, or through our appointment request form.",
  },
  {
    step: 2,
    title: "Schedule your consultation",
    description:
      "Choose a convenient time — we're open Monday through Sunday, 9 AM to 11 PM.",
  },
  {
    step: 3,
    title: "Meet your dental specialist",
    description:
      "Your dentist will examine, listen to your concerns, and explain findings clearly.",
  },
  {
    step: 4,
    title: "Understand your treatment options",
    description:
      "Receive a clear explanation of recommended options so you can make an informed decision.",
  },
  {
    step: 5,
    title: "Begin your personalized treatment",
    description:
      "Treatment is delivered with modern technology and a focus on comfort and safety.",
  },
  {
    step: 6,
    title: "Continue with follow-up care",
    description:
      "We support you through recovery, follow-up visits, and ongoing preventive care.",
  },
];

export const technologies: Technology[] = [
  {
    slug: "cbct",
    name: "CBCT Imaging",
    description:
      "Cone beam computed tomography for detailed 3D imaging to support precise treatment planning.",
  },
  {
    slug: "cad-cam",
    name: "CAD/CAM",
    description:
      "Computer-aided design and manufacturing for precise restorations and prosthetics.",
  },
  {
    slug: "dental-t-scan",
    name: "Dental T-Scan",
    description:
      "Digital bite analysis technology to evaluate occlusal forces and balance.",
  },
  {
    slug: "biolase",
    name: "Biolase",
    description:
      "Laser dentistry technology used for selected soft tissue and periodontal procedures.",
  },
  {
    slug: "philips-zoom",
    name: "Philips Zoom Whitening",
    description:
      "Professional teeth whitening technology for in-clinic bleaching procedures.",
  },
  {
    slug: "immediate-implants",
    name: "Immediate Implant Technology",
    description:
      "Advanced implant placement techniques performed by our implantology team.",
  },
];

export const doctors: Doctor[] = [
  {
    slug: "dr-rishi-rana",
    name: "Dr. Rishi Rana",
    title: "Prosthodontist & Oral Implantologist",
    qualifications: [
      "Postgraduate degree from PGIMS Rohtak University",
    ],
    specializations: [
      "Prosthodontics",
      "Oral Implantology",
      "Dental Implants",
    ],
    experience:
      "More than 5,000 implant placements and over 250 direct and indirect sinus lift surgeries, as stated on the clinic website.",
    areasOfExpertise: [
      "Dental implant surgery",
      "Prosthodontic rehabilitation",
      "Sinus lift procedures",
      "Full-mouth rehabilitation",
    ],
    biography:
      "Dr. Rishi Rana is one of the most eminent prosthodontists and oral implantologists at World of Dentistry. He holds a postgraduate degree from PGIMS Rohtak University and leads the clinic's implantology program with extensive surgical experience.",
    education: [
      "Postgraduate degree — PGIMS Rohtak University",
    ],
    patientPhilosophy:
      "Focused on delivering precise, technology-assisted implant care with patient comfort as a priority.",
    treatments: [
      "dental-implants",
      "bridges-crowns",
      "smile-makeover",
    ],
    imageAlt: "Dr. Rishi Rana, Prosthodontist and Oral Implantologist",
  },
  {
    slug: "dr-charu-rana",
    name: "Dr. Charu Rana",
    title: "Managing Director, Root Canal Specialist & Cosmetic Dental Surgeon",
    qualifications: [
      "Cosmetic Dentistry Fellowship — Apollo Hospital, Delhi",
    ],
    specializations: [
      "Root Canal Treatment",
      "Cosmetic Dentistry",
      "Laser Dentistry",
    ],
    experience:
      "More than 15 years in dental health care, as stated on the clinic website.",
    areasOfExpertise: [
      "Painless root canal treatment",
      "Single sitting RCT",
      "Cosmetic dentistry",
      "Laser dentistry",
    ],
    biography:
      "Dr. Charu Rana is the Managing Director of World of Dentistry and a root canal specialist and cosmetic dental surgeon. She completed her cosmetic dentistry fellowship program from Apollo Hospital, Delhi, and attends patients with warmth and care.",
    education: [
      "Cosmetic Dentistry Fellowship — Apollo Hospital, Delhi",
    ],
    patientPhilosophy:
      "Every patient deserves to be heard. Treatment should be explained clearly, delivered comfortably, and supported with genuine care.",
    treatments: [
      "root-canal-treatment",
      "smile-makeover",
      "teeth-whitening",
      "laser-gum-treatment",
      "fillings",
    ],
    imageAlt: "Dr. Charu Rana, Root Canal Specialist and Cosmetic Dental Surgeon",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "sanjana",
    name: "Sanjana",
    quote:
      "Excellent doctor!!! Very thorough and caring. I'm terribly afraid of the dentist and she's very sensitive to that and goes the extra mile to make you feel comfortable. Love her work!",
  },
  {
    id: "bhupinder",
    name: "Bhupinder",
    quote:
      "Dr. Rishi Rana is a wonderful, passionate, loving, caring doctor. I highly recommend this doctor. All staff are very friendly.",
  },
  {
    id: "hazel",
    name: "Hazel",
    quote:
      "Dr. Charu Rana is very knowledgeable in all aspects of Dentistry. He works with low income patients as well.",
  },
  {
    id: "rohan",
    name: "Rohan",
    quote:
      "Awesome Dentist... Dr. Rishi is very professional and straightforward of what needs to be done... I live 40 miles away but I'm more comfortable coming to this Dental clinic than the One across my Street... I highly recommend World of Dentistry to my friends.",
  },
  {
    id: "ashish-kalra",
    name: "Ashish Kalra",
    quote:
      "I recently visited the World of Dentistry for RCT. I found the staff to be very welcoming and doctors very approachable and professional. The clinic is also ultra modern.",
    treatment: "Root Canal Treatment",
  },
  {
    id: "vinod-malik",
    name: "Vinod Malik",
    quote:
      "I am visiting here for the past 2 months for my problematic teeth. I must say the doctors listen to my concerns every time. The best thing is that it is very convenient in terms of location and appointments as well.",
  },
  {
    id: "neha-mehta",
    name: "Neha Mehta",
    quote:
      "No pain after any major work is done. The doctors here know what they are doing and they are fast but equally careful! Very clean office and friendly staff. I recommend you to visit here for any of your dentist needs.",
  },
];

export const dentalTourism = {
  title: "International Patient Care",
  description:
    "Our multilingual staff is available for patients from non-English speaking countries and provides dedicated support to manage medical services and related needs at every step of the treatment journey.",
  services: [
    {
      title: "Treatment Planning",
      description:
        "Holistic dental care planning tailored to individual treatment needs before your visit.",
    },
    {
      title: "Remote Consultation",
      description:
        "Coordinate with our team before travel to understand your treatment pathway.",
    },
    {
      title: "Airport Pick & Drop",
      description:
        "Airport pick and drop facility as part of the international dental package, as offered by the clinic.",
    },
    {
      title: "Treatment Coordination",
      description:
        "Industry experts provide planned dental tourism support suited to individual needs.",
    },
    {
      title: "Follow-up Care",
      description:
        "Guidance on follow-up care and communication after your treatment visit.",
    },
  ],
  coordinator: contact.internationalCoordinator,
};

export const faqs: FAQ[] = [
  {
    question: "How do I book an appointment?",
    answer:
      "You can book by calling us at +91-9899350991, messaging on WhatsApp, or submitting an appointment request through our website. Our team will confirm your appointment.",
  },
  {
    question: "What treatments are available?",
    answer:
      "We offer child dentistry, root canal treatment, smile makeovers, bridges and crowns, braces and aligners, scaling and polishing, fillings, teeth whitening, laser gum treatment, wisdom tooth removal, sedation dentistry, dental implants, and more.",
  },
  {
    question: "Do you treat children?",
    answer:
      "Yes. We provide pediatric dentistry services. Without proper dental care, children face possible oral decay and disease — early visits help prevent long-term complications.",
  },
  {
    question: "What should I bring to my appointment?",
    answer:
      "Please bring a valid ID, any previous dental records or X-rays if available, a list of current medications, and details of your dental concerns.",
  },
  {
    question: "How do I contact the clinic?",
    answer:
      `Visit us at ${contact.address.full}, call ${contact.phoneDisplay}, or email ${contact.email}. We are open Monday through Sunday, 9 AM to 11 PM.`,
  },
  {
    question: "Do you support international patients?",
    answer:
      "Yes. We provide international dental packages including airport pick and drop, multilingual staff support, and coordinated treatment planning for patients visiting India for dental care.",
  },
  {
    question: "What are your emergency contact options?",
    answer:
      "For dental emergencies, call our 24/7 emergency line at 0124-4001676 or +91-9899350991. If you are experiencing severe swelling, uncontrolled bleeding, or difficulty breathing, seek urgent medical care immediately.",
  },
  {
    question: "What safety measures do you follow?",
    answer:
      "We maintain strict sterilization and hygiene procedures, follow COVID-19 protocols prescribed by government agencies, perform regular fumigation of instruments, and provide protective gear during treatment.",
  },
];

export const treatments: Treatment[] = [
  {
    slug: "child-dentistry",
    name: "Child Dentistry",
    category: "pediatric",
    shortDescription:
      "Gentle dental care for children to prevent oral decay and support healthy development.",
    overview:
      "Without proper dental care, children face possible oral decay and disease that can cause a lifetime of discomfort or complication. Our pediatric dentistry services focus on prevention, education, and comfortable treatment for young patients.",
    whoMayNeedIt: [
      "Children needing their first dental visit",
      "Kids with cavities or tooth pain",
      "Parents seeking preventive dental care",
      "Children requiring restorative treatment",
    ],
    whatToExpect: [
      "A child-friendly, welcoming environment",
      "Gentle examination and age-appropriate explanation",
      "Preventive guidance for parents and children",
      "Treatment options explained before any procedure",
    ],
    journey: [
      { step: 1, title: "Consultation", description: "Meet our team and discuss your child's dental health." },
      { step: 2, title: "Examination", description: "Gentle check-up to assess teeth and gums." },
      { step: 3, title: "Treatment Plan", description: "Clear recommendations shared with parents." },
      { step: 4, title: "Care & Follow-up", description: "Treatment delivered with comfort and ongoing preventive guidance." },
    ],
    technologyUsed: ["Digital diagnostics", "Sterilization protocols"],
    faqs: [
      { question: "At what age should my child first visit the dentist?", answer: "Early visits help establish good habits. Consult our team for guidance based on your child's age and needs." },
      { question: "Is treatment painful for children?", answer: "We focus on gentle, comfort-oriented care. Your dentist will explain what to expect for your child's specific treatment." },
    ],
    relatedDoctorSlugs: ["dr-charu-rana"],
  },
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    category: "restorative",
    shortDescription:
      "A procedure to relieve dental pain and save teeth when the nerve is affected.",
    overview:
      "Root canal treatment (RCT) is a dental procedure to relieve dental pain and save your teeth. When nerves of a tooth become exposed, sensitivity to hot and cold foods may occur. Our team provides root canal treatment under the guidance of trained dental care experts.",
    whoMayNeedIt: [
      "Persistent tooth pain or sensitivity",
      "Deep decay reaching the tooth nerve",
      "Infection or inflammation in the tooth pulp",
      "Trauma affecting the tooth nerve",
    ],
    whatToExpect: [
      "Thorough examination and imaging if needed",
      "Local anesthesia for comfort",
      "Removal of infected pulp and cleaning of canals",
      "Sealing and restoration of the tooth",
    ],
    journey: [
      { step: 1, title: "Diagnosis", description: "Examination to determine if RCT is appropriate." },
      { step: 2, title: "Treatment", description: "Canals cleaned and sealed — single sitting RCT available." },
      { step: 3, title: "Restoration", description: "Tooth restored with filling or crown as recommended." },
      { step: 4, title: "Follow-up", description: "Recovery guidance and follow-up as needed." },
    ],
    technologyUsed: ["Digital imaging", "Modern endodontic instruments"],
    faqs: [
      { question: "Is root canal treatment painful?", answer: "The procedure is performed under local anesthesia. Our team focuses on painless root canal treatment." },
      { question: "Can RCT be done in a single visit?", answer: "Single sitting RCT is available depending on your clinical situation. Your dentist will advise what's appropriate." },
    ],
    recovery: [
      "Mild sensitivity after treatment is common and usually temporary",
      "Follow your dentist's instructions for eating and oral care",
      "Attend follow-up appointments as recommended",
    ],
    relatedDoctorSlugs: ["dr-charu-rana"],
  },
  {
    slug: "smile-makeover",
    name: "Smile Makeover",
    category: "cosmetic",
    shortDescription:
      "Comprehensive cosmetic treatment to address multiple aesthetic and structural concerns.",
    overview:
      "A smile makeover is designed to simultaneously address multiple cosmetic or structural dental imperfections. Treatment may combine whitening, veneers, crowns, or other cosmetic procedures based on your individual assessment.",
    whoMayNeedIt: [
      "Discolored or stained teeth",
      "Chipped, worn, or misshapen teeth",
      "Gaps between teeth",
      "Multiple cosmetic concerns",
    ],
    whatToExpect: [
      "Detailed cosmetic consultation",
      "Digital planning and treatment discussion",
      "Phased treatment as per your plan",
      "Results that vary based on individual cases",
    ],
    journey: [
      { step: 1, title: "Smile Assessment", description: "Discuss your goals and examine your teeth." },
      { step: 2, title: "Design Plan", description: "Personalized treatment plan created." },
      { step: 3, title: "Treatment", description: "Procedures performed in planned phases." },
      { step: 4, title: "Reveal", description: "Final review and maintenance guidance." },
    ],
    technologyUsed: ["CAD/CAM", "Digital imaging", "Cosmetic dentistry tools"],
    faqs: [
      { question: "How long does a smile makeover take?", answer: "Timeline depends on the procedures involved. Your dentist will provide an estimate after consultation." },
      { question: "Are results guaranteed?", answer: "Results vary by patient. Your dentist will explain realistic outcomes during consultation." },
    ],
    relatedDoctorSlugs: ["dr-rishi-rana", "dr-charu-rana"],
  },
  {
    slug: "bridges-crowns",
    name: "Bridges & Crowns",
    category: "restorative",
    shortDescription:
      "Restorations to protect damaged teeth or replace missing teeth.",
    overview:
      "Crowns are used most commonly to entirely cover a damaged tooth or cover an implant. Bridges replace one or more missing teeth by anchoring to adjacent teeth or implants.",
    whoMayNeedIt: [
      "Broken or severely worn teeth",
      "Teeth weakened after root canal treatment",
      "Missing teeth requiring replacement",
      "Teeth needing structural reinforcement",
    ],
    whatToExpect: [
      "Tooth preparation and impressions",
      "Temporary restoration if needed",
      "Custom crown or bridge fabrication",
      "Final fitting and adjustment",
    ],
    journey: [
      { step: 1, title: "Assessment", description: "Evaluate the tooth or gap and discuss options." },
      { step: 2, title: "Preparation", description: "Tooth prepared and records taken." },
      { step: 3, title: "Fabrication", description: "Custom restoration created, often with CAD/CAM." },
      { step: 4, title: "Placement", description: "Final crown or bridge fitted and checked." },
    ],
    technologyUsed: ["CAD/CAM", "Digital impressions"],
    faqs: [
      { question: "How long do crowns last?", answer: "Longevity depends on oral hygiene, habits, and material. Your dentist will discuss expected lifespan." },
    ],
    relatedDoctorSlugs: ["dr-rishi-rana"],
  },
  {
    slug: "braces-aligners",
    name: "Braces & Aligners",
    category: "orthodontic",
    shortDescription:
      "Orthodontic treatment to align teeth and improve bite and dental health.",
    overview:
      "Braces are devices that align and straighten teeth and help position them with regard to a person's bite, while also aiming to improve dental health. Clear aligners offer an alternative for suitable cases.",
    whoMayNeedIt: [
      "Crooked or crowded teeth",
      "Bite alignment issues",
      "Spacing between teeth",
      "Jaw alignment concerns",
    ],
    whatToExpect: [
      "Orthodontic assessment and imaging",
      "Treatment plan with estimated duration",
      "Regular adjustment or aligner changes",
      "Retainer guidance after active treatment",
    ],
    journey: [
      { step: 1, title: "Evaluation", description: "Assess teeth, bite, and alignment." },
      { step: 2, title: "Plan", description: "Choose braces or aligners based on your case." },
      { step: 3, title: "Active Treatment", description: "Regular visits for adjustments." },
      { step: 4, title: "Retention", description: "Retainers to maintain results." },
    ],
    technologyUsed: ["Digital imaging", "Orthodontic planning tools"],
    faqs: [
      { question: "How long does orthodontic treatment take?", answer: "Duration varies by case complexity. Your orthodontist will provide an estimate after assessment." },
    ],
    relatedDoctorSlugs: ["dr-rishi-rana"],
  },
  {
    slug: "scaling-polishing",
    name: "Scaling & Polishing",
    category: "general",
    shortDescription:
      "Professional cleaning to remove plaque buildup and support gum health.",
    overview:
      "Dental scaling and polishing is routinely performed to help patients with gum disease and excessive plaque buildup. Regular professional cleaning supports preventive oral health.",
    whoMayNeedIt: [
      "Plaque or tartar buildup",
      "Bleeding or inflamed gums",
      "Routine preventive care",
      "Preparation before other treatments",
    ],
    whatToExpect: [
      "Assessment of teeth and gums",
      "Ultrasonic or manual scaling to remove deposits",
      "Polishing for a smooth, clean surface",
      "Oral hygiene guidance",
    ],
    journey: [
      { step: 1, title: "Check-up", description: "Gum and teeth assessment." },
      { step: 2, title: "Cleaning", description: "Scaling and polishing performed." },
      { step: 3, title: "Guidance", description: "Home care recommendations provided." },
    ],
    technologyUsed: ["Ultrasonic scalers", "Polishing systems"],
    faqs: [
      { question: "How often should I get scaling done?", answer: "Frequency depends on your gum health. Your dentist will recommend an appropriate schedule." },
    ],
    relatedDoctorSlugs: ["dr-charu-rana"],
  },
  {
    slug: "fillings",
    name: "Fillings",
    category: "restorative",
    shortDescription:
      "Restore teeth by removing decay and filling the area with replacement material.",
    overview:
      "A tooth filling is a procedure wherein the damaged or decayed part of a tooth is removed and the area is filled with a replacement material (filling).",
    whoMayNeedIt: [
      "Cavities or tooth decay",
      "Minor tooth damage",
      "Replacement of old fillings",
    ],
    whatToExpect: [
      "Decay removal under local anesthesia",
      "Filling material placed and shaped",
      "Bite check and adjustment",
    ],
    journey: [
      { step: 1, title: "Examination", description: "Identify decay and discuss filling options." },
      { step: 2, title: "Treatment", description: "Decay removed and tooth filled." },
      { step: 3, title: "Review", description: "Bite checked and care instructions given." },
    ],
    technologyUsed: ["Composite materials", "Digital diagnostics"],
    faqs: [
      { question: "What filling materials are used?", answer: "Material options depend on the tooth location and clinical needs. Your dentist will recommend suitable options." },
    ],
    relatedDoctorSlugs: ["dr-charu-rana"],
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    category: "cosmetic",
    shortDescription:
      "Professional whitening to lighten teeth and reduce stains and discoloration.",
    overview:
      "Tooth whitening or bleaching lightens teeth and helps to remove stains and discoloration. We use Philips Zoom whitening technology for in-clinic procedures.",
    whoMayNeedIt: [
      "Stained or discolored teeth",
      "Age-related yellowing",
      "Surface stains from food or beverages",
    ],
    whatToExpect: [
      "Assessment of suitability for whitening",
      "In-clinic whitening session",
      "Sensitivity management if needed",
      "Aftercare guidance",
    ],
    journey: [
      { step: 1, title: "Consultation", description: "Assess if whitening is appropriate for you." },
      { step: 2, title: "Treatment", description: "Professional whitening session performed." },
      { step: 3, title: "Aftercare", description: "Guidance to maintain results." },
    ],
    technologyUsed: ["Philips Zoom Whitening"],
    faqs: [
      { question: "Is teeth whitening safe?", answer: "Professional whitening under dental supervision is generally safe for suitable candidates. Your dentist will assess suitability first." },
      { question: "How long do results last?", answer: "Results vary based on diet, habits, and oral hygiene. Maintenance guidance will be provided." },
    ],
    recovery: [
      "Temporary sensitivity is common and usually resolves",
      "Avoid staining foods and beverages initially as advised",
    ],
    relatedDoctorSlugs: ["dr-charu-rana"],
  },
  {
    slug: "laser-gum-treatment",
    name: "Laser Gum Treatment",
    category: "surgical",
    shortDescription:
      "Advanced laser technique for periodontal (gum) disease treatment.",
    overview:
      "Laser treatment is an advanced technique to treat periodontal (gum) disease and save many teeth that were previously considered hopeless. Dr. Charu Rana keeps herself updated with modern advancements in laser dentistry.",
    whoMayNeedIt: [
      "Periodontal (gum) disease",
      "Gum inflammation or infection",
      "Cases where conventional treatment may be limited",
    ],
    whatToExpect: [
      "Periodontal assessment",
      "Laser-assisted treatment of affected areas",
      "Post-treatment care instructions",
      "Follow-up monitoring",
    ],
    journey: [
      { step: 1, title: "Assessment", description: "Evaluate gum health and disease severity." },
      { step: 2, title: "Laser Treatment", description: "Targeted laser therapy performed." },
      { step: 3, title: "Recovery", description: "Healing guidance and follow-up scheduled." },
    ],
    technologyUsed: ["Biolase", "Laser dentistry systems"],
    faqs: [
      { question: "Is laser gum treatment painful?", answer: "Laser procedures are often less invasive than traditional surgery. Your dentist will explain what to expect for your case." },
    ],
    recovery: [
      "Follow post-treatment oral care instructions",
      "Attend scheduled follow-up visits",
      "Maintain good oral hygiene",
    ],
    relatedDoctorSlugs: ["dr-charu-rana"],
  },
  {
    slug: "wisdom-tooth-removal",
    name: "Wisdom Tooth Removal",
    category: "surgical",
    shortDescription:
      "Surgical extraction of wisdom teeth when clinically indicated.",
    overview:
      "Wisdom tooth removal may be recommended when impacted or problematic wisdom teeth cause pain, infection, or alignment issues. Our oral surgery team performs extractions with a focus on patient comfort.",
    whoMayNeedIt: [
      "Impacted wisdom teeth",
      "Pain or swelling around wisdom teeth",
      "Infection or decay in wisdom teeth",
      "Crowding caused by erupting wisdom teeth",
    ],
    whatToExpect: [
      "Examination and imaging (CBCT if needed)",
      "Anesthesia for comfort",
      "Surgical extraction procedure",
      "Post-operative care instructions",
    ],
    journey: [
      { step: 1, title: "Assessment", description: "X-rays and clinical exam to evaluate wisdom teeth." },
      { step: 2, title: "Extraction", description: "Removal performed under appropriate anesthesia." },
      { step: 3, title: "Recovery", description: "Care instructions and follow-up as needed." },
    ],
    technologyUsed: ["CBCT Imaging", "Surgical instruments"],
    faqs: [
      { question: "Do all wisdom teeth need to be removed?", answer: "Not always. Your dentist will recommend removal only if clinically indicated." },
    ],
    recovery: [
      "Rest and avoid strenuous activity initially",
      "Follow dietary restrictions as advised",
      "Use prescribed medications as directed",
      "Contact the clinic if you experience unusual symptoms",
    ],
    relatedDoctorSlugs: ["dr-rishi-rana"],
  },
  {
    slug: "sedation-dentistry",
    name: "Sedation Dentistry",
    category: "general",
    shortDescription:
      "Sedation options for anxious patients or complex procedures.",
    overview:
      "Sedation dentistry helps patients who experience dental anxiety or require longer procedures to receive treatment comfortably. Options are discussed based on your health profile and treatment needs.",
    whoMayNeedIt: [
      "Dental anxiety or phobia",
      "Complex or lengthy procedures",
      "Patients with difficulty sitting through treatment",
      "Special needs patients",
    ],
    whatToExpect: [
      "Medical history review",
      "Sedation option discussion",
      "Monitored treatment under sedation",
      "Recovery period before discharge",
    ],
    journey: [
      { step: 1, title: "Consultation", description: "Review health history and sedation suitability." },
      { step: 2, title: "Planning", description: "Choose appropriate sedation level." },
      { step: 3, title: "Treatment", description: "Procedure performed with sedation and monitoring." },
      { step: 4, title: "Recovery", description: "Post-sedation recovery and escort required." },
    ],
    technologyUsed: ["Monitoring equipment", "Sedation protocols"],
    faqs: [
      { question: "Is sedation dentistry safe?", answer: "When administered by trained professionals with proper monitoring, sedation is generally safe. Your dentist will assess your suitability." },
    ],
    relatedDoctorSlugs: ["dr-charu-rana", "dr-rishi-rana"],
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    category: "surgical",
    shortDescription:
      "Permanent tooth replacement for patients who have lost teeth due to trauma, disease, or injury.",
    overview:
      "A dental implant is generally a procedure adopted for patients who have lost their tooth or teeth due to any reasons, including trauma, periodontal disease, or injury. World of Dentistry provides dental implants in Gurgaon using latest technology for a painless experience.",
    whoMayNeedIt: [
      "Missing one or more teeth",
      "Unable to wear dentures comfortably",
      "Seeking a long-term tooth replacement",
      "Adequate bone support for implant placement",
    ],
    whatToExpect: [
      "Comprehensive assessment including CBCT imaging",
      "Treatment planning by our implantology team",
      "Surgical implant placement",
      "Healing period and final restoration",
    ],
    journey: [
      { step: 1, title: "Consultation", description: "Assessment with Dr. Rishi Rana and imaging." },
      { step: 2, title: "Placement", description: "Implant surgically placed — immediate implant technology available." },
      { step: 3, title: "Healing", description: "Osseointegration period monitored." },
      { step: 4, title: "Restoration", description: "Crown or prosthetic attached to complete your smile." },
    ],
    technologyUsed: ["CBCT Imaging", "Immediate Implant Technology", "CAD/CAM"],
    faqs: [
      { question: "Am I a candidate for dental implants?", answer: "Candidacy depends on bone quality, overall health, and clinical assessment. A consultation with our implantologist is required." },
      { question: "How experienced is the implant team?", answer: "Dr. Rishi Rana has performed more than 5,000 implant placements as stated on the clinic website." },
    ],
    recovery: [
      "Follow post-operative instructions carefully",
      "Soft diet initially as recommended",
      "Attend all follow-up appointments",
      "Maintain excellent oral hygiene around the implant",
    ],
    relatedDoctorSlugs: ["dr-rishi-rana"],
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "importance-of-regular-dental-checkups",
    title: "Why Regular Dental Checkups Matter for Your Overall Health",
    excerpt:
      "Routine dental visits help detect problems early and support long-term oral and general health.",
    content: `Regular dental checkups are a cornerstone of preventive care. During a visit, your dentist examines your teeth, gums, and oral tissues for signs of decay, gum disease, and other concerns that may not yet cause symptoms.

Early detection often means simpler, less invasive treatment. Your dentist can also provide professional cleaning to remove plaque and tartar that brushing alone cannot address.

General health and oral health are closely connected. Conditions such as gum disease have been associated with broader health concerns in medical literature. Maintaining regular dental visits supports both.

**This information is for general education and does not replace an examination by a qualified dental professional.**`,
    category: "Dental Health",
    publishedAt: "2025-11-15",
    author: "World of Dentistry Clinical Team",
    readTime: "4 min read",
  },
  {
    slug: "understanding-dental-implants",
    title: "Understanding Dental Implants: A General Guide",
    excerpt:
      "Learn what dental implants are, who they may help, and what the general treatment process involves.",
    content: `Dental implants are titanium posts surgically placed into the jawbone to serve as artificial tooth roots. Once healed, they can support crowns, bridges, or dentures.

Implants may be considered for patients who have lost teeth due to injury, decay, or gum disease. However, not everyone is a candidate — bone quality, overall health, and other factors must be assessed by a qualified implantologist.

The general process involves consultation and imaging, surgical placement, a healing period, and final restoration. Technology such as CBCT imaging helps with precise planning.

At World of Dentistry, implant procedures are performed by our implantology team led by Dr. Rishi Rana.

**This information is for general education and does not replace an examination by a qualified dental professional.**`,
    category: "Implants",
    publishedAt: "2025-10-20",
    author: "World of Dentistry Clinical Team",
    readTime: "5 min read",
  },
  {
    slug: "root-canal-myths-and-facts",
    title: "Root Canal Treatment: Common Myths and Facts",
    excerpt:
      "Separate fact from fiction about root canal treatment and what patients can generally expect.",
    content: `Root canal treatment (RCT) is one of the most misunderstood dental procedures. Here are some common myths and the facts:

**Myth: Root canals are extremely painful.**
Fact: Modern RCT is performed under local anesthesia. The goal is to relieve pain caused by infection, not cause it.

**Myth: It's better to extract the tooth.**
Fact: Saving a natural tooth is often preferable when clinically possible. Your dentist will recommend the best option for your situation.

**Myth: RCT requires many visits.**
Fact: Depending on the case, single sitting RCT may be possible. Your endodontist will determine the appropriate approach.

**This information is for general education and does not replace an examination by a qualified dental professional.**`,
    category: "Root Canal",
    publishedAt: "2025-09-08",
    author: "World of Dentistry Clinical Team",
    readTime: "4 min read",
  },
  {
    slug: "clear-aligners-vs-braces",
    title: "Clear Aligners vs. Traditional Braces: An Overview",
    excerpt:
      "A general comparison of orthodontic options to help you understand what to discuss with your dentist.",
    content: `Orthodontic treatment can improve alignment, bite function, and appearance. Two common options are traditional braces and clear aligners.

**Traditional braces** use brackets and wires to gradually move teeth. They are effective for a wide range of cases, including complex alignment issues.

**Clear aligners** are removable, transparent trays that shift teeth over time. They may suit mild to moderate cases but are not appropriate for every patient.

The best option depends on your clinical needs, lifestyle, and treatment goals. An orthodontic assessment is essential before choosing a path.

**This information is for general education and does not replace an examination by a qualified dental professional.**`,
    category: "Aligners",
    publishedAt: "2025-08-22",
    author: "World of Dentistry Clinical Team",
    readTime: "5 min read",
  },
  {
    slug: "teeth-whitening-what-to-know",
    title: "Professional Teeth Whitening: What to Know",
    excerpt:
      "General information about in-clinic teeth whitening and what patients should consider.",
    content: `Teeth whitening is a cosmetic procedure that lightens tooth color and reduces surface stains. Professional in-clinic whitening, such as with Philips Zoom technology, uses controlled concentrations under dental supervision.

Whitening may not be suitable for everyone. Existing restorations, sensitivity, and the cause of discoloration all affect suitability and results.

Results vary by patient. Maintaining good oral hygiene and limiting staining foods and beverages can help prolong results.

**This information is for general education and does not replace an examination by a qualified dental professional.**`,
    category: "Cosmetic Dentistry",
    publishedAt: "2025-07-10",
    author: "World of Dentistry Clinical Team",
    readTime: "3 min read",
  },
  {
    slug: "child-first-dental-visit",
    title: "Preparing Your Child for Their First Dental Visit",
    excerpt:
      "Tips for parents to help children feel comfortable at the dentist.",
    content: `A child's first dental visit sets the tone for lifelong oral health habits. Here are general tips for parents:

- Schedule the visit before problems arise
- Use positive language about the dentist
- Read children's books about dental visits
- Avoid sharing negative dental experiences
- Bring comfort items if helpful

Pediatric dentists create child-friendly environments and use age-appropriate techniques. Early visits help prevent decay and establish trust.

**This information is for general education and does not replace an examination by a qualified dental professional.**`,
    category: "Children's Dentistry",
    publishedAt: "2025-06-05",
    author: "World of Dentistry Clinical Team",
    readTime: "4 min read",
  },
  {
    slug: "daily-oral-hygiene-guide",
    title: "Daily Oral Hygiene: A Practical Guide",
    excerpt:
      "Evidence-based daily habits to maintain healthy teeth and gums.",
    content: `Good oral hygiene reduces the risk of cavities and gum disease. General recommendations include:

- Brush twice daily with fluoride toothpaste for two minutes
- Clean between teeth daily with floss or interdental brushes
- Replace your toothbrush every 3–4 months
- Limit sugary snacks and beverages
- Visit your dentist regularly for checkups and cleaning

Individual needs may vary. Your dentist can personalize recommendations based on your oral health.

**This information is for general education and does not replace an examination by a qualified dental professional.**`,
    category: "Oral Hygiene",
    publishedAt: "2025-05-18",
    author: "World of Dentistry Clinical Team",
    readTime: "3 min read",
  },
];

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((d) => d.slug === slug);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getTreatmentsByCategory(category: Treatment["category"]): Treatment[] {
  return treatments.filter((t) => t.category === category);
}

export const treatmentCategories: { id: Treatment["category"]; label: string }[] = [
  { id: "general", label: "General Dentistry" },
  { id: "cosmetic", label: "Cosmetic Dentistry" },
  { id: "pediatric", label: "Pediatric Dentistry" },
  { id: "surgical", label: "Oral Surgery" },
  { id: "orthodontic", label: "Orthodontics" },
  { id: "restorative", label: "Restorative Dentistry" },
];

export const medicalDisclaimer =
  "This information is for general education and does not replace an examination by a qualified dental professional.";

export const aiDisclaimer =
  "Smile Assistant is an AI tool that provides general information only. It cannot diagnose conditions or replace a dentist.";

export const emergencyGuidance =
  "If you are experiencing severe swelling, uncontrolled bleeding, difficulty breathing or swallowing, or another serious emergency, seek urgent medical care immediately and contact the clinic.";
