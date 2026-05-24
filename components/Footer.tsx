const SOCIALS = [
  { href: "https://youtube.com", label: "YouTube" },
  { href: "https://discord.com", label: "Discord" },
  { href: "https://x.com", label: "X" },
  { href: "https://www.instagram.com/oncollisionstudio/", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/10 mt-20 py-10 px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="font-bold tracking-[0.25em] text-glow-soft">
            OnCollision Studio
          </h3>
          <p className="text-gray-500 mt-2 text-sm">From Gamers, To Gamers.</p>
        </div>

        <div className="flex gap-8 text-gray-400">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="text-center text-gray-600 text-sm mt-8">
        © {new Date().getFullYear()} OnCollision Studio. All rights reserved.
      </div>
    </footer>
  );
}
