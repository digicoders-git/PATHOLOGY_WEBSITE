import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaEye, FaHandSparkles, FaRocket } from "react-icons/fa";

const MissionVision = () => {
  const goals = [
    {
      icon: FaBullseye,
      title: "Mission",
      content:
        "Make diagnostic testing affordable, reliable, and patient-friendly.",
      color: "secondary",
    },
    {
      icon: FaEye,
      title: "Vision",
      content: "A trusted digital diagnostic ecosystem for labs and users.",
      color: "primary",
    },
    {
      icon: FaHandSparkles,
      title: "Approach",
      content: "Verified lab info and technology support for efficiency.",
      color: "secondary",
    },
    {
      icon: FaRocket,
      title: "Future",
      content: "Strengthening healthcare accessibility through technology.",
      color: "primary",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 group hover:border-secondary transition-all duration-300 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:shadow-gray-200/50"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-${goal.color} text-xl group-hover:bg-secondary group-hover:text-white transition-all shadow-sm mb-4`}
              >
                <goal.icon />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2 uppercase tracking-tight">
                {goal.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                {goal.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
