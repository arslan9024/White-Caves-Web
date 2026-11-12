import { TeamMember } from '../../types/team.types';
import { TeamCard } from './TeamCard';

interface TeamGridProps {
  members: TeamMember[];
}

export const TeamGrid = ({ members }: TeamGridProps) => {
  return (
    <section id="team" className="px-6 lg:px-12 py-20 max-w-7xl mx-auto w-full">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase tracking-widest text-[#EF4444] font-semibold">
          Leadership & Advisory
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
          Meet Our Prime Specialists
        </h2>
        <p className="text-sm text-zinc-400 mt-3">
          Over two decades of proven transactional intelligence across luxury off-plan, resale, and institutional acquisitions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
};
