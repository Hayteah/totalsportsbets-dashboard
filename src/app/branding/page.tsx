"use client";

import Link from "next/link";

export default function BrandingPage() {
  const assets = [
    { name: "Instagram Profile", file: "instagram.svg", size: "1080x1080" },
    { name: "YouTube Profile", file: "youtube.svg", size: "1080x1080" },
    { name: "Facebook Profile", file: "facebook.svg", size: "1080x1080" },
    { name: "Twitter Profile", file: "twitter.svg", size: "1080x1080" },
    { name: "Homepage Icon", file: "favicon.svg", size: "512x512" },
    { name: "Template Icon", file: "template.svg", size: "1080x1350" },
  ];

  return (
    <div style={{ minHeight: "100vh", padding: "40px", background: "#08080d", color: "#e2e2e8", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Link href="/" style={{ color: "#00FF88", textDecoration: "none", marginBottom: "20px", display: "inline-block" }}>
          ← Back to Dashboard
        </Link>

        <h1 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "8px" }}>Brand Assets</h1>
        <p style={{ color: "#8b8ba0", marginBottom: "40px" }}>Generated profile pictures and icons based on the dashboard theme.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
          {assets.map((asset) => (
            <div key={asset.file} style={{ background: "#0f0f18", borderRadius: "16px", border: "1px solid #1a1a2e", overflow: "hidden" }}>
              <div style={{ background: "#000", aspectRatio: asset.file === "template.svg" ? "4/5" : "1/1", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
                <img
                  src={`/branding/${asset.file}`}
                  alt={asset.name}
                  style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: asset.file === "favicon.svg" ? "20px" : "0" }}
                />
              </div>
              <div style={{ padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "16px" }}>{asset.name}</div>
                  <div style={{ fontSize: "12px", color: "#4a4a5e", marginTop: "4px" }}>{asset.size} · SVG</div>
                </div>
                <a
                  href={`/branding/${asset.file}`}
                  download
                  style={{
                    padding: "8px 16px",
                    borderRadius: "8px",
                    background: "#00FF8815",
                    color: "#00FF88",
                    textDecoration: "none",
                    fontSize: "13px",
                    fontWeight: 700,
                    border: "1px solid #00FF8830"
                  }}
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
