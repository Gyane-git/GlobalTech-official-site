"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Layers,
  Code2,
  Palette,
  Globe2,
  Cloud,
  ChevronRight,
} from "lucide-react";

export default function TabBar() {
  const [activeTab, setActiveTab] = useState("accounting");

  const tabs = [
    { id: "accounting", label: "Accounting & ERP", icon: Layers },
    { id: "softwaredevelopment", label: "Software Development", icon: Code2 },
    { id: "websolutions", label: "Web & App Solutions", icon: Globe2 },
    { id: "cloudcomputing", label: "Cloud & Hosting", icon: Cloud },
    { id: "graphicdesign", label: "Design & Branding", icon: Palette },
  ];

  const tabContent = {
    accounting: {
      title: "Organization Management Software (OMS)",
      subtitle: "IRD Certified Financial, Billing & Inventory System",
      description:
        "Designed by professional chartered accountants and built by Nepali tech experts. OMS provides full financial management, automated VAT registers (Annexure 13), multi-godown stock control, and real-time ledger accounting.",
      features: [
        "Inland Revenue Department (IRD) approved electronic tax invoicing",
        "Automated VAT Annexure 13 Sales & Purchase Registers",
        "Sub-ledger, Day Book, Cash/Bank Book & Multi-currency support",
        "Real-time Trial Balance, Profit & Loss, and Balance Sheet",
        "Multi-warehouse inventory tracking with batch & expiry alerts",
        "Point of Sale (POS) with high-speed barcode and thermal printing",
      ],
      image: "/accounting.webp",
      link: "/products",
    },
    softwaredevelopment: {
      title: "Custom Software & Enterprise ERP",
      subtitle: "Tailored IT Solutions Built for Your Exact Workflow",
      description:
        "GlobalTech builds robust, scalable custom applications for enterprises that need specialized workflows. From custom hospital management and school portals to manufacturing production lines and API integrations.",
      features: [
        "Tailored ERP & CRM architecture for custom business workflows",
        "Integration with 3rd-party banking, payment gateways & biometric devices",
        "Database modernization and seamless legacy system migration",
        "Multi-branch data synchronization with offline fallback resilience",
        "Comprehensive API development for mobile and partner connectivity",
        "Dedicated Annual Maintenance Contracts (AMC) and on-site support",
      ],
      image: "/software.jpg",
      link: "/services#software-development",
    },
    websolutions: {
      title: "Web & Mobile App Solutions",
      subtitle: "High-Performance Portals & On-Field Sales Apps",
      description:
        "Connect your customers and field agents with custom digital platforms. We build corporate web portals, e-commerce storefronts, and specialized mobile tools like uSmart Salesman for field order tracking.",
      features: [
        "Corporate responsive websites & customer self-service portals",
        "Field sales mobile apps for Android & iOS (uSmart Salesman)",
        "E-commerce platforms with live inventory synchronization",
        "Secure customer accounts, billing history and digital payments",
        "Optimized speed, search engine presence, and responsive UI",
      ],
      image: "/web-app.jpeg",
      link: "/services#web-solutions",
    },
    cloudcomputing: {
      title: "Cloud Computing & Server Infrastructure",
      subtitle: "High-Availability VPS, Domain & Managed Hosting",
      description:
        "Keep your business software running 24/7 with reliable cloud infrastructure. We provide dedicated cloud servers, managed Linux/Windows VPS, automated off-site backups, and SSL security.",
      features: [
        "High-performance Cloud VPS hosting (Linux & Windows)",
        ".com.np and international domain registration & DNS management",
        "Automated daily off-site database backups with rapid restore",
        "SSL/TLS security certificates & enterprise DDoS protection",
        "Managed business email hosting (Google Workspace & private mail)",
        "99.9% uptime SLA guarantee with Kathmandu monitoring",
      ],
      image: "/cloud.avif",
      link: "/services#cloud-computing",
    },
    graphicdesign: {
      title: "Graphic Design & Corporate Identity",
      subtitle: "Visual Branding, Motion Graphics & UI/UX Design",
      description:
        "Give your brand a distinctive, modern corporate identity. Our creative design team crafts company logos, professional brand guides, packaging, and marketing collaterals.",
      features: [
        "Corporate brand identity, logo design & typography guidelines",
        "Product packaging, label design & retail print materials",
        "Marketing collateral, brochures, annual reports & company profiles",
        "Social media graphics, promotional campaigns & digital banners",
        "UI/UX interface design for enterprise applications and dashboards",
      ],
      image: "/graphic.jpg",
      link: "/services#graphic-design",
    },
  };

  const content = tabContent[activeTab];

  return (
    <section className="bg-gradient-to-b from-white via-slate-50/70 to-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100/80 px-3.5 py-1 text-xs font-semibold text-emerald-900 mb-3">
            <Layers size={13} /> Complete Technology Suite
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Everything Your Business Needs to{" "}
            <span className="text-[#01403e]">Operate and Scale</span>
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Explore our core software modules, enterprise ERP, web development, and cloud hosting solutions tailored for organizations across Nepal.
          </p>
        </div>

        {/* Tab Selection Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-2 mb-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-[#01403e] text-white shadow-md shadow-emerald-950/15"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display Card */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-sm">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Descriptive Content */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                {content.subtitle}
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-1">
                {content.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
                {content.description}
              </p>

              {/* Feature Checklist */}
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {content.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={content.link}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#01403e] px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-md shadow-emerald-950/10 hover:bg-[#075351] transition"
                >
                  <span>Explore Details</span>
                  <ArrowRight size={14} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
                >
                  <span>Request Live Demonstration</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Preview */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-100 bg-slate-50 shadow-md h-72 sm:h-96">
                <Image
                  src={content.image}
                  alt={content.title}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-emerald-300">
                    Nepal Production Ready
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
