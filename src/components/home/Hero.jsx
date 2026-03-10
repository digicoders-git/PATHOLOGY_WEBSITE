import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaMicroscope, FaGooglePlay, FaApple } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden bg-secondary pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24 lg:pb-28">
      {/* Premium Multi-Layer Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-15%] w-[600px] h-[600px] rounded-full bg-white/20 blur-[120px] mix-blend-soft-light animate-pulse"></div>
        <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-black/10 blur-[100px] mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-12 relative z-20 max-w-7xl">
        {/* Desktop Layout - Symmetrical 3-Column Arrangement */}
        <div className="hidden lg:flex flex-row items-center justify-between h-full">
          {/* Column 1: Text Section (35%) */}
          <div className="w-[65%] text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl mt-13 lg:text-[68px] font-black text-white leading-[1.15] mb-3 tracking-tighter font-sans drop-shadow-2xl w-full">
                इंडिया का अपना
                <span className="block mt-3">
                  <span className="text-white font-black me-3">पैथोलॉजी</span>
                  <span className="">नेटवर्क</span>
                </span>
              </h1>
              <p className="text-white text-xl md:text-2xl lg:text-5xl tracking-normal font-black mb-8 font-sans drop-shadow-md">
                India ka Apna Pathology Network
              </p>
              <p className="text-white/90 text-base font-normal max-w-sm mb-6 leading-relaxed font-sans opacity-80 border-l-2 border-white/20 pl-6">
                We offer a digital marketplace for Pathology/ Diagnostic labs.
                Patients can search pathology in their area.
              </p>



              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 relative">
                <NavLink
                  to="/mobile-app"
                  className="group bg-black border border-white/20 text-white px-6 py-3 rounded-xl font-bold text-[12px] transition-all shadow-xl hover:shadow-white/10 hover:-translate-y-1 active:scale-95 flex items-center gap-3 font-sans uppercase tracking-wider w-full sm:w-auto justify-center"
                >
                  <FaGooglePlay className="text-xl text-[#00f2fe]" />
                  <div className="text-left leading-tight">
                    <span className="block text-[8px] opacity-70">GET IT ON</span>
                    <span className="block text-[14px]">Google Play</span>
                  </div>
                </NavLink>

                <NavLink
                  to="/mobile-app"
                  className="group bg-black border border-white/20 text-white px-6 py-3 rounded-xl font-bold text-[12px] transition-all shadow-xl hover:shadow-white/10 hover:-translate-y-1 active:scale-95 flex items-center gap-3 font-sans uppercase tracking-wider w-full sm:w-auto justify-center pointer-events-none cursor-not-allowed"
                >
                  <FaApple className="text-2xl text-white" />
                  <div className="text-left leading-tight">
                    <span className="block text-[8px] opacity-70">Download on the</span>
                    <span className="block text-[14px]">App Store</span>
                  </div>
                </NavLink>

              </div>


              <p className="text-white text-lg mt-2 ">
                
              </p>
            </motion.div>
          </div>

          {/* Column 2: Center Logo Phone (30%) - PERFECTLY STRAIGHT & CENTERED */}
          <div className="w-[30%] flex justify-center items-center ml-75">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="w-[185px] aspect-[9/19.5] bg-white rounded-[36px] border-[8px] border-black shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center p-6 relative transform-none"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl"></div>
              <img
                src={logo}
                alt="Logo"
                className="w-36 object-contain drop-shadow-xl"
              />

            </motion.div>
          </div>

          {/* Column 3: Right App Phone (35%) - SAME SIZE & STRAIGHT */}
          <div className="w-[35%] flex justify-end items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-[185px] aspect-[9/19.5] bg-white rounded-[36px] border-[8px] border-black shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] overflow-hidden relative transform-none"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-20"></div>
              <img
                src="https://i.pinimg.com/originals/db/aa/21/dbaa21da2f2a51d2cb5b9b18657fed54.jpg"
                alt="App Interface"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 py-3 bg-secondary text-white text-[10px] font-black text-center uppercase tracking-widest">
                Live Health Reports
              </div>
            </motion.div>
          </div>
        </div>

        {/* Professional Mobile View - 60vh Concept */}
        <div className="lg:hidden flex flex-row items-center justify-between mt-15 h-[45vh] w-full px-2">
          {/* Left Column: Symmetrically Balanced (32%) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-2 w-[32%] items-start"
          >
            <div className="space-y-0.5  mt-17">
              <h1 className="text-[13px] font-black text-white leading-[1.2] mb-1 tracking-tight font-sans drop-shadow-xl">
                इंडिया का अपना <br />
                <span className="text-white font-black me-1">
                  पैथोलॉजी
                </span>
                <span className="">नेटवर्क</span>
              </h1>
              <p className="text-white text-[12px] tracking-normal font-black mb-3 font-sans drop-shadow-md">
                India ka Apna Pathology Network
              </p>
              <p className="text-white/90 text-[8px] max-w-[150px] leading-relaxed font-sans opacity-80 border-l border-white/20 pl-2">
                We offer a digital marketplace for Pathology/ Diagnostic labs.
                Patients can search pathology in their area.
              </p>
            </div>
            {/* <div className="flex gap-1 mt-2">
              <div className="w-1 h-1 rounded-full bg-white"></div>
              <div className="w-4 h-1 rounded-full bg-white/30"></div>
            </div> */}

            {/* Mobile View App Buttons Area */}
            <div className="flex flex-col items-start gap-2 mt-6 w-full relative">

              {/* Coming Soon Badge */}


              {/* Buttons */}
              <div className="flex flex-col gap-2 w-full">

                <NavLink
                  to="/mobile-app"
                  className="bg-black/80 border border-white/10 backdrop-blur-sm text-white px-2 py-1 rounded-md flex items-center gap-1 shadow-md w-fit"
                >
                  <FaGooglePlay className="text-[10px] text-[#00f2fe]" />
                  <div className="leading-none">
                    <span className="block text-[5px] opacity-70">GET IT ON</span>
                    <span className="block text-[8px] font-bold">Google Play</span>
                  </div>
                </NavLink>

                <NavLink
                  to="/mobile-app"
                  className="bg-black/80 border border-white/10 backdrop-blur-sm text-white px-2 py-1 rounded-md flex items-center gap-1 shadow-md w-fit pointer-events-none cursor-not-allowed"
                >
                  <FaApple className="text-[10px] text-white" />
                  <div className="leading-none">
                    <span className="block text-[5px] opacity-70">Download</span>
                    <span className="block text-[8px] font-bold">App Store</span>
                  </div>
                </NavLink>
                <p className="text-white text-xs mt-2 ">
                  
                </p>

              </div>

            </div>
          </motion.div>

          {/* Center Column: Perfectly Horizontally Centered (36%) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-[36%] flex justify-center z-20"
          >
            <div className="w-[110px] aspect-[9/19.5] bg-white rounded-[28px] border-[5px] border-black shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] relative flex flex-col items-center justify-center p-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-3 bg-black rounded-b-xl z-20"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none rounded-[22px]"></div>
              <img
                src={logo}
                alt="Logo"
                className="w-22 object-contain mb-3 drop-shadow-lg"
              />
              <div className="text-center">
                <span className="text-secondary font-black text-[8px] uppercase block tracking-tight">
                  LABO INDIA
                </span>
                <span className="text-secondary/60 font-bold text-[4px] uppercase tracking-widest block mt-1">
                  Connecting Pathology Labs
                </span>
              </div>
              <div className="absolute bottom-4 w-1/4 h-[3px] bg-gray-100 rounded-full"></div>
            </div>
          </motion.div>

          {/* Right Column: Symmetrically Balanced (32%) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-[32%] flex justify-end items-center"
          >
            <div className="w-[90px] aspect-[9/19.5] bg-white rounded-[22px] border-4 border-gray-950 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.4)] overflow-hidden relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-3 bg-gray-950 rounded-b-lg z-20"></div>
              <img
                src="https://i.pinimg.com/originals/db/aa/21/dbaa21da2f2a51d2cb5b9b18657fed54.jpg"
                alt="App"
                className="w-full h-full object-cover opacity-100"
              />
              <div className="absolute inset-x-0 bottom-0 py-1 bg-secondary text-white text-[5px] font-black text-center uppercase tracking-tighter">
                Live Reports
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Premium Shape Transition */}
      <div className="absolute -bottom-px left-0 w-full z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-auto drop-shadow-[-10px_-10px_20px_rgba(0,0,0,0.05)]"
        >
          <path
            fill="#f1f5f9"
            fillOpacity="1"
            d="M0,64L80,58.7C160,53,320,43,480,53.3C640,64,800,96,960,96C1120,96,1280,64,1360,48L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
