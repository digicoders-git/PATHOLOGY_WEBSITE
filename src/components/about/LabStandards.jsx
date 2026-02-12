import React from "react";
import {
  FaClipboardCheck,
  FaFileMedical,
  FaMicroscope,
  FaCertificate,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const LabStandards = () => {
  const standards = [
    {
      icon: FaClipboardCheck,
      title: "Clinical Protocols",
      desc: "We strictly follow standardized pathology protocols to maintain diagnostic consistency across all test categories.",
    },
    {
      icon: FaFileMedical,
      title: "Diagnostic Output",
      desc: "Ensuring highly reliable and accurate reporting through multi-level validation by experienced clinical specialists.",
    },
    {
      icon: FaMicroscope,
      title: "Rigorous Testing",
      desc: "Our testing processes undergo frequent quality audits to ensure the highest level of laboratory excellence.",
    },
    {
      icon: FaCertificate,
      title: "Quality Standards",
      desc: "Adhering to international quality guidelines for sample analysis, storage, and medical data management.",
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-[2px] bg-secondary"></div>
            <span className="text-secondary font-black text-[10px] md:text-xs uppercase tracking-[0.3em]">
              Commitment to Excellence
            </span>
            <div className="w-10 h-[2px] bg-secondary"></div>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter mb-8 text-balance">
            Lab Standards
          </h2>

          <p className="text-primary/70 text-sm md:text-base leading-relaxed font-medium">
            Testing processes follow standardized clinical pathology protocols
            ensuring reliable diagnostic output. We maintain 100% adherence to
            biosafety and analytical guidelines.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {standards.map((standard, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-pure-white p-8 border border-white hover:border-secondary/20 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition-all duration-300 group will-change-transform"
            >
              <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center text-secondary text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <standard.icon />
              </div>

              <h3 className="text-primary font-black text-sm uppercase tracking-tight mb-4 text-balance">
                {standard.title}
              </h3>

              <p className="text-primary/60 text-xs leading-relaxed font-medium text-pretty">
                {standard.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LabStandards;
