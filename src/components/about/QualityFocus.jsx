import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaFlask, FaShieldAlt, FaSync } from "react-icons/fa";

const QualityFocus = () => {
  const qualityPillars = [
    {
      icon: FaAward,
      title: "Standardized Practices",
      description:
        "Implementing uniform operational and diagnostic protocols across our entire lab network to ensure consistency.",
    },
    {
      icon: FaFlask,
      title: "Accurate Diagnostics",
      description:
        "Focus on precision and reliability in sharing diagnostic information through verified digital verification.",
    },
    {
      icon: FaShieldAlt,
      title: "Compliance & Safety",
      description:
        "Strict adherence to national and international healthcare standards for patient safety and data integrity.",
    },
    {
      icon: FaSync,
      title: "Continuous Improvement",
      description:
        "Regular audits and technology updates to maintain the highest quality of healthcare service delivery.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-secondary/5 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-xl bg-secondary/10 text-secondary font-bold text-sm mb-6 uppercase tracking-widest">
              Uncompromising Standards
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-tight">
              Our Commitment to{" "}
              <span className="text-secondary italic">Quality Focus</span>
            </h2>
            <p className="text-lg text-primary/70 font-medium leading-relaxed mb-10 max-w-xl">
              We encourage standardized lab practices and accurate diagnostic
              information sharing across our network to ensure every report is a
              step towards better health.
            </p>

            <div className="space-y-6">
              {qualityPillars.slice(0, 2).map((pillar, index) => (
                <div
                  key={index}
                  className="flex gap-6 p-6 rounded-xl bg-gray-50 border border-transparent hover:border-secondary/20 hover:bg-white transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                    <pillar.icon className="text-2xl text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-primary/60 font-medium text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Visual Representation of Quality */}
            <div className="grid grid-cols-1 gap-6">
              {qualityPillars.slice(2, 4).map((pillar, index) => (
                <div
                  key={index}
                  className="flex gap-6 p-6 rounded-xl bg-gray-50 border border-transparent hover:border-secondary/20 hover:bg-white transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                    <pillar.icon className="text-2xl text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-primary/60 font-medium text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 p-10 bg-linear-to-br from-primary to-primary-dark rounded-xl text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <blockquote className="text-xl font-medium italic mb-6 leading-relaxed">
                  "Quality is not an act, it is a habit. We build that habit
                  into every digital interaction."
                </blockquote>
                <div className="h-1 w-20 bg-secondary rounded-full"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QualityFocus;
