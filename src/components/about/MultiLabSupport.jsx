import React from "react";
import { motion } from "framer-motion";
import {
  FaSitemap,
  FaEye,
  FaUsersCog,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

const MultiLabSupport = () => {
  const features = [
    {
      icon: FaEye,
      title: "Visibility",
      description: "Monitor branch operations from one dashboard.",
    },
    {
      icon: FaUsersCog,
      title: "Identity",
      description: "Maintain unique branding for each location.",
    },
    {
      icon: FaChartLine,
      title: "Reporting",
      description: "Consolidated analytics and reporting.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight uppercase tracking-tight"
            >
              Multi-Lab{" "}
              <span className="text-secondary italic">Chain Support</span>
            </motion.h2>

            <p className="text-gray-500 text-sm md:text-base mb-6 leading-relaxed">
              Our platform allows centralized visibility while maintaining
              individual branch identity for diagnostic providers with multiple
              locations.
            </p>

            <div className="grid grid-cols-1 gap-3">
              {[
                "Real-time synchronization",
                "Hierarchical permissions",
                "Multi-tenant architecture",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <FaCheckCircle className="text-secondary text-sm" />
                  <span className="text-gray-700 text-xs font-bold uppercase tracking-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-gray-100 group transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-gray-200/50"
                >
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-all">
                    <feature.icon className="text-lg text-secondary group-hover:text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-[10px] leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiLabSupport;
