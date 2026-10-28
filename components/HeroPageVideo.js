"use client";

import { useState } from "react";
import { Play, CheckCircle2, ShieldCheck, Sparkles, ExternalLink } from "lucide-react";

export default function YouTubeVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "gRF6DdP85IY";

  return (
    <section className="bg-slate-50/80 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto">
        {/* Trust Badges Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-12 text-slate-700">
          <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-[#01403e]">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>Designed by Chartered Accountants</span>
          </div>
          <span className="hidden sm:inline text-slate-300">•</span>
          <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-[#01403e]">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>Built by Nepal&apos;s Senior Tech Engineers</span>
          </div>
          <span className="hidden sm:inline text-slate-300">•</span>
          <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-[#01403e]">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span>Certified by IRD Nepal (E-Billing)</span>
          </div>
        </div>

        {/* Video Container with Elegant Laptop/Browser Frame */}
        <div className="relative rounded-3xl border border-slate-200/90 bg-white p-2.5 sm:p-4 shadow-xl max-w-5xl mx-auto">
          {/* Browser Top Navigation Bar */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 px-2 sm:px-3">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-[11px] font-medium text-slate-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>omslite.globaltech.com.np — Official Product Tour</span>
            </div>

            <a
              href="https://www.youtube.com/@omsaccounting/videos"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-slate-500 hover:text-emerald-700 font-medium hidden sm:flex items-center gap-1"
            >
              <span>Watch on YouTube</span>
              <ExternalLink size={12} />
            </a>
          </div>

          {/* Video Frame */}
          <div
            className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-inner mt-3"
            style={{ paddingBottom: "56.25%" }}
          >
            {!isPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-900 group cursor-pointer" onClick={() => setIsPlaying(true)}>
                <img
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt="GlobalTech OMS Video Tour Preview"
                  className="absolute inset-0 w-full h-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/30" />

                <div className="relative z-10 flex flex-col items-center text-center p-4">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 sm:w-24 sm:h-24 bg-[#01403e] rounded-full flex items-center justify-center text-white transition-all transform group-hover:scale-110 group-hover:bg-emerald-600 shadow-2xl ring-4 ring-white/30"
                    aria-label="Play OMS product demonstration video"
                  >
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1 fill-white" />
                  </button>
                  <p className="mt-4 text-white text-sm sm:text-base font-bold drop-shadow">
                    Click to Watch OMS in Action (Full Walkthrough)
                  </p>
                  <span className="text-xs text-emerald-200 drop-shadow">
                    See billing, inventory, and VAT reporting live
                  </span>
                </div>
              </div>
            ) : (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="GlobalTech OMS Software Demonstration"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>

        {/* Descriptive Footer Callout */}
        <div className="text-center mt-8">
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            See how GlobalTech OMS simplifies day-to-day bookkeeping, reduces checkout queues at retail counters, and keeps your business audit-ready.
          </p>
        </div>
      </div>
    </section>
  );
}
