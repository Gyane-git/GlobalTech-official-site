"use client";

import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { services } from "../data/services";

export default function ServiceCategoryCarousel() {
  const carouselRef = useRef(null);
  const directionRef = useRef(1);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    let animationId;
    let previousTime = 0;

    const speed = 35;

    const animate = (time) => {
      if (previousTime) {
        const delta = Math.min((time - previousTime) / 1000, 0.05);
        const halfWidth = carousel.scrollWidth / 2;

        // Move continuously in the selected direction
        carousel.scrollLeft += directionRef.current * speed * delta;

        // Seamless forward loop
        if (carousel.scrollLeft >= halfWidth) {
          carousel.scrollLeft -= halfWidth;
        }

        // Seamless backward loop
        if (carousel.scrollLeft < 0) {
          carousel.scrollLeft += halfWidth;
        }
      }

      previousTime = time;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const scrollLeft = () => {
    directionRef.current = -1;
  };

  const scrollRight = () => {
    directionRef.current = 1;
  };

  return (
    <nav
      aria-label="Service categories"
      className="sticky top-[74px] z-20 border-b border-slate-200 bg-white/95 backdrop-blur shadow-sm"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Left Arrow */}
        <button
          type="button"
          onClick={scrollLeft}
          aria-label="Scroll left"
          className="absolute left-1 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-emerald-800 shadow-md transition hover:bg-emerald-50"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Continuous Carousel */}
        <div
          ref={carouselRef}
          className="overflow-x-auto py-3 px-9 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex w-max">
            {[0, 1].map((group) => (
              <div
                key={group}
                className="flex shrink-0 gap-2 pr-2"
                aria-hidden={group === 1}
              >
                {services.map(({ id, title, icon: Icon }) => (
                  <a
                    key={`${group}-${id}`}
                    href={`#${id}`}
                    tabIndex={group === 1 ? -1 : 0}
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50/70 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-900"
                  >
                    <Icon size={13} className="shrink-0 text-emerald-700" />
                    <span>{title}</span>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          type="button"
          onClick={scrollRight}
          aria-label="Scroll right"
          className="absolute right-1 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-emerald-800 shadow-md transition hover:bg-emerald-50"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </nav>
  );
}
