import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="relative pt-40 pb-10 bg-secondary flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white/80 font-bold text-xs uppercase tracking-[0.3em] mb-4 block"
        >
          About Our Platform
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white text-3xl md:text-5xl font-black uppercase tracking-tight mb-6 leading-tight"
        >
          Organizing Diagnostics into a <br />
          <span className="text-white opacity-90 italic">
            Structured Ecosystem
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/80 text-sm md:text-base max-w-2xl mx-auto mb-8 font-normal leading-relaxed"
        >
          Improve diagnostic awareness, transparency, and connectivity across
          healthcare stakeholders with our unified pathology laboratory network.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-2 text-white/90 text-xs font-bold uppercase tracking-widest"
        >
          <Link
            to="/"
            className="hover:text-white underline underline-offset-4"
          >
            Home
          </Link>
          <span className="w-1.5 h-1.5 bg-white/40 rounded-full mx-2"></span>
          <span className="text-white">About</span>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
