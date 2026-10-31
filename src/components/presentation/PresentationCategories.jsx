import React from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaHandshake, FaHeartbeat, FaLayerGroup } from "react-icons/fa";

const categories = [
  {
    id: "all",
    name: "All Presentations",
    icon: FaLayerGroup,
    filterKey: "All",
  },
  {
    id: "company",
    name: "Company Profile",
    icon: FaBuilding,
    filterKey: "Company Profile",
  },
  {
    id: "partner",
    name: "Lab Partner",
    icon: FaHandshake,
    filterKey: "Lab Partner",
  },
  {
    id: "healthcare",
    name: "Healthcare & Events",
    icon: FaHeartbeat,
    filterKey: "Healthcare & Events",
  },
];

const PresentationCategories = ({ activeCategory, onSelectCategory }) => {
  return (
    <section className="pt-14 pb-4 bg-white">
      <div className="container mx-auto px-6 lg:px-16 max-w-[1360px]">
        
        {/* Header */}
        <div className="text-left mb-8">
          <div className="w-10 h-1 bg-secondary rounded-full mb-2.5"></div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black tracking-tight font-sans">
            Explore <span className="text-secondary">Our</span> Presentations
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-1.5 font-medium">
            Get detailed insights about Labo India through our presentations.
          </p>
        </div>

        {/* 3 Category Pills */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.filterKey;

            return (
              <motion.button
                key={cat.id}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onSelectCategory(isSelected ? "All" : cat.filterKey)}
                className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer shadow-xs ${
                  isSelected
                    ? "bg-secondary text-white shadow-md shadow-secondary/25 border border-secondary"
                    : "bg-white text-gray-700 hover:text-black border border-gray-200 hover:border-red-200 hover:bg-gray-50/50"
                }`}
              >
                <Icon className={`text-base ${isSelected ? "text-white" : "text-secondary"}`} />
                <span>{cat.name}</span>
              </motion.button>
            );
          })}

          {activeCategory !== "All" && (
            <button
              onClick={() => onSelectCategory("All")}
              className="text-xs font-bold text-gray-400 hover:text-secondary underline ml-2 cursor-pointer"
            >
              Show All
            </button>
          )}
        </div>

      </div>
    </section>
  );
};

export default PresentationCategories;
