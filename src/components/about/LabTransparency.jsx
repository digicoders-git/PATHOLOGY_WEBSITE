import React from "react";
import { motion } from "framer-motion";
import {
  FaFileMedical,
  FaMicroscope,
  FaBuilding,
  FaClock,
  FaCheckDouble,
} from "react-icons/fa";

const LabTransparency = () => {
  const transparencyItems = [
    {
      icon: FaFileMedical,
      title: "Services",
      description: "Detailed breakdown of all tests available.",
    },
    {
      icon: FaMicroscope,
      title: "Diagnostic",
      description: "Advanced methodologies in use.",
    },
    {
      icon: FaBuilding,
      title: "Facilities",
      description: "High hygiene and physical infrastructure.",
    },
    {
      icon: FaClock,
      title: "Operational",
      description: "Clear TAT and home collection info.",
    },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight uppercase tracking-tight"
          >
            Lab Information <span className="text-secondary">Transparency</span>
          </motion.h2>
          <p className="text-gray-500 text-sm italic">
            "Each laboratory profile includes comprehensive information to help
            patients make informed decisions."
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {transparencyItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all group flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                <item.icon className="text-xl text-secondary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-tight transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 text-[10px] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabTransparency;
