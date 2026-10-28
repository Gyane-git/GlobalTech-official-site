"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowUpRight,
  Phone,
  MessageSquare,
  ShieldCheck,
  MapPin,
  ExternalLink,
} from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Clients", href: "/clients" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function HeaderBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Top Utility Announcement Bar */}
      <div className="hidden border-b border-emerald-900/10 bg-[#01403e] text-white text-xs font-medium lg:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-lime-300">
              <ShieldCheck size={14} />
              <span>Inland Revenue Department (IRD) Approved Billing Software</span>
            </span>
            <span className="text-emerald-300/40">•</span>
            <span className="inline-flex items-center gap-1 text-emerald-100/90">
              <MapPin size={13} /> Teku, Kathmandu, Nepal
            </span>
          </div>

          <div className="flex items-center gap-5 text-emerald-100">
            <a
              href="tel:+97715329949"
              className="inline-flex items-center gap-1.5 hover:text-white transition"
            >
              <Phone size={13} className="text-lime-300" />
              <span>01-5329949</span>
            </a>
            <span className="text-emerald-300/40">•</span>
            <a
              href="https://wa.me/9779802069643"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-lime-300 transition"
            >
              <MessageSquare size={13} className="text-lime-300" />
              <span>WhatsApp: +977-9802069643</span>
            </a>
            <span className="text-emerald-300/40">•</span>
            <span className="text-emerald-200/90">Sun-Fri: 9:30 AM – 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl transition-all">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          {/* Brand Logo */}
          <Link href="/" aria-label="GlobalTech home" className="shrink-0 flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="GlobalTech Solutions - OMS Lite"
              width={165}
              height={52}
              priority
              className="h-auto w-[142px] sm:w-[162px]"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main navigation" className="hidden items-center gap-1.5 lg:flex">
            {navigation.map(({ label, href }) => {
              const active =
                pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    active
                      ? "bg-emerald-50 text-emerald-800 font-bold"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="http://omslite.globaltech.com.np/Account/Login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 transition hover:border-emerald-600 hover:text-emerald-800 hover:bg-emerald-50/50"
            >
              <span>OMS Login</span>
              <ExternalLink size={12} className="text-slate-400" />
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#01403e] px-4.5 py-2.5 text-xs font-semibold text-white shadow-md shadow-emerald-950/15 transition hover:-translate-y-0.5 hover:bg-[#075351] active:translate-y-0"
            >
              <span>Book Free Demo</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(true)}
            className="rounded-xl border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
          >
            <Menu size={22} />
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div
            className="fixed inset-0 z-50 bg-[#01403e]/50 backdrop-blur-sm lg:hidden"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setIsOpen(false);
            }}
          >
            <aside className="ml-auto flex h-full w-[min(88vw,380px)] flex-col bg-white p-6 shadow-2xl overflow-y-auto">
              <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
                <Image
                  src="/logo.png"
                  alt="GlobalTech"
                  width={140}
                  height={45}
                  className="h-auto w-32"
                />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Status Badge in mobile */}
              <div className="mb-4 rounded-xl bg-emerald-50 p-2.5 text-xs text-emerald-800">
                <span className="font-semibold">🇳🇵 IRD Approved</span> • E-billing & ERP
              </div>

              {/* Mobile Nav Links */}
              <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
                {navigation.map(({ label, href }) => {
                  const active =
                    pathname === href || (href !== "/" && pathname.startsWith(href));
                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                        active
                          ? "bg-emerald-50 text-emerald-800 font-semibold"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {label}
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile CTAs */}
              <div className="mt-6 border-t border-slate-100 pt-5 space-y-2.5">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full rounded-xl bg-[#01403e] px-4 py-3 text-center text-sm font-semibold text-white shadow-md hover:bg-[#075351] transition"
                >
                  Book Free Demo
                </Link>
                <a
                  href="http://omslite.globaltech.com.np/Account/Login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 w-full rounded-xl border border-slate-300 px-4 py-2.5 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <span>OMS Login Portal</span>
                  <ExternalLink size={13} />
                </a>
              </div>

              {/* Mobile Footer Info */}
              <div className="mt-auto pt-6 border-t border-slate-100 text-xs text-slate-500 space-y-1.5">
                <p className="font-semibold text-slate-800">Teku, Kathmandu, Nepal</p>
                <p>
                  Call: <a href="tel:+97715329949" className="text-emerald-700 font-medium">01-5329949</a> |{" "}
                  <a href="tel:+9779851069643" className="text-emerald-700 font-medium">9851069643</a>
                </p>
                <p>
                  WhatsApp: <a href="https://wa.me/9779802069643" className="text-emerald-700 font-medium">+977-9802069643</a>
                </p>
              </div>
            </aside>
          </div>
        )}
      </header>
    </>
  );
}
