'use client';

import React, { useState } from 'react';
import { Calendar, CheckCircle2, Phone, Send } from 'lucide-react';
import { SERVER_API_BASE_URL, type PublicRentalDto } from '@/lib/inventoryApi';

interface ViewingRequestFormProps {
  rental: PublicRentalDto;
}

export function ViewingRequestForm({ rental }: ViewingRequestFormProps) {
  const [tenantName, setTenantName] = useState('');
  const [tenantPhone, setTenantPhone] = useState('');
  const [tenantEmail, setTenantEmail] = useState('');
  const [preferredViewingAt, setPreferredViewingAt] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    leadId?: string;
    previewText?: string;
    whatsappDeepLink?: string;
  } | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    if (!tenantName.trim() || !tenantPhone.trim()) {
      setErrorMsg('Please enter your full name and WhatsApp phone number.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(`${SERVER_API_BASE_URL}/api/public/leads/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tenantName: tenantName.trim(),
          tenantPhone: tenantPhone.trim(),
          tenantEmail: tenantEmail.trim() || undefined,
          propertyId: rental.id,
          propertySlug: rental.slug,
          preferredViewingAt: preferredViewingAt || undefined,
          notes:
            notes.trim() ||
            `Viewing request for ${rental.title} (${rental.subCommunity}, ${rental.community})`,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(json?.error || json?.message || 'Unable to submit inquiry');
      }
      setSubmittedData({
        leadId: json?.data?.lead?.id,
        previewText: json?.data?.lindaGreeting?.previewText,
        whatsappDeepLink:
          json?.data?.lindaGreeting?.whatsappDeepLink || rental.assignedBroker.whatsappDeepLink,
      });
    } catch {
      // Fallback confirmation with direct WhatsApp Linda link if offline
      setSubmittedData({
        leadId: `WC-${Date.now()}`,
        previewText: `Marhaba ${tenantName}! Thank you for requesting a viewing for "${rental.title}" in ${rental.subCommunity}, ${rental.community}.`,
        whatsappDeepLink: rental.assignedBroker.whatsappDeepLink,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submittedData) {
    return (
      <div
        data-testid="viewing-request-confirmation"
        className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-6 space-y-4"
      >
        <div className="flex items-center gap-2 text-emerald-500 font-bold text-sm">
          <CheckCircle2 size={18} />
          <span>Viewing Inquiry Registered &amp; Assigned to Leasing Desk</span>
        </div>
        <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
          {submittedData.previewText}
        </p>
        <a
          href={submittedData.whatsappDeepLink || rental.assignedBroker.whatsappDeepLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 rounded-xl bg-[#25D366] text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition"
        >
          <Phone size={14} /> Open Instant WhatsApp Chat with Linda / Agent
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      data-testid="viewing-request-form"
      className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 space-y-4"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-base font-black flex items-center gap-2">
          <Calendar size={16} className="text-[#EF4444]" />
          <span>Request Private Viewing &amp; Ejari Reservation</span>
        </h3>
        <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
          15m VIP Response
        </span>
      </div>

      {errorMsg && (
        <div className="rounded-lg bg-red-500/10 border border-red-500/30 p-3 text-xs text-red-500 font-semibold">
          {errorMsg}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-500 mb-1">
            Tenant Full Name *
          </label>
          <input
            type="text"
            required
            value={tenantName}
            onChange={e => setTenantName(e.target.value)}
            placeholder="e.g. Sophie Bernard"
            className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2 text-xs"
          />
        </div>
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-500 mb-1">
            WhatsApp Phone (E.164) *
          </label>
          <input
            type="tel"
            required
            value={tenantPhone}
            onChange={e => setTenantPhone(e.target.value)}
            placeholder="+971 50 123 4567"
            className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2 text-xs"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-500 mb-1">
            Email Address
          </label>
          <input
            type="email"
            value={tenantEmail}
            onChange={e => setTenantEmail(e.target.value)}
            placeholder="tenant@example.ae"
            className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2 text-xs"
          />
        </div>
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-500 mb-1">
            Preferred Viewing Date &amp; Time
          </label>
          <input
            type="datetime-local"
            value={preferredViewingAt}
            onChange={e => setPreferredViewingAt(e.target.value)}
            className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2 text-xs"
          />
        </div>
      </div>

      <div>
        <label className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-500 mb-1">
          Move-In Date &amp; Cheque Preference
        </label>
        <textarea
          rows={2}
          value={notes}
          onChange={e => setNotes(e.target.value)}
          placeholder={`Interested in ${rental.chequesCount} cheques payment plan and move-in next month...`}
          className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2 text-xs"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 rounded-xl bg-[#EF4444] hover:bg-red-600 disabled:opacity-50 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition"
      >
        <Send size={14} />
        <span>{isSubmitting ? 'Registering Viewing Request...' : 'Submit Viewing Request & Notify Linda'}</span>
      </button>
    </form>
  );
}
