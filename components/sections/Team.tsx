import Section from "../Section";
import StaggerIn from "../StaggerIn";
import { FaLinkedin } from "react-icons/fa";

type Member = {
  name: string;
  role: string;
  linkedin: string;
};

const TEAM: Member[] = [
  {
    name: "Elad Machluf",
    role: "CEO / Founder",
    linkedin: "https://www.linkedin.com/in/elad-machluf/",
  },
  {
    name: "Hadas Seegel",
    role: "CMO / Chief Marketing Officer",
    linkedin: "https://www.linkedin.com/in/username/",
  },
  {
    name: "Member Three",
    role: "Role / Position",
    linkedin: "https://www.linkedin.com/in/username/",
  },
  {
    name: "Member Four",
    role: "Role / Position",
    linkedin: "https://www.linkedin.com/in/username/",
  },
];

function TeamCard({ member }: { member: Member }) {
  return (
    <div className="h-full flex flex-col bg-zinc-900/95 backdrop-blur-md rounded-2xl border border-cyan-500/20 p-8 hover:border-cyan-500 transition">
      <div className="w-24 h-24 rounded-full bg-cyan-500/20 mb-6" />
      <h3 className="text-3xl font-bold">{member.name}</h3>
      <p className="text-2xl text-gray-400 mt-2">{member.role}</p>

      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${member.name} on LinkedIn`}
        className="mt-6 inline-flex items-center gap-2 text-3xl text-cyan-300 hover:text-cyan-400 hover:scale-110 transition w-fit"
      >
        <FaLinkedin />
      </a>
    </div>
  );
}

export default function Team() {
  return (
    <Section id="team" number={3} title="Team" subtitle="The people behind OnCollision">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
        {TEAM.map((member, i) => (
          <StaggerIn key={member.name} index={i}>
            <TeamCard member={member} />
          </StaggerIn>
        ))}
      </div>
    </Section>
  );
}