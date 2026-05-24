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
    <div className="group bg-zinc-800/60 backdrop-blur-md rounded-2xl border border-cyan-500/20 overflow-hidden hover:border-cyan-500 hover:scale-[1.02] transition">
      <div className="h-56 relative bg-linear-to-br from-cyan-500/20 via-black to-purple-500/20">
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm bg-cyan-500/20">
          {game.status}
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-cyan-400/60">
          {game.codename}
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-3xl font-bold">{game.title}</h3>
        <p className="mt-4 text-gray-400">{game.description}</p>

        <div className="flex gap-4 mt-8">
          <button className="px-6 py-3 rounded-lg bg-cyan-500 btn-glow hover:scale-105 transition">
              Details
          </button>
          <button className="px-6 py-3 rounded-lg border border-gray-700 hover:bg-zinc-800 transition">
            Devlog
          </button>
        </div>
      </div>
    </div>
  );
}

function PlaceholderCard() {
  return (
    <div className="border border-dashed border-gray-700 rounded-2xl p-8 flex items-center justify-center text-gray-500">
      Future Project
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
        <PlaceholderCard />
      </div>
    </Section>
  );
}
