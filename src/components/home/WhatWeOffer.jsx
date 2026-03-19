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
      title: "Real time Bookings",
      desc: "Verified profiles for transparency and trust.",
    },
    {
      icon: FaListAlt,
      title: "Automatic Dashbaord",
      desc: "Clear info about tests and pricing.",
    },
    {
      icon: FaGlobe,
      title: "Digitalize your lab",
      desc: "Helping labs establish digital identity.",
    },
    {
      icon: FaNetworkWired,
      title: "Boost your lab Business growth",
      desc: "Connecting labs and diagnostic centers.",
    },
    {
      icon: FaMobileAlt,
      title: "Mobile App",
      desc: "Real-time report access on the go.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight uppercase tracking-tight"
            >
              What We Offer to <br />
              <span className="text-secondary">Network Partners</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-xs md:text-sm max-w-xs border-l-2 border-gray-200 pl-4 italic my-auto"
          >
            Digital infrastructure that empowers laboratories with modern tools.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group p-6 rounded-2xl bg-white border border-gray-400 flex flex-col h-full hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-secondary text-xl mb-4 group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                <offer.icon />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2 uppercase tracking-tight">
                {offer.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                {offer.desc}
              </p>
            </motion.div>
          ))}

          {/* Simple Join Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-2xl bg-secondary flex flex-col justify-center items-center text-center text-white shadow-lg shadow-secondary/10"
          >
            <h3 className="text-xl font-bold uppercase tracking-tight mb-2 leading-snug">
             इंडिया का अपना
             पैथोलॉजी नेटवर्क
            </h3>
            <p className="text-white/80 text-xs mb-6 italic">
              Connect your laboratory with us today.
            </p>
            <NavLink
              to="/registration"
              className="bg-white text-secondary font-bold text-[10px] uppercase tracking-widest px-6 py-3 rounded-lg hover:bg-gray-50 transition-all"
            >
              Register Now
            </NavLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
