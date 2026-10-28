import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Building2, HeartPulse, Layers3, LifeBuoy, Store } from "lucide-react";

export const metadata = {
  title: "Our Clients | Global Tech Nepal",
  description:
    "Meet organisations that work with Global Tech Nepal for business software, accounting systems and digital solutions.",
};

const clients = [
  {
    name: "Chaudhary Group",
    logo: "/cg.jpeg",
    description: "A leading Nepalese business group",
    className: "h-20 w-48",
  },
  {
    name: "Deli",
    logo: "/deli.png",
    description: "Global stationery and office supplies brand",
    className: "h-28 w-28",
  },
  {
    name: "Association of Medical Doctors of Asia",
    logo: "/amda.jpeg",
    description: "Medical association",
    className: "h-28 w-28",
  },
  {
    name: "Garg Dental",
    logo: "/garg.png",
    description: "Dental care and solutions",
    className: "h-24 w-48",
  },
];

const capabilities = [
  {
    icon: Layers3,
    title: "Business software",
    description: "Accounting, operations and management systems built around day-to-day work.",
  },
  {
    icon: Building2,
    title: "Tailored implementation",
    description: "Configuration and onboarding that reflect each organisation’s workflows.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing support",
    description: "Practical guidance to help teams get lasting value from their technology.",
  },
];

const industries = [
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Store, label: "Retail & distribution" },
  { icon: Building2, label: "Enterprise" },
];

export default function ClientsPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative isolate overflow-hidden bg-[#0a4d4d] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div aria-hidden="true" className="absolute -right-24 -top-28 h-96 w-96 rounded-full bg-green-400/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-8 sm:px-8 sm:pb-32 lg:px-10">
          <p className="mb-12 text-[10px] font-medium uppercase tracking-[.2em] text-green-100/70">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span className="mx-2 text-green-200/50">/</span> Clients
          </p>
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.2em] text-lime-300">
              <span className="h-1.5 w-1.5 rounded-sm bg-lime-400" /> Our clients
            </p>
            <h1 className="text-4xl font-semibold leading-[1.12] tracking-[-.035em] sm:text-5xl lg:text-6xl">
              Good technology starts with <span className="text-lime-300">good partnerships.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-green-50/80 sm:text-lg">
              We work alongside organisations to make business software useful, dependable and ready for the way their teams work.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#companies" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold text-[#01403e] shadow-lg transition hover:-translate-y-0.5 hover:bg-green-50">
                Meet our clients <ArrowDown size={14} />
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-xs font-semibold text-white transition hover:bg-white/10">
                Work with us <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="companies" className="scroll-mt-24 bg-green-50/70 px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[.22em] text-green-700">Companies we work with</p>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Trusted by teams across different fields.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-600">A selection of organisations whose logos are part of our client and partner portfolio.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {clients.map((client) => (
              <article key={client.name} className="group flex min-h-[260px] flex-col overflow-hidden rounded-2xl border border-green-100 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl hover:shadow-green-950/5">
                <div className="flex h-36 items-center justify-center rounded-xl border border-slate-100 bg-white p-4 transition group-hover:bg-green-50/40">
                  <Image src={client.logo} alt={`${client.name} logo`} width={240} height={140} className={`${client.className} max-w-full object-contain`} />
                </div>
                <div className="mt-5">
                  <h3 className="text-base font-semibold leading-snug text-slate-900">{client.name}</h3>
                  <p className="mt-1 text-xs text-slate-500">{client.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[.22em] text-green-700">A practical partnership</p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">Technology that supports the whole team.</h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-600">From selecting the right system to supporting people as they use it, we focus on making technology work in the real world.</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {industries.map(({ icon: Icon, label }) => <span key={label} className="inline-flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-3 py-2 text-xs font-medium text-green-900"><Icon size={14} className="text-green-700" />{label}</span>)}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, description }, index) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-200 hover:shadow-lg">
                <div className="mb-7 flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-800"><Icon size={19} /></div>
                <p className="mb-2 font-mono text-[10px] tracking-[.16em] text-green-700">0{index + 1}</p>
                <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#01403e] px-6 py-10 text-white sm:px-10 sm:py-12">
          <div aria-hidden="true" className="absolute -right-16 -top-24 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl" />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[.22em] text-lime-300">Let’s build something useful</p>
              <h2 className="max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">Looking for a technology partner?</h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-green-50/75">Tell us about your team and the challenges you want to solve.</p>
            </div>
            <Link href="/contact" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold text-[#01403e] transition hover:-translate-y-0.5 hover:bg-green-50">Get in touch <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
