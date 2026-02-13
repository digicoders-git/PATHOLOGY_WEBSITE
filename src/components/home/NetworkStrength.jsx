import React from "react";
import { motion } from "framer-motion";
import {
  FaNetworkWired,
  FaHospital,
  FaMicroscope,
  FaMapMarkedAlt,
} from "react-icons/fa";

const NetworkStrength = () => {
  const strengths = [
    {
      icon: FaMicroscope,
      title: "Independent Labs",
      desc: "Empowering stand-alone diagnostic centers with a professional digital identity.",
    },
    {
      icon: FaHospital,
      title: "Multi-branch Chains",
      desc: "Centralized management for multi-location diagnostic networks with unified visibility.",
    },
    {
      icon: FaNetworkWired,
      title: "Standardized Ecosystem",
      desc: "Ensuring consistent diagnostic protocols and accessibility standards across the network.",
    },
    {
      icon: FaMapMarkedAlt,
      title: "Location Accessibility",
      desc: "Making it easier for patients to find verified laboratories across various locations.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Fixed Background Image Layer */}
      <div
        className="absolute inset-0 z-0 opacity-[0.1] pointer-events-none grayscale"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/5910940/pexels-photo-5910940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "brightness(1.1) contrast(1.1)",
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div className="w-10 h-[2px] bg-secondary"></div>
            <span className="text-secondary font-black text-xs uppercase tracking-[0.2em]">
              Network Capability
            </span>
            <div className="w-10 h-[2px] bg-secondary"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-primary leading-tight uppercase tracking-tighter mb-8"
          >
            Scaling Strength Across <br />
            <span className="text-secondary">All Laboratory Models</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative p-8 rounded-3xl bg-white/40 backdrop-blur-sm border border-white/50 shadow-xl inline-block"
          >
            <p className="text-primary/70 text-base md:text-lg leading-relaxed font-semibold max-w-2xl">
              "Our platform supports independent labs as well as multi-branch
              diagnostic chains, ensuring standardized visibility and
              accessibility across locations."
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg shadow-primary/5 group hover:shadow-secondary/10 transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-background flex items-center justify-center text-secondary text-2xl mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                <item.icon />
              </div>
              <h3 className="text-lg font-black text-primary mb-3 uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="text-primary/60 text-xs font-semibold leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkStrength;
