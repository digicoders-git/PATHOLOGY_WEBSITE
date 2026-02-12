import React from "react";
import {
  FaShieldHalved,
  FaLock,
  FaUserShield,
  FaFileShield,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const DataConfidentiality = () => {
  const points = [
    {
      icon: FaLock,
      title: "Secure Handling",
      desc: "All medical data is stored on encrypted local servers with multi-layer firewall protection.",
    },
    {
      icon: FaUserShield,
      title: "Patient Privacy",
      desc: "Strict access control protocols ensure only authorized medical staff can view patient reports.",
    },
    {
      icon: FaFileShield,
      title: "Report Integrity",
      desc: "Digital reports are generated with unique identifiers to prevent tampering and ensure authenticity.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative pulse for a 'secure' feel */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] -translate-y-1/2 -ml-48 animate-pulse"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="lg:w-3/5 order-2 lg:order-1 will-change-transform"
          >
            <div className="flex items-center gap-2 mb-4">
              <FaShieldHalved className="text-secondary text-xl" />
              <span className="text-secondary font-black text-[10px] md:text-xs uppercase tracking-[0.3em] block">
                Security & Privacy
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter mb-8 leading-tight text-balance">
              Data Confidentiality
            </h2>

            <p className="text-primary/70 text-sm md:text-lg leading-relaxed mb-12 font-medium">
              All pathology records, reports, and patient testing information
              are handled securely under laboratory confidentiality standards.
              We treat your health data with the highest level of discretion.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="w-12 h-12 bg-pure-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center text-secondary text-xl mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    <point.icon />
                  </div>
                  <h4 className="text-primary font-black text-[11px] md:text-xs uppercase tracking-wider mb-3">
                    {point.title}
                  </h4>
                  <p className="text-primary/50 text-[11px] leading-relaxed font-normal">
                    {point.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side: Security Graphic Style */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="lg:w-2/5 order-1 lg:order-2 will-change-transform"
          >
            <div className="relative p-12 bg-primary rounded-[3rem] shadow-2xl overflow-hidden group">
              {/* Inner Decorative Patterns */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="secureGrid"
                      width="30"
                      height="30"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle cx="2" cy="2" r="1" fill="#FFFFFF" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#secureGrid)" />
                </svg>
              </div>

              <div className="relative z-10 text-center py-10">
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-xl rounded-full mb-8 border border-white/20"
                >
                  <FaShieldHalved className="text-white text-5xl" />
                </motion.div>
                <h3 className="text-white text-2xl font-black uppercase tracking-tight mb-4">
                  100% Secure
                </h3>
                <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em]">
                  Encrypted Data Environment
                </p>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DataConfidentiality;
