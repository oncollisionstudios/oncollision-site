import {
  FaDiscord,
  FaInstagram,
  FaYoutube,
  FaGithub
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const SOCIALS = [
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://x.com", icon: <FaXTwitter /> },
  { href: "https://www.instagram.com/oncollisionstudio/", icon: <FaInstagram /> },
  { href: "https://github.com/oncollisionstudios", icon: <FaGithub /> },
];

export default function Footer() {
  return (
    <footer className="border-t backdrop-blur-md border-cyan-500/10 mt-20 py-10 px-10">
      <div className="max-w-7xl mx-auto px-6 py-8 flex justify-center items-center">
        <div className="text-4xl flex gap-16 text-cyan-400">
          {SOCIALS.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
              text-cyan-200
              hover:text-cyan-400
              hover:scale-110
              transition
              duration-300
              "
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="text-center text-gray-600 text-2xl mt-8">
        © {new Date().getFullYear()} OnCollision Studio. All rights reserved.
      </div>
    </footer>
  );
}
