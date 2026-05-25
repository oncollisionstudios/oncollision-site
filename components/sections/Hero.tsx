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
        <div className="absolute w-100 h-100 rounded-full bg-cyan-500/9 blur-[150px] animate-pulse" />

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
      </section>
    </FadeInOut>
  );
}