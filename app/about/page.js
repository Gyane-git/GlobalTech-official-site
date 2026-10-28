"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Target,
  Award,
  TrendingUp,
  Code,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  Play,
  Quote,
  ShieldCheck,
  Building2,
  Calendar,
  Sparkles,
} from "lucide-react";

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const stats = [
    { number: "10,000+", label: "Active Businesses in Nepal", icon: Users },
    { number: "100+", label: "Enterprise Projects Completed", icon: Target },
    { number: "15+", label: "Years of Industry Leadership", icon: Award },
    { number: "99.8%", label: "Client Retention Rate", icon: TrendingUp },
  ];

  const milestones = [
    {
      year: "2010",
      title: "Company Founded in Kathmandu",
      desc: "Founded by a pool of experienced accounting and IT professionals in Teku, Kathmandu with an ambition to revolutionize local enterprise computing.",
    },
    {
      year: "2014",
      title: "Launch of OMS ERP 1.0",
      desc: "Released the first unified Organization Management Software (OMS) combining general ledger, trading inventory, and counter sales billing.",
    },
    {
      year: "2018",
      title: "Certified by IRD Nepal",
      desc: "Officially certified and approved by the Inland Revenue Department (IRD) for Electronic Billing and CBMS integration.",
    },
    {
      year: "2021",
      title: "OMS Cloud & Mobile Era",
      desc: "Transitioned OMS to modern high-availability cloud architecture with Android/iOS sales force apps and real-time multi-branch sync.",
    },
    {
      year: "Present",
      title: "10,000+ Business Deployments",
      desc: "Proudly serving top conglomerates, hospital chains, retail stores, and manufacturers throughout Nepal with ongoing local support.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a4d4d] text-white pt-28 pb-20 px-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-emerald-400/15 blur-3xl"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-950/70 border border-lime-400/30 text-lime-300 rounded-full text-xs font-semibold mb-6">
              <ShieldCheck size={14} className="text-lime-400" />
              15+ Years Empowering Nepal&apos;s Business Growth
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.12]">
              Building Nepal&apos;s Most Trusted{" "}
              <span className="bg-gradient-to-r from-lime-300 via-emerald-200 to-white bg-clip-text text-transparent">
                Digital Infrastructure
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-xl text-emerald-100/90 leading-relaxed max-w-2xl mx-auto font-normal">
              From small retail counters to nationwide business conglomerates, GlobalTech provides IRD-certified accounting, enterprise ERP, and reliable cloud solutions.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-lime-400 px-6 py-3.5 text-xs sm:text-sm font-bold text-[#01403e] shadow-lg hover:bg-lime-300 transition"
              >
                <span>Partner With Us</span>
                <ArrowRight size={15} />
              </Link>

              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white hover:bg-white/20 transition backdrop-blur-sm"
              >
                <Play size={15} className="fill-white" />
                <span>Watch Product Tour</span>
              </button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="max-w-6xl mx-auto mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-emerald-800/80 bg-emerald-950/60 p-5 text-center backdrop-blur-md shadow-lg"
                >
                  <stat.icon className="w-6 h-6 text-lime-400 mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">
                    {stat.number}
                  </div>
                  <div className="text-xs text-emerald-200/80 mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <div className="inline-block px-3.5 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                Our Story & Origins
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                From a pool of ambitious professionals to a nationwide technology group.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-600 mt-5 leading-relaxed">
                <p>
                  Globaltech Solution Pvt. Ltd. was founded by a dedicated team of finance experts, chartered accountants, and senior software architects with more than 15 years of industry experience. Headquartered in Teku, Kathmandu, our founding objective was to deliver a single integrated solution for Accounting, Operations, System Integration, Networking, and Cloud Hosting.
                </p>
                <p>
                  Over the years, we developed the Organization Management Software (OMS) suite, which has evolved into Nepal&apos;s premier IRD-certified business system. Today, GlobalTech is a comprehensive technology group powering enterprises across manufacturing, healthcare, distribution, retail, and education.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/clients"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#01403e] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#075351] transition"
                >
                  <span>Meet Our Clients</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
                >
                  <span>Explore OMS Modules</span>
                </Link>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-4 border-emerald-100 shadow-xl bg-slate-100">
                <Image
                  src="/aboutimage.png"
                  alt="GlobalTech Solutions Office & Team"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-sm border border-slate-100">
                  <div className="text-2xl font-bold text-emerald-800">15+ Years</div>
                  <div className="text-xs text-slate-600">
                    Continuous technological support & innovation for Nepali organizations.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Milestones Timeline */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100/70 px-3.5 py-1 text-xs font-semibold text-emerald-900 mb-2">
              <Calendar size={13} /> Our Growth Path
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              The Journey of GlobalTech
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Key milestones that shaped our evolution into a leading ERP provider in Nepal.
            </p>
          </div>

          <div className="relative border-l-2 border-emerald-200 ml-4 sm:ml-32 space-y-8">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8 group">
                {/* Year Marker */}
                <div className="absolute -left-3.5 top-1.5 h-7 w-7 rounded-full bg-[#01403e] border-4 border-white text-white flex items-center justify-center text-[10px] font-bold shadow">
                  {idx + 1}
                </div>
                <div className="hidden sm:block absolute -left-28 top-1.5 text-right w-20 font-bold text-emerald-800 text-sm">
                  {m.year}
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-emerald-300">
                  <span className="sm:hidden inline-block text-xs font-bold text-emerald-800 mb-1">
                    {m.year}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">{m.title}</h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Managing Director Message / Leadership */}
      <section className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-white p-8 sm:p-12 shadow-sm">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 flex flex-col items-center text-center">
                <div className="relative h-48 w-48 rounded-full overflow-hidden border-4 border-white shadow-xl bg-slate-200">
                  <Image
                    src="/man.png"
                    alt="Sanjay Rauniyar - Managing Director"
                    width={200}
                    height={200}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  Sanjay Rauniyar
                </h3>
                <p className="text-xs font-semibold text-emerald-700">
                  Managing Director, GlobalTech Solution
                </p>
                <span className="mt-1 inline-block rounded-full bg-emerald-100 px-3 py-0.5 text-[10px] font-medium text-emerald-800">
                  Teku, Kathmandu
                </span>
              </div>

              <div className="md:col-span-8 space-y-4">
                <Quote size={32} className="text-emerald-300" />
                <h3 className="text-2xl font-bold text-slate-900">
                  A Message from Leadership
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                  &ldquo;At GlobalTech, our core conviction is that Nepalese enterprises deserve software that is just as powerful, dependable, and secure as international solutions, while remaining fully tuned to local tax rules, VAT formats, and day-to-day business operations. Every module of OMS has been sculpted by listening directly to thousands of accountants, storekeepers, and entrepreneurs across Nepal. We are proud to be your local technology partners.&rdquo;
                </p>
                <div className="pt-2 flex items-center gap-4 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-emerald-600" /> 100% Nepali Engineering
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-emerald-600" /> IRD Compliant
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#01403e] to-[#0a4d4d] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-lime-300 mb-2">
              Our Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">What Guides Our Work</h2>
            <p className="text-sm text-emerald-100/90 mt-2 max-w-xl mx-auto">
              The fundamental standards that drive our engineering, client support, and product roadmaps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Integrity & Compliance",
                desc: "We build tax-compliant, audit-ready systems that give business owners total financial peace of mind.",
              },
              {
                icon: Code,
                title: "Engineering Excellence",
                desc: "Clean database architecture, offline resilience, and high-speed execution even on large datasets.",
              },
              {
                icon: Zap,
                title: "Dedicated Local Support",
                desc: "No outsourced phone trees. Real engineers in Teku ready to visit your counter or connect via remote screen.",
              },
              {
                icon: Globe,
                title: "Continuous Innovation",
                desc: "From desktop to cloud and mobile apps, we keep our clients at the forefront of digital efficiency.",
              },
            ].map((v, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-emerald-700/60 bg-emerald-950/40 p-6 backdrop-blur-sm"
              >
                <v.icon className="w-8 h-8 text-lime-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                <p className="text-xs text-emerald-100/80 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Ready to Partner with GlobalTech?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Schedule a visit to our Teku office or have our technical sales team demonstrate OMS at your facility.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#01403e] px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-md hover:bg-[#075351] transition"
            >
              <span>Get in Touch with Our Team</span>
              <ArrowRight size={15} />
            </Link>
            <a
              href="tel:+97715329949"
              className="rounded-xl border border-slate-300 px-6 py-3.5 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
            >
              Call 01-5329949
            </a>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white hover:bg-red-600 transition"
              aria-label="Close video"
            >
              ✕
            </button>
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/gRF6DdP85IY?autoplay=1&rel=0"
                title="GlobalTech OMS Video Tour"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
