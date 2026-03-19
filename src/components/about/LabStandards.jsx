import React from "react";
import {
  FaClipboardCheck,
  FaFileMedical,
  FaMicroscope,
  FaCertificate,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const LabStandards = () => {
  const standards = [
    {
      icon: FaClipboardCheck,
      title: "Clinical",
      desc: "Standardized pathology protocols.",
    },
    {
      icon: FaFileMedical,
      title: "Diagnostic",
      desc: "Reliable and accurate reporting.",
    },
    {
      icon: FaMicroscope,
      title: "Testing",
      desc: "Frequent quality audits.",
    },
    {
      icon: FaCertificate,
      title: "Quality",
      desc: "International guidelines.",
    },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight uppercase tracking-tight"
          >
            Lab <span className="text-[#c32019]">Standards</span>
          </motion.h2>

          <p className="text-gray-500 text-xs italic">
            "We maintain 100% adherence to biosafety and analytical guidelines
            for reliable diagnostic output."
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((standard, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-secondary transition-all group flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:shadow-gray-200/50"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-secondary text-xl mb-4 group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                <standard.icon />
              </div>
              <h3 className="text-gray-900 font-bold text-sm uppercase tracking-tight mb-2">
                {standard.title}
              </h3>
              <p className="text-gray-500 text-[10px] leading-relaxed">
                {standard.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabStandards;
