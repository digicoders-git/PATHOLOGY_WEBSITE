import React, { useEffect, useRef } from "react";
import {
  FaTrophy,
  FaMicroscope,
  FaGlobeAmericas,
  FaHospital,
} from "react-icons/fa";
import { motion, useSpring, useTransform, useInView } from "framer-motion";

const CounterItem = ({ icon: Icon, endValue, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 30,
    duration: 2,
  });

  const displayValue = useTransform(springValue, (latest) =>
    Math.floor(latest).toString(),
  );

  useEffect(() => {
    if (isInView) {
      springValue.set(endValue);
    }
  }, [isInView, springValue, endValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-4 group will-change-transform"
    >
      <div className="text-secondary text-4xl md:text-5xl transition-transform duration-300 group-hover:scale-110">
        <Icon />
      </div>
      <div className="flex flex-col">
        <div className="flex items-start">
          <motion.span className="text-primary text-3xl md:text-4xl font-black leading-none">
            {displayValue}
          </motion.span>
          <span className="text-secondary text-xl md:text-2xl font-bold ml-1 -mt-1">
            +
          </span>
        </div>
        <span className="text-primary/60 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1">
          {label}
        </span>
      </div>
    </motion.div>
  );
};

const StatsSection = () => {
  const stats = [
    { icon: FaTrophy, endValue: 120, label: "Awards Winning" },
    { icon: FaMicroscope, endValue: 579, label: "Our Equipments" },
    { icon: FaGlobeAmericas, endValue: 342, label: "Field Expertise" },
    { icon: FaHospital, endValue: 231, label: "Industry Expertise" },
  ];

  return (
    <section className="py-12 bg-background border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center"
        >
          {stats.map((stat, index) => (
            <CounterItem
              key={index}
              icon={stat.icon}
              endValue={stat.endValue}
              label={stat.label}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
