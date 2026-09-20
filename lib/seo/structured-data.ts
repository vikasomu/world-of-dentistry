import {
  clinicName,
  clinicDescription,
  contact,
  doctors,
  treatments,
  faqs,
  technologies,
} from "@/data/clinic";

const siteUrl = "https://www.worldofdentistry.co.in";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${siteUrl}/#organization`,
    name: clinicName,
    description: clinicDescription,
    url: siteUrl,
    telephone: contact.phone,
    email: contact.email,
    image: `${siteUrl}/opengraph-image`,
    logo: `${siteUrl}/icon`,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.line1,
      addressLocality: contact.address.city,
      addressRegion: contact.address.state,
      postalCode: contact.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.431,
      longitude: 77.059,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "23:00",
      },
    ],
    areaServed: {
      "@type": "City",
      name: "Gurugram",
    },
    medicalSpecialty: "Dentistry",
    priceRange: "$$",
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: clinicName,
    url: siteUrl,
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getDoctorSchema(doctor: (typeof doctors)[0]) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    description: doctor.biography,
    url: `${siteUrl}/doctors/${doctor.slug}`,
    medicalSpecialty: doctor.specializations,
    worksFor: { "@id": `${siteUrl}/#organization` },
    knowsAbout: doctor.areasOfExpertise,
  };
}

export function getTreatmentSchema(treatment: (typeof treatments)[0]) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: treatment.name,
    description: treatment.shortDescription,
    url: `${siteUrl}/treatments/${treatment.slug}`,
    procedureType: treatment.category,
  };
}

export function getLocalBusinessServices() {
  return treatments.map((t) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: t.name,
      description: t.shortDescription,
      url: `${siteUrl}/treatments/${t.slug}`,
    },
  }));
}

export function getTechnologyListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Dental Technology at World of Dentistry",
    itemListElement: technologies.map((tech, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tech.name,
      description: tech.description,
    })),
  };
}
