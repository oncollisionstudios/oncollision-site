import Section from "../Section";

type DevlogEntry = {
  tag: string;
  title: string;
  body: string;
};

const ENTRIES: DevlogEntry[] = [
  {
    tag: "Alpha Update #01",
    title: "Weapon System Progress",
    body: "Added firing mechanics, weapon switching, and early combat testing for mobile controls.",
  },
  {
    tag: "Alpha Update #02",
    title: "Movement Improvements",
    body: "Testing faster movement and responsive controls to improve FPS gameplay feel.",
  },
];

function EntryCard({ entry }: { entry: DevlogEntry }) {
  return (
    <div className="bg-zinc-950/95 border border-cyan-500/20 rounded-2xl p-8">
      <div className="text-sm text-cyan-400 mb-3">{entry.tag}</div>
      <h3 className="text-2xl font-bold mb-4">{entry.title}</h3>
      <p className="text-gray-400">{entry.body}</p>
    </div>
  );
}

export default function Devlog() {
  return (
    <Section
      id="devlog"
      title="Devlog"
      subtitle="Development updates from OnCollision"
    >
      <div className="space-y-8">
        {ENTRIES.map((entry) => (
          <EntryCard key={entry.tag} entry={entry} />
        ))}
      </div>
    </Section>
  );
}