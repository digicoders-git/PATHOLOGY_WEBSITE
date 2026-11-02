import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaHandshake,
  FaMobileAlt,
  FaArrowRight,
  FaUserMd,
  FaFileMedical,
  FaHeartbeat,
  FaPlayCircle,
  FaGraduationCap,
} from "react-icons/fa";

// Smart icon resolver based on whatever dynamic category name is typed
const getCategoryIcon = (catName = "") => {
  const lower = (catName || "").toLowerCase();
  if (lower.includes("patient") || lower.includes("user") || lower.includes("customer"))
    return FaUsers;
  if (lower.includes("partner") || lower.includes("lab") || lower.includes("franchise"))
    return FaHandshake;
  if (lower.includes("app") || lower.includes("mobile") || lower.includes("phone"))
    return FaMobileAlt;
  if (lower.includes("doctor") || lower.includes("medic") || lower.includes("consult"))
    return FaUserMd;
  if (lower.includes("report") || lower.includes("download") || lower.includes("result"))
    return FaFileMedical;
  if (lower.includes("test") || lower.includes("health") || lower.includes("blood"))
    return FaHeartbeat;
  if (lower.includes("guide") || lower.includes("learn") || lower.includes("training"))
    return FaGraduationCap;
  return FaPlayCircle;
};

const VideoCategories = ({
  categories = [],
  activeCategory = "All",
  onSelectCategory,
}) => {
  // If no dynamic categories exist from backend, don't show any dummy cards
  if (!categories || categories.length === 0) return null;

  const displayCategories = categories.map((cat, idx) => {
    if (typeof cat === "string") {
      return {
        id: `cat-${idx}-${cat}`,
        title: cat,
        description: `Watch helpful tutorials for ${cat}.`,
        count: null,
      };
    }
    return {
      id: cat._id || cat.id || `cat-${idx}-${cat.title || cat.category}`,
      title: cat.title || cat.category || cat.name,
      description:
        cat.description ||
        (cat.count ? `${cat.count} tutorial videos available` : `Tutorials on ${cat.title || cat.category}`),
      count: cat.count ?? null,
    };
  });

  return (
    <section className="pt-16 pb-8 bg-white">
      <div className="container mx-auto px-6 lg:px-16 max-w-[1360px]">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black tracking-tight font-sans">
              Our <span className="text-secondary">Video</span> Categories
            </h2>
            <p className="text-gray-500 text-sm md:text-base mt-1.5 font-medium">
              Choose a category to watch relevant tutorials
            </p>
          </div>

          {activeCategory !== "All" && (
            <button
              onClick={() => onSelectCategory("All")}
              className="text-xs font-black uppercase tracking-wider text-secondary bg-red-50 hover:bg-secondary hover:text-white px-4 py-2 rounded-full border border-red-200 transition-all cursor-pointer shadow-xs"
            >
              Reset to All ({displayCategories.length} Categories)
            </button>
          )}
        </div>

        {/* Dynamic Category Cards Grid */}
        <div
          className={`grid gap-6 ${
            displayCategories.length <= 2
              ? "grid-cols-1 md:grid-cols-2"
              : displayCategories.length === 3
              ? "grid-cols-1 md:grid-cols-3"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          }`}
        >
          {displayCategories.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.title);
            const isSelected =
              activeCategory.toLowerCase() === cat.title.toLowerCase();

            return (
              <motion.div
                key={cat.id || idx}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  onSelectCategory(isSelected ? "All" : cat.title)
                }
                className={`flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-red-50/80 border-secondary shadow-md ring-2 ring-secondary/20"
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
                    <h3 className="text-base font-black text-black leading-snug line-clamp-1">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed truncate">
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
