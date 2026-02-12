import React from "react";
import { FaShieldAlt, FaCogs, FaFlask, FaCheckDouble } from "react-icons/fa";
import { motion } from "framer-motion";

const QualityAssurance = () => {
  const features = [
    {
      icon: FaCogs,
      title: "Standardized Procedures",
      desc: "Laboratory procedures followed strictly for consistency.",
    },
    {
      icon: FaFlask,
      title: "Calibrated Equipment",
      desc: "Advanced instruments calibrated for precise analytical data.",
    },
    {
      icon: FaShieldAlt,
      title: "Validated Protocols",
      desc: "Testing protocols validated to maintain diagnostic reliability.",
    },
  ];

  return (
    <section className="py-24 bg-background overflow-hidden border-y border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="lg:w-1/2 will-change-transform"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-secondary"></div>
              <span className="text-secondary font-black text-xs md:text-sm uppercase tracking-[0.3em]">
                Excellence & Precision
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tight leading-tight mb-8">
              Quality Assurance
            </h2>

            <div className="space-y-4 mb-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-4 p-4 bg-pure-white border-l-4 border-secondary shadow-sm"
              >
                <div className="text-primary font-medium text-base leading-relaxed">
                  All pathology tests are processed using standardized
                  laboratory procedures, calibrated diagnostic equipment, and
                  validated testing protocols to ensure accuracy.
                </div>
              </motion.div>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-2">
                {[
                  "Standardized Laboratory Procedures",
                  "Calibrated Diagnostic Equipment",
                  "Validated Testing Protocols",
                ].map((item, id) => (
                  <motion.li
                    key={id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + id * 0.1 }}
                    className="flex items-center gap-3 text-primary font-black text-[10px] md:text-xs uppercase tracking-wider"
                  >
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {features.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                  className="bg-pure-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="text-secondary text-2xl mb-4">
                    <item.icon />
                  </div>
                  <h4 className="text-primary font-black text-xs uppercase tracking-wider mb-2">
                    {item.title}
                  </h4>
                  <p className="text-primary/60 text-[10px] leading-tight font-medium">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Image with floating badge */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
              <img
                src="https://hakimi-trading.com/wp-content/uploads/2022/08/banner-01.png"
                alt="Quality Assurance Lab"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>

            {/* Floating Achievement Badge */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-pure-white p-8 shadow-2xl border border-gray-50 z-20 items-center gap-4 hidden md:flex"
            >
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-3xl shadow-lg shadow-secondary/20">
                <FaCheckDouble />
              </div>
              <div>
                <div className="text-primary font-black text-2xl leading-none">
                  100%
                </div>
                <div className="text-primary/60 text-[10px] font-bold uppercase tracking-widest mt-1">
                  Accuracy Guaranteed
                </div>
              </div>
            </motion.div>

            {/* Decorative background circle */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary/5 rounded-full blur-3xl z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;
