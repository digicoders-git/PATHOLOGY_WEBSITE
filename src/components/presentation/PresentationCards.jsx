import React from "react";
import { motion } from "framer-motion";

export const PRESENTATIONS_DATA = [
  {
    id: "p1",
    title: "Labo India Company Profile",
    description: "Know more about our vision, mission and journey.",
    category: "Company Profile",
    banner: "/assets/presentation/pres-1-company-profile.png",
  },
  {
    id: "p2",
    title: "Become a Lab Partner",
    description: "Join our growing network of pathology labs.",
    category: "Lab Partner",
    banner: "/assets/presentation/pres-2-lab-partner.png",
  },
  {
    id: "p3",
    title: "Digital Pathology Network",
    description: "Explore our digital pathology solutions.",
    category: "Healthcare & Events",
    banner: "/assets/presentation/pres-3-digital-pathology.png",
  },
  {
    id: "p4",
    title: "Our Services & Solutions",
    description: "Comprehensive pathology services under one platform.",
    category: "Company Profile",
    banner: "/assets/presentation/pres-4-services-solutions.png",
  },
  {
    id: "p5",
    title: "Healthcare Awareness",
    description: "Learn about preventive healthcare and regular testing.",
    category: "Healthcare & Events",
    banner: "/assets/presentation/pres-5-healthcare-awareness.png",
  },
  {
    id: "p6",
    title: "Labo India Business Overview",
    description: "Discover our growth, impact and future vision.",
    category: "Company Profile",
    banner: "/assets/presentation/pres-6-business-overview.png",
  },
];

const PresentationCards = ({
  presentations = PRESENTATIONS_DATA,
  onViewPresentation,
  onResetFilters,
}) => {
  return (
    <section className="py-8 pb-16 bg-white">
      <div className="container mx-auto px-6 lg:px-16 max-w-[1360px]">
        {presentations.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
            <p className="text-gray-500 font-bold text-base mb-2">
              No presentations found matching your search.
            </p>
            <button
              onClick={onResetFilters}
              className="text-secondary font-black text-xs uppercase tracking-widest underline hover:opacity-80"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {presentations.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                onClick={() => onViewPresentation && onViewPresentation(item)}
                className="group bg-white rounded-2xl md:rounded-3xl border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
              >
                {/* Top Banner Image (16:9 HD) */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-50">
                  <img
                    src={`${item.banner}?v=3`}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Content Area (Clean Title & Description) */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-black text-gray-900 leading-snug group-hover:text-secondary transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1.5 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PresentationCards;
