import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaApple, FaGooglePlay, FaCheckCircle } from "react-icons/fa";
import { useAppModal } from "../../context/AppModalContext";

const APP_SCREENS = [
  {
    id: "screen-1",
    src: "/app-screen-1.png",
    alt: "Explore Labs on Map & Nearby",
  },
  {
    id: "screen-2",
    src: "/app-screen-2.png",
    alt: "Browse All Diagnostic Laboratories",
  },
  {
    id: "screen-3",
    src: "/app-screen-3.png",
    alt: "Manage Bookings & Transaction History",
  },
  {
    id: "screen-5",
    src: "/app-screen.jpg",
    alt: "Live Reports & Test Details",
  },
  {
    id: "screen-splash",
    src: "/splash-screen.png",
    alt: "Labo India Splash Welcome",
  },
];

const MobileAppPromotion = () => {
  const { openAppleStoreModal } = useAppModal();
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % APP_SCREENS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused]);

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

          {/* Phone Preview with Auto Slide Carousel */}
          <div 
            className="w-full lg:w-[40%] flex flex-col justify-center items-center mb-8 lg:mb-0"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="w-[180px] sm:w-[220px] lg:w-[285px] aspect-[9/19] rounded-[36px] border-[8px] border-black shadow-[0_25px_35px_-15px_rgba(0,0,0,0.5)] overflow-hidden relative bg-black"
            >
              {/* Dynamic Island / Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl z-20 pointer-events-none"></div>

              {/* Auto Sliding Screens */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentScreen}
                  src={APP_SCREENS[currentScreen].src}
                  alt={APP_SCREENS[currentScreen].alt}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full h-full object-cover select-none"
                />
              </AnimatePresence>
            </motion.div>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-2 mt-5">
              {APP_SCREENS.map((screen, idx) => (
                <button
                  key={screen.id}
                  type="button"
                  onClick={() => setCurrentScreen(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentScreen
                      ? "w-7 bg-secondary shadow-sm shadow-secondary/30"
                      : "w-2 bg-gray-200 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to screen ${idx + 1}`}
                />
              ))}
            </div>
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

              <a
                href="https://play.google.com/store/apps/details?id=digi.coders.laboindia&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-white flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-gray-900 transition-all shadow-md"
              >
                <FaGooglePlay className="text-base" />
                Play Store
              </a>

              <button
                type="button"
                onClick={openAppleStoreModal}
                className="bg-gray-900 text-white flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-md cursor-pointer active:scale-95"
              >
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