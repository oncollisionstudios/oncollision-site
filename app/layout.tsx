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
      <body className="bg-black">

        {/* Background particles */}
        <ParticleField />

        {/* Dark content layer */}
        <div className="relative z-10 bg-black/85">
          {children}
        </div>

      </body>
    </html>
  );
}