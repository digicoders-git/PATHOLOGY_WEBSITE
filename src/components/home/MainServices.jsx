import React from "react";
import {
  FaMicroscope,
  FaVial,
  FaDna,
  FaCapsules,
  FaFlask,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MainServices = () => {
  const services = [
    {
      title: "Pathology Testing",
      description:
        "Comprehensive diagnostic testing across major clinical pathology disciplines including hematology and microbiology.",
      icon: FaMicroscope,
      link: "/tests-services",
    },
    {
      title: "Mineral Assay Testing",
      description:
        "Standardized biochemical analysis for metabolic assessment and mineral balance evaluation in clinical samples.",
      icon: FaVial,
      link: "/tests-services",
    },
    {
      title: "Biochemistry Solution",
      description:
        "Advanced analytical procedures for precise biochemical interpretation and dependable diagnostic reporting.",
      icon: FaDna,
      link: "/tests-services",
    },
    {
      title: "Pharmaceutical Research",
      description:
        "Supporting clinical trials and research with controlled laboratory environments and validated analytical methods.",
      icon: FaCapsules,
      link: "/tests-services",
    },
    {
      title: "Chemical Research",
      description:
        "Systematic chemical analysis and reagent validation to maintain consistency across all laboratory services.",
      icon: FaFlask,
      link: "/tests-services",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section className="py-20 bg-pure-white relative overflow-hidden">
      {/* Background Pattern (Subtle Medical Hexagons) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hexagons"
              width="50"
              height="43.4"
              patternUnits="userSpaceOnUse"
              patternTransform="scale(2)"
            >
              <path
                d="M25 0 L50 14.4 L50 43.4 L25 57.8 L0 43.4 L0 14.4 Z"
                fill="none"
                stroke="#1E3A5F"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-black text-xs md:text-sm uppercase tracking-[0.3em] mb-3 block">
            Our Specialties
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tight leading-tight">
            Explore Our Main Services
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative bg-white p-8 pt-12 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition-all duration-300 group will-change-transform"
            >
              {/* Icon Box */}
              <div className="absolute -top-6 left-8 w-14 h-14 bg-primary group-hover:bg-secondary flex items-center justify-center text-white text-2xl shadow-lg transition-colors duration-300">
                <service.icon />
                {/* Decorative sub-icon background effect */}
                <div className="absolute inset-0 opacity-10 flex items-center justify-center scale-[2.5] pointer-events-none">
                  <service.icon />
                </div>
              </div>

              <h3 className="text-xl font-black text-primary mb-4 uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-primary/70 text-sm leading-relaxed mb-6 font-medium">
                {service.description}
              </p>
              <Link
                to={service.link}
                className="inline-flex items-center text-primary hover:text-secondary font-black text-xs uppercase tracking-widest transition-colors duration-300 border-b-2 border-primary/10 hover:border-secondary pb-1"
              >
                Read More
              </Link>
            </motion.div>
          ))}

          {/* Last Card: Call to action style */}
          <motion.div
            variants={itemVariants}
            className="relative bg-primary p-8 flex flex-col justify-center items-start overflow-hidden group"
          >
            {/* Background Image Effect */}
            <div className="absolute inset-0 opacity-10 grayscale">
              <img
                src="https://images.unsplash.com/photo-1581093458791-9f3c3250bb8b?q=80&w=600&auto=format&fit=crop"
                alt="Explore More"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight leading-tight">
                Explore More <br /> Services
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-8 font-medium max-w-[200px]">
                Access reliable pathology testing services supported by
                professional evaluation.
              </p>
              <Link
                to="/tests-services"
                className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-md font-black text-xs uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-300 group"
              >
                All Services{" "}
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MainServices;
