import React from "react";
import { FaUserPlus, FaFileMedical, FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-pure-white">
      {/* Container for the Curved/Modern Box */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-primary rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-[0_25px_60px_rgba(30,58,95,0.3)] px-8 py-16 md:py-24"
        >
          {/* Decorative Background for inside the CTA box */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="ctaGrid"
                  width="60"
                  height="60"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 60 0 L 0 0 0 60"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ctaGrid)" />
            </svg>
          </div>

          {/* Accent Glows inside the box */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary opacity-20 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary opacity-10 rounded-full blur-[100px]"></div>

          <div className="relative z-20 text-center">
            <div className="max-w-3xl mx-auto">
              {/* Floating Icon with unique styling */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full mb-8 border border-white/20 shadow-2xl"
              >
                <FaUserPlus className="text-secondary text-4xl" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight leading-tight"
              >
                Call To Action
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6 text-white/80 text-lg md:text-xl leading-relaxed mb-12 font-medium"
              >
                <p className="max-w-xl mx-auto">
                  Register to access pathology testing services and diagnostic
                  report updates.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col md:flex-row gap-6 justify-center items-center"
              >
                {/* Main Action Button */}
                <NavLink
                  to="/registration"
                  className="group flex items-center gap-4 bg-secondary hover:bg-white text-white hover:text-primary px-10 py-5 rounded-xl font-black text-sm md:text-base transition-all duration-300 shadow-[0_10px_30px_rgba(42,157,143,0.4)] hover:shadow-2xl active:scale-95 uppercase tracking-widest"
                >
                  Register Now
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                </NavLink>

                {/* Sub Action / Benefit info */}
                <div className="flex items-center gap-3 text-white/80 bg-white/5 backdrop-blur-md px-6 py-4 border border-white/10 rounded-xl">
                  <FaFileMedical className="text-secondary text-xl" />
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">
                    Secure Report Access
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
