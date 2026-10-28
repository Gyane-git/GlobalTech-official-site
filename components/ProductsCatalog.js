"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  BriefcaseBusiness,
  Calculator,
  HeartPulse,
  Landmark,
  PackageCheck,
  Search,
  ShoppingCart,
  Smartphone,
  Stethoscope,
  Users,
  WalletCards,
  ShieldCheck,
  MessageCircle,
  Sparkles,
  Check,
} from "lucide-react";

const products = [
  {
    name: "OMS Cloud Accounting",
    category: "Finance & Accounting",
    icon: Calculator,
    image: "/accounting.webp",
    accent: "from-emerald-50 to-white",
    description:
      "Integrated financial accounting with IRD-approved electronic billing, sub-ledgers, VAT Annexure 13, cash/bank books, and profit & loss statements.",
    features: [
      "Inland Revenue Department (IRD) approved invoice format",
      "Real-time Central Billing Monitoring System (CBMS) sync",
      "Automated VAT Annexure 13 purchase & sales registers",
      "Multi-currency, sub-ledgers, and automated bank reconciliations",
    ],
  },
  {
    name: "OMS POS & Retail Billing",
    category: "Sales & POS",
    icon: ShoppingCart,
    image: "/services/websolutions.jpg",
    accent: "from-emerald-50 to-white",
    description:
      "High-speed retail counter billing with barcode scanner support, thermal receipt printing, cash drawer trigger, and offline capability.",
    features: [
      "Sub-second barcode scan & search",
      "Thermal 58mm/80mm receipt printing with IRD QR code",
      "Multi-payment splitting (Cash, Fonepay, Card, Credit)",
      "Daily shift closing & cash register reconciliation",
    ],
  },
  {
    name: "OMS Multi-Warehouse Inventory",
    category: "Operations & HR",
    icon: PackageCheck,
    image: "/services/webhosting101.jpg",
    accent: "from-emerald-50 to-white",
    description:
      "Complete stock control across multiple godowns. Batch tracking, expiry date alerts, reorder levels, and inter-branch transit tracking.",
    features: [
      "Batch tracking with automated expiry alerts",
      "Inter-godown stock transfer with transit notes",
      "Min/Max reorder level notifications",
      "Physical stock audit & adjustment vouchers",
    ],
  },
  {
    name: "OMS Payroll & Attendance",
    category: "Operations & HR",
    icon: WalletCards,
    image: "/software.jpg",
    accent: "from-emerald-50 to-white",
    description:
      "Automate employee salary computations, attendance biometric sync, CIT/SSF/Provident Fund deductions, and monthly payslip generation.",
    features: [
      "Biometric fingerprint & facial recognition machine sync",
      "Nepal Tax slabs, SSF, CIT, and Provident Fund calculation",
      "One-click monthly salary sheet & payslip dispatch",
      "Leave management, overtime tracking, and festival bonus",
    ],
  },
  {
    name: "Hospital Manager (HMIS)",
    category: "Healthcare",
    icon: HeartPulse,
    image: "/amda.jpeg",
    accent: "from-emerald-50 to-white",
    description:
      "Comprehensive hospital & clinical management software covering OPD registration, IPD bed management, doctor OPD schedules, and pharmacy billing.",
    features: [
      "Patient OPD/IPD registration and appointment booking",
      "Doctor consultation notes and digital prescription",
      "Integrated hospital pharmacy billing and stock",
      "Discharge summaries, bed allocation, and insurance claims",
    ],
  },
  {
    name: "OMS Diagnostic LAB",
    category: "Healthcare",
    icon: Stethoscope,
    image: "/web-app.jpeg",
    accent: "from-emerald-50 to-white",
    description:
      "Laboratory management software with customizable test report templates, patient SMS alerts, barcode sample tracking, and pathologist sign-off.",
    features: [
      "Pre-configured biochemistry, hematology & pathology templates",
      "Automated SMS/Email report ready notifications to patients",
      "Specimen barcode tagging and analyzer machine interfacing",
      "Doctor referral commission tracking and billing",
    ],
  },
  {
    name: "OMS Restaurant & F&B",
    category: "Sales & POS",
    icon: Boxes,
    image: "/graphic.jpg",
    accent: "from-emerald-50 to-white",
    description:
      "Table order management, Kitchen Order Ticket (KOT/BOT), recipe costing, steward tablet ordering, and fast checkout for restaurants & cafes.",
    features: [
      "Floor plan & table management with live status",
      "Kitchen Display Screen (KDS) and thermal KOT printers",
      "Recipe & raw ingredient stock deduction per order",
      "Split billing, table merging, and discount vouchers",
    ],
  },
  {
    name: "uSmart Salesman (Mobile App)",
    category: "Mobile Apps",
    icon: Smartphone,
    image: "/global.jpeg",
    accent: "from-emerald-50 to-white",
    description:
      "Android & iOS mobile application for on-field sales teams. Book orders in real time, collect payments, and print receipts via Bluetooth printers.",
    features: [
      "Offline order booking with automatic cloud sync",
      "Live customer ledger balance & credit limit verification",
      "GPS tracking of sales agent beat route and visits",
      "Bluetooth mobile thermal printer support",
    ],
  },
  {
    name: "OMS CRM & Lead Tracker",
    category: "Finance & Accounting",
    icon: Users,
    image: "/aboutimage.png",
    accent: "from-emerald-50 to-white",
    description:
      "Track customer interactions, sales pipeline, quotation follow-ups, and service tickets to convert more leads and build lasting relationships.",
    features: [
      "Visual sales pipeline and deal status tracking",
      "Quotation generation with one-click conversion to invoice",
      "Customer follow-up reminders and activity logs",
      "Support ticket management and resolution SLA tracking",
    ],
  },
  {
    name: "OMS Fixed Assets & Depreciation",
    category: "Finance & Accounting",
    icon: Landmark,
    image: "/software.jpg",
    accent: "from-emerald-50 to-white",
    description:
      "Control, track, and record every capital asset through its complete lifetime, physical location, and income tax/depreciation rules.",
    features: [
      "Income Tax Act compliant Written Down Value (WDV) & SLM depreciation",
      "Asset tagging, barcode tracking, and physical location assignment",
      "Maintenance history, insurance tracking, and disposal accounting",
      "Automated depreciation entries posted directly to General Ledger",
    ],
  },
  {
    name: "E-Commerce & Omnichannel Integration",
    category: "Sales & POS",
    icon: BriefcaseBusiness,
    image: "/services/websolutions.jpg",
    accent: "from-emerald-50 to-white",
    description:
      "Synchronize your physical store inventory with online web shops, marketplaces, and payment gateways with zero manual entry.",
    features: [
      "Real-time stock synchronization between physical shop & online store",
      "Fonepay, Khalti, eSewa, and credit card payment integration",
      "Automated customer invoice generation upon online checkout",
      "Courier API integration for tracking dispatches and delivery",
    ],
  },
];

const categories = [
  "All",
  "Finance & Accounting",
  "Sales & POS",
  "Healthcare",
  "Operations & HR",
  "Mobile Apps",
];

export default function ProductsCatalog() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const value = query.trim().toLowerCase();
      const matchesSearch =
        !value ||
        `${product.name} ${product.category} ${product.description}`
          .toLowerCase()
          .includes(value);
      return matchesCategory && matchesSearch;
    });
  }, [query, selectedCategory]);

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:px-10">
        {/* Controls: Search & Category Tabs */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-medium text-slate-500">
              Showing{" "}
              <span className="font-bold text-slate-900">
                {filteredProducts.length}
              </span>{" "}
              {filteredProducts.length === 1 ? "software module" : "software modules"}
            </p>

            <label className="flex w-full items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-slate-400 shadow-sm sm:max-w-xs transition focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-100">
              <Search size={14} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Filter by name or keyword..."
                aria-label="Filter products"
                className="w-full bg-transparent text-xs text-slate-700 outline-none placeholder:text-slate-400"
              />
            </label>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#01403e] text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-emerald-300 hover:text-emerald-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((prod) => {
              const { name, category, icon: Icon, image, accent, description, features } = prod;
              return (
                <article
                  key={name}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white transition duration-200 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-950/5"
                >
                  <div>
                    {/* Image Header with Category Badge */}
                    <div
                      className={`relative flex h-48 items-center justify-center border-b border-slate-100 bg-gradient-to-br ${accent} p-4`}
                    >
                      <div className="absolute left-3.5 top-3.5 flex items-center gap-1.5 rounded-full border border-slate-200/60 bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-semibold text-slate-700">
                        <Icon size={11} className="text-emerald-700" />
                        <span>{category}</span>
                      </div>

                      <Image
                        src={image}
                        alt={name}
                        width={260}
                        height={140}
                        className="h-32 w-56 object-cover rounded-xl shadow-sm transition duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Content Details */}
                    <div className="p-5">
                      <h2 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                        {name}
                      </h2>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-3">
                        {description}
                      </p>

                      {/* Mini Feature Highlights */}
                      {features && features.length > 0 && (
                        <div className="mt-3.5 space-y-1 border-t border-slate-100 pt-3">
                          {features.slice(0, 2).map((feat, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-600">
                              <Check size={12} className="text-emerald-600 shrink-0" />
                              <span className="truncate">{feat}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="border-t border-slate-100 p-4 pt-3 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(prod)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#01403e] hover:text-emerald-700 transition"
                    >
                      <span>View Specifications</span>
                      <ArrowRight size={13} />
                    </button>

                    <Link
                      href="/contact"
                      className="rounded-lg bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-800 hover:bg-emerald-100 transition"
                    >
                      Book Demo
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
            <p className="font-semibold text-slate-700">
              No products match &ldquo;{query}&rdquo; in category &ldquo;{selectedCategory}&rdquo;.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setSelectedCategory("All");
              }}
              className="mt-3 text-xs font-semibold text-emerald-800 underline"
            >
              Reset all filters
            </button>
          </div>
        )}
      </section>

      {/* Product Inquiry Callout Section */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-[#01403e] px-7 py-10 text-white sm:flex sm:items-center sm:justify-between sm:gap-8 sm:px-10 sm:py-12">
          <div
            aria-hidden="true"
            className="absolute -right-10 -top-16 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl pointer-events-none"
          />
          <div className="relative max-w-xl">
            <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-lime-300">
              <ShieldCheck size={14} /> Custom Module Engineering
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Need a custom module built for your organization?
            </h2>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-emerald-100/85">
              Tell us how your organization operates and our engineering team in Teku, Kathmandu will assemble the right OMS modules or build custom features.
            </p>
          </div>

          <div className="relative mt-6 flex flex-wrap items-center gap-3 sm:mt-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-5 py-3 text-xs font-bold text-[#01403e] shadow-lg hover:bg-lime-300 transition"
            >
              Schedule Consultation <ArrowRight size={14} />
            </Link>
            <a
              href="tel:+97715329949"
              className="inline-flex items-center gap-1.5 rounded-full border border-emerald-700 px-4 py-2.5 text-xs font-medium text-emerald-100 hover:bg-white/10 transition"
            >
              01-5329949
            </a>
          </div>
        </div>
      </section>

      {/* Product Detail Modal Dialog */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedProduct(null);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-dialog-title"
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-150"
          >
            <button
              type="button"
              aria-label="Close product details"
              onClick={() => setSelectedProduct(null)}
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black transition"
            >
              ✕
            </button>

            <div
              className={`flex h-48 items-center justify-center bg-gradient-to-br ${
                selectedProduct.accent || "from-emerald-50 to-white"
              } p-4`}
            >
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                width={320}
                height={180}
                className="h-36 w-64 object-cover rounded-xl shadow-md"
              />
            </div>

            <div className="p-6 sm:p-7">
              <span className="inline-block rounded-full bg-emerald-100 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-900 mb-2">
                {selectedProduct.category}
              </span>
              <h2
                id="product-dialog-title"
                className="text-2xl font-bold text-slate-900"
              >
                {selectedProduct.name}
              </h2>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                {selectedProduct.description}
              </p>

              {selectedProduct.features && selectedProduct.features.length > 0 && (
                <div className="mt-4 border-t border-slate-100 pt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Key Module Capabilities:
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedProduct.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-6 flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100">
                <a
                  href={`https://wa.me/9779802069643?text=${encodeURIComponent(
                    `Hi GlobalTech team, I would like to request a demo and pricing for ${selectedProduct.name}.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#01403e] to-emerald-800 px-4 py-2.5 text-xs font-semibold text-white shadow hover:brightness-105 transition"
                >
                  <MessageCircle size={15} /> Request Demo via WhatsApp
                </a>

                <Link
                  href="/contact"
                  onClick={() => setSelectedProduct(null)}
                  className="rounded-xl border border-slate-300 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
                >
                  Contact Form
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
