import React from "react";
import { Link } from "react-router-dom";
import { FaChalkboardTeacher, FaArrowRight } from "react-icons/fa";

const DiscoverCTA = () => {
  return (
    <section className="py-6 pb-20 bg-white">
      <div className="container mx-auto px-6 lg:px-16 max-w-[1360px]">
        <div 
          style={{ backgroundColor: "#FF0000" }}
          className="relative overflow-hidden bg-[#FF0000] rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Subtle Watermark Circles */}
          <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -left-10 -top-10 w-44 h-44 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          {/* Left Content */}
          <div className="flex items-center gap-5 sm:gap-6 relative z-10 text-left w-full md:w-auto">
            {/* White Presentation Icon Container */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/15 border border-white/20 text-white flex items-center justify-center shrink-0 shadow-md">
              <FaChalkboardTeacher className="text-2xl sm:text-3xl text-white" />
            </div>

            {/* Title & Subtitle */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight font-sans">
                Discover Labo India
              </h3>
              <p className="text-white/90 text-xs sm:text-sm md:text-base font-medium mt-1">
                Together for a healthier tomorrow.
              </p>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="relative z-10 shrink-0 w-full md:w-auto flex justify-start md:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-gray-50 text-secondary font-black text-xs sm:text-sm px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-xl active:scale-95 group w-full sm:w-auto"
            >
              <span>Contact Our Team</span>
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DiscoverCTA;
