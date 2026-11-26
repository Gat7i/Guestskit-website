import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0E1B34",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 6,
        }}
      >
        {/* Barre or signature à gauche */}
        <div
          style={{
            width: 3,
            height: 18,
            background: "#C4933F",
            borderRadius: 9999,
            marginRight: 4,
          }}
        />
        <span style={{ color: "#F9F8F6", fontSize: 16, fontWeight: 600 }}>G</span>
      </div>
    ),
    { ...size }
  );
}
