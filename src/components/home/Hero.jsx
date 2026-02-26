import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaHeartbeat, FaMicroscope } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-[50vh] lg:min-h-[65vh] flex items-center overflow-hidden bg-[#EF3E36] pt-10 md:pt-28">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-white blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-6xl py-4 lg:py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-10">
          {/* Left Content Area */}
          <div className="w-full lg:w-1/2 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4 tracking-tight font-sans">
                India’s Largest <br />
                <span className="">Connected Pathology</span> <br />
                <span className="">Network for Labs</span>
              </h1>

              <p className="text-white/90 text-xs md:text-sm font-normal max-w-sm mb-6 leading-relaxed font-sans">
                Connect your laboratory with a modern digital ecosystem, expand
                your reach, and deliver seamless diagnostic reports — all on one
                platform.
              </p>

              <div className="flex items-center justify-start">
                <NavLink
                  to="/downloadApp"
                  className="bg-white text-[#EF3E36] px-6 py-2.5 rounded-md font-bold text-sm transition-all shadow-xl hover:bg-gray-50 active:scale-95 font-sans"
                >
                  Download App
                </NavLink>
              </div>
            </motion.div>
          </div>

          {/* Right Mobile Mockup Area */}
          <div className="w-full lg:w-1/2 relative flex justify-center items-center h-[300px] md:h-[400px]">
            {/* Phone Mockup 1 (Left Back) */}
            <motion.div
              initial={{ opacity: 0, x: 0, rotate: 0 }}
              animate={{ opacity: 1, x: -50, rotate: -15 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="absolute z-10 w-[90px] md:w-[130px] lg:w-[160px] aspect-[9/19.5] bg-gray-900 rounded-[22px] md:rounded-[30px] border-4 md:border-[7px] border-gray-800 shadow-2xl overflow-hidden hidden md:block"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 md:w-24 h-3 md:h-6 bg-gray-800 rounded-b-lg z-30"></div>
              <img
                src="https://image.winudf.com/v2/image1/Y29tLm1lZGljYWwucGF0aG9sb2d5X3NjcmVlbl8yXzE2MTE1NTE1MThfMDE1/screen-0.jpg?fakeurl=1&type=.jpg"
                alt="App Interface"
                className="w-full h-full object-cover opacity-40"
              />
            </motion.div>

            {/* Phone Mockup 3 (Right Back) */}
            <motion.div
              initial={{ opacity: 0, x: 0, rotate: 0 }}
              animate={{ opacity: 1, x: 50, rotate: 15 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="absolute z-10 w-[90px] md:w-[130px] lg:w-[160px] aspect-[9/19.5] bg-gray-900 rounded-[22px] md:rounded-[30px] border-[4px] md:border-[7px] border-gray-800 shadow-2xl overflow-hidden hidden md:block"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 md:w-24 h-3 md:h-6 bg-gray-800 rounded-b-lg z-30"></div>
              <img
                src="https://image.winudf.com/v2/image1/Y29tLnN1bnBhdGhvbG9neWxhYl9zY3JlZW5fMV8xNTUxNDMxMzk5XzA2Ng/screen-1.jpg?fakeurl=1&type=.jpg"
                alt="App Interface"
                className="w-full h-full object-cover opacity-40"
              />
            </motion.div>

            {/* Phone Mockup 2 (Center Front - Main) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative z-30 w-[110px] md:w-[150px] lg:w-[180px] aspect-[9/19.5] bg-white rounded-[22px] md:rounded-[30px] border-[4px] md:border-[7px] border-gray-900 shadow-[0_25px_50px_rgba(0,0,0,0.3)] overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 md:w-24 h-3 md:h-6 bg-gray-900 rounded-b-lg z-40"></div>
              <div className="h-full w-full bg-white flex flex-col pt-6 p-2 md:p-3">
                <div className="w-full h-6 md:h-8 bg-gray-100 rounded-md mb-4 flex items-center px-1.5">
                  <div className="w-2.5 md:w-4 h-2.5 md:h-4 rounded-full bg-gray-200"></div>
                  <div className="ml-2 w-1/2 h-1 md:h-2 bg-gray-200 rounded"></div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="aspect-square bg-[#EF3E36]/5 rounded-lg border border-[#EF3E36]/10 flex flex-col items-center justify-center p-2"
                    >
                      <div className="w-5 md:w-8 h-5 md:h-8 rounded-full bg-[#EF3E36]/20 flex items-center justify-center mb-1">
                        <FaMicroscope className="text-[#EF3E36] text-[8px] md:text-[12px]" />
                      </div>
                      <div className="w-3/4 h-1 md:h-2 bg-[#EF3E36]/20 rounded"></div>
                    </div>
                  ))}
                </div>
                <div className="w-full h-18 md:h-24 bg-gray-50 rounded-lg mb-4 p-2 md:p-3 font-bold text-[8px] md:text-[10px]">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 font-normal">
                      Total Revenue
                    </span>
                    <span className="text-green-500">₹ 1.2L</span>
                  </div>
                  <div className="w-full h-6 md:h-10 bg-gray-100 rounded flex items-end gap-1 px-1">
                    {[3, 6, 4, 8, 5, 9, 7].map((h, i) => (
                      <div
                        key={i}
                        style={{ height: h * 10 + "%" }}
                        className="flex-1 bg-secondary/40 rounded-t-[1px]"
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="mt-auto w-full bg-[#EF3E36] h-8 md:h-11 rounded-lg flex items-center justify-center text-white text-[9px] md:text-xs font-bold uppercase tracking-widest shadow-lg shadow-[#EF3E36]/20">
                  Manage Lab
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-[-1px] left-0 w-full z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-auto"
        >
          <path
            fill="#F5F7FA"
            fillOpacity="1"
            d="M0,64L80,58.7C160,53,320,43,480,53.3C640,64,800,96,960,96C1120,96,1280,64,1360,48L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
