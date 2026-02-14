import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServicesHero = () => {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden pt-44 pb-20 bg-primary">
      {/* Background with Professional Gradient Overlay */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <img
          src="https://i.ytimg.com/vi/wzDH1BY3V4A/maxresdefault.jpg"
          alt="Pathology Testing Services"
          className="w-full h-full object-cover object-[center_10%]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-primary/40"></div>
        <div className="absolute inset-0 bg-linear-to-t from-primary via-transparent to-transparent"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.2,
          }}
          className="text-secondary font-bold text-xs md:text-sm uppercase tracking-[0.4em] mb-4 block drop-shadow-sm"
        >
          Comprehensive Care
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.4,
          }}
          className="text-white text-3xl md:text-5xl font-semibold uppercase tracking-tight mb-6"
        >
          Tests & Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.5,
          }}
          className="text-white/90 text-lg md:text-xl font-medium max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          We aim to ensure that diagnostic tests remain cost-effective without compromising accuracy, while maintaining a patient-friendly diagnostic environment.
        </motion.p>

        {/* Breadcrumbs with clean style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.6,
          }}
          className="flex items-center justify-center gap-3 text-white/90 text-xs md:text-sm font-medium uppercase tracking-[0.2em] bg-white/10 backdrop-blur-md w-fit mx-auto px-8 py-3 rounded-full border border-white/20 shadow-xl will-change-transform"
        >
          <Link to="/" className="hover:text-secondary transition-colors">
            Home
          </Link>
          <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
          <span className="text-white/70">Tests & Services</span>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
