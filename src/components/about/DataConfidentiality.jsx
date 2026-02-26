import React from "react";
import {
  FaShieldHalved,
  FaLock,
  FaUserShield,
  FaFileShield,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const DataConfidentiality = () => {
  const points = [
    {
      icon: FaLock,
      title: "Secure Handling",
      desc: "All medical data is stored on encrypted local servers.",
    },
    {
      icon: FaUserShield,
      title: "Patient Privacy",
      desc: "Strict access control protocols ensure zero data leaks.",
    },
    {
      icon: FaFileShield,
      title: "Report Integrity",
      desc: "Digital reports are generated with unique identifiers.",
    },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight uppercase tracking-tight"
          >
            Data <span className="text-secondary">Confidentiality</span>
          </motion.h2>
          <p className="text-gray-500 text-sm italic">
            "Your health records and testing information are handled securely
            under the highest laboratory standards."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-secondary transition-all group flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:shadow-gray-200/50"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                <point.icon className="text-xl text-secondary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-tight transition-colors">
                {point.title}
              </h3>
              <p className="text-gray-500 text-[10px] leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataConfidentiality;
