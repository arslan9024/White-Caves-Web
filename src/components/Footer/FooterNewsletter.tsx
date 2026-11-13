'use client';

import { useState } from 'react';

export const FooterNewsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div>
      <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-3">Market Intelligence Digest</h4>
      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 leading-relaxed">
        Receive quarterly RERA index analytics and pre-launch developer allocations directly to your inbox.
      </p>
      {subscribed ? (
        <p className="text-xs text-emerald-400 font-medium">✓ Thank you for subscribing.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter investor email..."
            required
            className="flex-1 px-3 py-2 text-xs rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-red-500"
          />
          <button
            type="submit"
            className="px-4 py-2 text-xs font-semibold rounded-md bg-[#EF4444] text-zinc-900 dark:text-white hover:bg-red-600 transition"
          >
            Join
          </button>
        </form>
      )}
    </div>
  );
};
