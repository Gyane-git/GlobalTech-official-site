import {
  Cloud,
  Code2,
  GraduationCap,
  Globe2,
  Palette,
  Smartphone,
  Network,
  Headset,
  Scale,
} from "lucide-react";

export const services = [
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
