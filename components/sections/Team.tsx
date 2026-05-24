import Section from "../Section";

type Member = {
  name: string;
  role: string;
};

const TEAM: Member[] = [
  { name: "Eli Elad Machluf", role: "CEO / Developer" },
];

function TeamCard({ member }: { member: Member }) {
  return (
    <div className="bg-zinc-900/70 rounded-2xl border border-cyan-500/20 p-8 hover:border-cyan-500 transition">
      <div className="w-24 h-24 rounded-full bg-cyan-500/20 mb-6" />
      <h3 className="text-xl font-bold">{member.name}</h3>
      <p className="text-gray-400 mt-2">{member.role}</p>
    </div>
  );
}

export default function Team() {
  return (
    <Section id="team" title="Team" subtitle="The people behind OnCollision">
      <div className="grid md:grid-cols-3 gap-8">
        {TEAM.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </Section>
  );
}