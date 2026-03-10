import React from "react";
import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaCloudDownloadAlt,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

const DownloadCTA = () => {
  return (
    <section className="py-16 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter"
        >
          Ready to <span>Start?</span>
        </motion.h2>

        <p className="text-white/80 text-sm md:text-lg mb-10 max-w-2xl mx-auto italic font-medium">
          "Download the app now and take full control of your diagnostic journey
          with 24/7 access to your health data."
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-black transition-all shadow-xl text-sm uppercase tracking-tight border border-white/10">
            <FaGooglePlay className="text-xl" />
            <span>Play Store</span>
          </button>
          <button className="flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-xl text-sm uppercase tracking-tight">
            <FaApple className="text-xl" />
            <span>App Store</span>
          </button>

        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
