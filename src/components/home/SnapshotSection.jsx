import React from "react";
import { motion } from "framer-motion";
import { FaMicroscope, FaHandshake, FaShieldAlt } from "react-icons/fa";

const SnapshotSection = () => {
  const highlights = [
    {
      icon: FaShieldAlt,
      title: "Verified Ecosystem",
      desc: "Structured platform bringing only certified laboratories into one trusted network.",
    },
    {
      icon: FaMicroscope,
      title: "Diagnostic Accessibility",
      desc: "Simplifying how patients find and understand available diagnostic services.",
    },
    {
      icon: FaHandshake,
      title: "Seamless Connection",
      desc: "Bridging the gap between labs and providers with efficient digital management.",
    },
  ];

  return (
    <section className="py-2 relative overflow-hidden bg-background">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-black text-xs uppercase tracking-[0.3em] mb-4 block"
          >
            Digital Core
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-black text-primary mb-6 leading-tight uppercase tracking-tighter"
          >
            Our Mission & Platform Ecosystem
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 md:p-10 rounded-2xl bg-white/60 backdrop-blur-md border border-white shadow-xl shadow-primary/5 relative group"
          >
            <div className="absolute inset-0 bg-linear-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
            <p className="text-primary/70 text-base md:text-lg leading-relaxed font-semibold relative z-10">
              "Our platform is built to simplify diagnostic accessibility by
              bringing verified pathology laboratories into one structured
              ecosystem. We focus on reliable information, standardized lab
              visibility, and seamless communication between patients and
              laboratories."
            </p>
          </motion.div>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg shadow-primary/5 border border-gray-100 hover:border-secondary transition-all hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 bg-background rounded-xl flex items-center justify-center text-secondary text-2xl mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                <item.icon />
              </div>
              <h3 className="text-primary font-black text-lg uppercase tracking-tight mb-3">
                {item.title}
              </h3>
              <p className="text-primary/60 text-sm font-medium leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SnapshotSection;
