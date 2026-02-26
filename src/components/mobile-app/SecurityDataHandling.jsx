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
      title: "Encryption",
      description: "Data is encrypted at rest using military-grade protocols.",
    },
    {
      icon: FaUserShield,
      title: "Consent",
      description: "You control who views your reports via explicit consent.",
    },
    {
      icon: FaDatabase,
      title: "Secure Storage",
      description: "Data is hosted on highly secure, compliant infrastructure.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight uppercase tracking-tight"
          >
            Security & <span className="text-secondary">Data Handling</span>
          </motion.h2>
          <p className="text-gray-500 text-sm italic">
            "Your data security and privacy remain central to our
            infrastructure."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {securityPilars.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all group flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-secondary text-xl mb-4 group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                <item.icon />
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-tight">
                {item.title}
              </h4>
              <p className="text-gray-500 text-[10px] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.5em]">
            Encrypted • Compliant • Transparent • Secure
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecurityDataHandling;
