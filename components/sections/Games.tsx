import Section from "../Section";
import StaggerIn from "../StaggerIn";

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
    <div className="game-card group h-full flex flex-col bg-zinc-950/95 backdrop-blur-md rounded-2xl border border-cyan-500/20 overflow-hidden transition-all duration-500">
      <div className="h-56 relative bg-linear-to-br from-cyan-500/20 via-black to-purple-500/20 overflow-hidden">
        {/* Sliding sheen on hover */}
        <div className="game-card-sheen absolute inset-0 pointer-events-none" />

        <div className="game-card-badge absolute top-4 right-4 px-3 py-1 rounded-full text-sm bg-cyan-500/20 border border-cyan-500/30">
          {game.status}
        </div>

        <div className="game-card-codename absolute inset-0 flex items-center justify-center text-4xl font-bold text-cyan-400/60 transition-all duration-500">
          {game.codename}
        </div>
      </div>

      <div className="p-8 flex flex-col flex-1">
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
    <div className="group relative h-full flex flex-col bg-zinc-950/95 backdrop-blur-md rounded-2xl border border-cyan-500/10 overflow-hidden hover:border-amber-500/30 transition-all duration-500">
      <div className="h-56 relative bg-linear-to-br from-zinc-900 via-black to-zinc-900 overflow-hidden">
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm bg-amber-500/20 text-amber-300 border border-amber-500/30 group-hover:bg-amber-500/30 transition">
          Classified
        </div>

        <div
          className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent, transparent 3px, rgba(255,255,255,0.04) 4px)",
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl font-bold tracking-wider text-gray-600 select-none group-hover:text-gray-500 transition">
            ████████
          </div>
        </div>

        <div className="absolute top-4 left-4 text-xs text-gray-600 tracking-widest group-hover:text-amber-300/60 transition">
          // PROJECT_02
        </div>
      </div>

      <div className="p-8 flex flex-col flex-1">
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
  const cards = [
    ...GAMES.map((game) => <GameCard key={game.codename} game={game} />),
    <ClassifiedCard key="classified" />,
  ];

  return (
    <Section
      id="games"
      title="Games"
      subtitle="Current and upcoming projects from OnCollision"
    >
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {cards.map((card, i) => (
          <StaggerIn key={i} index={i}>
            {card}
          </StaggerIn>
        ))}
      </div>
    </Section>
  );
}