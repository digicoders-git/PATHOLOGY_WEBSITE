import React from "react";
import { motion } from "framer-motion";
import { FaMicroscope, FaHandshake, FaShieldAlt } from "react-icons/fa";

const SnapshotSection = () => {
  const highlights = [
    {
      icon: FaShieldAlt,
      title: "Verified",
      desc: "Only certified labs in one trusted network.",
    },
    {
      icon: FaMicroscope,
      title: "Diagnostic",
      desc: "Find and understand services easily.",
    },
    {
      icon: FaHandshake,
      title: "Connection",
      desc: "Bridging labs with efficient management.",
    },
  ];

  return (
    <section className="py-12 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 uppercase tracking-tight"
          >
            Digital Core Mission
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 md:p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm relative group"
          >
            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal relative z-10 italic">
              "Simplified diagnostic accessibility by bringing verified labs
              into one structured ecosystem. We focus on reliable information
              and standardized visibility."
            </p>
          </motion.div>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-secondary transition-all group flex items-start gap-4"
            >
              <div className="w-12 h-12 shrink-0 bg-gray-50 rounded-xl flex items-center justify-center text-secondary text-xl group-hover:bg-secondary group-hover:text-white transition-colors duration-300 shadow-sm">
                <item.icon />
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-base uppercase tracking-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SnapshotSection;
