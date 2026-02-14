import React from "react";
import { motion } from "framer-motion";
import {
  FaMicroscope,
  FaHospital,
  FaNetworkWired,
  FaGlobe,
} from "react-icons/fa";

const NetworkOverview = () => {
  const networkNodes = [
    {
      icon: FaMicroscope,
      title: "Independent Pathology Labs",
      description:
        "Empowering stand-alone laboratories with advanced digital tools and connectivity to reach more patients.",
      color: "blue",
    },
    {
      icon: FaHospital,
      title: "Diagnostic Centers",
      description:
        "Integrating multi-specialty diagnostic facilities into a streamlined referral and reporting network.",
      color: "indigo",
    },
    {
      icon: FaNetworkWired,
      title: "Multi-location Chains",
      description:
        "Providing unified management solutions for large-scale laboratory networks across different geographies.",
      color: "violet",
    },
  ];

  return (
    <section className="py-2 bg-gray-50/50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="h-px w-8 bg-secondary"></span>
            <span className="text-secondary font-bold uppercase tracking-wider text-sm">
              Our Network
            </span>
            <span className="h-px w-8 bg-secondary"></span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight"
          >
            Network Overview
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-primary/70 font-medium leading-relaxed"
          >
            Our network includes independent pathology labs, diagnostic centers,
            and multi-location laboratory chains connected through a unified
            digital platform.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {networkNodes.map((node, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-xl shadow-primary/5 border border-gray-100 group transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                <node.icon className="text-2xl text-primary transition-colors duration-500 group-hover:text-white" />
              </div>

              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                {node.title}
              </h3>

              <p className="text-primary/60 font-medium leading-relaxed">
                {node.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Unified Platform Integration Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-linear-to-r from-primary to-primary-dark p-1 rounded shadow-2xl overflow-hidden"
        >
          <div className="bg-white/95 backdrop-blur-sm px-8 py-10 rounded flex flex-col md:flex-row items-center justify-between gap-8 border border-white/20">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 animate-pulse">
                <FaGlobe className="text-3xl text-secondary" />
              </div>
              <div>
                <h4 className="text-2xl font-black text-primary mb-2 italic">
                  Unified Digital Platform
                </h4>
                <p className="text-primary/70 font-semibold max-w-xl">
                  Bringing together disjointed laboratory services into a
                  cohesive, technology-driven ecosystem for better healthcare
                  outcomes.
                </p>
              </div>
            </div>

            <button className="px-8 py-4 bg-primary text-white font-bold rounded hover:bg-secondary transition-all duration-300 shadow-lg shadow-primary/20 whitespace-nowrap">
              Explore Platform
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NetworkOverview;
