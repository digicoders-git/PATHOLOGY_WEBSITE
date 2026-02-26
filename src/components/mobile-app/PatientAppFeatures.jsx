import React from "react";
import { motion } from "framer-motion";
import {
  FaSearchLocation,
  FaFileMedical,
  FaMapMarkerAlt,
  FaHistory,
  FaBell,
  FaCheckCircle,
} from "react-icons/fa";

const PatientAppFeatures = () => {
  const features = [
    {
      icon: FaSearchLocation,
      title: "Lab Discovery",
      description: "Find certified laboratories in your vicinity.",
    },
    {
      icon: FaFileMedical,
      title: "Test Access",
      description: "Detailed info about tests and requirements.",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Real-time Tracking",
      description: "Monitor sample and report status.",
    },
    {
      icon: FaHistory,
      title: "History",
      description: "Securely manage diagnostic history.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side: Illustration */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4"
            >
              {[1, 2, 3].map((idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl"
                >
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                    <FaCheckCircle className="text-xs" />
                  </div>
                  <div className="flex-1">
                    <div className="h-2 w-16 bg-gray-200 rounded-full mb-1"></div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full"></div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight uppercase tracking-tight"
            >
              Patient App <span className="text-secondary">Features</span>
            </motion.h2>

            <p className="text-gray-500 text-sm md:text-base mb-8 leading-relaxed">
              We've designed our patient application to prioritize accessibility
              and clarity, empowering you with full control over your diagnostic
              journey.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-secondary text-lg mb-3 group-hover:bg-secondary group-hover:text-white transition-all">
                    <feature.icon />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-tight">
                    {feature.title}
                  </h4>
                  <p className="text-gray-500 text-[10px] leading-relaxed">
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

export default PatientAppFeatures;
