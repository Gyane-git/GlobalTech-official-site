"use client";
import { useState } from "react";
import { Play, CheckCircle } from "lucide-react";

export default function YouTubeVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Replace this with your actual YouTube video ID
  const videoId = "dQw4w9WgXcQ";

  return (
    <section className="bg-green-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mt-4 mx-auto">
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-2  text-green-600">
            <CheckCircle className="w-6 h-6" />
            <span className="font-medium text-xl">
              Designed by Professional Accountants
            </span>
          </div>
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle className="w-6 h-6" />
            <span className="font-medium text-xl">Built by Tech Experts</span>
          </div>
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle className="w-6 h-6" />
            <span className="font-medium text-xl">Certified by the IRD</span>
          </div>
        </div>

        {/* Video Container with Browser Frame */}
        <div className="relative border-green-600 border-4 rounded-2xl max-w-6xl mx-auto">
          {/* Browser Chrome */}
          <div className="bg-gray-800 rounded-t-xl p-3 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          {/* Video Frame */}
          <div
            className="relative  bg-gray-900 rounded-b-xl overflow-hidden shadow-2xl"
            style={{ paddingBottom: "56.25%" }}
          >
            {!isPlaying ? (
              // Thumbnail with Play Button
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                <img
                  src="https://img.youtube.com/vi/gRF6DdP85IY/maxresdefault.jpg"
                  alt="Video thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <button
                  onClick={() => setIsPlaying(true)}
                  className="relative z-10 w-20 h-20 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-all transform hover:scale-110 shadow-lg"
                  aria-label="Play video"
                >
                  <Play className="w-10 h-10 text-white ml-1" fill="white" />
                </button>
              </div>
            ) : (
              // YouTube Iframe
              <iframe
  className="absolute inset-0 w-full h-full"
  src="https://www.youtube.com/embed/gRF6DdP85IY?autoplay=1&rel=0"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>

            )}
          </div>
        </div>

        {/* Optional Description */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Watch how our accounting software transforms your business
            operations with intuitive design and powerful features.
          </p>
        </div>
      </div>
    </section>
  );
}
