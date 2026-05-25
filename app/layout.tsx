import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import ParticleField from "../components/ParticleField";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

// Update SITE_URL to your real domain when ready (vercel.app or custom).
const SITE_URL = "https://oncollisionstudio.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "OnCollision Studio — From Gamers, To Gamers",
    template: "%s | OnCollision Studio",
  },
  description:
    "Independent game studio building fast, immersive FPS experiences.",
  keywords: [
    "OnCollision Studio",
    "indie game studio",
    "mobile FPS",
    "Project Velocity",
    "game development",
    "competitive shooter",
    "Unity",
  ],
  authors: [{ name: "OnCollision Studio" }],
  creator: "OnCollision Studio",
  publisher: "OnCollision Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "OnCollision Studio",
    title: "OnCollision Studio — From Gamers, To Gamers",
    description:
      "Independent game studio building fast, immersive mobile FPS experiences. Now developing PROJECT: VELOCITY.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OnCollision Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OnCollision Studio — From Gamers, To Gamers",
    description:
      "Independent game studio building fast, immersive mobile FPS experiences.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={rajdhani.variable}>
      <body>
        <ParticleField />
        {children}
      </body>
    </html>
  );
}