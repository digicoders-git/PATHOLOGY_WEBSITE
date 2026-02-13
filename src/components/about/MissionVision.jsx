import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaEye, FaHandSparkles, FaRocket } from "react-icons/fa";

const MissionVision = () => {
  const goals = [
    {
      icon: FaBullseye,
      title: "Mission",
      content:
        "To make diagnostic information accessible, structured, and reliable for patients and laboratories through technology-driven solutions.",
      color: "secondary",
    },
    {
      icon: FaEye,
      title: "Vision",
      content:
        "To build a trusted digital diagnostic ecosystem that enhances collaboration between pathology labs and healthcare users.",
      color: "primary",
    },
    {
      icon: FaHandSparkles,
      title: "Our Approach",
      content:
        "We focus on digital integration, verified lab information, and technology support for laboratories to improve accessibility and operational efficiency.",
      color: "secondary",
    },
    {
      icon: FaRocket,
      title: "Future Direction",
      content:
        "We aim to expand lab connectivity, improve diagnostic transparency, and strengthen healthcare accessibility through continuous technological advancement.",
      color: "primary",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-secondary/20 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white p-10 rounded-3xl shadow-xl shadow-primary/5 border border-gray-50 group hover:border-secondary transition-all duration-500 flex flex-col items-start gap-6 relative overflow-hidden"
            >
              {/* Corner Accent */}
              <div
                className={`absolute top-0 right-0 w-24 h-24 bg-${goal.color}/5 rounded-bl-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700`}
              ></div>

              <div
                className={`w-16 h-16 rounded-2xl bg-${goal.color}/10 flex items-center justify-center text-${goal.color} text-2xl group-hover:bg-${goal.color} group-hover:text-white transition-all duration-300 shadow-sm`}
              >
                <goal.icon />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-black text-primary mb-4 uppercase tracking-tight">
                  {goal.title}
                </h3>
                <p className="text-primary/70 text-base font-medium leading-relaxed">
                  {goal.content}
                </p>
              </div>

              {/* Bottom bar animation */}
              <div
                className={`absolute bottom-0 left-10 right-10 h-1 bg-${goal.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
