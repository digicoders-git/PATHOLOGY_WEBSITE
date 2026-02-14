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
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-xl rounded-4xl p-8 md:p-16 border border-white/10 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-secondary font-bold text-xs uppercase tracking-widest mb-6 border border-white/5">
                <FaCloudDownloadAlt className="animate-bounce" />
                <span>Instant Access</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Download the <span className="text-secondary italic">App</span>
              </h2>

              <p className="text-xl text-white/70 font-medium leading-relaxed mb-0">
                Download the app to access diagnostic information anytime. Stay
                connected with your health data 24/7.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="shrink-0 flex flex-col sm:flex-row gap-4 w-full lg:w-auto"
            >
              <button className="flex-1 lg:flex-none flex items-center justify-center gap-4 px-8 py-5 bg-white text-primary font-black rounded-2xl hover:bg-secondary transition-all duration-300 shadow-xl group">
                <FaApple className="text-3xl" />
                <div className="text-left">
                  <p className="text-[10px] uppercase opacity-60 leading-none">
                    iOS App
                  </p>
                  <p className="text-lg leading-none mt-1">App Store</p>
                </div>
              </button>

              <button className="flex-1 lg:flex-none flex items-center justify-center gap-4 px-8 py-5 bg-secondary text-primary font-black rounded-2xl hover:bg-white hover:text-primary transition-all duration-300 shadow-xl group">
                <FaGooglePlay className="text-2xl" />
                <div className="text-left">
                  <p className="text-[10px] uppercase opacity-60 leading-none">
                    Android App
                  </p>
                  <p className="text-lg leading-none mt-1">Play Store</p>
                </div>
              </button>
            </motion.div>
          </div>

          {/* Social Proof / Trust Line */}
          <div className="mt-12 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-2 text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">
              <FaMobileAlt className="text-secondary" />
              <span>Verified Secure</span>
            </div>
            <div className="h-1 w-1 bg-white/20 rounded-full hidden md:block"></div>
            <div className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">
              Ad-Free Experience
            </div>
            <div className="h-1 w-1 bg-white/20 rounded-full hidden md:block"></div>
            <div className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">
              Free to Download
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
