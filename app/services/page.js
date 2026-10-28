import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Cloud,
  Code2,
  GraduationCap,
  Globe2,
  Palette,
  Smartphone,
  Network,
  Headset,
  Scale,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import MarketingPageHero from "../../components/MarketingPageHero";

export const metadata = {
  title: "Services | GlobalTech Solutions | IT, ERP & Cloud Nepal",
  description:
    "Tailored software development, cloud infrastructure, accounting consultancy, mobile apps, web solutions, and 24/7 IT support in Kathmandu, Nepal.",
  keywords: [
    "software development Nepal",
    "ERP implementation Kathmandu",
    "cloud computing Nepal",
    "accounting training Nepal",
    "web development Nepal",
    "GlobalTech services",
  ],
};

const services = [
  {
    id: "software-development",
    title: "Custom Software & ERP Development",
    icon: Code2,
    image: "/software.jpg",
    description:
      "GlobalTech builds tailored enterprise software that automates repetitive workflows and gives leadership complete operational visibility. We take a flexible, long-term architectural approach to software designed around the realities of your business in Nepal.",
    features: [
      "Custom Enterprise ERP systems designed for Nepali compliance",
      "Banking, e-wallet (Fonepay/Khalti/eSewa) & payment gateway integrations",
      "Central Billing Monitoring System (CBMS) & IRD integration",
      "Modernization of legacy databases and paper-based workflows",
    ],
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing & Server Infrastructure",
    icon: Cloud,
    image: "/cloud.avif",
    description:
      "Migrate your business records and enterprise software to high-availability cloud infrastructure. We manage Linux and Windows VPS instances, setup continuous off-site database backups, and ensure maximum uptime for multi-branch organizations.",
    features: [
      "High-availability Linux & Windows Cloud VPS hosting",
      "Automated daily encrypted off-site database backups",
      "Enterprise SSL certificates and DDoS traffic mitigation",
      "Local Nepali domain (.com.np) registration & managed DNS",
    ],
  },
  {
    id: "account-consultant",
    title: "Accounting & Tax Compliance Consultancy",
    icon: Scale,
    image: "/accounting.webp",
    description:
      "Make clear financial decisions with guidance from certified accounting consultants. We help you establish consistent bookkeeping standards, configure Chart of Accounts, analyze profitability, and ensure full compliance with Nepal's VAT, TDS, and IRD regulations.",
    features: [
      "Setup and optimization of Chart of Accounts & sub-ledgers",
      "Periodic VAT returns audit and Annexure 13 sales/purchase review",
      "Financial forecasting, cash flow analysis and budgeting",
      "Standard Operating Procedures (SOP) for accounting teams",
    ],
  },
  {
    id: "account-training",
    title: "Accountant & Team Software Training",
    icon: GraduationCap,
    image: "/web-app.jpeg",
    description:
      "Build organizational capability with practical hands-on training for your accountants, billing clerks, storekeepers, and managers. We train your staff on real data to ensure confident day-to-day operation from day one.",
    features: [
      "Role-specific training for billing operators, cashiers & storekeepers",
      "Advanced reporting and ledger reconciliation for head accountants",
      "On-site classroom training in Kathmandu & remote screen-share sessions",
      "Comprehensive training manuals and video walkthrough guides",
    ],
  },
  {
    id: "web-solutions",
    title: "Web Portals & E-Commerce Solutions",
    icon: Globe2,
    image: "/services/websolutions.jpg",
    description:
      "Establish a modern digital footprint with fast, responsive web portals and e-commerce stores integrated directly with your OMS inventory and billing. Give your customers convenient self-service ordering and payment options.",
    features: [
      "Corporate web portals with modern responsive UI/UX",
      "E-commerce storefronts synchronized with warehouse stock",
      "Customer portal for viewing invoices, statements & dispatch status",
      "Search Engine Optimization (SEO) and fast performance",
    ],
  },
  {
    id: "mobile-apps",
    title: "Mobile Application Development",
    icon: Smartphone,
    image: "/aboutimage.png",
    description:
      "Extend your enterprise systems into the field with Android and iOS applications. We develop dedicated field sales tools, executive monitoring dashboards, and customer engagement apps designed to work even with spotty mobile internet.",
    features: [
      "Native & cross-platform Android & iOS applications",
      "uSmart Salesman field order booking & Bluetooth billing",
      "Executive dashboard app for real-time sales & cash overview",
      "Offline transactional caching with automated background sync",
    ],
  },
  {
    id: "graphic-design",
    title: "Graphic Design & Corporate Branding",
    icon: Palette,
    image: "/graphic.jpg",
    description:
      "Present your company with a polished visual identity. Our creative design team crafts company logos, professional brand guides, packaging, and marketing collaterals for both print and digital campaigns.",
    features: [
      "Corporate brand identity, logo design & typography guidelines",
      "Product packaging, label design & retail print materials",
      "Marketing collateral, brochures, annual reports & company profiles",
      "Social media graphics, promotional campaigns & digital banners",
    ],
  },
  {
    id: "networking",
    title: "Networking & IT Infrastructure",
    icon: Network,
    image: "/services/webhosting101.jpg",
    description:
      "Connect your headquarters, retail counters, and remote godowns with a secure network foundation. We install local area networks (LAN), configure firewalls, manage server racks, and set up site-to-site VPNs.",
    features: [
      "Structured cabling, router configuration and firewall setup",
      "Site-to-site VPN tunnels connecting remote branches to central servers",
      "Network printer, barcode scanner & biometric machine integration",
      "Data security audits and access permission enforcement",
    ],
  },
  {
    id: "it-support",
    title: "24/7 IT Support & AMC Contracts",
    icon: Headset,
    image: "/services/graphicdesign-1.jpg",
    description:
      "Keep your critical business systems operational with responsive technical support from our Teku, Kathmandu team. With Annual Maintenance Contracts (AMC), we offer prioritized remote troubleshooting and prompt on-site technician visits.",
    features: [
      "Dedicated phone and remote AnyDesk support desk",
      "Prompt on-site emergency technician visits in Kathmandu Valley",
      "Scheduled preventative maintenance and database health checks",
      "24/7 emergency support tier for hospitals, pharmacies & retail chains",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Workflow Audit",
    desc: "We analyze your existing billing, accounting, inventory, and departmental bottlenecks in detail.",
  },
  {
    step: "02",
    title: "Solution Design & Setup",
    desc: "We configure modules, Chart of Accounts, and tax parameters tailored to your exact industry.",
  },
  {
    step: "03",
    title: "Data Migration",
    desc: "We securely transfer opening balances, customer records, and item masters from Tally, Excel, or legacy systems.",
  },
  {
    step: "04",
    title: "Staff Training & Go-Live",
    desc: "Our engineers provide hands-on training to accountants and billing clerks until your team is fully independent.",
  },
  {
    step: "05",
    title: "Continuous AMC Support",
    desc: "Regular updates, tax law adjustments, daily cloud backups, and dedicated telephone/on-site helpdesk.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-slate-50 text-slate-900 min-h-screen">
      <MarketingPageHero
        eyebrow="Services & Solutions"
        breadcrumb="Services"
        title="Everything your organization needs to run on modern technology."
        description="Custom software, ERP implementation, accounting consultancy, cloud servers, and 24/7 technical support from our experienced team in Teku, Kathmandu."
      />

      {/* Sticky Secondary Nav */}
      <nav
        aria-label="Service categories"
        className="sticky top-[74px] z-20 border-b border-slate-200 bg-white/95 backdrop-blur shadow-sm"
      >
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 [scrollbar-width:none] sm:px-8 lg:px-10">
          {services.map(({ id, title, icon: Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50/70 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-900"
            >
              <Icon size={13} className="text-emerald-700" />
              <span>{title}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Main Services List */}
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16 lg:px-10">
        <div className="space-y-16 sm:space-y-24">
          {services.map(
            ({ id, title, icon: Icon, image, description, features }, index) => {
              const reversed = index % 2 === 1;
              return (
                <article
                  id={id}
                  key={id}
                  className="scroll-mt-36 grid items-center gap-8 lg:grid-cols-2 lg:gap-14 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-sm"
                >
                  <div
                    className={`${
                      reversed ? "lg:order-2" : ""
                    } relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 shadow-md h-72 sm:h-96`}
                  >
                    <Image
                      src={image}
                      alt={`${title} service`}
                      width={720}
                      height={480}
                      priority={index < 2}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-emerald-800 shadow-md">
                      <Icon size={22} />
                    </div>
                  </div>

                  <div className={`${reversed ? "lg:order-1" : ""}`}>
                    <p className="mb-2 font-mono text-[11px] font-bold tracking-widest text-emerald-700">
                      SERVICE {String(index + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                      {title}
                    </h2>
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {description}
                    </p>

                    <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-4">
                      {features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                          <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-3">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 rounded-xl bg-[#01403e] px-5 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-[#075351] transition"
                      >
                        <span>Request Service Proposal</span>
                        <ArrowRight size={13} />
                      </Link>
                      <Link
                        href="/products"
                        className="inline-flex items-center gap-1 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
                      >
                        <span>Related Products</span>
                        <ChevronRight size={13} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            }
          )}
        </div>
      </div>

      {/* Implementation Process Roadmap */}
      <section className="bg-white py-16 sm:py-20 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100/70 px-3.5 py-1 text-xs font-semibold text-emerald-900 mb-2">
              <Sparkles size={13} /> Proven Methodology
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Our 5-Step Implementation Journey
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              How we ensure a smooth, zero-downtime transition from your legacy tools to GlobalTech OMS.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((p) => (
              <div
                key={p.step}
                className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5 transition hover:bg-white hover:border-emerald-300 hover:shadow-md"
              >
                <div className="text-2xl font-black text-emerald-700">{p.step}</div>
                <h3 className="mt-2 text-sm font-bold text-slate-900">{p.title}</h3>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Card */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 rounded-3xl bg-[#01403e] p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-12 shadow-xl">
          <div className="max-w-xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-lime-300">
              Let&apos;s Build Together
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Need a software solution tailored for your team?
            </h2>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-emerald-100/85">
              Talk to our systems architects in Teku, Kathmandu. We provide free initial audits and architectural recommendations.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-lime-400 px-6 py-3.5 text-xs font-bold text-[#01403e] shadow-lg hover:bg-lime-300 transition"
          >
            <span>Start a Conversation</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}
