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
      title: "Independent Labs",
      description: "Empowering stand-alone laboratories with digital tools.",
    },
    {
      icon: FaHospital,
      title: "Diagnostic Centers",
      description: "Integrating specialty facilities into a digital network.",
    },
    {
      icon: FaNetworkWired,
      title: "Multi-location Chains",
      description: "Unified management for large laboratory networks.",
    },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 uppercase tracking-tight"
          >
            Network Overview
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 md:p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm relative group italic text-gray-600 text-sm"
          >
            "Connecting independent pathology labs, diagnostic centers, and
            multi-location laboratory chains through a unified digital
            platform."
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {networkNodes.map((node, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-secondary transition-all group flex items-start gap-4 shadow-sm hover:shadow-xl hover:shadow-gray-200/50"
            >
              <div className="w-12 h-12 shrink-0 bg-gray-50 rounded-xl flex items-center justify-center text-secondary text-xl group-hover:bg-secondary group-hover:text-white transition-colors duration-300 shadow-sm">
                <node.icon />
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-base uppercase tracking-tight mb-1 transition-colors">
                  {node.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {node.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkOverview;
