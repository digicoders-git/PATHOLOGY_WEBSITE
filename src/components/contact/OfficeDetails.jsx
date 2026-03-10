import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaHeadset,
  FaGlobeAmericas,
} from "react-icons/fa";

const OfficeDetails = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      details: "amitmassif@gmail.com",
    },
    {
      icon: FaPhoneAlt,
      title: "Phone",
      details: "+91 9355953293",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden text-center">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight uppercase tracking-tight"
        >
          Office <span className="text-secondary">Details</span>
        </motion.h2>

        <p className="text-gray-500 text-sm md:text-base mb-10 leading-relaxed max-w-2xl mx-auto">
          Reach out to us through our official channels. Our support team is
          here to assist you with any inquiries or platform-related questions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                <info.icon className="text-xl text-secondary group-hover:text-white transition-all" />
              </div>

              <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-tight">
                {info.title}
              </h3>

              <p className="text-gray-500 text-[10px] leading-relaxed font-medium">
                {info.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeDetails;
