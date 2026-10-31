import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaHandshake, FaMobileAlt, FaArrowRight } from "react-icons/fa";

const categories = [
  {
    id: "patient",
    title: "Patient Guide",
    description: "Learn how to book tests, track samples and more.",
    icon: FaUsers,
    tag: "Patient Guide",
  },
  {
    id: "partner",
    title: "Lab Partner Guide",
    description: "Manage your lab operations efficiently.",
    icon: FaHandshake,
    tag: "Lab Partner Guide",
  },
  {
    id: "app",
    title: "Mobile App Guide",
    description: "Get started with Labo India Mobile App.",
    icon: FaMobileAlt,
    tag: "Mobile App Guide",
  },
];

const VideoCategories = ({ activeCategory, onSelectCategory }) => {
  return (
    <section className="pt-16 pb-8 bg-white">
      <div className="container mx-auto px-6 lg:px-16 max-w-[1360px]">
        
        {/* Section Header */}
        <div className="text-left mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black tracking-tight font-sans">
            Our <span className="text-secondary">Video</span> Categories
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-1.5 font-medium">
            Choose a category to watch relevant tutorials
          </p>
        </div>

        {/* 3 Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.tag;

            return (
              <motion.div
                key={cat.id}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelectCategory(isSelected ? "All" : cat.tag)}
                className={`flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-red-50/70 border-secondary shadow-md ring-2 ring-secondary/20"
                    : "bg-white border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-lg hover:border-red-100"
                }`}
              >
                <div className="flex items-center gap-4 min-w-0">
                  {/* Circular Red Icon */}
                  <div className="w-13 h-13 rounded-full bg-secondary text-white flex items-center justify-center shrink-0 shadow-md shadow-secondary/20">
                    <Icon className="text-xl" />
                  </div>

                  {/* Text Details */}
                  <div className="min-w-0">
                    <h3 className="text-base md:text-lg font-black text-black leading-snug">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed truncate md:whitespace-normal">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Arrow Button */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-3 transition-colors ${
                    isSelected
                      ? "bg-secondary text-white"
                      : "bg-secondary text-white group-hover:scale-105"
                  }`}
                >
                  <FaArrowRight className="text-xs" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default VideoCategories;
