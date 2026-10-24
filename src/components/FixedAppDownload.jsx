import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { motion } from "framer-motion";
import { useAppModal } from "../context/AppModalContext";

const FixedAppDownload = () => {
  const { openAppleStoreModal } = useAppModal();

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-[90] flex flex-col gap-3 items-end pointer-events-auto"
    >
      {/* Android Download Link */}
      <a
        href="https://play.google.com/store/apps/details?id=digi.coders.laboindia&pcampaignid=web_share"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center bg-white text-primary rounded-l-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-y border-l border-gray-100 p-3 md:p-4 transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-x-2"
        title="Download for Android"
      >
        <FaGooglePlay className="text-xl md:text-2xl shrink-0" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[150px] group-hover:ml-3 transition-all duration-500 ease-in-out text-[11px] md:text-sm font-semibold uppercase tracking-wider">
          Android App
        </span>
      </a>

      {/* iOS Download Link */}
      <button
        type="button"
        onClick={openAppleStoreModal}
        className="group relative flex items-center bg-white text-primary rounded-l-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-y border-l border-gray-100 p-3 md:p-4 transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-x-2 cursor-pointer active:scale-95"
        title="iOS App - Coming Soon"
      >
        <FaApple className="text-xl md:text-2xl shrink-0" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[150px] group-hover:ml-3 transition-all duration-500 ease-in-out text-[11px] md:text-sm font-semibold uppercase tracking-wider">
          iOS App
        </span>
      </button>
    </motion.div>
  );
};

export default FixedAppDownload;
