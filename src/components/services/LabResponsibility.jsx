import React from "react";
import { motion } from "framer-motion";
import {
  FaGavel,
  FaVial,
  FaFileMedicalAlt,
  FaMicroscope,
} from "react-icons/fa";

const LabResponsibility = () => {
  const responsibilities = [
    {
      icon: FaVial,
      text: "Test Execution",
      description: "Sample collection and laboratory processing.",
    },
    {
      icon: FaFileMedicalAlt,
      text: "Reporting",
      description: "Generation of accurate diagnostic reports.",
    },
    {
      icon: FaMicroscope,
      text: "Clinical Interpretation",
      description: "Professional medical analysis of results.",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle Divider Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gray-50/80 backdrop-blur-sm rounded-4xl p-8 md:p-12 border border-gray-100 shadow-xl shadow-primary/5 relative overflow-hidden group">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-700"></div>

            <div className="flex flex-col lg:flex-row items-center gap-10 relative z-10">
              {/* Left Side: Headline & Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-4">
                  <FaGavel className="text-secondary" />
                  <span>Important Disclaimer</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">
                  Lab Responsibility{" "}
                  <span className="text-secondary italic">Note</span>
                </h2>

                <p className="text-lg text-primary/70 font-semibold leading-relaxed mb-0">
                  Test execution, reporting, and clinical interpretation remain
                  the responsibility of the respective diagnostic laboratory.
                </p>
              </div>

              {/* Right Side: Responsibility Pills */}
              <div className="flex-1 w-full">
                <div className="grid grid-cols-1 gap-4">
                  {responsibilities.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-5 p-5 rounded-2xl bg-white border border-gray-100 hover:border-secondary hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary text-xl shadow-inner">
                        <item.icon />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary text-sm uppercase tracking-wider">
                          {item.text}
                        </h4>
                        <p className="text-xs text-primary/50 font-medium">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Bar Accent */}
            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-linear-to-r from-primary via-secondary to-primary opacity-50"></div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-primary/40 text-xs font-bold uppercase tracking-[0.3em]">
              A Unified Healthcare Ecosystem Built On Trust
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LabResponsibility;
