import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaChevronRight, FaPlay } from "react-icons/fa";

const CatalogueHero = () => {
  return (
    <section 
      style={{ backgroundColor: "#FF0000" }}
      className="relative bg-[#FF0000] pt-28 sm:pt-32 lg:pt-36 pb-6 sm:pb-8 lg:pb-8 overflow-hidden shadow-xs"
    >
      {/* Background Decorative Play Watermarks (Clean, NO gradient/glow overlays) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Soft subtle triangles matching mockup */}
        <div className="absolute top-8 left-[18%] opacity-15 rotate-12">
          <FaPlay className="text-white text-3xl sm:text-4xl" />
        </div>
        <div className="absolute top-16 left-[46%] opacity-15 -rotate-12">
          <FaPlay className="text-white text-4xl sm:text-5xl" />
        </div>
        <div className="absolute bottom-10 left-[34%] opacity-15 rotate-45">
          <FaPlay className="text-white text-3xl sm:text-4xl" />
        </div>
        <div className="absolute top-1/4 right-[36%] opacity-15 rotate-[-20deg]">
          <FaPlay className="text-white text-4xl sm:text-5xl" />
        </div>
        <div className="absolute bottom-16 right-[14%] opacity-15 rotate-12">
          <FaPlay className="text-white text-3xl sm:text-4xl" />
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10 max-w-[1360px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Text Column: Title -> Subtitle -> Breadcrumb Pill */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 text-left flex flex-col items-start justify-center py-4 lg:py-6"
          >
            {/* 1. Main Title (Top) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.08] mb-3 sm:mb-4 tracking-tight font-sans drop-shadow-md">
              Catalogue
            </h1>

            {/* 2. Subtitle (Middle) */}
            <p className="text-white/95 text-base sm:text-lg md:text-xl font-medium max-w-xl leading-relaxed mb-6 sm:mb-8 drop-shadow-sm">
              Explore our comprehensive catalogue of products and solutions.
            </p>

            {/* 3. Breadcrumb Pill (Bottom) */}
            <div className="inline-flex items-center gap-2.5 bg-white text-gray-800 text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <FaHome className="text-secondary text-sm" />
              <Link to="/" className="text-gray-800 hover:text-secondary transition-colors">
                Home
              </Link>
              <FaChevronRight className="text-[10px] text-gray-400" />
              <span className="text-secondary font-black">Catalogue</span>
            </div>
          </motion.div>

          {/* Right Image Column: 3D Product Catalogue Book */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end items-end relative"
          >
            <div className="relative w-full max-w-[440px] sm:max-w-[500px] lg:max-w-[560px] xl:max-w-[620px] -mb-2 sm:-mb-3 lg:-mb-5">
              <img 
                src="/catalogue-hero.png" 
                alt="Labo India Product Catalogue 3D Book"
                className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)] hover:scale-103 transition-transform duration-500"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Subtle Bottom Curved Wave (Full-width, elegant & gentle) */}
      <div className="absolute -bottom-[1px] left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-20">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-4 sm:h-6 md:h-10 block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,15 Q720,55 1440,15 L1440,60 L0,60 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
};

export default CatalogueHero;
