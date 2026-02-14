import React from "react";
import { motion } from "framer-motion";
import {
  FaSitemap,
  FaEye,
  FaUsersCog,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

const MultiLabSupport = () => {
  const features = [
    {
      icon: FaEye,
      title: "Centralized Visibility",
      description:
        "Monitor operations across all branches from a single unified dashboard.",
    },
    {
      icon: FaUsersCog,
      title: "Branch Identity",
      description:
        "Maintain unique branding and operational autonomy for individual lab locations.",
    },
    {
      icon: FaChartLine,
      title: "Unified Reporting",
      description:
        "Consolidated analytics and reporting while keeping patient data segregated by branch.",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Gradient Background */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content - Text & Stats */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
                <FaSitemap className="text-secondary" />
                <span>Enterprise Solutions</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
                Multi-Lab{" "}
                <span className="text-secondary italic">Chain Support</span>
              </h2>

              <p className="text-lg text-primary/70 font-medium leading-relaxed mb-8">
                Many diagnostic providers operate multiple laboratory branches.
                Our platform allows centralized visibility while maintaining
                individual branch identity.
              </p>

              <div className="space-y-4">
                {[
                  "Real-time synchronization",
                  "Hierarchical user permissions",
                  "Multi-tenant architecture",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                      <FaCheckCircle className="text-secondary text-sm" />
                    </div>
                    <span className="text-primary/80 font-semibold">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Content - Feature Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`${index === 2 ? "sm:col-span-2" : ""} p-8 rounded-xl bg-gray-50 border border-gray-100 hover:border-secondary hover:bg-white hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group`}
                >
                  <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                    <feature.icon className="text-2xl text-secondary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-primary/60 font-medium text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiLabSupport;
