"use client";

import { useState, useMemo } from "react";
import { Plus, Minus, Search, HelpCircle, MessageCircle, Phone, ShieldCheck } from "lucide-react";

const officialFaqs = [
  {
    id: 1,
    category: "IRD & Compliance",
    title: "Is GlobalTech OMS certified and approved by the Inland Revenue Department (IRD) Nepal?",
    description:
      "Yes, absolutely. GlobalTech OMS is officially certified by the Inland Revenue Department (IRD) of Nepal for Electronic Billing and CBMS (Central Billing Monitoring System) integration. Our software fully complies with Nepal's Value Added Tax (VAT) rules, generate Annexure 13 sales and purchase registers, VAT returns, and prints IRD-compliant tax invoices with QR codes.",
  },
  {
    id: 2,
    category: "Modules & Features",
    title: "Can OMS operate in offline mode when internet connection is down?",
    description:
      "Yes. GlobalTech OMS supports a hybrid architecture designed specifically for Nepali business conditions. You can continue high-speed billing and counter operations offline. Once internet connectivity is restored, all transactions and vouchers automatically synchronize with the central cloud database without any data collision.",
  },
  {
    id: 3,
    category: "Data & Security",
    title: "Can we migrate our existing financial records from Tally, Swastik, or Excel?",
    description:
      "Yes. Our technical team in Kathmandu provides end-to-end data migration services. We assist you in importing your Chart of Accounts, customer and vendor master lists, opening stock balances, item codes, and historical ledger balances from Tally, Excel sheets, or existing legacy accounting programs safely.",
  },
  {
    id: 4,
    category: "Pricing & Setup",
    title: "How does the 30-Day Free Trial work and do I need a credit card?",
    description:
      "No credit card or payment is required for the free trial. Simply submit your work email or request a demo on our website or WhatsApp. Our onboarding team will configure your trial workspace with sample data and schedule a complimentary 30-minute walkthrough tailored to your industry.",
  },
  {
    id: 5,
    category: "Support & Training",
    title: "Do you provide on-site implementation and team training in Kathmandu and outside the valley?",
    description:
      "Yes. We have dedicated field implementation engineers in Kathmandu who visit your premises for software installation, printer/barcode configuration, and hands-on staff training. For locations outside Kathmandu (Pokhara, Biratnagar, Butwal, Birgunj, Nepalgunj, etc.), we offer both dedicated on-site deployment visits and interactive remote sessions via AnyDesk/TeamViewer.",
  },
  {
    id: 6,
    category: "Modules & Features",
    title: "Can GlobalTech OMS handle multiple branch offices and remote warehouses (godowns)?",
    description:
      "Yes. GlobalTech OMS is built for multi-branch and multi-warehouse operations. Headquarters can view consolidated financial statements, real-time stock levels across all branches, transfer inventory between godowns with transit tracking, and enforce role-based access permissions for branch managers.",
  },
  {
    id: 7,
    category: "Data & Security",
    title: "Where is our business data stored and how are backups handled?",
    description:
      "Your data is hosted on secure, high-availability cloud servers with 256-bit SSL encryption. We perform automated daily off-site backups with point-in-time recovery options. You also retain the ability to export full Excel/PDF database backups locally whenever you wish.",
  },
  {
    id: 8,
    category: "Modules & Features",
    title: "Does OMS provide mobile apps for sales teams and management?",
    description:
      "Yes. We offer dedicated mobile applications including 'uSmart Salesman' for on-field sales representatives to book orders, take payments, and print receipts on portable Bluetooth printers, as well as an executive dashboard app for business owners to monitor real-time sales, cash flow, and daily profit.",
  },
  {
    id: 9,
    category: "Pricing & Setup",
    title: "What are the key differences between OMS Lite and Enterprise ERP?",
    description:
      "OMS Lite is streamlined for small-to-medium retail shops, trading firms, and distributors who require fast billing, VAT accounting, and inventory tracking. Enterprise ERP includes advanced manufacturing BOM (Bill of Materials), multi-tiered approval workflows, comprehensive HR & payroll, hospital management, and custom API integrations.",
  },
  {
    id: 10,
    category: "Support & Training",
    title: "How responsive is your customer support if we encounter an issue during busy hours?",
    description:
      "Our support desk operates Sunday through Friday from 9:30 AM to 6:00 PM NST via landlines (01-5329949, 5329952) and WhatsApp. For mission-critical healthcare, hospital, and retail clients, we provide 24/7 on-call emergency technical assistance.",
  },
];

const categories = [
  "All",
  "IRD & Compliance",
  "Modules & Features",
  "Data & Security",
  "Pricing & Setup",
  "Support & Training",
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = useMemo(() => {
    return officialFaqs.filter((faq) => {
      const matchesCategory =
        activeCategory === "All" || faq.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        faq.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50/70 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200/70">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100/70 px-3.5 py-1 text-xs font-semibold text-emerald-900 mb-3">
            <HelpCircle size={14} /> Clear Answers & Transparency
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Frequently Asked <span className="text-[#01403e]">Questions</span>
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about GlobalTech OMS, IRD e-billing certification, data migration, and on-site support in Nepal.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search questions (e.g., IRD, offline, migration, pricing)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-slate-300 bg-white pl-10 pr-4 py-2.5 text-xs text-slate-800 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#01403e] text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-emerald-300 hover:text-emerald-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all ${
                    isOpen
                      ? "border-emerald-300 bg-white shadow-md shadow-emerald-950/5 ring-1 ring-emerald-200"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between text-left p-5 sm:p-6"
                    aria-expanded={isOpen}
                  >
                    <div className="pr-4">
                      <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-emerald-700 mb-1">
                        {faq.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-semibold text-slate-900 leading-snug">
                        {faq.title}
                      </h3>
                    </div>

                    <div className="shrink-0">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                          isOpen
                            ? "bg-[#01403e] text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </div>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-3">
                      {faq.description}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
              <p className="text-sm font-medium text-slate-600">
                No questions found matching &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-2 text-xs font-semibold text-emerald-700 underline"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>

        {/* Bottom Contact Help Card */}
        <div className="mt-12 rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-teal-50 to-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800">
              <ShieldCheck size={16} /> Dedicated Customer Support
            </div>
            <h4 className="mt-1 text-lg font-bold text-slate-900">
              Still have questions about OMS?
            </h4>
            <p className="text-xs text-slate-600 mt-1 max-w-md">
              Speak directly with an accounting software consultant from our Teku, Kathmandu office.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="https://wa.me/9779802069643?text=Hello%20GlobalTech%20team%2C%20I%20have%20a%20question%20about%20OMS."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-emerald-700 transition"
            >
              <MessageCircle size={14} /> WhatsApp Support
            </a>
            <a
              href="tel:+97715329949"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
            >
              <Phone size={14} className="text-emerald-700" /> 01-5329949
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
