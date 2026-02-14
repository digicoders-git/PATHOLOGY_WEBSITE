import React from "react";
import { motion } from "framer-motion";
import {
  FaApple,
  FaGooglePlay,
  FaDownload,
  FaMobileAlt,
  FaArrowRight,
} from "react-icons/fa";

const AppAvailability = () => {
  return (
    <section className="py-2 bg-gray-50/50 relative overflow-hidden">
      {/* Decorative background patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/2 -skew-x-12 translate-x-1/4"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Heading and Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/10 text-secondary font-bold text-sm mb-6 uppercase tracking-wider">
                <FaDownload className="text-xs" />
                <span>Get Started Now</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
                App <span className="text-secondary italic">Availability</span>
              </h2>

              <p className="text-xl text-primary/70 font-semibold leading-relaxed mb-8">
                Available on Android and iOS platforms.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 text-primary/60 font-bold">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-[10px]">
                    <FaArrowRight />
                  </div>
                  <span>Universal Compatibility</span>
                </div>
                <div className="flex items-center gap-4 text-primary/60 font-bold">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-[10px]">
                    <FaArrowRight />
                  </div>
                  <span>Real-time Cloud Sync</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Platform Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6">
              {/* iOS Button */}
              <motion.a
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="flex-1 bg-primary p-6 rounded-2xl flex items-center gap-6 group transition-all duration-300 shadow-xl shadow-primary/20 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center text-white text-3xl group-hover:bg-secondary transition-colors duration-500">
                  <FaApple />
                </div>
                <div>
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">
                    Download for
                  </p>
                  <h4 className="text-white text-2xl font-black uppercase tracking-tight">
                    iOS (Apple)
                  </h4>
                </div>
              </motion.a>

              {/* Android Button */}
              <motion.a
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex-1 bg-white p-6 rounded-2xl flex items-center gap-6 group transition-all duration-300 shadow-xl border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-r from-secondary/0 via-secondary/5 to-secondary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <div className="w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center text-secondary text-3xl group-hover:bg-secondary group-hover:text-white transition-all duration-500 border border-gray-100 group-hover:border-secondary">
                  <FaGooglePlay />
                </div>
                <div>
                  <p className="text-primary/40 text-xs font-bold uppercase tracking-widest mb-1">
                    Download for
                  </p>
                  <h4 className="text-primary text-2xl font-black uppercase tracking-tight">
                    Android
                  </h4>
                </div>
              </motion.a>
            </div>
          </div>

          {/* Bottom Callout */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-20 border-t border-gray-200 pt-12 text-center"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-3">
                <FaMobileAlt className="text-secondary text-2xl" />
                <span className="text-primary font-black uppercase tracking-widest text-xs">
                  Responsive Design
                </span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full hidden md:block"></div>
              <div className="text-primary/40 text-[10px] font-black uppercase tracking-[0.5em]">
                One Platform • Infinite Connections
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default AppAvailability;
