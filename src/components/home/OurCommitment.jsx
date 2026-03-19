import React from "react";
import { motion } from "framer-motion";
import {
  FaHandHoldingHeart,
  FaShieldAlt,
  FaInfoCircle,
  FaRegMoneyBillAlt,
} from "react-icons/fa";

const OurCommitment = () => {
  const commitments = [
    {
      icon: FaRegMoneyBillAlt,
      title: "Affordable",
      description: "Quality healthcare at reasonable costs.",
      color: "bg-red-100/50",
      iconColor: "text-red-700",
    },
    {
      icon: FaHandHoldingHeart,
      title: "Patient-First",
      description: "Priority care for every patient.",
      color: "bg-red-100/50",
      iconColor: "text-red-700",
    },
    {
      icon: FaShieldAlt,
      title: "Reliable Labs",
      description: "Certified labs for accurate results.",
      color: "bg-red-100/50",
      iconColor: "text-red-700",
    },
    {
      icon: FaInfoCircle,
      title: "Transparent",
      description: "Clear and honest pricing always.",
      color: "bg-red-100/50",
      iconColor: "text-red-700",
    },
  ];

  return (
    <section className="py-12 bg-white flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-black text-2xl md:text-3xl font-bold uppercase tracking-tight mb-3"
          >
            Our Commitment to <span className="text-secondary">Trust</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-sm italic"
          >
            Building a faster healthcare bridge for every patient.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50/50 p-6 rounded-2xl border border-gray-400 hover:bg-white hover:shadow-2xl hover:shadow-gray-400/50 transition-all duration-300 group text-center"
            >
              <div
                className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center ${item.iconColor} text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform`}
              >
                <item.icon />
              </div>
              <h3 className="text-base font-bold text-black mb-2 uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed px-2">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
