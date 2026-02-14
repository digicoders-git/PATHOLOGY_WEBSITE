import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AppHero = () => {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden pt-44 pb-20 bg-primary">
      {/* Background with Professional Image and Overlay */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <img
          src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
          alt="Mobile Health Application"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Professional depth with gradient overlay */}
        <div className="absolute inset-0 bg-primary/60"></div>
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
          className="text-secondary font-bold text-xs md:text-sm uppercase tracking-[0.4em] mb-4 block"
        >
          DIGITAL CONNECTIVITY
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
          className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-tight max-w-4xl mx-auto"
        >
          App <span className="text-secondary">Overview</span>
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
          className="text-white/80 text-sm md:text-lg max-w-3xl mx-auto mb-10 font-medium leading-relaxed"
        >
          Our mobile applications bridge the gap between patients and pathology
          laboratories by providing structured digital interaction.
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
          <span className="text-white/70">Mobile App</span>
        </motion.div>
      </div>
    </section>
  );
};

export default AppHero;
