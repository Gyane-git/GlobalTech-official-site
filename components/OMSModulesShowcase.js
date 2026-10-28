"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  ShoppingCart,
  Package,
  Users2,
  HeartPulse,
  UtensilsCrossed,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Zap,
  Globe2,
  Clock,
  Layers,
} from "lucide-react";

const modules = [
  {
    id: "accounting",
    name: "Financial Accounting & Ledger",
    icon: Calculator,
    tag: "Core ERP",
    desc: "Complete double-entry accounting engineered to Nepalese accounting standards and IRD requirements.",
    highlights: [
      "Chart of Accounts with unlimited sub-ledger hierarchy",
      "Day Book, Cash & Bank Book, Journal vouchers",
      "Real-time Trial Balance, Profit & Loss, and Balance Sheet",
      "Automated bank statement reconciliation",
    ],
  },
  {
    id: "ebilling",
    name: "IRD Certified E-Billing",
    icon: ShieldCheck,
    tag: "Tax Compliance",
    desc: "Official Inland Revenue Department (IRD) certified electronic billing for zero tax audit anxiety.",
    highlights: [
      "Central Billing Monitoring System (CBMS) real-time data sync",
      "Automated VAT Sales & Purchase Registers (Annexure 13)",
      "Tax invoices with IRD verification QR codes",
      "Credit note, debit note, and partial return vouchers",
    ],
  },
  {
    id: "inventory",
    name: "Multi-Godown Inventory",
    icon: Package,
    tag: "Stock Control",
    desc: "Gain 360-degree real-time visibility across central warehouses, remote godowns, and retail counters.",
    highlights: [
      "Batch-wise inventory tracking with manufacturing & expiry alerts",
      "Inter-godown transfer vouchers with in-transit tracking",
      "Automated low-stock and reorder level notifications",
      "Physical stock take and variance adjustment vouchers",
    ],
  },
  {
    id: "pos",
    name: "High-Speed POS & Billing",
    icon: ShoppingCart,
    tag: "Retail & Wholesales",
    desc: "Designed for high-traffic retail counters, supermarkets, department stores, and wholesale counters.",
    highlights: [
      "Barcode scanning with instant sub-second item lookups",
      "Thermal printer (58mm/80mm) & digital cash drawer support",
      "Split payments across Cash, Fonepay, Card, and Customer Credit",
      "Offline counter billing with automatic background cloud sync",
    ],
  },
  {
    id: "payroll",
    name: "HR, Biometrics & Payroll",
    icon: Users2,
    tag: "Human Capital",
    desc: "Automate workforce management from biometric punch-in to monthly salary slip distribution.",
    highlights: [
      "Seamless integration with biometric fingerprint & face scanners",
      "Automated calculations for SSF, CIT, Provident Fund & Nepal Tax slabs",
      "Leave approval workflows, overtime logs & festival bonuses",
      "One-click encrypted monthly salary payslip generation",
    ],
  },
  {
    id: "healthcare",
    name: "Hospital & Clinic (HMIS)",
    icon: HeartPulse,
    tag: "Healthcare",
    desc: "End-to-end clinical and hospital management for polyclinics, diagnostic labs, and multi-bed hospitals.",
    highlights: [
      "Patient OPD/IPD registration, bed tracking & appointment queues",
      "Doctor digital prescriptions and medical history archive",
      "Integrated pharmacy billing, stock deduction, and expiry alert",
      "Diagnostic lab report generation with patient SMS alerts",
    ],
  },
  {
    id: "fnb",
    name: "Restaurant & F&B Billing",
    icon: UtensilsCrossed,
    tag: "Hospitality",
    desc: "Streamline floor operations, table turns, steward orders, and kitchen delivery.",
    highlights: [
      "Visual table layout with occupied, vacant, and billing status",
      "Kitchen Order Ticket (KOT/BOT) printing & Kitchen Display (KDS)",
      "Recipe costing & automatic raw ingredient consumption",
      "Split checks, combo menus, and loyalty reward points",
    ],
  },
  {
    id: "mobile",
    name: "uSmart Salesman Mobile App",
    icon: Smartphone,
    tag: "Field Mobility",
    desc: "Equip your on-field sales representatives with real-time order booking and collection tools.",
    highlights: [
      "On-field order taking with live customer ledger balances",
      "Bluetooth portable thermal invoice and payment receipt printing",
      "GPS tracking of sales representative daily beat visits",
      "Works 100% offline in rural areas with auto cloud upload",
    ],
  },
];

const reasonsToChoose = [
  {
    title: "100% Nepal Tax & IRD Compliant",
    desc: "Full adherence to Nepal's Value Added Tax (VAT) act, CBMS live syncing, Annexure 13 reporting, and dual Bikram Sambat (BS) / English (AD) calendar support.",
  },
  {
    title: "Offline Resilience + Cloud Sync",
    desc: "Internet outages will never stall your billing counter. Keep scanning items offline; data automatically reconciles once connectivity is back.",
  },
  {
    title: "Local Kathmandu Engineering & AMC",
    desc: "Backed by direct in-house software engineers and technicians in Teku, Kathmandu. Hands-on on-site training and quick phone hotline.",
  },
  {
    title: "Bank-Grade Encryption & Backups",
    desc: "Your accounting data is secured with enterprise 256-bit encryption, automated daily off-site cloud backups, and strict user permission controls.",
  },
];

export default function OMSModulesShowcase() {
  const [activeModule, setActiveModule] = useState(modules[0].id);
  const current = modules.find((m) => m.id === activeModule) || modules[0];

  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100/70 px-3.5 py-1 text-xs font-semibold text-emerald-900 mb-3">
            <Layers size={13} /> Modular ERP Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            One Unified Platform for{" "}
            <span className="text-[#01403e]">Every Department</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Select only the modules you need today and scale effortlessly as your business grows across Nepal.
          </p>
        </div>

        {/* Module Switcher Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-8">
          {modules.map((mod) => {
            const Icon = mod.icon;
            const isSelected = activeModule === mod.id;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveModule(mod.id)}
                className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all ${
                  isSelected
                    ? "bg-[#01403e] text-white border-[#01403e] shadow-md shadow-emerald-950/15"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
                }`}
              >
                <Icon size={20} className={isSelected ? "text-lime-300" : "text-emerald-700"} />
                <span className="mt-2 text-[11px] font-semibold leading-tight line-clamp-2">
                  {mod.name.split("&")[0].trim()}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Module Detail View */}
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-emerald-50/40 via-white to-slate-50 p-6 sm:p-10 shadow-sm">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="inline-block rounded-full bg-emerald-100 px-3 py-0.5 text-xs font-bold text-emerald-900 mb-2">
                {current.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {current.name}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                {current.desc}
              </p>

              {/* Highlights List */}
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                      {h}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#01403e] px-5 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-[#075351] transition"
                >
                  <span>Request Live Demo for this Module</span>
                  <ArrowRight size={13} />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
                >
                  <span>View All Specifications</span>
                </Link>
              </div>
            </div>

            {/* Right Side Visual Badge */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3">
                  <ShieldCheck size={16} className="text-emerald-600" />
                  Nepal Market Standard
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  Ready to deploy in your business
                </h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Available in Cloud SaaS or Local On-Premise formats. Includes complete data migration from legacy accounting systems and on-site staff training.
                </p>
                <div className="mt-5 border-t border-slate-100 pt-4 flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span>Support: Teku, Kathmandu</span>
                  <span className="text-emerald-700">01-5329949</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose GlobalTech OMS - 4 Column Feature Grid */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              The GlobalTech Advantage
            </span>
            <h3 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">
              Why 10,000+ Businesses Choose OMS Over Others
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasonsToChoose.map((r, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 transition hover:bg-white hover:border-emerald-300 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 font-bold text-sm mb-4">
                  0{i + 1}
                </div>
                <h4 className="text-base font-bold text-slate-900">{r.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
