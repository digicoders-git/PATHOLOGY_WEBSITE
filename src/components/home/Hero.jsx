import React from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { FaCalendarAlt } from "react-icons/fa";
import hero from "../../assets/home/hero.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Background Image Container with Hardware Acceleration */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <img
          src={hero}
          alt="Laboratory Scientist"
          className="w-full h-full object-cover object-top"
          loading="eager"
          fetchpriority="high"
        />
        {/* Optimized Overlays */}
        <div className="absolute inset-0 bg-primary/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-linear-to-r from-primary/80 via-primary/5 to-transparent"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-xl">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.2,
            }}
            className="inline-block bg-secondary px-3 py-1 rounded-md mb-6 shadow-lg"
          >
            <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-wider">
              Welcome to Syntalab
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.4,
            }}
            className="text-white text-4xl md:text-5xl lg:text-5xl font-bold leading-[1.2] mb-6 tracking-tight"
          >
            Pioneering Discoveries <br />
            for a Better Tomorrow
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.6,
            }}
            className="text-gray-100 text-sm md:text-base max-w-md mb-10 leading-relaxed opacity-90 font-medium"
          >
            Our laboratory transforms complex data into meaningful breakthroughs
            that impact health, industry, and sustainability.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.8,
            }}
            className="flex flex-wrap gap-4"
          >
            <NavLink
              to="/registration"
              className="flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-xl active:scale-95 group"
            >
              Get Started
              <LuArrowUpRight className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </NavLink>
            <NavLink
              to="/about-lab"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all active:scale-95"
            >
              <FaCalendarAlt className="text-secondary" />
              About Us
            </NavLink>
          </motion.div>
        </div>
      </div>

      {/* Downward Concave Curve (White Area Dipping Down) */}
      <div className="absolute bottom-0 left-0 w-full leading-0 z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120 L0 30 C 480 100, 960 100, 1440 30 L 1440 120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
