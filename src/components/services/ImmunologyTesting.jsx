import React from "react";
import {
  FaShieldVirus,
  FaVialCircleCheck,
  FaUserShield,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const ImmunologyTesting = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section className="py-12 bg-pure-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Modern Curved Box to separate from footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-primary rounded-[3rem] md:rounded-[4rem] p-12 md:py-24 md:px-20 relative overflow-hidden shadow-[0_25px_60px_rgba(30,58,95,0.25)] will-change-transform"
        >
          {/* Background Decorative Grid */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="immunoGrid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#immunoGrid)" />
            </svg>
          </div>

          {/* Decorative pulse for a 'secure' feel inside the box */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-secondary/10 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-6"
            >
              <FaShieldVirus className="text-secondary text-2xl" />
              <span className="text-secondary font-black text-[10px] md:text-xs uppercase tracking-[0.3em]">
                Serology & Immunity
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 max-w-4xl leading-tight"
            >
              Immunology Testing
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white/60 text-sm md:text-lg max-w-2xl font-medium mb-16 leading-relaxed"
            >
              Serology testing, antibody screening, and immune response
              evaluation handled with clinical precision using advanced
              laboratory standards.
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full"
            >
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-secondary text-2xl mb-6 shadow-xl">
                  <FaVialCircleCheck />
                </div>
                <h4 className="text-white font-black text-xs uppercase tracking-widest mb-3">
                  Serology Testing
                </h4>
                <p className="text-white/40 text-[11px] max-w-[250px]">
                  Advanced detection of antigens and antibodies to diagnose
                  systemic infections.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-secondary text-2xl mb-6 shadow-xl">
                  <FaShieldVirus />
                </div>
                <h4 className="text-white font-black text-xs uppercase tracking-widest mb-3">
                  Antibody Screening
                </h4>
                <p className="text-white/40 text-[11px] max-w-[250px]">
                  Quantitative analysis of specific immune proteins for chronic
                  disease monitoring.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-secondary text-2xl mb-6 shadow-xl">
                  <FaUserShield />
                </div>
                <h4 className="text-white font-black text-xs uppercase tracking-widest mb-3">
                  Immune Evaluation
                </h4>
                <p className="text-white/40 text-[11px] max-w-[250px]">
                  Integrated assessment of cellular immunity and inflammatory
                  response markers.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImmunologyTesting;
