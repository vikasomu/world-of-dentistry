/**
 * Site imagery — illustrative dental photography from royalty-free sources.
 * Doctor portraits use branded placeholders until clinic provides official photos.
 * Replace paths when clinic-supplied assets are available.
 */

export const siteImages = {
  hero: {
    primary: "/images/hero/clinic-consultation.jpg",
    secondary: "/images/hero/dental-care.jpg",
    alt: "Modern dental clinic consultation environment",
  },
  clinic: {
    interior: "/images/clinic/modern-clinic.jpg",
    tourism: "/images/clinic/dental-tourism.jpg",
    altInterior: "Modern dental clinic treatment room",
    altTourism: "International patient travel and dental care coordination",
  },
  technology: {
    equipment: "/images/technology/dental-equipment.jpg",
    alt: "Modern dental instruments and technology",
  },
} as const;

export const treatmentImages: Record<string, { src: string; alt: string }> = {
  "child-dentistry": {
    src: "/images/treatments/child-dentistry.jpg",
    alt: "Pediatric dental care for children",
  },
  "root-canal-treatment": {
    src: "/images/treatments/root-canal.jpg",
    alt: "Root canal treatment procedure illustration",
  },
  "smile-makeover": {
    src: "/images/treatments/cosmetic-smile.jpg",
    alt: "Cosmetic dentistry and smile enhancement",
  },
  "bridges-crowns": {
    src: "/images/treatments/cosmetic-smile.jpg",
    alt: "Dental crowns and bridges restorative treatment",
  },
  "braces-aligners": {
    src: "/images/treatments/braces-aligners.jpg",
    alt: "Orthodontic braces and aligners treatment",
  },
  "scaling-polishing": {
    src: "/images/treatments/teeth-cleaning.jpg",
    alt: "Professional dental scaling and polishing",
  },
  fillings: {
    src: "/images/treatments/teeth-cleaning.jpg",
    alt: "Dental filling restorative treatment",
  },
  "teeth-whitening": {
    src: "/images/treatments/teeth-whitening.jpg",
    alt: "Professional teeth whitening treatment",
  },
  "laser-gum-treatment": {
    src: "/images/treatments/dental-surgery.jpg",
    alt: "Laser gum treatment periodontal care",
  },
  "wisdom-tooth-removal": {
    src: "/images/treatments/dental-surgery.jpg",
    alt: "Wisdom tooth extraction oral surgery",
  },
  "sedation-dentistry": {
    src: "/images/clinic/modern-clinic.jpg",
    alt: "Comfort-focused sedation dentistry environment",
  },
  "dental-implants": {
    src: "/images/treatments/dental-implant.jpg",
    alt: "Dental implant treatment planning",
  },
};

export const doctorImages: Record<
  string,
  { placeholder: boolean; src?: string; initials: string; alt: string }
> = {
  "dr-rishi-rana": {
    placeholder: true,
    initials: "RR",
    alt: "Dr. Rishi Rana — Prosthodontist and Oral Implantologist (official photo pending)",
  },
  "dr-charu-rana": {
    placeholder: true,
    initials: "CR",
    alt: "Dr. Charu Rana — Root Canal Specialist and Cosmetic Dental Surgeon (official photo pending)",
  },
};

export const blogImages: Record<string, { src: string; alt: string }> = {
  "importance-of-regular-dental-checkups": {
    src: "/images/blog/dental-health.jpg",
    alt: "Regular dental checkup and preventive care",
  },
  "understanding-dental-implants": {
    src: "/images/treatments/dental-implant.jpg",
    alt: "Understanding dental implant treatment",
  },
  "root-canal-myths-and-facts": {
    src: "/images/treatments/root-canal.jpg",
    alt: "Root canal treatment education",
  },
  "clear-aligners-vs-braces": {
    src: "/images/treatments/braces-aligners.jpg",
    alt: "Clear aligners versus traditional braces",
  },
  "teeth-whitening-what-to-know": {
    src: "/images/treatments/teeth-whitening.jpg",
    alt: "Professional teeth whitening information",
  },
  "child-first-dental-visit": {
    src: "/images/treatments/child-dentistry.jpg",
    alt: "Child's first dental visit preparation",
  },
  "daily-oral-hygiene-guide": {
    src: "/images/blog/oral-hygiene.jpg",
    alt: "Daily oral hygiene routine",
  },
};

export function getTreatmentImage(slug: string) {
  return (
    treatmentImages[slug] ?? {
      src: siteImages.clinic.interior,
      alt: "Dental treatment at World of Dentistry",
    }
  );
}

export function getBlogImage(slug: string) {
  return (
    blogImages[slug] ?? {
      src: siteImages.clinic.interior,
      alt: "Dental health education article",
    }
  );
}

export function getDoctorImage(slug: string) {
  return (
    doctorImages[slug] ?? {
      placeholder: true,
      initials: "DR",
      alt: "Dental specialist at World of Dentistry",
    }
  );
}
