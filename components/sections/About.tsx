import Section from "../Section";

export default function About() {
  return (
    <Section id="about" title="About" subtitle="Who we are and what we build">
      <div className="bg-zinc-900/70 backdrop-blur-md rounded-2xl border border-cyan-500/20 p-10">
        <h3 className="text-2xl font-bold mb-6">OnCollision Studio</h3>
        <p className="text-gray-400 leading-8">
          OnCollision is an independent game studio focused on building fast,
          immersive mobile FPS experiences. We design games around intensity,
          movement, responsive gameplay, and futuristic worlds. Our goal is to
          create experiences that feel powerful the moment players enter the
          battlefield.
        </p>
      </div>
    </Section>
  );
}