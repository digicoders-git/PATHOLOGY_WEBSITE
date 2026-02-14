import React from "react";
import { motion } from "framer-motion";
import {
  FaLayerGroup,
  FaSearchPlus,
  FaListUl,
  FaInfoCircle,
} from "react-icons/fa";

const SubTestExplanation = () => {
  const points = [
    {
      icon: FaLayerGroup,
      title: "Hierarchical Grouping",
      description:
        "Organize parent categories into logical sub-tests for better medical context.",
    },
    {
      icon: FaSearchPlus,
      title: "Deep Insights",
      description:
        "Provide specific details for each individual parameter within a profile.",
    },
    {
      icon: FaListUl,
      title: "Structured Presentation",
      description:
        "Clean and readable formatting for complex diagnostic data sets.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Attractive Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary/5 to-transparent"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]"></div>
      <div className="absolute top-1/4 left-10 w-2 h-24 bg-linear-to-b from-secondary to-transparent rounded-full opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary font-bold text-sm mb-6">
                <FaInfoCircle className="text-secondary" />
                <span>Diagnostic Architecture</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
                Sub-Test{" "}
                <span className="text-secondary italic">
                  Structure Explanation
                </span>
              </h2>

              <p className="text-lg text-primary/70 font-medium leading-relaxed mb-10">
                Many diagnostic categories include specialized sub-tests. Our
                system helps laboratories present detailed test information with
                medical precision and visual clarity.
              </p>

              <div className="grid grid-cols-1 gap-6">
                {points.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-5 p-6 rounded-2xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:border-secondary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-50 group-hover:scale-110 transition-transform">
                      <point.icon className="text-xl text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-primary mb-1">
                        {point.title}
                      </h4>
                      <p className="text-primary/60 font-medium text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Attractive Visual Card */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-1 bg-linear-to-br from-primary via-primary-dark to-primary rounded-[2.5rem] shadow-2xl"
            >
              <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-[2.3rem] relative overflow-hidden">
                {/* Decorative Pattern inside card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                <h3 className="text-2xl font-black text-primary mb-8 text-center italic">
                  Example Structure
                </h3>

                <div className="space-y-4">
                  {/* Mock UI for structure explanation */}
                  <div className="p-5 rounded-xl bg-primary text-white font-bold flex justify-between items-center shadow-lg">
                    <span>Lipid Profile (Parent)</span>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded">
                      Category
                    </span>
                  </div>

                  <div className="ml-8 space-y-3 relative">
                    <div className="absolute -left-6 top-0 bottom-4 w-px bg-primary/20"></div>

                    {[
                      { name: "Total Cholesterol", val: "mg/dL" },
                      { name: "HDL (Good) Cholesterol", val: "mg/dL" },
                      { name: "LDL (Bad) Cholesterol", val: "mg/dL" },
                      { name: "Triglycerides", val: "mg/dL" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex justify-between items-center group hover:border-secondary transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-secondary"></div>
                          <span className="font-bold text-primary/80">
                            {item.name}
                          </span>
                        </div>
                        <span className="text-xs font-black text-secondary">
                          {item.val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                  <p className="text-primary/50 text-sm font-bold uppercase tracking-widest">
                    Digital Clarity Refined
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubTestExplanation;
