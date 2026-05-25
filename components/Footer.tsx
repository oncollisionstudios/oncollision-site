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

export default function Footer() {
  return (
    <footer className="border-t backdrop-blur-md border-cyan-500/10 mt-20 py-10 px-10">
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

      <div className="text-center text-gray-600 text-2xl mt-4">
        © {new Date().getFullYear()} OnCollision Studio. All rights reserved.
      </div>

      <div className="text-center text-gray-600 text-lg mt-4">
        <a
          href="/privacy"
          className="hover:text-cyan-400 transition"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}