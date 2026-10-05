import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearchLocation,
  FaFileMedical,
  FaMapMarkerAlt,
  FaHistory,
  FaBell,
  FaCheckCircle,
} from "react-icons/fa";

const APP_SCREENS = [
  {
    id: "patient-screen-1",
    src: "/app-screen-1.png",
    alt: "Nearby Labs & Map View",
  },
  {
    id: "patient-screen-2",
    src: "/app-screen-2.png",
    alt: "Explore All Diagnostic Labs",
  },
  {
    id: "patient-screen-3",
    src: "/app-screen-3.png",
    alt: "Bookings & Transaction History",
  },
  {
    id: "patient-screen-5",
    src: "/app-screen.jpg",
    alt: "Live Reports & Test Details",
  },
  {
    id: "patient-screen-splash",
    src: "/splash-screen.png",
    alt: "Labo India Splash Welcome",
  },
];

const PatientAppFeatures = () => {
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
    {
      icon: FaSearchLocation,
      title: "Lab Discovery",
      description: "Find certified laboratories in your vicinity.",
    },
    {
      icon: FaFileMedical,
      title: "Test Access",
      description: "Detailed info about tests and requirements.",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Real-time Tracking",
      description: "Monitor sample and report status.",
    },
    {
      icon: FaHistory,
      title: "History",
      description: "Securely manage diagnostic history.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side: Phone Preview with Auto Slide Carousel */}
          <div 
            className="w-full lg:w-1/2 flex flex-col justify-center items-center order-2 lg:order-1"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-[180px] sm:w-[220px] lg:w-[280px] aspect-[9/19] rounded-[36px] border-[8px] border-black shadow-[0_25px_35px_-15px_rgba(0,0,0,0.35)] overflow-hidden relative bg-black"
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
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to screen ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight uppercase tracking-tight"
            >
              Patient App <span className="text-secondary">Features</span>
            </motion.h2>

            <p className="text-gray-500 text-sm md:text-base mb-8 leading-relaxed">
              We've designed our patient application to prioritize accessibility
              and clarity, empowering you with full control over your diagnostic
              journey.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-secondary text-lg mb-3 group-hover:bg-secondary group-hover:text-white transition-all">
                    <feature.icon />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-tight">
                    {feature.title}
                  </h4>
                  <p className="text-gray-500 text-[10px] leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientAppFeatures;
