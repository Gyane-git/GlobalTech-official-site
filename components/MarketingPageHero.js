export default function MarketingPageHero({ eyebrow, title, description, breadcrumb }) {
  return (
    <section className="marketing-hero relative overflow-hidden bg-[#0a4d4d] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-25" style={{ backgroundImage: 'linear-gradient(rgba(148,163,184,.14) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.14) 1px, transparent 1px)', backgroundSize: '52px 52px' }} />
      <div aria-hidden="true" className="absolute -right-20 -top-32 h-96 w-96 rounded-full bg-green-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-8 sm:px-8 sm:pb-16 lg:px-10">
        <p className="mb-8 text-[10px] font-medium uppercase tracking-[.2em] text-slate-400">Home <span className="mx-2 text-slate-600">/</span> {breadcrumb}</p>
        <p className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.24em] text-lime-300"><span className="h-1.5 w-1.5 rounded-sm bg-orange-500" />{eyebrow}</p>
        <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-.035em] sm:text-4xl lg:text-[42px]">{title}</h1>
        <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-400 sm:text-[15px]">{description}</p>
      </div>
    </section>
  );
}
