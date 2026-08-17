import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const WelcomeScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Increased time so it stays on screen longer (4.5 seconds)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4500); 

    // Prevent scrolling while welcome screen is active
    document.body.style.overflow = 'hidden';
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="welcome-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] bg-[#b10d0d] flex items-center justify-center overflow-hidden"
        >
          <motion.div
            // Starts small and smoothly grows to normal size (comes OUT towards the user)
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col items-center justify-center text-center px-4 w-full h-full max-w-2xl mx-auto py-12"
          >
            {/* Top Icon */}
            <div className="mb-12 relative">
               <FaMapMarkerAlt className="text-white text-6xl md:text-8xl drop-shadow-md" />
            </div>

            {/* Subtitle */}
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-10 leading-snug">
              इंडिया का अपना<br />पैथोलॉजी लैब नेटवर्क
            </h2>

            {/* Logo Text */}
            <div className="flex flex-col items-center mb-16">
              <span className="text-6xl md:text-8xl font-black text-white uppercase tracking-tight flex items-center">
                LABO<span className="inline-flex relative -top-[0.5em] text-[0.5em] ml-[2px] mr-[4px]"><FaMapMarkerAlt /></span> INDIA
              </span>
              <span className="text-white/90 text-[11px] md:text-[14px] font-bold uppercase tracking-[0.3em] mt-4">
                Connecting Pathology Labs
              </span>
            </div>

            {/* Bottom Tagline */}
            <div className="relative mt-4">
              <h3 className="text-[#ffcb05] text-4xl md:text-5xl font-black italic leading-tight pb-2">
                अब मेडिकल जाँच<br />हुई आसान
              </h3>
              {/* Swoosh underline */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-56 h-[3px] bg-gradient-to-r from-transparent via-[#ffcb05] to-transparent rounded-full opacity-90"></div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
