import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "World of Dentistry",
    short_name: "WoD Dental",
    description:
      "Premium dental clinic in Gurgaon offering advanced dental care with modern technology.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafbfc",
    theme_color: "#0f2744",
    icons: [
      {
        src: "/icon",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
