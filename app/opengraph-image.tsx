import type { MetadataRoute } from "next";
import { ImageResponse } from "next/og";

export const alt = "World of Dentistry — Premium Dental Clinic in Gurgaon";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #0f2744 0%, #1a3a5c 50%, #3d9a9a 100%)",
          color: "white",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.8, letterSpacing: 4, textTransform: "uppercase" }}>
          Gurgaon · Sector 46
        </div>
        <div style={{ fontSize: 72, fontWeight: 600, marginTop: 20, lineHeight: 1.1 }}>
          World of Dentistry
        </div>
        <div style={{ fontSize: 32, marginTop: 24, opacity: 0.9, maxWidth: 800 }}>
          Advanced Dentistry. A Better Experience.
        </div>
      </div>
    ),
    { ...size }
  );
}
