"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Youtube,
  Music2,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Clock,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  const footerLinks = {
    product: [
      { name: "OMS Cloud Accounting", href: "/products" },
      { name: "POS & Retail Billing", href: "/products" },
      { name: "Inventory & Multi-Warehouse", href: "/products" },
      { name: "Hospital & Clinic Manager", href: "/products" },
      { name: "Payroll & HR Management", href: "/products" },
      { name: "uSmart Salesman Mobile App", href: "/products" },
    ],
    services: [
      { name: "Custom Software Development", href: "/services" },
      { name: "Enterprise ERP Implementation", href: "/services" },
      { name: "Cloud & Dedicated VPS Hosting", href: "/services" },
      { name: "Web & Mobile App Solutions", href: "/services" },
      { name: "Accounting Consultation & Training", href: "/services" },
      { name: "IT Networking & Infrastructure", href: "/services" },
    ],
    company: [
      { name: "About GlobalTech", href: "/about" },
      { name: "Our Clients & Partners", href: "/clients" },
      { name: "Careers (We're Hiring)", href: "/careers" },
      { name: "Contact & Head Office", href: "/contact" },
      { name: "OMS Portal Login", href: "http://omslite.globaltech.com.np/Account/Login" },
    ],
  };

  return (
    <footer className="bg-[#01403e] text-slate-300 border-t border-emerald-950">
      {/* Upper Main Footer Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Contact Info Column */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" aria-label="GlobalTech home" className="inline-block">
              <div className="bg-white/10 p-2.5 rounded-2xl inline-block backdrop-blur-md">
                <Image
                  src="/logo.png"
                  alt="GlobalTech Solutions"
                  width={160}
                  height={50}
                  className="h-auto w-36 brightness-0 invert"
                />
              </div>
            </Link>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Nepal&apos;s trusted software and technology partner for over 15 years. Providing IRD-certified accounting, enterprise ERP, web development, and cloud hosting solutions.
            </p>

            {/* Official Certification Badge */}
            <div className="rounded-2xl border border-emerald-700/60 bg-emerald-900/40 p-3.5 text-xs text-emerald-200">
              <div className="flex items-center gap-2 font-semibold text-lime-300">
                <ShieldCheck size={16} /> Certified by IRD Nepal
              </div>
              <p className="mt-1 text-[11px] text-emerald-200/80 leading-normal">
                Approved for electronic billing, CBMS data sync, and VAT Annexure 13 reporting.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-2.5 text-xs text-slate-300 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                <span>Globaltech Solution Pvt. Ltd., Teku, Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-lime-400 shrink-0" />
                <a href="tel:+97715329949" className="hover:text-white transition">
                  01-5329949 | 01-5329952 | 01-5329982
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-lime-400 shrink-0" />
                <a href="mailto:info@globaltechnepal.com" className="hover:text-white transition">
                  info@globaltechnepal.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-lime-400 shrink-0" />
                <span>Sun – Fri: 9:30 AM – 6:00 PM NST</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-emerald-800/60">
              Products
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-lime-300 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-emerald-500 text-[10px]">›</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-emerald-800/60">
              IT Services
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-lime-300 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-emerald-500 text-[10px]">›</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-emerald-800/60">
              Company
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-lime-300 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-emerald-500 text-[10px]">›</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-14 pt-8 border-t border-emerald-900/80 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-md">
            <h4 className="text-white font-bold text-base">
              Subscribe to GlobalTech Business Insights
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              Receive notifications about Nepal tax updates, IRD e-billing changes, and ERP best practices.
            </p>
          </div>

          <div className="w-full md:max-w-md">
            {subscribed ? (
              <div className="flex items-center gap-2 rounded-xl bg-emerald-800/50 p-3 text-xs font-semibold text-lime-300 border border-emerald-700">
                <CheckCircle2 size={16} /> Thank you for subscribing! We&apos;ll keep you posted.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your business email"
                  className="flex-1 px-4 py-2.5 bg-emerald-950/60 border border-emerald-800 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-400"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-lime-400 text-[#01403e] text-xs font-bold rounded-xl hover:bg-lime-300 transition-colors shadow-sm"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Socials */}
      <div className="border-t border-emerald-950 bg-[#00302e]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center md:text-left">
            <p>© {currentYear} Globaltech Solution Pvt. Ltd. All rights reserved.</p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Registered in Nepal • IRD Certified Accounting & ERP Solutions
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/globaltechnepal/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-emerald-900/60 border border-emerald-800/50 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-700 transition"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://www.instagram.com/globaltech.nepal/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-emerald-900/60 border border-emerald-800/50 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-700 transition"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://www.tiktok.com/@globaltechoms?_r=1&_t=ZS-9AqU8hrDjr3"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="w-9 h-9 rounded-full bg-emerald-900/60 border border-emerald-800/50 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-700 transition"
            >
              <Music2 size={16} />
            </a>
            <a
              href="https://www.youtube.com/@omsaccounting/videos"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 rounded-full bg-emerald-900/60 border border-emerald-800/50 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-700 transition"
            >
              <Youtube size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
