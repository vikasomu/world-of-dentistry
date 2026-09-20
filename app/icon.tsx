import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f2744",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            width: 16,
            height: 20,
            borderRadius: "50% 50% 40% 40%",
            background: "#3d9a9a",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
