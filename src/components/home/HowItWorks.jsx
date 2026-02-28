import React from "react";
import { motion } from "framer-motion";
import {
  FaUserPlus,
  FaSearchLocation,
  FaClipboardCheck,
  FaFileMedical,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus className="text-2xl" />,
    title: "Patient Login",
    desc: "Easily login or register to your account",
    color: "bg-white text-secondary border-gray-100",
  },
  {
    icon: <FaSearchLocation className="text-2xl" />,
    title: "Choose Lab",
    desc: "Select your preferred pathology lab",
    color: "bg-white text-secondary border-gray-100",
  },
  {
    icon: <FaClipboardCheck className="text-2xl" />,
    title: "Test",
    desc: "Visit lab for tests and consultation",
    color: "bg-white text-secondary border-gray-100",
  },
  {
    icon: <FaFileMedical className="text-2xl" />,
    title: "Get Reports",
    desc: "Download secure digital reports",
    color: "bg-white text-secondary border-gray-100",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-[#f1f5f9] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Our Process
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Simple and easy way for your diagnostics
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-12 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-gray-200 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center z-10"
            >
              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center border-2 ${step.color} shadow-sm mb-6 transition-transform hover:scale-105 hover:shadow-md relative`}
              >
                {step.icon}
                <span className="absolute -top-3 -right-3 w-8 h-8 bg-secondary text-white font-black text-xs rounded-full flex items-center justify-center shadow-md border-2 border-white">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-500 text-xs md:text-sm px-4 leading-relaxed font-normal font-sans">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
