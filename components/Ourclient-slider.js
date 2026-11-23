"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { Building2, CheckCircle2, ArrowRight } from "lucide-react";
import { verifiedClients } from "./clients";

const CARD_HEIGHT = "h-[360px]";

const DESC_LIMIT = 40;

function ClientCard({ brand, onToggle }) {
  const [expanded, setExpanded] = useState(false);

  const fullText =
    brand.description || "Active GlobalTech OMS software deployment.";
  const isLong = fullText.length > DESC_LIMIT;
  const shownText =
    isLong && !expanded
      ? fullText.slice(0, DESC_LIMIT).trimEnd() + "..."
      : fullText;

  const handleToggle = () => {
    const next = !expanded;
    setExpanded(next);
    onToggle(next);
  };

  return (
    <div
      className={`group flex flex-col rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-shadow duration-300 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-950/5 ${
        expanded ? "min-h-[372px] h-auto" : CARD_HEIGHT
      }`}
    >
      {/* Logo */}
      <div className="flex h-32 w-full shrink-0 items-center justify-center rounded-xl bg-slate-50 p-4 transition-colors group-hover:bg-emerald-50/40">
        <Image
          src={brand.image || "/logo-global.png"}
          alt={brand.title}
          width={220}
          height={120}
          className="max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="mt-4 flex-1">
        <span className="inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold text-slate-600">
          {brand.category || "Enterprise"}
        </span>

        <h3
          className="mt-2 text-sm font-bold text-slate-900 transition-colors group-hover:text-emerald-800"
          style={
            expanded
              ? undefined
              : {
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }
          }
        >
          {brand.title}
        </h3>

        <p className="mt-1 text-xs leading-relaxed text-slate-500">
          {shownText}
        </p>

        {isLong && (
          <button
            type="button"
            onClick={handleToggle}
            className="mt-1 block text-[11px] font-semibold leading-none text-emerald-700 hover:text-emerald-900 hover:underline"
          >
            {expanded ? "See less" : "See more"}
          </button>
        )}
      </div>

      {/* Footer */}
      <div className="mt-3 flex shrink-0 items-center gap-1.5 border-t border-slate-100 pt-2.5 text-[11px] font-medium text-emerald-700">
        <CheckCircle2 size={13} className="text-emerald-600" />
        <span>Verified Implementation</span>
      </div>
    </div>
  );
}

export default function OurclientSlider() {
  const [brands, setBrands] = useState(verifiedClients);
  const swiperRef = useRef(null);
  const openCount = useRef(0);

  useEffect(() => {
    // Attempt to load from API if present, with fallback to verifiedClients
    const fetchClients = async () => {
      try {
        const res = await fetch("https://globaltechnepal.com/api/clients", {
          cache: "no-store",
        });
        if (!res.ok) return;
        const json = await res.json();
        if (Array.isArray(json.data) && json.data.length > 0) {
          setBrands(json.data);
        }
      } catch {
        // keep verified fallback clients
      }
    };

    fetchClients();
  }, []);

  // Pause autoplay while any card is expanded so the user can read it
  const handleToggle = (expanded) => {
    openCount.current = Math.max(0, openCount.current + (expanded ? 1 : -1));
    const swiper = swiperRef.current;
    if (!swiper) return;

    // Let React render the taller/shorter card first, then re-measure
    setTimeout(() => {
      swiper.update();
      swiper.updateAutoHeight(200);
    }, 50);

    const autoplay = swiper.autoplay;
    if (!autoplay) return;
    if (openCount.current > 0) autoplay.stop();
    else autoplay.start();
  };

  return (
    <section className="bg-gradient-to-b from-emerald-50/50 via-white to-slate-50 py-10 px-4 sm:px-6 lg:px-8 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto">
        {/* Header with Stats */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/70 px-3.5 py-1 text-xs font-semibold text-emerald-900 mb-3">
            <Building2 size={13} /> Trusted Enterprise Partnerships
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Trusted by Over{" "}
            <span className="text-[#01403e]">10,000+ Businesses</span> Across
            Nepal
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            From prominent conglomerates and hospital networks to growing retail
            chains and distributors, our software powers mission-critical
            operations daily.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            autoplay={{ delay: 2800, disableOnInteraction: false }}
            autoHeight={true}
            loop={true}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            // items-start: an expanded card grows alone, others keep fixed height
            wrapperClass="swiper-wrapper !items-start"
            className="pb-6"
          >
            {brands.map((brand, idx) => (
              <SwiperSlide key={brand.id || idx} className="!h-auto">
                <ClientCard brand={brand} onToggle={handleToggle} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View All Clients CTA */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/clients"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-emerald-600 hover:text-emerald-800 hover:bg-emerald-50/40"
          >
            <span>Explore all client success stories</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}
