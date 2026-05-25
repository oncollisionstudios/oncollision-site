import Section from "../Section";

export default function About() {
  return (
    <Section id="about" title="About" subtitle="Who we are and what we build">
      <div className="text-2xl bg-zinc-950/95 backdrop-blur-md rounded-2xl border border-cyan-500/20 p-10">
        <h3 className="text-4xl font-bold mb-6">OnCollision Studio</h3>
        <p className="text-3xl text-gray-400 leading-12">
          OnCollision is an independent game studio focused on building fast,
          immersive FPS experiences. We design games around intensity,
          movement, responsive gameplay, and futuristic worlds.
          </p>

          <p className="text-3xl text-gray-400 leading-12">
          Why the name? In physics, a collision is when two objects interact with
          a force that changes their motion. We see game development as a
          creative collision of ideas, technology, and passion that propels us
          forward to create something new and exciting.
        </p>
      </div>
    </Section>
  );
}