import React from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaChartLine, FaRegClock, FaUsers } from "react-icons/fa";

const PartnershipQueries = () => {
  const benefits = [
    {
      icon: FaChartLine,
      title: "Growth",
      description: "Expand your reach and patient base digitslly.",
    },
    {
      icon: FaRegClock,
      title: "Efficiency",
      description: "Streamline reporting and collection tools.",
    },
    {
      icon: FaUsers,
      title: "Network",
      description: "Join a community of certified diagnostic centers.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight uppercase tracking-tight">
                Partnership <span className="text-secondary">Queries</span>
              </h2>

              <p className="text-gray-500 text-sm md:text-base mb-8 leading-relaxed max-w-lg">
                Diagnostic laboratories interested in joining the network can
                connect with our onboarding team. We help you scale your
                operations with modern technology.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-black transition-all shadow-md text-sm uppercase tracking-tight">
                  Partner Now
                </button>
                <button className="px-8 py-3 bg-white border border-gray-100 text-gray-900 font-bold rounded-xl hover:bg-gray-50 transition-all text-sm uppercase tracking-tight">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Content: Benefits Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all group"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-secondary text-lg group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                    <benefit.icon />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-500 text-[10px] leading-relaxed italic">
                      {benefit.description}
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

export default PartnershipQueries;
