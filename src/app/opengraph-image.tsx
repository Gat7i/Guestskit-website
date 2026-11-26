import { ImageResponse } from "next/og";

export const alt = "GuestsKit — Conciergerie digitale pour hôtels";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0E1B34",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        {/* Barre or signature */}
        <div style={{ width: 6, height: 72, background: "#C4933F", borderRadius: 9999, marginBottom: 48 }} />
        <div style={{ fontSize: 88, fontWeight: 600, color: "#F9F8F6", lineHeight: 1.08, letterSpacing: "-1px" }}>
          GuestsKit
        </div>
        <div style={{ fontSize: 34, color: "rgba(249,248,246,0.60)", marginTop: 24, fontWeight: 400 }}>
          Conciergerie digitale pour hôtels
        </div>
        <div style={{ fontSize: 22, color: "#C4933F", marginTop: 56, fontWeight: 500 }}>
          www.guestskit.com
        </div>
      </div>
    ),
    { ...size }
  );
}
