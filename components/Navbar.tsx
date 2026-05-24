"use client";

import { useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <h1 className="font-bold tracking-[0.2em]">
            OnCollision Studio
          </h1>

        </div>

        {/* Desktop menu */}

        <div className="hidden md:flex gap-8 text-gray-300">

          <a href="#home" className="hover:text-cyan-400">
            Home
          </a>

          <a href="#games" className="hover:text-cyan-400">
            Games
          </a>
    
          <a href="#team" className="hover:text-cyan-400">
            Team
          </a>

          <a href="#devlog" className="hover:text-cyan-400">
            Devlog
          </a>

           <a href="#about" className="hover:text-cyan-400">
            About
          </a>

          <a href="#contact" className="hover:text-cyan-400">
            Contact
          </a>

        </div>

        {/* Mobile button */}

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile dropdown */}

      {menuOpen && (

        <div className="md:hidden bg-zinc-900 border-t border-gray-800">

          <div className="flex flex-col p-6 gap-6">
            <a href="#home">Home</a>
            <a href="#games">Games</a>
            <a href="#team">Team</a>
            <a href="#devlog">Devlog</a>
            <a href="#about">About</a>
          </div>
        </div>
      )}
    </nav>
  );
}