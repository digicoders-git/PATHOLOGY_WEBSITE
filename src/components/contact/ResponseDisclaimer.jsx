import React from "react";
import { motion } from "framer-motion";
import { FaRegClock, FaBusinessTime, FaInfoCircle } from "react-icons/fa";

const ResponseDisclaimer = () => {
  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl border border-gray-100 p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm"
        >
          <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
            <FaRegClock className="text-xl text-secondary" />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-gray-900 mb-1 uppercase tracking-tight">
              Response <span className="text-secondary">Disclaimer</span>
            </h3>
            <p className="text-gray-500 text-[10px] leading-relaxed italic">
              "Responses are provided during business working hours. Our team
              ensures all inquiries are handled with professional diligence."
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3 px-4 py-2 bg-white rounded-lg border border-gray-100 shadow-sm">
            <FaBusinessTime className="text-secondary text-sm" />
            <span className="text-gray-700 font-bold text-xs uppercase tracking-tight">
              9:00 AM - 6:00 PM
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResponseDisclaimer;
