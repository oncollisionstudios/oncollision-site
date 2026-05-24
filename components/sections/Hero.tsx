import FadeIn from "../FadeIn";

export default function Hero() {
  return (
    <FadeIn>
      <section
        id="home"
        className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Background atmospherics */}
        <div className="hero-overlay" />
        <div className="hero-scanlines" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-cyan-500/20 blur-[120px] animate-pulse" />

        {/* Hero content */}
        <div className="z-10 flex flex-col items-center">
          <h1 className="text-glow text-3xl sm:text-5xl md:text-7xl font-bold tracking-[0.12em] sm:tracking-[0.2em] text-center px-4 leading-tight">
            OnCollision Studio
          </h1>

          <p className="mt-8 text-gray-400 text-lg md:text-xl px-6 text-center">
            From Gamers, To Gamers.
          </p>

          <div className="flex gap-6 mt-12">
            <a
              href="#games"
              className="px-8 py-4 rounded-xl bg-cyan-500 hover:scale-105 transition"
            >
              View Games
            </a>
            <a
              href="#devlog"
              className="px-8 py-4 rounded-xl border border-gray-700 hover:bg-zinc-900 transition"
            >
              Devlog
            </a>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
