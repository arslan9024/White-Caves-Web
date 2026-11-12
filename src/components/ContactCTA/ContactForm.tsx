'use client';

import { useState } from 'react';

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Buy Luxury Residence',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-xl bg-zinc-900 border border-emerald-500/30 text-center">
        <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xl mb-3">
          ✓
        </div>
        <h4 className="text-lg font-bold text-white mb-2">Inquiry Dispatched</h4>
        <p className="text-xs text-zinc-400 leading-relaxed">
          A dedicated White Caves luxury advisor will connect with your private office within 15 minutes.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-4">
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
          Full Name
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="e.g. Lord Alistair Vance"
          className="w-full px-3.5 py-2.5 rounded-md bg-zinc-950 border border-zinc-800 text-white text-xs placeholder-zinc-600 focus:outline-none focus:border-red-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
            Email
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="investor@domain.com"
            className="w-full px-3.5 py-2.5 rounded-md bg-zinc-950 border border-zinc-800 text-white text-xs placeholder-zinc-600 focus:outline-none focus:border-red-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
            Phone / WhatsApp
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+971 50 000 0000"
            className="w-full px-3.5 py-2.5 rounded-md bg-zinc-950 border border-zinc-800 text-white text-xs placeholder-zinc-600 focus:outline-none focus:border-red-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
          Transaction Objective
        </label>
        <select
          value={formData.interest}
          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-md bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-red-500"
        >
          <option>Buy Luxury Residence</option>
          <option>Off-Plan VIP Allocation</option>
          <option>Sell Trophy Property</option>
          <option>Commercial Portfolio Acquisition</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-md font-semibold text-xs uppercase tracking-wider bg-[#EF4444] text-white hover:bg-red-600 shadow-lg shadow-red-600/20 transition mt-2"
      >
        Submit Confidential Inquiry
      </button>
    </form>
  );
};
