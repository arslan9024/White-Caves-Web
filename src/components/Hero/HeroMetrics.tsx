export const HeroMetrics = () => {
  const metrics = [
    { value: 'AED 45.5B+', label: 'Managed Assets' },
    { value: '100%', label: 'DLD / RERA Licensed' },
    { value: 'Top 1%', label: 'Developer Allocation' },
    { value: '108', label: 'Autonomous Agents' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl w-full mt-16 pt-10 border-t border-zinc-200/80 dark:border-zinc-800/80">
      {metrics.map((m) => (
        <div key={m.label} className="text-center">
          <p className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">{m.value}</p>
          <p className="text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mt-1">{m.label}</p>
        </div>
      ))}
    </div>
  );
};
