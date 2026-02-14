import React from "react";
import { motion } from "framer-motion";
import { FaRegClock, FaBusinessTime, FaInfoCircle } from "react-icons/fa";

const ResponseDisclaimer = () => {
  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="disclaimer-grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="30" cy="30" r="1" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#disclaimer-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-50/50 backdrop-blur-sm rounded-2xl border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
              <FaRegClock className="text-2xl text-secondary animate-pulse" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-primary/40">
                <FaInfoCircle className="text-xs" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                  Response Policy
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-primary mb-1 uppercase tracking-tight">
                Response{" "}
                <span className="text-secondary italic">Disclaimer</span>
              </h3>
              <p className="text-primary/70 font-semibold leading-relaxed">
                Responses are provided during business working hours. Our team
                ensures that all inquiries are handled with care and
                professional diligence.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3 px-6 py-4 bg-white rounded-xl shadow-inner border border-gray-50">
              <FaBusinessTime className="text-secondary" />
              <span className="text-primary font-bold text-sm">
                9:00 AM - 6:00 PM
              </span>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-[10px] text-primary/30 font-bold uppercase tracking-[0.4em]">
              Commitment to Transparency & Reliability
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResponseDisclaimer;
