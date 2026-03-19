import React from "react";
import { motion } from "framer-motion";
import { FaApple, FaGooglePlay, FaCheckCircle } from "react-icons/fa";
import logo from "../../assets/updated_logo.png";

const MobileAppPromotion = () => {
  const features = [
    "Book lab test from home",
    "Compare trusted lab",
    "Compare lab test prices",
    "Test tracking",
    "Digital reports on mobile",
    "Instant reports",
    "Get hassle-Free test",
    "Book sample home collection",
    "Ambulance Facility if available",

  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Phone Preview */}
          <div className="w-full lg:w-[40%] flex justify-center items-center mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="w-[170px] sm:w-[200px] lg:w-[285px] aspect-[9/19] bg-white rounded-[36px] border-[8px] border-black shadow-[0_25px_30px_-20px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center p-6 relative"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl"></div>

              <img
                src={logo}
                alt="Logo"
                className="w-28 sm:w-32 lg:w-40 object-contain drop-shadow-xl"
              />

              <div className="absolute bottom-6 w-1/4 h-1 bg-gray-100 rounded-full "></div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left ">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight uppercase tracking-tight mb-4 "
            >
              Diagnostics at <br />
              <span className="text-secondary">Your Fingertips</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 text-sm mb-8 max-w-md mx-auto lg:mx-0 italic"
            >
              Our mobile apps are designed for both patients and labs to track
              reports and manage workflows digitally.
            </motion.p>

            {/* Features */}
            <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2 mx-8 items-start justify-start">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 lg:justify-start">
                  <FaCheckCircle className="text-secondary text-sm" />
                  <span className="text-sm font-bold text-gray-700 uppercase tracking-tight">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">

              <button className="bg-secondary text-white flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-gray-900 transition-all shadow-md">
                <FaGooglePlay className="text-base" />
                Play Store
              </button>

              <button className="bg-gray-900 text-white flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-md">
                <FaApple className="text-lg" />
                App Store
              </button>


            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MobileAppPromotion;