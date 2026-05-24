import FadeInOut from "../FadeInOut";

export default function Hero() {
  return (
    <FadeInOut>
      <section
        id="home"
        className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Background atmospherics — particles live globally in layout.tsx */}
        <div className="hero-overlay" />
        <div className="hero-scanlines" />
        <div className="absolute w-100 h-100 rounded-full bg-cyan-400/9 blur-[100px] animate-pulse" />

        {/* Hero content */}
        <div className="z-10 flex flex-col items-center">
          <h1 className="text-cyan-300 text-stroke text-3xl sm:text-5xl md:text-8xl font-bold tracking-[0.12em] sm:tracking-[0.2em] text-center px-4 leading-tight">
            OnCollision Studio
            <sup className="text-xl md:text-5xl tracking-normal ml--2 align-top">™</sup>
          </h1>
          <p className="mt-8 text-white text-lg md:text-4xl px-6 text-center">
            From Gamers, To Gamers.
          </p>

          <div className="flex gap-6 mt-12">
            <a
              href="#games"
              className="text-2xl px-8 py-4 rounded-xl bg-cyan-500 btn-glow hover:scale-105 transition">
              View Games
            </a>
          </div>
        </div>

        
        {/* Scroll cue */}
        <a
          href="#games"
          aria-label="Scroll to Games section"
          className="scroll-cue absolute bottom-10 left-1/2 -translate-x-1/2 text-cyan-300 hover:text-cyan-100 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: "drop-shadow(0 0 8px rgba(0,183,255,0.8))" }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>
      </section>
    </FadeInOut>
  );
}