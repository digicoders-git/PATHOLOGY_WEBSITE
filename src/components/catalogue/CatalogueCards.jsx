import React from "react";
import { motion } from "framer-motion";
import { FaBookOpen } from "react-icons/fa";
import { resolveCatalogueImageUrl } from "../../apis/catalogueService";

const CatalogueCards = ({
  catalogues = [],
  onViewOnline,
  loading = false,
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

        {/* Loading Spinner */}
        {loading && (
          <div className="py-20 text-center">
            <div className="w-10 h-10 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-xs font-bold text-gray-400">Loading catalogues from server...</p>
          </div>
        )}

        {/* Empty State when no catalogues in backend */}
        {!loading && catalogues.length === 0 && (
          <div className="text-center py-20 px-6 bg-gray-50 rounded-3xl border border-dashed border-gray-200 max-w-2xl mx-auto">
            <div className="w-14 h-14 rounded-full bg-red-50 text-secondary flex items-center justify-center mx-auto mb-3">
              <FaBookOpen className="text-2xl" />
            </div>
            <h3 className="text-base font-black text-gray-800 mb-1">No Catalogues Available</h3>
            <p className="text-gray-500 text-xs max-w-md mx-auto leading-relaxed">
              Currently there are no catalogues published in the backend. When catalogues are created via the Admin Panel, they will appear here.
            </p>
          </div>
        )}

        {/* 6 Cards Grid (3 columns on desktop) - Dynamic from Backend */}
        {!loading && catalogues.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {catalogues.map((item, idx) => {
              const key = item._id || item.id || idx;
              const coverSrc = resolveCatalogueImageUrl(item.cover || item.banner || item.coverUrl);

              return (
                <motion.div
                  key={key}
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
                      src={coverSrc}
                      alt={item.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/catalogue-hero.png";
                      }}
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
                      <p className="text-xs text-gray-500 font-medium mt-1.5 leading-relaxed line-clamp-3">
                        {item.description || item.subtitle}
                      </p>
                    </div>

                    {/* View Online CTA (Note: 'PDF • 24 Pages' section removed as requested) */}
                    <div className="mt-3 pt-2.5 border-t border-gray-50 flex items-center justify-between text-xs font-bold text-secondary group-hover:underline">
                      <span>View Online</span>
                      <span className="text-sm transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};

export default CatalogueCards;
