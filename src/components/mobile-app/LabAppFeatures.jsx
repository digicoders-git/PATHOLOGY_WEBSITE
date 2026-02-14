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
      title: "Lab Profile Management",
      description:
        "Customize your lab's digital identity, services, and operational details.",
      color: "primary",
    },
    {
      icon: FaListAlt,
      title: "Test Catalog Updates",
      description:
        "Real-time management of tests, pricing, and specific preparation guidelines.",
      color: "secondary",
    },
    {
      icon: FaCloudUploadAlt,
      title: "Report Uploads",
      description:
        "Secure and instantaneous uploading of diagnostic reports directly to patients.",
      color: "primary",
    },
    {
      icon: FaChartPie,
      title: "Operational Visibility",
      description:
        "Monitor daily traffic, sample volumes, and reporting efficiency from a dashboard.",
      color: "secondary",
    },
    {
      icon: FaCommentMedical,
      title: "Digital Communication",
      description:
        "Direct channel to connect with patients and clarify diagnostic requirements.",
      color: "primary",
    },
  ];

  return (
    <section className="py-24 bg-gray-50/50 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Content Side */}
          <div className="w-full lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary font-bold text-sm mb-6 uppercase tracking-wider">
                <FaShieldAlt className="text-secondary" />
                <span>Enterprise Solution</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
                Lab App <span className="text-secondary italic">Features</span>
              </h2>

              <p className="text-lg text-primary/60 font-medium leading-relaxed mb-12">
                Empower your laboratory operations with a robust digital
                management suite designed specifically for performance and
                accuracy.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex gap-5">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-white border border-secondary/10 shadow-sm flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <feature.icon />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors italic">
                          {feature.title}
                        </h4>
                        <p className="text-primary/60 font-semibold text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Visual Side: Lab Interface Mockup */}
          <div className="w-full lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Dashboard Visualization */}
              <div className="bg-white rounded-xl p-8 shadow-2xl border border-gray-100 relative z-10 overflow-hidden">
                <div className="flex items-center justify-between mb-8">
                  <div className="h-4 w-24 bg-primary/10 rounded-full"></div>
                  <div className="w-8 h-8 rounded-full bg-secondary/20"></div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="h-20 bg-gray-50 rounded-xl border border-dashed border-gray-200 flex flex-col items-center justify-center gap-2">
                    <div className="h-2 w-10 bg-secondary/30 rounded-full"></div>
                    <div className="h-1.5 w-16 bg-gray-100 rounded-full"></div>
                  </div>
                  <div className="h-20 bg-gray-50 rounded-xl border border-dashed border-gray-200 flex flex-col items-center justify-center gap-2">
                    <div className="h-2 w-10 bg-primary/30 rounded-full"></div>
                    <div className="h-1.5 w-16 bg-gray-100 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  {[1, 2, 3].map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/5 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-primary shadow-sm">
                        <FaCloudUploadAlt size={14} />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="h-2 w-2/3 bg-primary/20 rounded-full"></div>
                        <div className="h-1.5 w-full bg-primary/10 rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backing decorative element */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -z-10"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabAppFeatures;
