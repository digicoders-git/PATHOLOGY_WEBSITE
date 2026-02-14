import React from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaChartLine, FaRegClock, FaUsers } from "react-icons/fa";

const PartnershipQueries = () => {
  const benefits = [
    {
      icon: FaChartLine,
      title: "Rapid Growth",
      description:
        "Expand your laboratory's reach and patient base through our digital network.",
    },
    {
      icon: FaRegClock,
      title: "Efficiency",
      description:
        "Streamline your reporting and collection processes with our advanced tools.",
    },
    {
      icon: FaUsers,
      title: "Strong Network",
      description:
        "Join a community of certified diagnostic centers sharing best practices.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-secondary/20 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="bg-primary rounded-xl p-1 md:p-1.5 shadow-2xl relative overflow-hidden group">
          {/* Background Animated Pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors duration-1000"></div>

          <div className="bg-white/95 backdrop-blur-md rounded-xl p-8 md:p-16 border border-white/20 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              {/* Left Content */}
              <div className="w-full lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/10 text-secondary font-bold text-sm mb-6 uppercase tracking-wider">
                    <FaHandshake />
                    <span>Lab Onboarding</span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
                    Partnership{" "}
                    <span className="text-secondary italic">Queries</span>
                  </h2>

                  <p className="text-lg text-primary/70 font-medium leading-relaxed mb-10">
                    Diagnostic laboratories interested in joining the network
                    can connect with our onboarding team. We help you scale your
                    operations with modern technology.
                  </p>

                  <div className="flex flex-wrap gap-6">
                    <button className="px-10 py-4 bg-primary text-white font-bold rounded-xl hover:bg-secondary transition-all duration-300 shadow-xl shadow-primary/20">
                      Become a Partner
                    </button>
                    <button className="px-10 py-4 bg-white border border-primary/10 text-primary font-bold rounded-xl hover:border-secondary hover:text-secondary transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Right Sidebar: Benefits Grid */}
              <div className="w-full lg:w-1/2">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-6 p-6 rounded-xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
                    >
                      <div className="shrink-0 w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-secondary text-2xl group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                        <benefit.icon />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-primary mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-primary/60 font-medium text-sm italic">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipQueries;
