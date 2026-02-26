import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-40 pb-10 bg-secondary">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-4 leading-tight"
        >
          Contact <span className="opacity-70">Us</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white/90 text-sm md:text-base font-medium max-w-xl mx-auto mb-0 leading-relaxed italic"
        >
          "For general inquiries, partnership information, or platform-related
          questions, feel free to reach out to our dedicated support team."
        </motion.p>
      </div>
    </section>
  );
};

export default ContactHero;
