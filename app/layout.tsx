import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { clinicName, clinicDescription } from "@/data/clinic";
import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/seo/structured-data";
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
    "cosmetic dentistry Gurgaon",
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
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
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
      <body className="min-h-full flex flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <JsonLd data={[getOrganizationSchema(), getWebSiteSchema()]} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
