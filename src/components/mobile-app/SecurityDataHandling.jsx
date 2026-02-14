import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaLock,
  FaUserShield,
  FaDatabase,
  FaFingerprint,
} from "react-icons/fa";

const SecurityDataHandling = () => {
  const securityPilars = [
    {
      icon: FaLock,
      title: "End-to-End Encryption",
      description:
        "All sensitive health data is encrypted during transit and at rest using military-grade protocols.",
    },
    {
      icon: FaUserShield,
      title: "Consent Based Access",
      description:
        "You have complete control over who views your reports, governed by explicit user consent.",
    },
    {
      icon: FaDatabase,
      title: "Secure Cloud Storage",
      description:
        "Data is hosted on highly secure, compliant cloud infrastructure with 99.9% durability.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Absolute Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-primary/10 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-primary rounded-xl p-1 md:p-1.5 shadow-2xl relative overflow-hidden group">
            {/* Background Security Pattern/Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
              <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <pattern
                  id="security-hex"
                  width="50"
                  height="43.3"
                  patternUnits="userSpaceOnUse"
                  patternTransform="scale(2)"
                >
                  <path
                    d="M25 0L50 14.4V43.3L25 57.7L0 43.3V14.4L25 0Z"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                  />
                </pattern>
                <rect width="100%" height="100%" fill="url(#security-hex)" />
              </svg>
            </div>

            <div className="bg-white/95 backdrop-blur-md rounded-xl p-8 md:p-16 border border-white/20 relative z-10">
              <div className="flex flex-col lg:flex-row gap-16 items-center">
                {/* Visual Side: Security Shield */}
                <div className="w-full lg:w-5/12">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative flex justify-center"
                  >
                    <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                      <div className="absolute inset-0 bg-secondary/10 rounded-full animate-ping"></div>
                      <div className="absolute inset-4 bg-secondary/5 rounded-full"></div>
                      <div className="relative bg-white w-40 h-40 md:w-48 md:h-48 rounded-full shadow-2xl flex items-center justify-center text-primary text-6xl md:text-7xl border-4 border-gray-50">
                        <FaShieldAlt className="text-secondary" />
                      </div>

                      {/* Floating Icons around core */}
                      <div className="absolute top-0 right-10 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-primary animate-bounce">
                        <FaFingerprint />
                      </div>
                      <div className="absolute bottom-10 left-0 w-10 h-10 bg-primary text-white rounded-xl shadow-lg flex items-center justify-center animate-pulse">
                        <FaLock size={14} />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-7/12">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/10 text-secondary font-bold text-sm mb-6 uppercase tracking-wider">
                      <FaLock />
                      <span>Data Privacy First</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
                      Security &{" "}
                      <span className="text-secondary italic">
                        Data Handling
                      </span>
                    </h2>

                    <p className="text-xl text-primary/70 font-semibold leading-relaxed mb-10 italic">
                      "Data security and privacy remain central to our mobile
                      application infrastructure."
                    </p>

                    <div className="space-y-6">
                      {securityPilars.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex gap-6 group p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 border border-transparent hover:border-gray-100"
                        >
                          <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary text-xl group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                            <item.icon />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-primary mb-1 uppercase tracking-tight">
                              {item.title}
                            </h4>
                            <p className="text-primary/60 font-medium text-sm leading-relaxed max-w-lg">
                              {item.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-[10px] text-primary/30 font-bold uppercase tracking-[0.5em]">
              Encrypted • Compliant • Transparent • Secure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityDataHandling;
