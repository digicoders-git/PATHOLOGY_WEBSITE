import React from "react";
import { motion } from "framer-motion";
import {
  FaFileMedical,
  FaMicroscope,
  FaBuilding,
  FaClock,
  FaCheckDouble,
} from "react-icons/fa";

const LabTransparency = () => {
  const transparencyItems = [
    {
      icon: FaFileMedical,
      title: "Services Offered",
      description:
        "Detailed breakdown of all tests and health packages available at each location.",
      color: "blue",
    },
    {
      icon: FaMicroscope,
      title: "Diagnostic Capabilities",
      description:
        "Information about specialized equipment and advanced testing methodologies in use.",
      color: "indigo",
    },
    {
      icon: FaBuilding,
      title: "Facilities & Infrastructure",
      description:
        "Transparency regarding lab certifications, hygiene standards, and physical infrastructure.",
      color: "violet",
    },
    {
      icon: FaClock,
      title: "Operational Details",
      description:
        "Clear communication of turnaround times, operating hours, and home collection availability.",
      color: "emerald",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-linear-to-b from-white to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-primary mb-6"
          >
            Lab Information <span className="text-secondary">Transparency</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary/70 font-medium"
          >
            We believe in complete transparency. Each laboratory profile
            includes comprehensive information to help patients make informed
            healthcare decisions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {transparencyItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group border border-gray-50 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-3xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:rotate-6 transition-all duration-500 shadow-inner">
                <item.icon className="text-3xl text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                {item.title}
              </h3>
              <p className="text-primary/60 text-sm font-medium leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 bg-primary rounded-xl p-10 md:p-16 text-white overflow-hidden relative"
        >
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h4 className="text-3xl font-black mb-6 italic leading-snug">
                Better Patient Awareness Through Data
              </h4>
              <p className="text-white/80 font-medium text-lg leading-relaxed mb-8">
                By providing verified data about laboratory operations, we build
                trust and ensure that every patient has access to the highest
                quality diagnostic care.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Verified Data", "Live Updates", "Verified Reviews"].map(
                  (tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl text-sm font-bold border border-white/20"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10">
              <div className="space-y-6">
                {[
                  "Complete Services Inventory",
                  "Facility Hygiene Verification",
                  "Turnaround Time Statistics",
                  "Accreditation Details",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                      <FaCheckDouble className="text-secondary text-sm" />
                    </div>
                    <span className="font-bold text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LabTransparency;
