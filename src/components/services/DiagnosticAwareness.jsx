import React from "react";
import { motion } from "framer-motion";
import {
  FaUserShield,
  FaNotesMedical,
  FaHeartbeat,
  FaHandHoldingHeart,
} from "react-icons/fa";

const DiagnosticAwareness = () => {
  const benefits = [
    {
      icon: FaHeartbeat,
      title: "Early Detection",
      description:
        "Identifying potential health issues before they escalate, providing a larger window for successful treatment.",
    },
    {
      icon: FaUserShield,
      title: "Preventive Care",
      description:
        "Regular screening as a proactive shield against chronic diseases and lifestyle-related health risks.",
    },
    {
      icon: FaNotesMedical,
      title: "Informed Decisions",
      description:
        "Empowering individuals with accurate data to make better choices regarding their nutrition and lifestyle.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50/50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/10 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Visual Side */}
          <div className="w-full lg:w-5/12 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Abstract Illustration Representation */}
              <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl relative z-10 border border-gray-100">
                <div className="flex flex-col gap-6">
                  {[1, 2, 3].map((_, i) => (
                    <div
                      key={i}
                      className={`h-24 rounded-2xl bg-primary/${i === 0 ? "5" : i === 1 ? "10" : "20"} flex items-center px-8 gap-5`}
                    >
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                        <FaHandHoldingHeart />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 w-24 bg-primary/20 rounded-full mb-3"></div>
                        <div className="h-2 w-full bg-primary/10 rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Float Badge */}
                <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-3xl shadow-xl shadow-secondary/30 animate-bounce">
                  <span className="font-black text-2xl">Vitals+</span>
                </div>
              </div>

              {/* Backglow */}
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl z-0"></div>
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-7/12 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 rounded-xl bg-secondary/10 text-secondary font-bold text-sm mb-6 uppercase tracking-wider">
                Patient Empowerment
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
                Diagnostic Awareness{" "}
                <span className="text-secondary">Section</span>
              </h2>

              <p className="text-xl text-primary/70 font-semibold leading-relaxed mb-10 italic">
                "Early diagnostics support preventive healthcare. Awareness
                about testing helps individuals make informed health decisions."
              </p>

              <div className="space-y-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="shrink-0 w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-secondary text-2xl shadow-sm group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                      <benefit.icon />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-primary/60 font-medium leading-relaxed max-w-lg italic">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticAwareness;
