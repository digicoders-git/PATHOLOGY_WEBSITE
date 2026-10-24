import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const WelcomeScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const completedRef = useRef(false);

  const handleFinish = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    if (onComplete) onComplete();
  };

  useEffect(() => {
    // Prevent scrolling while welcome screen is active
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4500);

    // Fallback timer to ensure onComplete is guaranteed to fire
    const fallbackTimer = setTimeout(() => {
      handleFinish();
    }, 5400);

    return () => {
      clearTimeout(timer);
      clearTimeout(fallbackTimer);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={handleFinish}>
      {isVisible && (
        <motion.div
          key="welcome-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          onClick={() => setIsVisible(false)}
          className="fixed inset-0 z-[99999] bg-[#FF0000] flex items-center justify-center overflow-hidden cursor-pointer select-none"
        >
          {/* Skip button top right */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsVisible(false);
            }}
            className="absolute top-6 right-6 text-white/80 hover:text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/30 hover:border-white transition-all duration-300"
          >
            Skip &times;
          </button>

          <motion.div
            // Starts small and smoothly grows to normal size (comes OUT towards the user)
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col items-center justify-center text-center px-4 w-full h-full max-w-xl mx-auto py-8 select-none"
          >
            {/* Top Pin Icon */}
            <div className="mb-4 sm:mb-6 flex justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 fill-white drop-shadow-md"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>

            {/* Subtitle */}
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-black mb-5 sm:mb-6 leading-snug tracking-wide">
              इंडिया का अपना<br />पैथोलॉजी लैब नेटवर्क
            </h2>

            {/* Center Circular Logo */}
            <div className="my-2 sm:my-4 flex items-center justify-center">
              <div className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl bg-white flex items-center justify-center p-2 transform transition-transform duration-300">
                <img
                  src="/labo_round_logo.png"
                  alt="LABO INDIA Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Bottom Tagline */}
            <div className="mt-4 sm:mt-6 flex flex-col items-center">
              <h3 className="text-white text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-normal">
                अब मेडिकल जाँच<br />हुई आसान!
              </h3>
              {/* Curved Yellow Swoosh */}
              <div className="w-60 sm:w-72 md:w-80 h-4 mt-2 sm:mt-3">
                <svg viewBox="0 0 300 20" className="w-full h-full" preserveAspectRatio="none">
                  <path
                    d="M5 16 C 90 2, 210 2, 295 14 C 210 5, 90 5, 5 16 Z"
                    fill="#FFDD00"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
