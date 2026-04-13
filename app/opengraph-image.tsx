import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Notion Template OS — Your freelance business, finally organized";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            background: "#fef3c7",
            border: "2px solid #fbbf24",
            borderRadius: "12px",
            padding: "8px 20px",
            fontSize: "18px",
            fontWeight: 600,
            color: "#92400e",
            marginBottom: "32px",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          Notion Template OS
        </div>
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "#111827",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          Stop juggling tabs.{" "}
          <span style={{ color: "#f59e0b" }}>
            Run your freelance business from one workspace.
          </span>
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#6b7280",
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          The all-in-one Notion workspace for freelancers & solopreneurs.
        </div>
        <div
          style={{
            marginTop: "40px",
            fontSize: "20px",
            color: "#9ca3af",
          }}
        >
          templates.3vo.ai
        </div>
      </div>
    ),
    { ...size }
  );
}
