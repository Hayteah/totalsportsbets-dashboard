import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Totalsportbet AI Dashboard",
  description: "AI-powered sports prediction management dashboard",
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
