import React from "react";
import { motion } from "framer-motion";
import { FaApple, FaGooglePlay, FaCheckCircle } from "react-icons/fa";
import logo from "../../assets/logo.png";

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
          <div className="w-[40%] flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="w-[215px] aspect-[9/19.5] bg-white rounded-[36px] border-[8px] border-black shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center p-6 relative transform-none"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl"></div>
              <img
                src={logo}
                alt="Logo"
                className="w-22 object-contain mb-4 drop-shadow-xl"
              />
              <div className="text-center space-y-1">
                <span className="text-secondary font-black text-lg tracking-tighter block">
                  LABO INDIA
                </span>
                <div className="w-8 h-[1.5px] bg-secondary/10 mx-auto rounded-full"></div>
                <span className="text-secondary/60 font-bold text-[9px] uppercase tracking-widest block">
                  Connecting Pathology Labs
                </span>
              </div>
              <div className="absolute bottom-6 w-1/4 h-1 bg-gray-100 rounded-full"></div>
            </motion.div>
          </div>

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
