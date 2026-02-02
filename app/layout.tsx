import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { basePath } from "./lib/paths";
import type { CSSProperties } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aurora Audio — Premium Headphones",
  description:
    "Aurora Audio crafts premium headphones with luminous clarity, immersive sound, and aurora-inspired design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{
        "--aurora-logo-url": `url(${basePath}/aurorasoundwavelogo.png)`,
      } as CSSProperties}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="aurora-content">{children}</div>
      </body>
    </html>
  );
}
