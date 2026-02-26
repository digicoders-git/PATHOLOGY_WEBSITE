import React from "react";
import { motion } from "framer-motion";
import {
  FaNetworkWired,
  FaHospital,
  FaMicroscope,
  FaMapMarkedAlt,
} from "react-icons/fa";

const NetworkStrength = () => {
  const strengths = [
    {
      icon: FaMicroscope,
      title: "Independent",
      desc: "Digital identity for stand-alone centers.",
    },
    {
      icon: FaHospital,
      title: "Chains",
      desc: "Management for multi-location networks.",
    },
    {
      icon: FaNetworkWired,
      title: "Unified",
      desc: "Standardized protocols across network.",
    },
    {
      icon: FaMapMarkedAlt,
      title: "Accessible",
      desc: "Find verified labs across locations.",
    },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight uppercase tracking-tight mb-4"
          >
            Scaling Strength Across <br />
            <span className="text-secondary">Network Models</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm inline-block"
          >
            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal max-w-xl italic">
              "Supporting independent labs and multi-branch chains with
              standardized visibility across locations."
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm group hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-secondary text-xl mb-4 group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                <item.icon />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2 uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed px-2">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkStrength;
