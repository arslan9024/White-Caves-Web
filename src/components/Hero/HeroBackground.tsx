import Image from 'next/image';

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <Image
        src="/images/dubai-skyline.jpg"
        alt="Dubai Luxury Skyline"
        fill
        priority
        className="object-cover opacity-25 scale-105 transform motion-safe:animate-pulse duration-1000"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-950 via-white/80 dark:via-zinc-950/80 to-white/40 dark:to-zinc-950/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/20 via-transparent to-transparent" />
    </div>
  );
};
