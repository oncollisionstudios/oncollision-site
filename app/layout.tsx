import { Rajdhani } from "next/font/google";
import "./globals.css";
import ParticleField from "../components/ParticleField";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

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