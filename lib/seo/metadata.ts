import type { Metadata } from "next";
import { clinicName } from "@/data/clinic";

const siteUrl = "https://www.worldofdentistry.co.in";

interface PageMetaOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogType?: "website" | "article";
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogType = "website",
}: PageMetaOptions): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    keywords: [
      "dentist Gurgaon",
      "dental clinic Gurugram",
      "World of Dentistry",
      ...keywords,
    ],
    alternates: { canonical: path },
    openGraph: {
      type: ogType,
      locale: "en_IN",
      siteName: clinicName,
      title: `${title} | ${clinicName}`,
      description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${clinicName}`,
      description,
    },
  };
}
