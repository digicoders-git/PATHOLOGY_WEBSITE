import React from "react";
import {
  FaMicroscope,
  FaServer,
  FaGear,
  FaVialCircleCheck,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const EquipmentTesting = () => {
  const equipments = [
    {
      icon: FaMicroscope,
      title: "Pathology Analyzers",
      desc: "High-throughput analyzers for rapid and precise sample evaluation.",
    },
    {
      icon: FaServer,
      title: "Automated Systems",
      desc: "Integrated digital workflows to minimize human error and increase speed.",
    },
    {
      icon: FaGear,
      title: "Calibrated Instruments",
      desc: "Regularly maintained and calibrated tools for analytical accuracy.",
    },
    {
      icon: FaVialCircleCheck,
      title: "Diagnostic Precision",
      desc: "Ensuring every test meets clinical benchmarks for diagnostic evaluation.",
    },
  ];

  return (
    <section className="py-24 bg-pure-white relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Image with Technical Feel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="lg:w-1/2 relative will-change-transform"
          >
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl group">
              <img
                src="https://st.depositphotos.com/1067336/2279/i/600/depositphotos_22791150-stock-photo-laboratories-experiment.jpg"
                alt="Modern Laboratory Equipment"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
            {/* Professional Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-xl shadow-2xl z-20 border border-white/10 hidden md:block will-change-transform"
            >
              <div className="text-secondary font-black text-4xl mb-1 uppercase tracking-tighter italic">
                Modern
              </div>
              <div className="text-white/60 text-[10px] font-bold uppercase tracking-[0.3em]">
                Laboratory Suite
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="lg:w-1/2 will-change-transform"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-secondary"></div>
              <span className="text-secondary font-black text-[10px] md:text-xs uppercase tracking-[0.3em]">
                Advanced Technology
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter mb-8 leading-tight text-balance">
              Equipment & Testing
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-primary/60 text-sm md:text-base leading-relaxed mb-10 font-medium border-l-4 border-secondary pl-6"
            >
              Modern pathology analyzers, automated testing systems, and
              calibrated laboratory instruments are used for accurate diagnostic
              evaluation. We invest in the latest technology to ensure clinical
              excellence.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {equipments.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex gap-4 items-start group"
                >
                  <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center text-primary text-xl shrink-0 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    <item.icon />
                  </div>
                  <div>
                    <h4 className="text-primary font-black text-xs uppercase tracking-wider mb-2">
                      {item.title}
                    </h4>
                    <p className="text-primary/40 text-[11px] leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentTesting;
