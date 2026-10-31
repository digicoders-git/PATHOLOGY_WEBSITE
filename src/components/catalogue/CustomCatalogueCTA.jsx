import React from "react";
import { Link } from "react-router-dom";
import { FaFileAlt, FaChevronRight } from "react-icons/fa";

const CustomCatalogueCTA = () => {
  return (
    <section className="py-6 pb-20 bg-white">
      <div className="container mx-auto px-6 lg:px-16 max-w-[1360px]">
        <div className="relative overflow-hidden bg-red-50/80 border border-red-100 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Decorative Background Glows */}
          <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-secondary/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -left-10 -top-10 w-44 h-44 bg-secondary/5 rounded-full blur-2xl pointer-events-none" />

          {/* Left Content */}
          <div className="flex items-center gap-5 sm:gap-6 relative z-10 text-left w-full md:w-auto">
            {/* Red Document Icon Circle/Square */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-secondary text-white flex items-center justify-center shrink-0 shadow-lg shadow-secondary/20">
              <FaFileAlt className="text-2xl sm:text-3xl text-white" />
            </div>

            {/* Title & Subtitle */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-black tracking-tight font-sans">
                Need a Custom Catalogue?
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base font-medium mt-1">
                Contact us for specific product details and customized information.
              </p>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="relative z-10 shrink-0 w-full md:w-auto flex justify-start md:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2.5 bg-secondary hover:bg-red-700 text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full transition-all duration-300 shadow-md shadow-secondary/20 hover:shadow-lg active:scale-95 group w-full sm:w-auto"
            >
              <span>Contact Us</span>
              <FaChevronRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CustomCatalogueCTA;
