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
    "Clinical & Medical Laboratory",
    "Learn From Customer",
    "Engage Marketing Automation",
    "Exploring Anatomy In The Lab",
    "Experience Reliable Results",
    "Customer Support Services",
  ];

  const progressBars = [
    { label: "Sample Preparation", value: 87 },
    { label: "Advanced Microscopy", value: 95 },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-pure-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Side: Photo Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: "spring", stiffness: 100, damping: 25 }}
            className="lg:w-1/2 flex gap-4 h-[500px] will-change-transform"
          >
            <div className="w-1/2 h-full">
              <img
                src="https://i.pinimg.com/474x/05/dd/a6/05dda6da032c8d555ba3f5b2f8b627f7.jpg"
                alt="Scientist at work"
                className="w-full h-full object-cover rounded-md shadow-lg border border-gray-100"
                loading="lazy"
              />
            </div>
            <div className="w-1/2 flex flex-col gap-4 h-full">
              <div className="h-[48%]">
                <img
                  src="https://i.pinimg.com/originals/5a/6f/45/5a6f458ec4246de6f072f41b237b705f.jpg?nii=t"
                  alt="Lab research"
                  className="w-full h-full object-cover rounded-md shadow-md border border-gray-100"
                  loading="lazy"
                />
              </div>
              <div className="h-[48%]">
                <img
                  src="https://i.pinimg.com/originals/0c/6b/b7/0c6bb797b81fde16e697d5e1b7325561.jpg"
                  alt="Microscope detail"
                  className="w-full h-full object-cover rounded-md shadow-md border border-gray-100"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: "spring", stiffness: 100, damping: 25 }}
            className="lg:w-1/2 text-primary will-change-transform"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-[2px] bg-secondary"></div>
              <span className="text-secondary font-black text-[10px] md:text-xs uppercase tracking-[0.2em] block">
                Our Mission
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-[1.1] uppercase tracking-tighter">
              We Are A Modern Research <br className="hidden md:block" /> Expert
              Company
            </h2>

            <p className="text-primary/60 text-xs md:text-sm leading-relaxed mb-8 font-medium max-w-2xl">
              Our pathology laboratory specializes in providing clinically
              reliable diagnostic testing through standardized laboratory
              procedures. We transform complex data into meaningful
              breakthroughs that impact health and industry.
            </p>

            {/* Grid List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 mb-10">
              {listItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <FaArrowCircleRight className="text-secondary text-base group-hover:scale-110 transition-transform" />
                  <span className="text-primary/80 font-bold text-[11px] md:text-xs tracking-tight">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Animated Progress Bars */}
            <div className="space-y-6 pt-8 border-t border-gray-100">
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
