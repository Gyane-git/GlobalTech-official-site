"use client";

import { useState } from "react";
import { MessageCircle, Phone, X, ChevronUp, Clock, ShieldCheck } from "lucide-react";

export default function FloatingSupport() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside aria-label="Quick contact & WhatsApp support" className="fixed bottom-6 right-6 z-40 flex flex-col items-end print:hidden">
      {/* Expanded Popup Menu */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Contact options"
          className="mb-3 w-80 rounded-2xl border border-emerald-100 bg-white p-4 shadow-2xl transition-all animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  GlobalTech Support
                </h4>
                <p className="text-[10px] text-slate-500">Teku, Kathmandu Office</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              aria-label="Close contact popup"
            >
              <X size={16} />
            </button>
          </div>

          <p className="mt-3 text-xs text-slate-600 leading-relaxed">
            Need an instant demo, pricing for OMS, or urgent software support?
          </p>

          <div className="mt-3 space-y-2">
            {/* WhatsApp Sales & Demo */}
            <a
              href="https://wa.me/9779802069643?text=Hi%20GlobalTech%20Team%2C%20I%20am%20interested%20in%20OMS%20Software.%20Please%20share%20demo%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl bg-emerald-600 px-3.5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-emerald-700 transition"
            >
              <span className="flex items-center gap-2">
                <MessageCircle size={16} /> WhatsApp Demo & Sales
              </span>
              <span className="rounded bg-emerald-800/40 px-1.5 py-0.5 text-[10px]">Instant</span>
            </a>

            {/* Direct Office Phone Call */}
            <a
              href="tel:+97715329949"
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition"
            >
              <span className="flex items-center gap-2">
                <Phone size={15} className="text-emerald-700" /> Call 01-5329949
              </span>
              <span className="text-[10px] font-normal text-slate-500">Sun-Fri</span>
            </a>

            {/* Mobile Helpline */}
            <a
              href="tel:+9779851069643"
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition"
            >
              <span className="flex items-center gap-2">
                <Phone size={15} className="text-emerald-700" /> Mobile: 9851069643
              </span>
              <span className="text-[10px] font-normal text-slate-500">Marketing</span>
            </a>
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2.5 text-[10px] text-slate-500">
            <span className="inline-flex items-center gap-1">
              <Clock size={11} /> 9:30 AM - 6:00 PM NST
            </span>
            <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
              <ShieldCheck size={11} /> IRD Approved
            </span>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-[#01403e] to-emerald-700 px-4 py-3 text-white shadow-xl shadow-emerald-950/25 transition-all hover:scale-105 hover:from-[#06504e] hover:to-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
        aria-label="Quick contact & WhatsApp support"
      >
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-lime-400"></span>
        </span>
        <MessageCircle size={20} className="transition-transform group-hover:rotate-12" />
        <span className="hidden text-xs font-bold uppercase tracking-wider sm:inline">
          {isOpen ? "Close" : "Need Help / Demo?"}
        </span>
      </button>
    </aside>
  );
}
