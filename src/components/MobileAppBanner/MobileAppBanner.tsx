'use client';

import { Smartphone, Download, Apple, QrCode, CheckCircle2 } from 'lucide-react';
import { APP_FEATURES } from './mobileApp.data';

export const MobileAppBanner = () => {
  return (
    <section
      aria-label="White Caves Mobile Application Showcase"
      className="w-full max-w-7xl mx-auto px-6 lg:px-12 my-12"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-red-500/20 p-8 lg:p-12 shadow-2xl">
        {/* Ambient Glow */}
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text & Features */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-[#EF4444] text-xs font-bold uppercase tracking-wider">
              <Smartphone className="w-3.5 h-3.5" />
              <span>iOS & Android Companion App</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Dubai Real Estate Intelligence in Your Pocket
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
              Search off-plan developments, schedule VIP viewings, access instant DLD yield metrics, and manage your property acquisitions anywhere in the world.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {APP_FEATURES.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#EF4444] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-xs font-bold text-zinc-200">{feat.title}</h3>
                    <p className="text-[11px] text-zinc-400">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download Buttons & QR Code */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#app-store"
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white text-zinc-900 hover:bg-zinc-100 transition shadow-md font-semibold text-xs"
              >
                <Apple className="w-5 h-5 text-black" />
                <div className="text-left">
                  <div className="text-[9px] uppercase tracking-wider text-zinc-600">Download on the</div>
                  <div className="text-xs font-bold">App Store</div>
                </div>
              </a>

              <a
                href="#google-play"
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700 transition shadow-md font-semibold text-xs"
              >
                <Download className="w-5 h-5 text-white" />
                <div className="text-left">
                  <div className="text-[9px] uppercase tracking-wider text-zinc-400">Get it on</div>
                  <div className="text-xs font-bold">Google Play</div>
                </div>
              </a>

              <div className="flex items-center gap-2 pl-2 border-l border-zinc-800 text-zinc-400 text-xs">
                <QrCode className="w-8 h-8 text-[#EF4444]" />
                <div className="text-[10px] leading-tight text-zinc-400">
                  <span className="font-bold text-zinc-200">Scan to Install</span>
                  <br />iOS & Android Instant Link
                </div>
              </div>
            </div>
          </div>

          {/* Right Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-64 sm:w-72 aspect-[9/18] rounded-[2.5rem] bg-zinc-900 border-4 border-zinc-700 shadow-2xl p-3 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-zinc-800 rounded-full" />
              
              {/* Screen Mockup Content */}
              <div className="mt-6 flex-1 rounded-2xl bg-zinc-950 border border-zinc-800 p-4 space-y-3 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono text-[#EF4444] font-bold uppercase tracking-widest">
                    WHITE CAVES MOBILE
                  </div>
                  <div className="text-xs font-bold text-white mt-1">
                    Palm Jumeirah Signature Villa
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    AED 45,000,000 · 8,400 SqFt
                  </div>
                </div>

                <div className="w-full aspect-[4/3] rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-600 text-xs font-mono">
                  [Live 3D Tour Engine]
                </div>

                <div className="p-2.5 rounded-xl bg-red-950/40 border border-red-500/30 flex items-center justify-between">
                  <div>
                    <div className="text-[9px] text-zinc-400">Estimated Yield</div>
                    <div className="text-xs font-extrabold text-white">7.8% Net ROI</div>
                  </div>
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-[#EF4444] text-white">
                    Verified
                  </span>
                </div>
              </div>

              <div className="text-center text-[10px] text-zinc-500 pt-2 font-mono">
                White Caves Mobile Engine v2.4
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppBanner;
