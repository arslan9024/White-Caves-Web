export const DeveloperFilterQuickChips = () => {
  const developers = ['Emaar', 'DAMAC', 'Nakheel', 'Sobha Realty', 'Meraas', 'Omniyat', 'Ellington'];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs">
      <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold mr-1">
        Prime Developers:
      </span>
      {developers.map((dev) => (
        <span
          key={dev}
          className="px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:border-red-500/50 hover:text-white transition cursor-default"
        >
          {dev}
        </span>
      ))}
    </div>
  );
};
