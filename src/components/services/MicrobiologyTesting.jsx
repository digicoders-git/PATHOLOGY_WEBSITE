import React from "react";
import {
  FaBacteria,
  FaVirus,
  FaBacterium,
  FaHandHoldingMedical,
  FaArrowRight,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const MicrobiologyTesting = () => {
  const cards = [
    {
      title: "Culture Testing",
      desc: "Detailed growth analysis to identify specific bacterial and fungal pathogens.",
      icon: FaBacteria,
    },
    {
      title: "Infection Screening",
      desc: "Rapid identification of viral, bacterial, and parasitic infections in clinical samples.",
      icon: FaVirus,
    },
    {
      title: "Microbial Analysis",
      desc: "Advanced microscopic and molecular evaluation of microbial structures.",
      icon: FaBacterium,
    },
    {
      title: "Antibiotic Sensitivity",
      desc: "Testing specific antibiotics against pathogens to determine the most effective treatment.",
      icon: FaHandHoldingMedical,
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
    <section className="py-12 bg-pure-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 text-center mb-16"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-10 h-[2px] bg-secondary"></div>
          <span className="text-secondary font-black text-[10px] md:text-xs uppercase tracking-[0.3em]">
            Microbial Diagnostics
          </span>
          <div className="w-10 h-[2px] bg-secondary"></div>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter mb-6">
          Microbiology Testing
        </h2>
        <p className="text-primary/60 text-sm max-w-2xl mx-auto font-medium">
          Comprehensive identification of pathogens and antibiotic efficacy
          evaluation for targeted clinical treatment.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center text-center p-8 bg-background rounded-[2rem] hover:bg-primary transition-all duration-500 group shadow-lg hover:shadow-2xl hover:-translate-y-2 will-change-transform"
          >
            <div className="w-16 h-16 bg-pure-white rounded-2xl flex items-center justify-center text-secondary text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
              <card.icon />
            </div>
            <h4 className="text-primary font-black text-xs uppercase tracking-wider mb-4 group-hover:text-white transition-colors">
              {card.title}
            </h4>
            <p className="text-primary/50 text-[11px] leading-relaxed group-hover:text-white/60 transition-colors">
              {card.desc}
            </p>
            <div className="mt-6 text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
              <FaArrowRight />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default MicrobiologyTesting;
