"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

export default function OurclientSlider() {
  const [brands, setBrands] = useState([]);

  // Fetch API data on load
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await fetch("https://globaltechnepal.com/api/clients");
        const json = await res.json();
        setBrands(json.data || []);
      } catch (error) {
        console.error("Failed to fetch clients:", error);
      }
    };

    fetchClients();
  }, []);

  return (
    <div className=" bg-green-50 py-6 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto py-10 ">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12">
        We Have Been Featured On
      </h2>

      <Swiper
      className="bg-linear-to-b from-green-50 to-white"
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand.id}>
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition bg-linear-to-b from-green-50 to-white border border-green-600">
             <div className="w-full h-40 flex items-center justify-center p-4">
              <Image
                src={brand.image}
                alt={brand.title}
                width={300}
                height={200}
                className="object-contain w-full h-full"
              />
            </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
}
