import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function Icon() {
  return new ImageResponse(
    <div style={{ background: "#030712", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#39efff", fontSize: 34, fontWeight: 700, border: "2px solid #1bcfe0" }}>T</div>,
    size,
  );
}
