import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AppHero = () => {
  return (
    <section className="relative pt-40 pb-10 bg-secondary flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white/80 font-bold text-xs uppercase tracking-[0.3em] mb-4 block"
        >
          App Overview
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-pure-white text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4"
        >
          Digital <span>Connectivity</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/90 text-sm md:text-base font-medium max-w-2xl mx-auto mb-4 italic"
        >
          "Bridging the gap between patients and pathology laboratories with
          structured digital interaction."
        </motion.p>
      </div>
    </section>
  );
};

export default AppHero;
