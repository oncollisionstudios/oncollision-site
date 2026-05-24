import Section from "../Section";

type Game = {
  codename: string;
  title: string;
  status: string;
  description: string;
};

const GAMES: Game[] = [
  {
    codename: "VELOCITY",
    title: "PROJECT: VELOCITY",
    status: "In Development",
    description:
      "Fast-paced mobile FPS combat with futuristic weapons, movement mechanics and competitive gameplay.",
  },
];

function GameCard({ game }: { game: Game }) {
  return (
    <div className="group bg-zinc-950/95 backdrop-blur-md rounded-2xl border border-cyan-500/20 overflow-hidden hover:border-cyan-500 hover:scale-[1.02] transition">
      <div className="h-56 relative bg-linear-to-br from-cyan-500/20 via-black to-purple-500/20">
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm bg-cyan-500/20">
          {game.status}
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-cyan-400/60">
          {game.codename}
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-4xl font-bold">{game.title}</h3>
        <p className="text-2xl mt-4 text-gray-400">{game.description}</p>

        <div className="flex gap-4 mt-8">
          <button className="text-2xl px-6 py-3 rounded-lg bg-cyan-500 btn-glow hover:scale-105 transition">
            Details
          </button>
          <button className="text-2xl px-6 py-3 rounded-lg border border-gray-700 hover:bg-zinc-800 transition">
            Devlog
          </button>
        </div>
      </div>
    </div>
  );
}

function ClassifiedCard() {
  return (
    <div className="group relative bg-zinc-950/95 backdrop-blur-md rounded-2xl border border-cyan-500/10 overflow-hidden hover:border-cyan-500/40 transition">
      {/* Header — matches the real card's image area */}
      <div className="h-56 relative bg-linear-to-br from-zinc-900 via-black to-zinc-900 overflow-hidden">
        {/* Status badge */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm bg-amber-500/20 text-amber-300 border border-amber-500/30">
          Classified
        </div>

        {/* Faint scanlines for atmosphere */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent, transparent 3px, rgba(255,255,255,0.04) 4px)",
          }}
        />

        {/* Redacted codename */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl font-bold tracking-wider text-gray-600 select-none">
            ████████
          </div>
        </div>

        {/* Corner accent */}
        <div className="absolute top-4 left-4 text-xs text-gray-600 tracking-widest">
          {'// PROJECT_02'}
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-4xl font-bold text-gray-500">
          PROJECT: <span className="text-gray-700">[REDACTED]</span>
        </h3>
        <p className="text-2xl mt-4 text-gray-500">
          Classified development. Details emerging.{" "}
          <span className="text-cyan-400/70">Stand by.</span>
        </p>

        <div className="flex gap-4 mt-8">
          <button
            disabled
            className="text-2xl px-6 py-3 rounded-lg border border-gray-800 text-gray-600 cursor-not-allowed"
          >
            🔒 Locked
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Games() {
  return (
    <Section
      id="games"
      title="Games"
      subtitle="Current and upcoming projects from OnCollision"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {GAMES.map((game) => (
          <GameCard key={game.codename} game={game} />
        ))}
        <ClassifiedCard />
      </div>
    </Section>
  );
}