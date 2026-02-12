import React from "react";
import { GiTestTubes } from "react-icons/gi";
import { FaMicroscope, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutSection = () => {
  const points = [
    "Clinical pathology diagnostic testing services",
    "Standardized laboratory sample processing",
    "Accurate blood and biochemical analysis",
    "Infection screening and microbiology testing",
    "Professional pathology report support",
  ];

  return (
    <section className="py-16 bg-pure-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side: Image with Decorative Element */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="lg:w-[45%] relative will-change-transform"
          >
            <div className="absolute right-[-15px] top-[10%] bottom-[10%] w-[80px] bg-primary rounded-l-md hidden lg:block z-0"></div>
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop"
                alt="Doctor in Lab"
                className="w-full h-auto max-h-[500px] object-cover rounded-md shadow-xl grayscale-15 hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right Side: Compact Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="lg:w-[55%] text-primary will-change-transform"
          >
            <span className="text-secondary font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2 block">
              About Pathology Lab
            </span>
            <h2 className="text-2xl md:text-4xl font-black mb-4 leading-tight">
              Advanced Clinical <br className="hidden md:block" />
              Pathology Testing Services
            </h2>
            <p className="text-primary/70 text-xs md:text-sm leading-relaxed mb-6 font-medium max-w-2xl">
              Our pathology laboratory specializes in clinical diagnostic
              testing, including blood investigations, biochemical analysis, and
              microbiology screening. All procedures follow standardized
              protocols to ensure reliable accuracy and consistent pathology
              reporting.
            </p>

            {/* Feature Blocks (Two Columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 border-b border-gray-100 pb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex gap-3 items-start"
              >
                <div className="text-secondary text-3xl shrink-0">
                  <GiTestTubes />
                </div>
                <div>
                  <h4 className="text-base font-black mb-1 uppercase tracking-tight">
                    Lab Technicians
                  </h4>
                  <p className="text-primary/70 text-[11px] leading-snug font-medium">
                    Qualified technicians manage sample collection using
                    calibrated equipment.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex gap-3 items-start"
              >
                <div className="text-secondary text-3xl shrink-0">
                  <FaMicroscope />
                </div>
                <div>
                  <h4 className="text-base font-black mb-1 uppercase tracking-tight">
                    Diagnostic Facility
                  </h4>
                  <p className="text-primary/70 text-[11px] leading-snug font-medium">
                    Modern analyzers support accurate clinical testing and
                    processing.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Lower Section: Points List & Mini Image */}
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <ul className="flex-1 space-y-2">
                {points.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-2 group"
                  >
                    <FaCheckCircle className="text-secondary text-base group-hover:scale-110 transition-transform" />
                    <span className="text-primary font-bold text-[11px] md:text-xs tracking-tight">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full md:w-[200px] overflow-hidden rounded-md shadow-lg border border-gray-50"
              >
                <img
                  src="https://i.pinimg.com/originals/12/53/1d/12531d8e6349c72ff8a4da83d5a528f0.jpg?nii=t"
                  alt="Laboratory Facility"
                  className="w-full h-[120px] object-cover hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
