import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaChevronRight, FaPlay } from "react-icons/fa";

const VideoTutorialHero = () => {
  return (
    <section 
      style={{ backgroundColor: "#FF0000" }}
      className="relative bg-[#FF0000] pt-28 md:pt-36 lg:pt-40 pb-16 md:pb-24 lg:pb-28 overflow-hidden shadow-xs"
    >
      {/* Background Decorative Play Watermarks (Clean, NO gradient/glow overlays) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Play Icons / Polygons matching mockup */}
        <div className="absolute top-12 left-[18%] opacity-15 rotate-12">
          <FaPlay className="text-white text-4xl" />
        </div>
        <div className="absolute top-28 left-[45%] opacity-10 -rotate-12">
          <div className="w-16 h-16 border-4 border-white rounded-full flex items-center justify-center">
            <FaPlay className="text-white text-xl translate-x-0.5" />
          </div>
        </div>
        <div className="absolute bottom-16 left-[28%] opacity-15 rotate-45">
          <div className="w-12 h-12 bg-white/20 rounded-2xl" />
        </div>
        <div className="absolute top-1/3 right-[38%] opacity-20 rotate-[-25deg]">
          <FaPlay className="text-white text-5xl" />
        </div>
        <div className="absolute bottom-24 right-[12%] opacity-10 rotate-12">
          <div className="w-20 h-20 border-4 border-white/40 rounded-full flex items-center justify-center">
            <FaPlay className="text-white text-2xl translate-x-0.5" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10 max-w-[1360px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Column (55%) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 text-left"
          >
            {/* Breadcrumb Pill */}
            <div className="inline-flex items-center gap-2 bg-white text-gray-800 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-md mb-6 hover:shadow-lg transition-all duration-300">
              <FaHome className="text-secondary text-sm" />
              <Link to="/" className="text-gray-800 hover:text-secondary transition-colors">
                Home
              </Link>
              <FaChevronRight className="text-[10px] text-gray-400" />
              <span className="text-secondary font-black">Video Tutorial</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] mb-5 tracking-tight font-sans drop-shadow-md">
              Video Tutorial
            </h1>

            {/* Subtitle */}
            <p className="text-white/95 text-base sm:text-lg md:text-xl font-medium max-w-xl leading-relaxed drop-shadow-sm">
              Learn how to use Labo India platform with easy step-by-step video guides.
            </p>
          </motion.div>

          {/* Right Image Column (45%) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end items-center relative"
          >
            <div className="relative w-full max-w-[520px] lg:max-w-[580px]">
              <img 
                src="/video-tutorial-hero.png?v=2" 
                alt="Labo India Video Tutorials Laptop and YouTube"
                className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)] hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Subtle Bottom Curved Wave (Full-width, elegant & gentle) */}
      <div className="absolute -bottom-[1px] left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
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

export default VideoTutorialHero;
