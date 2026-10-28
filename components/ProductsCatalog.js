"use client";

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Boxes, BriefcaseBusiness, Calculator, HeartPulse, Landmark, PackageCheck, Search, ShoppingCart, Smartphone, Stethoscope, Users, WalletCards } from 'lucide-react';

const products = [
  { name: 'OMS Accounting', category: 'Finance', icon: Calculator, image: '/accounting.webp', accent: 'from-green-50 to-white', description: 'Integrated financial management for accounting, inventory, payables, receivables and reporting.' },
  { name: 'OMS Payroll', category: 'People', icon: WalletCards, image: '/mans copy.png', accent: 'from-green-50 to-white', description: 'Pay every employee accurately and on time, with the right withholdings and deductions.' },
  { name: 'Hospital Manager', category: 'Healthcare', icon: HeartPulse, image: '/amda.jpeg', accent: 'from-green-50 to-white', description: 'Hospital management software with the features and support your care team needs.' },
  { name: 'OMS CRM', category: 'Sales', icon: Users, image: '/mans.png', accent: 'from-green-50 to-white', description: 'Manage customer data and interactions, sales and follow-ups in one place.' },
  { name: 'OMS F&B', category: 'Operations', icon: PackageCheck, image: '/services/webhosting101.jpg', accent: 'from-green-50 to-white', description: 'Faster order processing and turnaround for restaurants and outlets.' },
  { name: 'OMS POS', category: 'Sales', icon: ShoppingCart, image: '/websolutions.jpg', accent: 'from-green-50 to-white', description: 'Integrated billing, inventory and financial accounts on a single computer or multiple terminals.' },
  { name: 'OMS LAB', category: 'Healthcare', icon: Stethoscope, image: '/web-app.jpeg', accent: 'from-green-50 to-white', description: 'Laboratory and diagnostic-centre software with reports and patient notifications.' },
  { name: 'OMS Fixed Assets', category: 'Finance', icon: Landmark, image: '/software.jpg', accent: 'from-green-50 to-white', description: 'Control, track and record every asset through its lifetime, location and depreciation.' },
  { name: 'OMS Cloud Accounting', category: 'Finance', icon: Boxes, image: '/global.jpeg', accent: 'from-green-50 to-white', description: 'Cloud-based accounting software, with your books available securely from anywhere.' },
  { name: 'OMS App', category: 'Mobile', icon: Smartphone, image: '/mans copy.png', accent: 'from-green-50 to-white', description: 'Mobile apps for sales teams and managers, including uSmart Salesman and uSmart Manager.' },
  { name: 'E-commerce Solution', category: 'Sales', icon: BriefcaseBusiness, image: '/services/websolutions.jpg', accent: 'from-green-50 to-white', description: 'Bring your shop online with inventory management across multiple locations.' },
];

export default function ProductsCatalog() {
  const [query, setQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const filteredProducts = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return products;
    return products.filter((product) => `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(value));
  }, [query]);

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-14 pt-9 sm:px-8 sm:pb-20 sm:pt-12 lg:px-10">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500"><span className="font-semibold text-[#101b2d]">{filteredProducts.length}</span> {filteredProducts.length === 1 ? 'product' : 'products'}</p>
          <label className="flex w-full items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-slate-400 shadow-sm sm:max-w-xs">
            <Search size={14} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Filter products..." aria-label="Filter products" className="w-full bg-transparent text-xs text-slate-700 outline-none placeholder:text-slate-400" />
          </label>
        </div>
        {filteredProducts.length ? <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map(({ name, category, icon: Icon, image, accent, description }) => (
            <article key={name} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-200 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl hover:shadow-slate-900/5">
              <div className={`relative flex h-44 items-center justify-center border-b border-slate-200 bg-gradient-to-br ${accent} p-5`}>
                <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/80 bg-white/80 px-2.5 py-1 text-[10px] font-medium text-slate-500"><Icon size={11} />{category}</div>
                <Image src={image} alt="" width={240} height={130} className="h-28 w-56 object-contain transition duration-300 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h2 className="text-sm font-semibold text-[#101b2d]">{name}</h2>
                <p className="mt-1.5 min-h-[54px] text-[11px] leading-[1.65] text-slate-500">{description}</p>
                <button type="button" onClick={() => setSelectedProduct({ name, category, icon: Icon, image, accent, description })} className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-green-700 transition group-hover:text-green-700">View product <ArrowRight size={12} /></button>
              </div>
            </article>
          ))}
        </div> : <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center"><p className="font-medium text-slate-700">No products match “{query}”.</p><button onClick={() => setQuery('')} className="mt-2 text-sm font-semibold text-green-700">Clear search</button></div>}
      </section>
      <section id="contact" className="mx-auto max-w-7xl scroll-mt-20 px-5 pb-14 sm:px-8 sm:pb-16 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-[#01403e] px-6 py-9 text-white sm:flex sm:items-center sm:justify-between sm:gap-8 sm:px-9 sm:py-10">
          <div aria-hidden="true" className="absolute -right-10 -top-16 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="relative"><p className="mb-2 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[.24em] text-teal-300"><span className="h-1 w-1 rounded-sm bg-orange-500" />Let’s build together</p><h2 className="max-w-md text-2xl font-semibold leading-tight tracking-tight sm:text-[28px]">Not sure which product fits?</h2><p className="mt-2 max-w-lg text-xs leading-5 text-slate-400">Tell us how your organisation works and we’ll recommend the right OMS modules — or build something custom.</p></div>
          <div className="relative mt-5 flex flex-wrap gap-2 sm:mt-0"><a href="mailto:info@globaltechnepal.com?subject=Product%20recommendation" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-green-700 px-4 py-2.5 text-[11px] font-semibold text-white shadow-lg shadow-green-900/20">Start a project <ArrowRight size={13} /></a><a href="tel:+97715329949" className="rounded-full border border-slate-600 px-4 py-2.5 text-[11px] font-medium text-slate-200 hover:bg-white/5">01-5329949</a></div>
        </div>
      </section>
      {selectedProduct && <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedProduct(null); }}>
        <div role="dialog" aria-modal="true" aria-labelledby="product-dialog-title" className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">
          <button type="button" aria-label="Close product details" onClick={() => setSelectedProduct(null)} className="absolute right-3 top-3 z-10 rounded-full bg-white/90 px-2.5 py-1 text-xl leading-none text-slate-600">×</button>
          <div className={`flex h-48 items-center justify-center bg-gradient-to-br ${selectedProduct.accent || 'from-green-50 to-white'} p-5`}><Image src={selectedProduct.image} alt="" width={280} height={150} className="h-32 w-64 object-contain" /></div>
          <div className="p-6"><p className="mb-2 text-[10px] font-semibold uppercase tracking-[.18em] text-green-700">{selectedProduct.category}</p><h2 id="product-dialog-title" className="text-xl font-semibold text-[#101b2d]">{selectedProduct.name}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{selectedProduct.description}</p><a href={`mailto:info@globaltechnepal.com?subject=${encodeURIComponent(`Product enquiry: ${selectedProduct.name}`)}`} className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-green-700 px-4 py-2.5 text-xs font-semibold text-white">Request product details <ArrowRight size={13} /></a></div>
        </div>
      </div>}
    </>
  );
}
