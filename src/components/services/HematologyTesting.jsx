import React from "react";
import {
  FaDroplet,
  FaVials,
  FaMicroscope,
  FaFileMedical,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const HematologyTesting = () => {
  const features = [
    {
      icon: FaDroplet,
      title: "Complete Blood Count (CBC)",
      desc: "Comprehensive evaluation of red cells, white cells, and platelets for general health screening.",
    },
    {
      icon: FaVials,
      title: "Hemoglobin Analysis",
      desc: "Precise measurement of hemoglobin levels to detect anemia and other blood disorders.",
    },
    {
      icon: FaMicroscope,
      title: "Cell Morphology",
      desc: "Detailed microscopic examination of blood cells to identify structural abnormalities.",
    },
    {
      icon: FaFileMedical,
      title: "Clotting Studies",
      desc: "Specialized tests to evaluate blood coagulation and screening for bleeding disorders.",
    },
  ];

  return (
    <section className="py-12 bg-pure-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="lg:w-1/2 will-change-transform"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-secondary"></div>
              <span className="text-secondary font-black text-[10px] md:text-xs uppercase tracking-[0.3em]">
                Specialized Diagnostics
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter mb-8 leading-tight">
              Hematology Testing
            </h2>

            <p className="text-primary/70 text-sm md:text-base leading-relaxed mb-12 font-medium">
              Complete blood count testing, hemoglobin analysis, cell morphology
              evaluation, and clotting studies. Our hematology department uses
              advanced automated analyzers for precision.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center text-secondary text-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <feature.icon />
                    </div>
                    <h4 className="text-primary font-bold text-xs md:text-sm uppercase tracking-tight">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-primary/50 text-xs leading-relaxed font-medium">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Professional Medical Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="lg:w-1/2 relative will-change-transform"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-background group">
              <img
                src="https://img.freepik.com/premium-photo/blood-sample-tubes-hands_141172-3521.jpg?semt=ais_hybrid&w=740"
                alt="Hematology Lab Testing"
                className="w-full h-[550px] object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-multiply"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>

            {/* Floating Info Card */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              className="absolute bottom-10 -left-6 bg-pure-white p-6 rounded-2xl shadow-xl z-20 border border-gray-100 hidden md:block animate-bounce-subtle"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-secondary">
                  <FaDroplet className="text-xl" />
                </div>
                <div>
                  <div className="text-primary font-black text-sm uppercase">
                    Quick Turnaround
                  </div>
                  <div className="text-primary/40 text-[10px] font-bold uppercase tracking-widest">
                    Reports within 24hrs
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HematologyTesting;
