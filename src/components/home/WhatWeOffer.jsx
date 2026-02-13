import React from "react";
import { motion } from "framer-motion";
import {
  FaSearchLocation,
  FaListAlt,
  FaGlobe,
  FaNetworkWired,
  FaMobileAlt,
  FaArrowRight,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const WhatWeOffer = () => {
  const offers = [
    {
      icon: FaSearchLocation,
      title: "Verified Lab Listings",
      desc: "Detailed and verified profiles of pathology laboratories for complete transparency and trust.",
    },
    {
      icon: FaListAlt,
      title: "Transparent Test Info",
      desc: "Comprehensive information about diagnostic tests, pricing, and required preparations.",
    },
    {
      icon: FaGlobe,
      title: "Digital Lab Presence",
      desc: "Helping pathology partners establish a strong digital identity within our structured network.",
    },
    {
      icon: FaNetworkWired,
      title: "Centralized Ecosystem",
      desc: "A unified platform connecting specialized labs, hospitals, and diagnostic centers seamlessly.",
    },
    {
      icon: FaMobileAlt,
      title: "Mobile Integration",
      desc: "User-friendly mobile applications for real-time report access and efficient test management.",
    },
  ];

  return (
    <section className="py-24 relative bg-background overflow-hidden">
      {/* Properly Fixed Background Layer */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            'url("https://t4.ftcdn.net/jpg/01/82/07/33/360_F_182073328_3uyQCUxbsUj70RZODSaWijksxHYD8Ck1.jpg")',
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "brightness(0.8) contrast(1.1)",
        }}
      >
        {/* Solid Overlay for text clarity - Fades the image specifically behind the content while keeping edges sharp */}
        <div className="absolute inset-0 bg-white/80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-10 h-[2px] bg-secondary"></div>
              <span className="text-secondary font-black text-xs uppercase tracking-[0.2em]">
                Feature Overview
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-primary leading-tight uppercase tracking-tighter"
            >
              What We Offer to Our <br />
              <span className="text-secondary">Network Partners</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primary/60 text-sm md:text-base font-medium max-w-sm border-l-2 border-gray-100 pl-6 hidden md:block"
          >
            We provide a comprehensive digital infrastructure that empowers both
            laboratories and patients with modern diagnostic tools.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="group p-8 rounded bg-background transition-all duration-500 border border-gray-100 flex flex-col h-full relative overflow-hidden"
            >
              {/* Top-to-Bottom Background Animation */}
              <div className="absolute inset-0 bg-primary -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded bg-white flex items-center justify-center text-secondary text-2xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                  <offer.icon />
                </div>
                <h3 className="text-xl font-black text-primary group-hover:text-white mb-4 uppercase tracking-tight transition-colors">
                  {offer.title}
                </h3>
                <p className="text-primary/60 group-hover:text-white/70 text-sm font-medium leading-relaxed mb-8 grow transition-colors">
                  {offer.desc}
                </p>
                {/* <div className="pt-6 border-t border-gray-200/50 group-hover:border-white/10 flex items-center justify-between">
                  <span className="text-primary/40 group-hover:text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">
                    Service 0{index + 1}
                  </span>
                  <FaArrowRight className="text-secondary translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                </div> */}
              </div>
            </motion.div>
          ))}

          {/* Special Join Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="p-8 rounded bg-secondary flex flex-col justify-center items-center text-center text-white relative overflow-hidden group shadow-xl shadow-secondary/20"
          >
            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4">
                Join Our <br /> Network Today
              </h3>
              <p className="text-white/80 text-sm font-medium mb-8 leading-relaxed">
                Connect your laboratory with a modern digital diagnostic
                platform.
              </p>
              <NavLink
                to="/registration"
                className="bg-primary cursor-pointer text-white font-black text-xs uppercase tracking-widest px-8 py-4 rounded hover:scale-105 active:scale-95 transition-all shadow-lg"
              >
                Register Lab
              </NavLink>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
