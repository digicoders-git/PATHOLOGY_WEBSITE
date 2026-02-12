import React from "react";
import {
  FaVials,
  FaHandSparkles,
  FaThermometerHalf,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

const SampleCollection = () => {
  const steps = [
    {
      icon: FaVials,
      title: "Safe Collection",
      desc: "Procedures followed for risk-free sample extraction.",
    },
    {
      icon: FaHandSparkles,
      title: "Sterile Handling",
      desc: "Maintaining strict contamination-free protocols.",
    },
    {
      icon: FaThermometerHalf,
      title: "Controlled Storage",
      desc: "Optimal temperature regulation for sample stability.",
    },
    {
      icon: FaClock,
      title: "Timely Reporting",
      desc: "Fast-track processing for dependable clinical results.",
    },
  ];

  return (
    <section className="py-24 bg-pure-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="lg:w-1/2 will-change-transform"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-secondary font-black text-xs md:text-sm uppercase tracking-[0.3em]">
                Reliable Diagnostics
              </span>
              <div className="w-12 h-[2px] bg-secondary"></div>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tight leading-tight mb-8">
              Sample Collection
            </h2>

            <p className="text-primary/70 text-lg leading-relaxed mb-10 font-medium">
              Safe sample collection procedures followed by sterile handling,
              controlled storage, and timely pathology report generation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-4 items-start p-4 border border-gray-50 bg-background rounded-md group hover:border-secondary/20 transition-all"
                >
                  <div className="text-secondary text-2xl group-hover:scale-110 transition-transform">
                    <item.icon />
                  </div>
                  <div>
                    <h4 className="text-primary font-black text-xs uppercase tracking-wider mb-1">
                      {item.title}
                    </h4>
                    <p className="text-primary/60 text-[10px] leading-tight font-medium">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Left Side: Image with Floating Detail */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="lg:w-1/2 relative will-change-transform"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.squarespace-cdn.com/content/v1/57fbf3ed29687f1d95d56355/1487202601837-JHRPRFJA0T8DWNREOM7X/tissue+procurement.jpg?format=2500w"
                alt="Sample Collection Process"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/5"></div>
            </div>

            {/* Overlay Info Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute top-12 -left-8 bg-primary p-6 shadow-2xl z-20 hidden md:block border-l-4 border-secondary"
            >
              <div className="flex flex-col gap-4">
                {[
                  "Sterile Procedures",
                  "Proper Labeling",
                  "Temperature Control",
                ].map((p, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <FaCheckCircle className="text-secondary text-lg" />
                    <span className="text-white font-black text-[10px] uppercase tracking-widest">
                      {p}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Decorative background accent */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary rounded-full opacity-10 blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SampleCollection;
