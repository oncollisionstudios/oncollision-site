"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#games", label: "Games", id: "games" },
  { href: "#team", label: "Team", id: "team" },
  { href: "#devlog", label: "Devlog", id: "devlog" },
  { href: "#about", label: "About", id: "about" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      let visibleSection = "";

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSection = entry.target.id;
        }
      });

      if (visibleSection) {
        setActive(visibleSection);
      }
    },
    {
      rootMargin: "-40% 0px -40% 0px",
    }
  );

  NAV_LINKS.forEach((link) => {
    const section = document.getElementById(link.id);
    if (section) observer.observe(section);
  });

      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
      }, []);

      return (
        <nav
        className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-md
        border-b
        border-gray-800
        transition-all
        duration-300
        ${ scrolled  ? "bg-black/95 py-2": "bg-black/80 py-4"}`}>

      <div className="w-full px-6 md:px-10 py-4 relative flex items-center">

      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-[0.2em] text-glow-soft">
        OnCollision Studio
        <sup className="text-sm tracking-normal ml-1">™</sup>
      </h1>

      {/* Desktop menu centered on screen */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-16 items-center">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`
              nav-link
              text-2xl
              font-medium
              transition
              duration-300
              ${
                active === link.id
                  ? "text-cyan-400"
                  : "text-cyan-200 hover:text-white"
              }
            `}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile toggle */}
      <button
        className="md:hidden ml-auto text-3xl text-cyan-200"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        ☰
      </button>
    </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-950/95 border-t border-gray-800">
          <div className="flex flex-col p-6 gap-6">

            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`
                  nav-link
                  text-2xl
                  font-medium
                  transition
                  duration-300
                  ${
                    active === link.id
                      ? "text-cyan-400"
                      : "text-cyan-200 hover:text-white"
                  }
                `}
              >
                {link.label}
              </a>
            ))}

          </div>
        </div>
      )}
    </nav>
  );
}