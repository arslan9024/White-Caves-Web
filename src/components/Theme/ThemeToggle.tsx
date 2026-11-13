'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Monitor } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
  compact?: boolean;
}

export function ThemeToggle({ className = '', compact = false }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-full border border-zinc-200 dark:border-zinc-800 bg-transparent animate-pulse ${className}`}
        aria-hidden="true"
      />
    );
  }

  if (compact) {
    const isDark = theme === 'dark';
    return (
      <button
        type="button"
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        className={`inline-flex items-center justify-center w-9 h-9 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-200 hover:text-[#EF4444] dark:hover:text-[#EF4444] transition-all shadow-sm ${className}`}
      >
        {isDark ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    );
  }

  // 3-way pill mode (light / system / dark)
  const modes = [
    { mode: 'light', icon: <Sun size={13} />, label: 'Light mode' },
    { mode: 'system', icon: <Monitor size={13} />, label: 'System mode' },
    { mode: 'dark', icon: <Moon size={13} />, label: 'Dark mode' },
  ] as const;

  return (
    <div
      role="group"
      aria-label="Theme mode"
      className={`inline-flex items-center gap-1 p-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/80 backdrop-blur-sm ${className}`}
    >
      {modes.map(({ mode, icon, label }) => {
        const active = theme === mode;
        return (
          <button
            key={mode}
            type="button"
            onClick={() => setTheme(mode)}
            aria-pressed={active}
            aria-label={label}
            title={label}
            className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs transition-all ${
              active
                ? 'bg-[#EF4444] text-white shadow-md shadow-red-500/25'
                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            {icon}
          </button>
        );
      })}
    </div>
  );
}

export default ThemeToggle;
