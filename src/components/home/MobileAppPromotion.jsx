import React from "react";
import { motion } from "framer-motion";
import { FaApple, FaGooglePlay, FaCheckCircle } from "react-icons/fa";

const MobileAppPromotion = () => {
  const features = [
    "Test tracking",
    "Digital workflow",
    "Instant reports",
    "Lab ecosystem",
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side: Scaled Down App Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative w-[180px] md:w-[220px] aspect-[9/19.5] bg-white rounded-4xl p-3 shadow-2xl border-[6px] border-gray-900 overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-gray-900 rounded-b-xl z-10"></div>
              <div className="h-full w-full bg-gray-50 flex flex-col p-4 pt-6">
                <div className="w-8 h-1 bg-gray-200 rounded-full mb-4"></div>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-10 bg-white rounded-lg shadow-sm w-full"
                    ></div>
                  ))}
                </div>
                <div className="mt-auto h-8 bg-secondary rounded-lg w-full"></div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <div className="lg:w-1/2 text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight uppercase tracking-tight mb-4"
            >
              Diagnostics at <br />
              <span className="text-secondary">Your Fingertips</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 text-sm mb-8 max-w-md"
            >
              Our mobile apps are designed for both patients and labs to track
              reports and manage workflows digitally.
            </motion.p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <FaCheckCircle className="text-secondary text-sm" />
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-tight">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-gray-900 text-white flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-md">
                <FaApple className="text-lg" />
                App Store
              </button>
              <button className="bg-secondary text-white flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-gray-900 transition-all shadow-md">
                <FaGooglePlay className="text-base" />
                Play Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppPromotion;
