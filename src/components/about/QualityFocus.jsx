import React from "react";
import { motion } from "framer-motion";
import { FaMicroscope, FaVial, FaUserMd, FaCheckCircle } from "react-icons/fa";

const QualityFocus = () => {
  const qualitySteps = [
    {
      title: "Sample Integrity",
      desc: "Standard protocols for collection.",
      icon: FaVial,
    },
    {
      title: "Precision Testing",
      desc: "Advanced automated analyzers.",
      icon: FaMicroscope,
    },
    {
      title: "Expert Validation",
      desc: "Rigorous pathology review.",
      icon: FaUserMd,
    },
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight uppercase tracking-tight"
            >
              Uncompromising{" "}
              <span className="text-secondary">Quality Focus</span>
            </motion.h2>

            <p className="text-gray-500 text-sm md:text-base mb-6 leading-relaxed">
              We ensure diagnostic accuracy through standardized protocols and
              advanced technological integration at every stage.
            </p>

            <div className="space-y-3">
              {[
                "NABL standard alignment",
                "Automated data syncing",
                "Stringent QC markers",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="text-secondary text-sm" />
                  <span className="text-gray-700 text-xs font-bold uppercase tracking-tight">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 gap-4">
              {qualitySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center gap-4 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-secondary text-xl group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                    <step.icon />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-[10px] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityFocus;
