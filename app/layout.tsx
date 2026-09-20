import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { clinicName, clinicDescription, contact } from "@/data/clinic";
import { SiteShell } from "@/components/layout/SiteShell";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.worldofdentistry.co.in"),
  title: {
    default: `${clinicName} | Premium Dental Clinic in Gurgaon`,
    template: `%s | ${clinicName}`,
  },
  description: clinicDescription,
  keywords: [
    "dentist Gurgaon",
    "dental clinic Gurugram",
    "dental implants Gurgaon",
    "root canal Gurgaon",
    "cosmetic dentistry",
    "World of Dentistry",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: clinicName,
    title: `${clinicName} | Premium Dental Clinic in Gurgaon`,
    description: clinicDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${clinicName} | Premium Dental Clinic in Gurgaon`,
    description: clinicDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: clinicName,
  description: clinicDescription,
  url: "https://www.worldofdentistry.co.in",
  telephone: contact.phone,
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.address.line1,
    addressLocality: contact.address.city,
    addressRegion: contact.address.state,
    postalCode: contact.address.postalCode,
    addressCountry: contact.address.country,
  },
  openingHoursSpecification: {
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
  medicalSpecialty: "Dentistry",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
