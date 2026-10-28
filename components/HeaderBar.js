"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Clients", href: "/clients" },
  { label: "Careers", href: "/careers" },
];

export default function HeaderBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" aria-label="GlobalTech home" className="shrink-0">
          <Image src="/logo.png" alt="GlobalTech" width={154} height={50} priority className="h-auto w-[136px] sm:w-[154px]" />
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {navigation.map(({ label, href }) => {
            const active = pathname === href || (href !== "/" && pathname.startsWith(href));
            return <Link key={href} href={href} className={`rounded-full px-3.5 py-2 text-[13px] font-medium transition ${active ? "bg-green-50 text-green-800" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"}`}>{label}</Link>;
          })}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/#trial" className="inline-flex items-center gap-1.5 rounded-full bg-[#01403e] px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-green-900/10 transition hover:-translate-y-0.5">Start free trial <ArrowUpRight size={13} /></Link>
          <a href="http://omslite.globaltech.com.np/Account/Login" target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-green-300 hover:text-green-800">Login</a>
        </div>
        <button type="button" aria-label="Open menu" aria-expanded={isOpen} onClick={() => setIsOpen(true)} className="rounded-lg border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-50 lg:hidden"><Menu size={21} /></button>
      </div>
      {isOpen && <div className="fixed inset-0 z-50 bg-[#01403e]/40 lg:hidden" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsOpen(false); }}>
        <aside className="ml-auto flex h-full w-[min(86vw,360px)] flex-col bg-white p-5 shadow-2xl">
          <div className="mb-7 flex items-center justify-between"><Image src="/logo.png" alt="GlobalTech" width={145} height={48} className="h-auto w-36" /><button type="button" aria-label="Close menu" onClick={() => setIsOpen(false)} className="rounded-lg p-2 text-slate-600 hover:bg-slate-100"><X size={20} /></button></div>
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">{navigation.map(({ label, href }) => <Link key={href} href={href} onClick={() => setIsOpen(false)} className={`rounded-xl px-4 py-3 text-sm font-medium ${pathname === href ? "bg-green-50 text-green-800" : "text-slate-700 hover:bg-slate-50"}`}>{label}</Link>)}</nav>
          <div className="mt-auto grid gap-2"><Link href="/#trial" onClick={() => setIsOpen(false)} className="rounded-full bg-[#01403e] px-4 py-3 text-center text-sm font-semibold text-white">Start free trial</Link><a href="http://omslite.globaltech.com.np/Account/Login" target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-300 px-4 py-3 text-center text-sm font-semibold text-slate-700">Login</a></div>
        </aside>
      </div>}
    </header>
  );
}
