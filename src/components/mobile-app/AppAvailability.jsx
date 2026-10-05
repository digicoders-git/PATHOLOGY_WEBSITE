import React from "react";
import { motion } from "framer-motion";
import {
  FaApple,
  FaGooglePlay,
  FaDownload,
  FaMobileAlt,
  FaArrowRight,
} from "react-icons/fa";
import { useAppModal } from "../../context/AppModalContext";

const AppAvailability = () => {
  const { openAppleStoreModal } = useAppModal();
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight uppercase tracking-tight"
            >
              App <span className="text-secondary">Availability</span>
            </motion.h2>

            <p className="text-gray-500 text-sm md:text-base mb-6 leading-relaxed">
              Our mobile applications are available on both Android and iOS
              platforms, ensuring universal compatibility.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-gray-700 font-bold text-[10px] uppercase tracking-tight">
                <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center text-secondary text-[8px]">
                  <FaArrowRight />
                </div>
                <span>Universal Compatibility</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 font-bold text-[10px] uppercase tracking-tight">
                <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center text-secondary text-[8px]">
                  <FaArrowRight />
                </div>
                <span>Real-time Cloud Sync</span>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4">


            <motion.a
              href="https://play.google.com/store/apps/details?id=digi.coders.laboindia&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="flex-1 bg-white p-4 rounded-xl flex items-center gap-4 group transition-all border border-gray-100 shadow-sm hover:shadow-lg"
            >
              <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-secondary text-xl group-hover:bg-secondary group-hover:text-white transition-all border border-gray-100">
                <FaGooglePlay />
              </div>
              <div>
                <p className="text-gray-600 text-[10px] font-bold uppercase tracking-wider">
                  Download for
                </p>
                <h4 className="text-gray-900 text-sm font-black uppercase tracking-tight">
                  Android
                </h4>
              </div>
            </motion.a>

            
            <motion.button
              type="button"
              onClick={openAppleStoreModal}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-gray-900 p-4 rounded-xl flex items-center gap-4 group transition-all shadow-lg text-left cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white text-xl group-hover:bg-secondary transition-all">
                <FaApple />
              </div>
              <div>
                <p className="text-gray-300 text-[10px] font-bold uppercase tracking-wider">
                  Download for
                </p>
                <h4 className="text-white text-sm font-black uppercase tracking-tight">
                  iOS (Apple)
                </h4>
              </div>
            </motion.button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AppAvailability;
