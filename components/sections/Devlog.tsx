import Section from "../Section";
import StaggerIn from "../StaggerIn";

type Category = "Combat" | "Movement" | "UI" | "Audio" | "Build";

type DevlogEntry = {
  version: string;
  date: string;        // ISO format: "2026-05-20"
  category: Category;
  title: string;
  body: string;
};

const ENTRIES: DevlogEntry[] = [
  {
  version: "Alpha 0.03",
  date: "2026-06-01",
  category: "UI",
  title: "HUD Overhaul",
  body: "Redesigned ammo counter and health bar...",
  },
  {
    version: "Alpha 0.02",
    date: "2026-05-18",
    category: "Movement",
    title: "Movement Improvements",
    body: "Testing faster movement and responsive controls to improve FPS gameplay feel. Strafe acceleration tuned, air control reduced for a more grounded combat loop.",
  },
  {
    version: "Alpha 0.01",
    date: "2026-05-04",
    category: "Combat",
    title: "Weapon System Progress",
    body: "Added firing mechanics, weapon switching, and early combat testing for mobile controls. Three weapon archetypes prototyped: SMG, DMR, shotgun.",
  },
];

// Each category gets its own color so entries are visually scannable.
const CATEGORY_STYLES: Record<Category, string> = {
  Combat: "bg-red-500/15 text-red-300 border-red-500/30",
  Movement: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  UI: "bg-purple-500/15 text-purple-300 border-purple-500/30",
  Audio: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  Build: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
};

function formatDate(iso: string): string {
  // Date-only string parsed in local time to avoid UTC off-by-one
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function EntryCard({ entry }: { entry: DevlogEntry }) {
  return (
    <div className="bg-zinc-950/95 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-colors duration-300">
      {/* Meta row: version + category tag on the left, date on the right */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-cyan-400 tracking-wider">
            {entry.version}
          </span>
          <span
            className={`px-3 py-1 rounded-full text-sm border ${CATEGORY_STYLES[entry.category]}`}
          >
            {entry.category}
          </span>
        </div>
        <time
          dateTime={entry.date}
          className="text-lg text-gray-500 tracking-wide"
        >
          {formatDate(entry.date)}
        </time>
      </div>

      <h3 className="text-4xl font-bold mb-4">{entry.title}</h3>
      <p className="text-2xl text-gray-400 leading-relaxed">{entry.body}</p>
    </div>
  );
}

export default function Devlog() {
  return (
    <Section
        id="devlog"
        number={2}
        title="Devlog"
        subtitle="Development updates from OnCollision"
      >
      <div className="space-y-8">
        {ENTRIES.map((entry, i) => (
          <StaggerIn key={entry.version} index={i}>
            <EntryCard entry={entry} />
          </StaggerIn>
        ))}
      </div>
    </Section>
  );
}