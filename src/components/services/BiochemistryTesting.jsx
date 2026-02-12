import React from "react";
import {
  FaLungs,
  FaSyringe,
  FaHeartPulse,
  FaVial,
  FaChartLine,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const BiochemistryTesting = () => {
  const tests = [
    { name: "Blood Glucose", desc: "Diabetes screening and monitoring." },
    {
      name: "Liver Function (LFT)",
      desc: "Assessment of liver health and enzyme levels.",
    },
    {
      name: "Kidney Function (KFT)",
      desc: "Evaluation of renal performance and filtration.",
    },
    {
      name: "Lipid Profile",
      desc: "Cholesterol, HDL, LDL, and triglycerides analysis.",
    },
    {
      name: "Electrolyte Testing",
      desc: "Sodium, potassium, and chloride balance.",
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
    <section className="py-12 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="lg:w-1/3 will-change-transform"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-secondary"></div>
              <span className="text-secondary font-black text-[10px] md:text-xs uppercase tracking-[0.3em]">
                Vital Chemistry
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter mb-8 leading-tight">
              Biochemistry <br /> Testing
            </h2>
            <p className="text-primary/60 text-sm leading-relaxed font-medium mb-8">
              Our biochemistry department provides specialized analysis of blood
              chemistry to evaluate the functional status of vital organs and
              metabolic processes.
            </p>
            <div className="bg-primary p-8 rounded-2xl shadow-xl">
              <FaHeartPulse className="text-white text-4xl mb-4 animate-pulse" />
              <h4 className="text-white font-bold text-sm uppercase mb-2">
                Clinical Precision
              </h4>
              <p className="text-white/60 text-xs">
                Utilizing fully automated kinetic analyzers for zero-error
                chemistry reporting.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {tests.map((test, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-pure-white p-6 rounded-xl border border-white hover:border-secondary/20 transition-all group flex items-start gap-4 shadow-sm hover:shadow-md will-change-transform"
              >
                <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center text-primary text-lg group-hover:bg-secondary group-hover:text-white transition-colors">
                  <FaChartLine />
                </div>
                <div>
                  <h5 className="text-primary font-black text-xs uppercase tracking-tight mb-1">
                    {test.name}
                  </h5>
                  <p className="text-primary/50 text-[11px] font-medium">
                    {test.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BiochemistryTesting;
