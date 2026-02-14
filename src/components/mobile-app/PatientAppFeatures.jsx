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
      description:
        "Easily find and connect with certified laboratories in your vicinity.",
      color: "secondary",
    },
    {
      icon: FaFileMedical,
      title: "Test Information Access",
      description:
        "View detailed information about various tests, requirements, and preparations.",
      color: "primary",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Report Tracking",
      description:
        "Track the real-time status of your samples and report generation process.",
      color: "secondary",
    },
    {
      icon: FaHistory,
      title: "Diagnostic History",
      description:
        "Securely access and manage your entire diagnostic history in one place.",
      color: "primary",
    },
    {
      icon: FaBell,
      title: "Notifications & Updates",
      description:
        "Receive instant alerts for test bookings, status changes, and report availability.",
      color: "secondary",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Side: Mockup or Visual */}
          <div className="w-full lg:w-5/12 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Feature Showcase Illustration */}
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-2xl relative z-10">
                <div className="space-y-6">
                  {features.slice(0, 3).map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl bg-${item.color}/10 flex items-center justify-center text-${item.color}`}
                      >
                        <item.icon className="text-xl" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 w-20 bg-gray-200 rounded-full mb-2"></div>
                        <div className="h-2 w-full bg-gray-100 rounded-full"></div>
                      </div>
                      <FaCheckCircle className="text-secondary opacity-20" />
                    </div>
                  ))}
                </div>

                {/* Patient Profile Card Mockup */}
                <div className="absolute -bottom-10 -right-6 bg-primary text-white p-6 rounded-xl shadow-2xl w-48 hidden md:block border-4 border-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/20"></div>
                    <div>
                      <div className="h-2 w-16 bg-white/40 rounded-full mb-1"></div>
                      <div className="h-2 w-10 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-1.5 w-full bg-white/10 rounded-full"></div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl z-0"></div>
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-7/12 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/10 text-secondary font-bold text-sm mb-6 uppercase tracking-wider">
                <FaFileMedical />
                <span>Patient Centric</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
                Patient App{" "}
                <span className="text-secondary italic">Features</span>
              </h2>

              <p className="text-lg text-primary/60 font-medium leading-relaxed mb-12">
                We've designed our patient application to prioritize
                accessibility and clarity, empowering you with full control over
                your diagnostic journey.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex gap-5">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-secondary text-xl group-hover:bg-secondary group-hover:text-white transition-all duration-300">
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
        </div>
      </div>
    </section>
  );
};

export default PatientAppFeatures;
