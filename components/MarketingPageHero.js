export default function MarketingPageHero({ eyebrow, title, description, breadcrumb }) {
  return (
    <section className="marketing-hero relative overflow-hidden bg-[#0a4d4d] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,.14) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.14) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-32 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"
      />
      <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-9 sm:px-8 sm:pb-16 lg:px-10">
        <p className="mb-6 text-xs font-semibold uppercase tracking-wider text-emerald-200/80">
          Home <span className="mx-2 text-emerald-400/50">/</span> {breadcrumb}
        </p>
        <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime-300">
          <span className="h-2 w-2 rounded-full bg-lime-400" />
          {eyebrow}
        </p>
        <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[44px]">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-emerald-100/90 font-normal">
          {description}
        </p>
      </div>
    </section>
  );
}
