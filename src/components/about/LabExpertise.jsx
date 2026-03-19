import React, { useState, useEffect, useRef } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { motion, useSpring, useTransform, useInView } from "framer-motion";

const ProgressBar = ({ label, value, isVisible }) => {
  const springValue = useSpring(0, { stiffness: 40, damping: 20 });
  const displayValue = useTransform(
    springValue,
    (latest) => `${Math.floor(latest)}%`,
  );

  useEffect(() => {
    if (isVisible) {
      springValue.set(value);
    }
  }, [isVisible, value, springValue]);

  return (
    <div className="will-change-transform">
      <div className="flex justify-between items-center mb-2">
        <span className="text-primary font-black text-[11px] md:text-xs uppercase tracking-widest">
          {label}
        </span>
        <motion.span className="text-primary font-black text-xs md:text-sm">
          {displayValue}
        </motion.span>
      </div>
      <div className="w-full h-[10px] bg-background rounded-full overflow-hidden border border-gray-100 p-[2px]">
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${value}%` } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full bg-primary rounded-full relative"
        >
          {/* Shimmer effect for "left to right" movement feel */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent w-full h-full animate-shimmer scale-x-150"></div>
        </motion.div>
      </div>
    </div>
  );
};

const LabExpertise = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const listItems = [
    "Clinical Lab",
    "Customer Focused",
    "Marketing Automation",
    "Anatomy Research",
    "Reliable Results",
    "24/7 Support",
  ];

  const progressBars = [
    { label: "Preparation", value: 87 },
    { label: "Microscopy", value: 95 },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: "spring", stiffness: 100, damping: 25 }}
            className="lg:w-1/2 flex gap-3 h-[220px] md:h-[300px]"
          >
            <div className="w-1/2 h-full">
              <img
                src="https://i.pinimg.com/474x/05/dd/a6/05dda6da032c8d555ba3f5b2f8b627f7.jpg"
                alt="Scientist"
                className="w-full h-full object-cover rounded-2xl shadow-lg border border-gray-100"
              />
            </div>
            <div className="w-1/2 flex flex-col gap-3 h-full">
              <div className="h-[48%]">
                <img
                  src="https://i.pinimg.com/originals/5a/6f/45/5a6f458ec4246de6f072f41b237b705f.jpg?nii=t"
                  alt="Research"
                  className="w-full h-full object-cover rounded-2xl shadow-md border border-gray-100"
                />
              </div>
              <div className="h-[48%]">
                <img
                  src="https://i.pinimg.com/originals/0c/6b/b7/0c6bb797b81fde16e697d5e1b7325561.jpg"
                  alt="Microscope"
                  className="w-full h-full object-cover rounded-2xl shadow-md border border-gray-100"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: "spring", stiffness: 100, damping: 25 }}
            className="lg:w-1/2"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight uppercase tracking-tight"
            >
              Modern Research <span className="text-secondary">Expertise</span>
            </motion.h2>

            <p className="text-gray-500 text-sm md:text-base mb-6 leading-relaxed">
              Our pathology laboratory specializes in clinically reliable
              diagnostic testing through standardized laboratory procedures and
              expert analysis.
            </p>

            <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-8">
              {listItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2 group">
                  <FaArrowCircleRight className="text-secondary text-sm" />
                  <span className="text-gray-700 font-bold text-[10px] uppercase tracking-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-6 border-t border-gray-100">
              {progressBars.map((bar, index) => (
                <ProgressBar
                  key={index}
                  label={bar.label}
                  value={bar.value}
                  isVisible={isInView}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LabExpertise;
