"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { Building2, CheckCircle2, ArrowRight } from "lucide-react";

const verifiedClients = [
  {
    id: 1,
    title: "Chaudhary Group (CG)",
    image: "/cg.jpeg",
    category: "Enterprise & Conglomerate",
    description: "One of Nepal's largest multi-industry business conglomerates.",
  },
  {
    id: 2,
    title: "Deli Stationery Nepal",
    image: "/deli.png",
    category: "Retail & Distribution",
    description: "Leading stationery & school supplies distributor across Nepal.",
  },
  {
    id: 3,
    title: "AMDA Nepal",
    image: "/amda.jpeg",
    category: "Healthcare & Hospital",
    description: "Association of Medical Doctors of Asia - healthcare operations.",
  },
  {
    id: 4,
    title: "Garg Dental Care",
    image: "/garg.png",
    category: "Medical & Clinical",
    description: "Premier dental care clinic and medical equipment provider.",
  },
  {
    id: 5,
    title: "NATHAM",
    image: "/global.jpeg",
    category: "Hospitality Education",
    description: "National Academy of Tourism & Hotel Management.",
  },
  {
    id: 6,
    title: "Sharda Group",
    image: "/cg.jpeg",
    category: "Industrial & Manufacturing",
    description: "Leading manufacturing and distribution house in Nepal.",
  },
  {
    id: 7,
    title: "Kantipur Feed Industries",
    image: "/garg.png",
    category: "Agro-Enterprise",
    description: "Nationwide agro-manufacturing and multi-warehouse distribution.",
  },
];

export default function OurclientSlider() {
  const [brands, setBrands] = useState(verifiedClients);

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

  return (
    <section className="bg-gradient-to-b from-emerald-50/50 via-white to-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto">
        {/* Header with Stats */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/70 px-3.5 py-1 text-xs font-semibold text-emerald-900 mb-3">
            <Building2 size={13} /> Trusted Enterprise Partnerships
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Trusted by Over{" "}
            <span className="text-[#01403e]">10,000+ Businesses</span> Across Nepal
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            From prominent conglomerates and hospital networks to growing retail chains and distributors, our software powers mission-critical operations daily.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2800, disableOnInteraction: false }}
            loop={true}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-6"
          >
            {brands.map((brand, idx) => (
              <SwiperSlide key={brand.id || idx}>
                <div className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-950/5">
                  <div className="flex h-32 w-full items-center justify-center rounded-xl bg-slate-50 p-4 transition-colors group-hover:bg-emerald-50/40">
                    <Image
                      src={brand.image || "/logo-global.png"}
                      alt={brand.title}
                      width={220}
                      height={120}
                      className="max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-4">
                    <span className="inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold text-slate-600">
                      {brand.category || "Enterprise"}
                    </span>
                    <h3 className="mt-2 text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                      {brand.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {brand.description || "Active GlobalTech OMS software deployment."}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-1.5 border-t border-slate-100 pt-3 text-[11px] font-medium text-emerald-700">
                    <CheckCircle2 size={13} className="text-emerald-600" />
                    <span>Verified Implementation</span>
                  </div>
                </div>
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
