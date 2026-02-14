import React from "react";
import { motion } from "framer-motion";
import {
  FaTint,
  FaVial,
  FaLungs,
  FaHospitalUser,
  FaHeartbeat,
  FaXRay,
  FaUserShield,
} from "react-icons/fa";

const CommonTestCategories = () => {
  const categories = [
    {
      icon: FaTint,
      title: "Blood Diagnostics",
      description:
        "Comprehensive hematology and biochemistry analysis to monitor your overall health markers.",
      color: "from-red-500/10 to-red-600/5",
      iconColor: "text-red-500",
    },
    {
      icon: FaVial,
      title: "Urine Analysis",
      description:
        "Detailed urinalysis to detect metabolic and kidney disorders through advanced chemistry.",
      color: "from-yellow-500/10 to-yellow-600/5",
      iconColor: "text-yellow-600",
    },
    {
      icon: FaLungs, // Using lungs for internal organ representation (Liver)
      title: "Liver Function Tests",
      description:
        "Screening and monitoring of liver health, enzyme levels, and metabolic efficiency.",
      color: "from-orange-500/10 to-orange-600/5",
      iconColor: "text-orange-600",
    },
    {
      icon: FaHospitalUser,
      title: "Kidney Function Tests",
      description:
        "Assessment of renal health through filtration rate and electrolyte balance monitoring.",
      color: "from-blue-500/10 to-blue-600/5",
      iconColor: "text-blue-500",
    },
    {
      icon: FaHeartbeat,
      title: "Cardiac Diagnostics",
      description:
        "Critical heart health markers including lipid profiles and specialized cardiac enzymes.",
      color: "from-rose-500/10 to-rose-600/5",
      iconColor: "text-rose-500",
    },
    {
      icon: FaXRay,
      title: "Imaging & Radiology",
      description:
        "Support for diagnostic imaging results integration and structural health assessment.",
      color: "from-indigo-500/10 to-indigo-600/5",
      iconColor: "text-indigo-500",
    },
    {
      icon: FaUserShield,
      title: "Health Screening",
      description:
        "Proactive full-body checkups designed for early detection and lifestyle management.",
      color: "from-emerald-500/10 to-emerald-600/5",
      iconColor: "text-emerald-500",
    },
  ];

  return (
    <section className="py-24 bg-gray-50/50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="h-px w-8 bg-secondary"></span>
            <span className="text-secondary font-bold uppercase tracking-wider text-sm">
              Diagnostic Range
            </span>
            <span className="h-px w-8 bg-secondary"></span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-primary mb-6"
          >
            Common Test{" "}
            <span className="text-secondary italic">Categories</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-primary/70 font-medium"
          >
            Explore our wide range of pathology services, organized for your
            clarity and convenience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-xl bg-linear-to-br ${cat.color} border border-gray-100 group transition-all duration-300 hover:shadow-xl hover:shadow-primary/5`}
            >
              <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <cat.icon className={`text-2xl ${cat.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                {cat.title}
              </h3>
              <p className="text-primary/60 text-sm font-medium leading-relaxed">
                {cat.description}
              </p>
            </motion.div>
          ))}

          {/* Call to Action Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-8 rounded-xl bg-primary text-white flex flex-col justify-center items-center text-center group cursor-pointer hover:bg-primary-dark transition-all"
          >
            <h4 className="text-xl font-bold mb-4 italic">
              Need more specific testing?
            </h4>
            <p className="text-white/70 text-sm font-medium mb-6">
              Connect with our experts for specialized diagnostic requirements.
            </p>
            <button className="px-6 py-3 bg-secondary text-white font-bold rounded-lg hover:scale-105 transition-all">
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommonTestCategories;
