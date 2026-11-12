interface PropertyBadgeProps {
  status: string;
  featured?: boolean;
  dldValidated?: boolean;
}

export const PropertyBadge = ({ status, featured, dldValidated }: PropertyBadgeProps) => {
  return (
    <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5">
      {featured && (
        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-600 text-white shadow-sm">
          ★ Featured
        </span>
      )}
      {dldValidated && (
        <span className="px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wider bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 backdrop-blur-sm">
          DLD Verified
        </span>
      )}
      <span className="px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wider bg-zinc-900/80 text-zinc-300 border border-zinc-700/50 backdrop-blur-sm">
        {status}
      </span>
    </div>
  );
};
