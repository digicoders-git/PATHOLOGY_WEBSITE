import React from "react";
import { FaYoutube, FaArrowRight, FaPlay } from "react-icons/fa";

const YouTubeSubscribeCTA = () => {
  return (
    <section className="py-12 pb-20 bg-white">
      <div className="container mx-auto px-6 lg:px-16 max-w-[1360px]">
        <div className="relative overflow-hidden bg-gradient-to-r from-red-50 via-rose-50/70 to-red-100/80 border border-red-100/80 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Subtle Decorative Background Circles */}
          <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-secondary/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -left-10 -top-10 w-44 h-44 bg-secondary/5 rounded-full blur-2xl pointer-events-none" />

          {/* Left Content */}
          <div className="flex items-center gap-5 sm:gap-6 relative z-10 text-left w-full md:w-auto">
            {/* YouTube Red Icon Circle */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-secondary text-white flex items-center justify-center shrink-0 shadow-lg shadow-secondary/30">
              <FaPlay className="text-xl sm:text-2xl translate-x-0.5" />
            </div>

            {/* Title & Description */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-black tracking-tight font-sans">
                Stay Updated with Labo India
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base font-medium mt-1">
                Subscribe to our YouTube channel for more helpful tutorials and updates.
              </p>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="relative z-10 shrink-0 w-full md:w-auto flex justify-start md:justify-end">
            <a
              href="https://www.youtube.com/@laboindia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-secondary hover:bg-red-700 text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full transition-all duration-300 shadow-md shadow-secondary/20 hover:shadow-lg active:scale-95 group w-full sm:w-auto"
            >
              <FaYoutube className="text-lg" />
              <span>Subscribe on YouTube</span>
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default YouTubeSubscribeCTA;
