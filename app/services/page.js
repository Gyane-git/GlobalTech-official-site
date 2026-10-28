import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, ChevronRight, Cloud, Code2, GraduationCap, Globe2, Palette, Smartphone, Network, Headset, Scale } from 'lucide-react';
import MarketingPageHero from '../../components/MarketingPageHero';

export const metadata = {
  title: 'Services | GlobalTech Solutions',
  description: 'Software development, cloud, accounting consultancy, web, mobile, design, networking and IT support services from GlobalTech Nepal.',
};

const services = [
  { id: 'software-development', title: 'Software Development', icon: Code2, image: '/software.jpg', description: 'Global-Tech builds tailored software that helps your organisation work smarter. We take a flexible, long-term approach to technology, with solutions designed around your goals and the people who use them.', features: ['Custom business software and ERP', 'System integrations and APIs', 'Modernisation and ongoing support'] },
  { id: 'cloud-computing', title: 'Cloud Computing', icon: Cloud, image: '/cloud.avif', description: 'Move your systems to a secure, dependable cloud environment. Our team helps you choose the right hosting model, plan a smooth migration and keep your services available as your organisation grows.', features: ['Infrastructure as a Service (IaaS)', 'Software as a Service (SaaS)', 'Platform as a Service (PaaS)'] },
  { id: 'account-training', title: 'Account Training', icon: GraduationCap, image: '/accounting.webp', description: 'Build confidence with practical training for the people who manage your accounts. We help teams understand financial records, use their software effectively and follow consistent processes.', features: ['Accounting software onboarding', 'Practical bookkeeping workflows', 'Team training and learning support'] },
  { id: 'account-consultant', title: 'Account Consultant', icon: Scale, image: '/web-app.jpeg', description: 'Make clear decisions with support from experienced accounting consultants. We help you understand your numbers, strengthen reporting and establish processes that support a healthy business.', features: ['Financial forecasting and reporting', 'Accounts payable and receivable review', 'Accounting process improvement'] },
  { id: 'web-solutions', title: 'Web Solution', icon: Globe2, image: '/services/websolutions.jpg', description: 'Create a reliable digital presence with websites and web applications built around your customers. We bring design, development and practical business needs together in one solution.', features: ['Business websites and portals', 'E-commerce and CMS solutions', 'Responsive design and maintenance'] },
  { id: 'graphic-design', title: 'Graphic Design and Animation', icon: Palette, image: '/graphic.jpg', description: 'Give your brand a consistent and memorable visual identity. Our design team creates clear, useful creative assets for your products, campaigns and digital channels.', features: ['Brand identity and logo design', 'Marketing and social media assets', 'Motion graphics and animation'] },
  { id: 'mobile-apps', title: 'Mobile Application Development', icon: Smartphone, image: '/mans copy.png', description: 'Bring your services closer to customers and staff with mobile applications that are easy to use and designed to work with your existing systems.', features: ['Android and iOS applications', 'Sales and field-team tools', 'App maintenance and integration'] },
  { id: 'networking', title: 'Networking and Infrastructure', icon: Network, image: '/services/webhosting101.jpg', description: 'Connect your people, devices and locations with a secure network foundation. We plan and support the infrastructure your daily operations depend on.', features: ['Network setup and configuration', 'Server and device installation', 'Security and performance support'] },
  { id: 'it-support', title: 'IT Support', icon: Headset, image: '/services/graphicdesign-1.jpg', description: 'Keep your technology working with responsive, practical IT support. From troubleshooting to maintenance, we help your team get back to work quickly.', features: ['Technical troubleshooting', 'System updates and maintenance', 'Ongoing business IT support'] },
];

export default function ServicesPage() {
  return (
    <main className="bg-green-50 text-[#101b2d]">
      <MarketingPageHero eyebrow="Services" breadcrumb="Services" title="Everything your organisation needs to run on modern technology." description="Software, systems, networking and cloud from one experienced team — plus the accounting expertise behind our OMS products." />
      <nav aria-label="Service categories" className="sticky top-[74px] z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 [scrollbar-width:none] sm:px-8 lg:px-10">
          {services.map(({ id, title, icon: Icon }) => <a key={id} href={`#${id}`} className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-medium text-slate-600 transition hover:border-teal-300 hover:bg-teal-50 hover:text-green-800"><Icon size={12} />{title}</a>)}
        </div>
      </nav>
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-8 sm:pt-14 lg:px-10">
        <div className="space-y-16 sm:space-y-20">
          {services.map(({ id, title, icon: Icon, image, description, features }, index) => {
            const reversed = index % 2 === 1;
            return <article id={id} key={id} className="scroll-mt-36 grid items-center gap-7 lg:grid-cols-2 lg:gap-12">
              <div className={`${reversed ? 'lg:order-2' : ''} relative overflow-hidden rounded-2xl bg-slate-200 shadow-sm`}>
                <Image src={image} alt={`${title} service`} width={720} height={500} priority={index < 2} className="h-64 w-full object-cover sm:h-[300px]" />
                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-green-700 shadow"><Icon size={18} /></div>
              </div>
              <div className={`${reversed ? 'lg:order-1' : ''}`}>
                <p className="mb-2 font-mono text-[10px] tracking-[.2em] text-slate-500">{String(index + 1).padStart(2, '0')} <span className="text-slate-300">—</span> {String(services.length).padStart(2, '0')}</p>
                <h2 className="text-2xl font-semibold tracking-tight text-[#101b2d] sm:text-[28px]">{title}</h2>
                <p className="mt-3 max-w-xl text-[13px] leading-[1.75] text-slate-600">{description}</p>
                <ul className="mt-4 grid gap-x-5 gap-y-2 sm:grid-cols-2">
                  {features.map((feature) => <li key={feature} className="flex items-start gap-2 text-xs leading-5 text-slate-700"><span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded bg-green-100 text-green-700"><Check size={11} /></span>{feature}</li>)}
                </ul>
                <div className="mt-5 flex gap-2">
                  <a href={`mailto:info@globaltechnepal.com?subject=${encodeURIComponent(`Enquiry: ${title}`)}`} className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-green-600 to-teal-700 px-4 py-2 text-[11px] font-semibold text-white shadow-lg shadow-green-900/10 transition hover:-translate-y-0.5">Enquire <ArrowRight size={13} /></a>
                  <Link href="/products" className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-4 py-2 text-[11px] font-semibold text-slate-700 transition hover:border-green-300">Explore products <ChevronRight size={13} /></Link>
                </div>
              </div>
            </article>;
          })}
        </div>
      </div>
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-5 rounded-3xl bg-[#01403e] p-7 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div><p className="mb-2 text-[10px] font-semibold uppercase tracking-[.22em] text-teal-300">Let’s build together</p><h2 className="max-w-lg text-2xl font-semibold tracking-tight sm:text-3xl">Need a solution shaped around your business?</h2><p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">Tell us what you are working on and our team will help you find the right next step.</p></div>
          <a href="mailto:info@globaltechnepal.com?subject=Project%20enquiry" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-teal-700 px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-green-900/30">Start a conversation <ArrowRight size={14} /></a>
        </div>
      </section>
    </main>
  );
}
