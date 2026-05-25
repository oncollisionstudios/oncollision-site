import {
  FaDiscord,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SOCIALS = [
  { href: "https://youtube.com", icon: <FaYoutube />, label: "YouTube" },
  { href: "https://discord.com", icon: <FaDiscord />, label: "Discord" },
  { href: "https://x.com", icon: <FaXTwitter />, label: "X (Twitter)" },
  {
    href: "https://www.instagram.com/oncollisionstudio/",
    icon: <FaInstagram />,
    label: "Instagram",
  },
  {
    href: "https://github.com/oncollisionstudios",
    icon: <FaGithub />,
    label: "GitHub",
  },
];

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t backdrop-blur-md border-cyan-500/10 mt-20 py-10 px-10">
      {/* Social icons */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex justify-center items-center">
        <div className="text-4xl flex gap-16 text-cyan-200">
          {SOCIALS.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="hover:text-cyan-400 hover:scale-110 transition duration-300"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Legal links */}
      <nav
        aria-label="Legal"
        className="flex justify-center items-center gap-6 text-xl text-gray-400 mt-6 mb-4"
      >
        {LEGAL_LINKS.map((link, i) => (
          <span key={link.href} className="flex items-center gap-6">
            <a
              href={link.href}
              className="hover:text-cyan-400 transition"
            >
              {link.label}
            </a>
            {i < LEGAL_LINKS.length - 1 && (
              <span className="text-gray-700" aria-hidden="true">
                ·
              </span>
            )}
          </span>
        ))}
      </nav>

      {/* Copyright */}
      <div className="text-center text-gray-600 text-2xl mt-4">
        © {new Date().getFullYear()} OnCollision Studio. All rights reserved.
      </div>
    </footer>
  );
}