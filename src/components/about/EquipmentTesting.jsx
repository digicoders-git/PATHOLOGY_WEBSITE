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
      title: "Analyzers",
      desc: "High-throughput rapid evaluation.",
    },
    {
      icon: FaServer,
      title: "Automation",
      desc: "Integrated digital workflows.",
    },
    {
      icon: FaGear,
      title: "Calibration",
      desc: "Regularly maintained instruments.",
    },
    {
      icon: FaVialCircleCheck,
      title: "Precision",
      desc: "Clinical benchmarks met.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group max-w-md mx-auto">
              <img
                src="https://st.depositphotos.com/1067336/2279/i/600/depositphotos_22791150-stock-photo-laboratories-experiment.jpg"
                alt="Equipment"
                className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>
          </motion.div>

          <div className="lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight uppercase tracking-tight"
            >
              Equipment & <span className="text-secondary">Testing</span>
            </motion.h2>

            <p className="text-gray-500 text-sm md:text-base mb-8 leading-relaxed">
              Modern pathology analyzers, automated systems, and calibrated
              laboratory instruments are used for accurate diagnostic
              evaluation.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {equipments.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 items-center group bg-white p-4 rounded-xl border border-gray-100 shadow-sm transition-all"
                >
                  <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-secondary text-lg shrink-0 group-hover:bg-secondary group-hover:text-white transition-all">
                    <item.icon />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-[10px] uppercase tracking-wider mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-[9px] leading-tight">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentTesting;
