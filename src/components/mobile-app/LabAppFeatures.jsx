import React from "react";
import { motion } from "framer-motion";
import {
  FaHospitalUser,
  FaListAlt,
  FaCloudUploadAlt,
  FaChartPie,
  FaCommentMedical,
  FaShieldAlt,
} from "react-icons/fa";

const LabAppFeatures = () => {
  const features = [
    {
      icon: FaHospitalUser,
      title: "Profile Management",
      description: "Customize your lab's digital identity and services.",
    },
    {
      icon: FaListAlt,
      title: "Test Catalog",
      description: "Real-time management of tests and pricing.",
    },
    {
      icon: FaCloudUploadAlt,
      title: "Report Uploads",
      description: "Instant uploading of reports directly to patients.",
    },
    {
      icon: FaChartPie,
      title: "Operations",
      description: "Monitor traffic and efficiency from a dashboard.",
    },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight uppercase tracking-tight"
            >
              Lab App <span className="text-secondary">Features</span>
            </motion.h2>

            <p className="text-gray-500 text-sm md:text-base mb-8 leading-relaxed">
              Empower your laboratory operations with a robust digital
              management suite designed specifically for performance and
              accuracy.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-lg transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-primary text-lg mb-3 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
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

          {/* Visual Side: Dashboard Mockup */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="h-3 w-20 bg-primary/10 rounded-full"></div>
                <div className="w-6 h-6 rounded-full bg-secondary/20"></div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="h-16 bg-white rounded-xl border border-gray-100 flex items-center justify-center">
                  <div className="h-1.5 w-12 bg-gray-100 rounded-full"></div>
                </div>
                <div className="h-16 bg-white rounded-xl border border-gray-100 flex items-center justify-center">
                  <div className="h-1.5 w-12 bg-gray-100 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-2">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="h-10 bg-white rounded-lg border border-gray-100 flex items-center px-3 gap-3"
                  >
                    <div className="w-6 h-6 rounded-md bg-primary/5"></div>
                    <div className="h-1.5 flex-1 bg-gray-50 rounded-full"></div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabAppFeatures;
