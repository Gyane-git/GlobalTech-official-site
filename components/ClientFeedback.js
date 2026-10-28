"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, ShieldCheck } from "lucide-react";

export default function ClientFeedback() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Bineet Kumar Sharda",
      title: "Managing Director",
      company: "Sharda Group",
      tag: "Manufacturing & Distribution",
      rating: 5,
      feedback:
        "GlobalTech OMS has become synonymous with ease and precision for our group's accounting. We effortlessly track multi-branch purchases, receivables, payables, and generate VAT returns in full compliance with IRD guidelines. Their local support team in Kathmandu is dependable whenever custom reports or updates are required.",
    },
    {
      name: "Jeevan Mahat",
      title: "Director of Finance",
      company: "NATHAM",
      tag: "Hospitality & Education",
      rating: 5,
      feedback:
        "We have implemented GlobalTech software to manage our institutional finances and student accounting. The user interface is clean, intuitive, and remarkably fast. The seamless integration between billing and general ledger accounting saves our finance department dozens of hours each month.",
    },
    {
      name: "Rahul Sukwar",
      title: "IT Manager",
      company: "CG Digital",
      tag: "Consumer Electronics & Retail",
      rating: 5,
      feedback:
        "Switching to GlobalTech OMS POS and accounting systems was a smooth decision for our retail counters. High-speed barcode scanning, automated VAT invoices with QR codes, and real-time inventory synchronization across outlets gave us transparency we previously lacked.",
    },
    {
      name: "Sagar Sharma",
      title: "Financial Controller",
      company: "Kantipur Feed Industries",
      tag: "Agro-Manufacturing",
      rating: 5,
      feedback:
        "As a high-volume manufacturing business with multiple warehouses, we required an ERP capable of handling raw material batch tracking, supplier reconciliations, and Annexure 13 sales registers. GlobalTech has consistently exceeded our expectations.",
    },
    {
      name: "Dr. B. Garg",
      title: "Managing Director",
      company: "Garg Dental Care",
      tag: "Healthcare & Clinical",
      rating: 5,
      feedback:
        "GlobalTech's healthcare management modules streamline our patient records, appointments, doctor scheduling, and clinic pharmacy billing. The team is friendly, fast to assist, and deeply understands local medical and tax regulations.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100/70 px-3.5 py-1 text-xs font-semibold text-emerald-900 mb-3">
            <ShieldCheck size={14} /> Proven Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            What Our <span className="text-[#01403e]">Clients Say</span>
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
            Read real feedback from business leaders, finance directors, and IT managers across Nepal who rely on GlobalTech OMS.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg hover:bg-slate-50 hover:text-emerald-800 transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg hover:bg-slate-50 hover:text-emerald-800 transition"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Testimonial Cards Slider */}
          <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-10 shadow-lg">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className="fill-amber-400 text-amber-400"
                        />
                      ))}
                      <span className="ml-2 text-xs font-bold text-slate-700">
                        5.0 / 5.0
                      </span>
                    </div>

                    <Quote size={32} className="text-emerald-200 shrink-0" />
                  </div>

                  {/* Feedback Text */}
                  <blockquote className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal italic">
                    &ldquo;{testimonial.feedback}&rdquo;
                  </blockquote>

                  {/* Author / Client Profile */}
                  <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
                    {/* Initials Avatar */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#01403e] to-emerald-700 text-lg font-bold text-white shadow-md">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs sm:text-sm font-medium text-slate-500">
                        {testimonial.title} •{" "}
                        <span className="text-emerald-800 font-semibold">
                          {testimonial.company}
                        </span>
                      </p>
                      <span className="mt-1 inline-block rounded bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-800">
                        {testimonial.tag}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all ${
                  currentIndex === index
                    ? "bg-[#01403e] w-8"
                    : "bg-slate-300 hover:bg-slate-400 w-2.5"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
