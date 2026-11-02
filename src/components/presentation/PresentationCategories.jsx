import React from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaHandshake, FaHeartbeat, FaLayerGroup, FaFilePowerpoint, FaBriefcase } from "react-icons/fa";

// Smart icon resolver for dynamic presentation categories
const getPresentationCategoryIcon = (catName = "") => {
  const lower = (catName || "").toLowerCase();
  if (lower.includes("company") || lower.includes("corporate") || lower.includes("profile"))
    return FaBuilding;
  if (lower.includes("partner") || lower.includes("lab") || lower.includes("franchise"))
    return FaHandshake;
  if (lower.includes("health") || lower.includes("event") || lower.includes("care") || lower.includes("awareness"))
    return FaHeartbeat;
  if (lower.includes("business") || lower.includes("service") || lower.includes("solution"))
    return FaBriefcase;
  return FaFilePowerpoint;
};

const PresentationCategories = ({
  categories = [],
  activeCategory = "All",
  onSelectCategory,
}) => {
  if (!categories || categories.length === 0) return null;

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

        {/* Dynamic Category Pills */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          {/* All Button */}
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onSelectCategory("All")}
            className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer shadow-xs ${
              activeCategory === "All"
                ? "bg-secondary text-white shadow-md shadow-secondary/25 border border-secondary"
                : "bg-white text-gray-700 hover:text-black border border-gray-200 hover:border-red-200 hover:bg-gray-50/50"
            }`}
          >
            <FaLayerGroup className={`text-base ${activeCategory === "All" ? "text-white" : "text-secondary"}`} />
            <span>All Presentations</span>
          </motion.button>

          {/* Dynamic Categories */}
          {categories.map((cat, idx) => {
            const catName = typeof cat === "string" ? cat : cat.title || cat.name || cat.category;
            const Icon = getPresentationCategoryIcon(catName);
            const isSelected = activeCategory.toLowerCase() === catName.toLowerCase();

            return (
              <motion.button
                key={`cat-${idx}-${catName}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onSelectCategory(isSelected ? "All" : catName)}
                className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer shadow-xs ${
                  isSelected
                    ? "bg-secondary text-white shadow-md shadow-secondary/25 border border-secondary"
                    : "bg-white text-gray-700 hover:text-black border border-gray-200 hover:border-red-200 hover:bg-gray-50/50"
                }`}
              >
                <Icon className={`text-base ${isSelected ? "text-white" : "text-secondary"}`} />
                <span>{catName}</span>
                {typeof cat === "object" && cat.count !== undefined && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isSelected ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"}`}>
                    {cat.count}
                  </span>
                )}
              </motion.button>
            );
          })}

          {activeCategory !== "All" && (
            <button
              onClick={() => onSelectCategory("All")}
              className="text-xs font-bold text-gray-400 hover:text-secondary underline ml-2 cursor-pointer"
            >
              Reset to All
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default PresentationCategories;
