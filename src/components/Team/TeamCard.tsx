import Image from 'next/image';
import { Mail, Globe, Star, MessageCircle } from 'lucide-react';
import { TeamMember } from '../../types/team.types';
import { WHATSAPP_LINK } from '@/data/nav.data';

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-zinc-100/60 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 p-6 flex flex-col items-center text-center hover:border-[#EF4444]/50 transition-all shadow-lg">
      {member.dealsCount !== undefined && member.dealsCount > 0 && (
        <div className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-500 text-[10px] font-extrabold">
          <Star size={10} fill="currentColor" />
          {member.dealsCount} Deals
        </div>
      )}

      <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-[#EF4444] mb-4 shadow-md">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="112px"
          className="object-cover"
        />
      </div>

      <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{member.name}</h3>
      <p className="text-xs font-semibold text-[#EF4444] uppercase tracking-wider mb-2">
        {member.role}
      </p>
      <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">{member.bio}</p>

      {/* Skills */}
      <div className="flex flex-wrap justify-center gap-1.5 mb-6">
        {member.skills.map((skill) => (
          <span
            key={skill}
            className="px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Social / Contact */}
      <div className="mt-auto flex items-center gap-3 pt-3 border-t border-zinc-200/80 dark:border-zinc-800/80 w-full justify-center">
        {member.social.linkedin && (
          <a
            href={member.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} LinkedIn`}
            className="p-1.5 rounded-full text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition"
          >
            <Globe size={16} />
          </a>
        )}
        <a
          href={`mailto:${member.social.email}`}
          aria-label={`Email ${member.name}`}
          className="p-1.5 rounded-full text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition"
        >
          <Mail size={16} />
        </a>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`WhatsApp ${member.name}`}
          className="p-1.5 rounded-full text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 transition"
        >
          <MessageCircle size={16} />
        </a>
      </div>
    </div>
  );
};
