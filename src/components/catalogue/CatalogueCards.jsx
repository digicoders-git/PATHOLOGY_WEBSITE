import React from "react";
import { motion } from "framer-motion";
import { FaFilePdf, FaBookOpen } from "react-icons/fa";

export const CATALOGUES_DATA = [
  {
    id: "c1",
    title: "General Catalogue",
    description: "Complete product range and services overview.",
    fileSize: "8 MB",
    pages: "24 Pages",
    cover: "/assets/catalogue/cat-1-general.png",
  },
  {
    id: "c2",
    title: "Pathology Test Guide",
    description: "Detailed guide for various pathology tests.",
    fileSize: "5 MB",
    pages: "32 Pages",
    cover: "/assets/catalogue/cat-2-pathology-test-guide.png",
  },
  {
    id: "c3",
    title: "Lab Partner Brochure",
    description: "Partner with us for growth and success.",
    fileSize: "3 MB",
    pages: "16 Pages",
    cover: "/assets/catalogue/cat-3-lab-partner.png",
  },
  {
    id: "c4",
    title: "Mobile App Guide",
    description: "Learn how to use our mobile app.",
    fileSize: "2 MB",
    pages: "14 Pages",
    cover: "/assets/catalogue/cat-4-mobile-app.png",
  },
  {
    id: "c5",
    title: "Product Brochure",
    description: "Explore our advanced pathology solutions.",
    fileSize: "4 MB",
    pages: "20 Pages",
    cover: "/assets/catalogue/cat-5-product-brochure.png",
  },
  {
    id: "c6",
    title: "Corporate Profile",
    description: "Know more about Labo India.",
    fileSize: "6 MB",
    pages: "28 Pages",
    cover: "/assets/catalogue/cat-6-corporate-profile.png",
  },
];

const CatalogueCards = ({
  catalogues = CATALOGUES_DATA,
  onViewOnline,
}) => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 lg:px-16 max-w-[1360px]">
        
        {/* Section Header */}
        <div className="text-left mb-10">
          <div className="w-10 h-1 bg-secondary rounded-full mb-2.5"></div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black tracking-tight font-sans">
            Our Catalogue
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-1.5 font-medium">
            Download and explore our detailed catalogue for pathology and diagnostic solutions.
          </p>
        </div>

        {/* 6 Cards Grid (3 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {catalogues.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -6 }}
              onClick={() => onViewOnline && onViewOnline(item)}
              className="group bg-white rounded-2xl md:rounded-3xl border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-300 p-4 sm:p-5 flex gap-4 sm:gap-5 items-stretch cursor-pointer"
            >
              {/* Left Booklet Cover */}
              <div className="w-28 sm:w-32 shrink-0 bg-gray-50 rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow flex items-center justify-center self-center sm:self-stretch">
                <img
                  src={`${item.cover}?v=2`}
                  alt={item.title}
                  className="w-full h-auto max-h-[175px] object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Right Content Area */}
              <div className="flex-1 flex flex-col justify-between min-w-0 py-1">
                <div>
                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-black text-gray-900 leading-snug group-hover:text-secondary transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-500 font-medium mt-1.5 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Format & Pages Meta */}
                <div className="mt-4 pt-3 border-t border-gray-50 flex items-center gap-3 text-[11px] font-semibold text-gray-500">
                  <span className="flex items-center gap-1 text-secondary font-bold">
                    <FaFilePdf className="text-xs shrink-0" />
                    <span>PDF</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <FaBookOpen className="text-xs text-secondary shrink-0" />
                    <span>{item.pages}</span>
                  </span>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CatalogueCards;
