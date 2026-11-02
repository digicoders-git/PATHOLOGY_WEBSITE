import React from "react";
import { motion } from "framer-motion";
import { FaSlideshare } from "react-icons/fa";
import { resolvePresentationImageUrl } from "../../apis/presentationService";

const PresentationCards = ({
  presentations = [],
  onViewPresentation,
  onResetFilters,
  loading = false,
}) => {
  return (
    <section className="py-8 pb-16 bg-white">
      <div className="container mx-auto px-6 lg:px-16 max-w-[1360px]">
        {/* Loading Spinner */}
        {loading && (
          <div className="py-20 text-center">
            <div className="w-10 h-10 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-xs font-bold text-gray-400">Loading presentations from server...</p>
          </div>
        )}

        {/* Empty State when no presentations in backend */}
        {!loading && presentations.length === 0 && (
          <div className="text-center py-20 px-6 bg-gray-50 rounded-3xl border border-dashed border-gray-200 max-w-2xl mx-auto">
            <div className="w-14 h-14 rounded-full bg-red-50 text-secondary flex items-center justify-center mx-auto mb-3">
              <FaSlideshare className="text-2xl" />
            </div>
            <h3 className="text-base font-black text-gray-800 mb-1">No Presentations Available</h3>
            <p className="text-gray-500 text-xs max-w-md mx-auto leading-relaxed">
              Currently there are no presentations published in the backend. When presentations are created via the Admin Panel, they will appear here.
            </p>
            {onResetFilters && (
              <button
                onClick={onResetFilters}
                className="mt-4 text-secondary font-black text-xs uppercase tracking-widest underline hover:opacity-80 cursor-pointer"
              >
                Clear Search & Filters
              </button>
            )}
          </div>
        )}

        {/* Dynamic Presentation Cards Grid */}
        {!loading && presentations.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {presentations.map((item, idx) => {
              const key = item._id || item.id || idx;
              const bannerSrc = resolvePresentationImageUrl(item.banner || item.bannerUrl);

              return (
                <motion.div
                  key={key}
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
                      src={bannerSrc}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Card Content Area */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Dynamic Category Pill */}
                      {item.category && (
                        <span className="inline-block text-[10px] font-black uppercase tracking-wider text-secondary bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100 mb-2">
                          {item.category}
                        </span>
                      )}

                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-black text-gray-900 leading-snug group-hover:text-secondary transition-colors">
                        {item.title}
                      </h3>

                      {/* Description */}
                      {item.description && (
                        <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1.5 leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      )}
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

export default PresentationCards;
