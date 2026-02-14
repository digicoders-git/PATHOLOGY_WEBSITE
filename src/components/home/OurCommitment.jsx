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
      title: "Affordable Accessibility",
      description:
        "We believe quality healthcare shouldn't be a luxury. Our platform ensures pathology testing remains accessible at reasonable costs.",
      color: "bg-blue-50",
      iconColor: "text-blue-600",
      badge: "Cost-Effective",
    },
    {
      icon: FaHandHoldingHeart,
      title: "Patient-Centric Approach",
      description:
        "Every step of our process is designed with your comfort in mind, prioritizing patient needs above all else.",
      color: "bg-secondary/10",
      iconColor: "text-secondary",
      badge: "User Focused",
    },
    {
      icon: FaShieldAlt,
      title: "Reliable & Verified Network",
      description:
        "We partner exclusively with certified, high-standard laboratories to guarantee the most accurate results.",
      color: "bg-green-50",
      iconColor: "text-green-600",
      badge: "Trust Guaranteed",
    },
    {
      icon: FaInfoCircle,
      title: "Complete Transparency",
      description:
        "No hidden costs or confusing jargon. We provide clear, honest information about tests, pricing, and reports.",
      color: "bg-purple-50",
      iconColor: "text-purple-600",
      badge: "Real Information",
    },
  ];

  return (
    <section className="py-2 relative overflow-hidden bg-background">
      {/* Decorative Background Elements */}
      <div className="absolute bottom-0 left-0 w-1/4 h-64 bg-secondary/5 rounded-full blur-[100px] -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-black text-xs uppercase tracking-[0.4em] mb-4 block"
          >
            Why Choose Us
          </motion.span> */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primary text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-tight"
          >
            Our Commitment to <br />
            <span className="text-secondary italic">Excellence & Trust</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-primary/60 font-semibold text-lg italic"
          >
            We are building a healthcare bridge founded on affordability,
            reliability, and absolute transparency for every patient.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {commitments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 group transition-all duration-300 relative overflow-hidden"
            >
              {/* Corner Accent */}
              <div
                className={`absolute top-0 right-0 w-2 h-0 group-hover:h-full transition-all duration-500 bg-secondary/20`}
              ></div>

              <div
                className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center ${item.iconColor} text-2xl mb-6 shadow-xs group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon />
              </div>

              <div className="inline-block px-3 py-1 bg-gray-50 text-[10px] font-black text-primary/40 rounded-full mb-4 uppercase tracking-widest border border-gray-100 group-hover:bg-secondary group-hover:text-white transition-colors">
                {item.badge}
              </div>

              <h3 className="text-xl font-black text-primary mb-4 leading-tight uppercase tracking-tight italic">
                {item.title}
              </h3>

              <p className="text-primary/60 font-medium text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              {/* <div className="flex items-center gap-2 text-secondary text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Learn More</span>
                <span className="w-8 h-[2px] bg-secondary"></span>
              </div> */}
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-0 mb-5 border-t border-gray-100 pt-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-6">
            <div className="h-10 w-[2px] bg-secondary hidden md:block"></div>
            <p className="text-primary/40 text-[10px] font-bold uppercase tracking-[0.5em] text-center md:text-left">
              Building a healthier future together
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-secondary"></div>
            <div className="w-2 h-2 rounded-full bg-secondary opacity-50"></div>
            <div className="w-2 h-2 rounded-full bg-secondary opacity-25"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurCommitment;
