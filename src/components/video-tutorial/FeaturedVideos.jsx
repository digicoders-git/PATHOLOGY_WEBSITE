import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaEye, FaArrowRight, FaPlay, FaVideoSlash } from "react-icons/fa";
import { resolveTutorialImageUrl } from "../../apis/tutorialService";

const FeaturedVideos = ({
  videos = [],
  onSelectVideo,
  onResetFilters,
  loading = false,
}) => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 lg:px-16 max-w-[1360px]">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="w-10 h-1 bg-secondary rounded-full mb-2.5"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black tracking-tight font-sans">
              Featured Video Tutorials
            </h2>
          </div>

          {videos.length > 0 && (
            <button
              onClick={onResetFilters}
              className="inline-flex items-center gap-2 border border-secondary text-secondary hover:bg-secondary hover:text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
            >
              <span>View All Videos</span>
              <FaArrowRight className="text-[10px]" />
            </button>
          )}
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="py-20 text-center">
            <div className="w-10 h-10 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-xs font-bold text-gray-400">Loading tutorials from server...</p>
          </div>
        )}

        {/* Empty State when no videos in database */}
        {!loading && videos.length === 0 && (
          <div className="text-center py-20 px-6 bg-gray-50 rounded-3xl border border-dashed border-gray-200 max-w-2xl mx-auto">
            <div className="w-14 h-14 rounded-full bg-red-50 text-secondary flex items-center justify-center mx-auto mb-3">
              <FaVideoSlash className="text-2xl" />
            </div>
            <h3 className="text-base font-black text-gray-800 mb-1">No Video Tutorials Available</h3>
            <p className="text-gray-500 text-xs max-w-md mx-auto leading-relaxed">
              Currently there are no video tutorials published in the backend. When tutorials are added via the Admin Panel, they will appear here.
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

        {/* Videos Grid (Pure Dynamic Data from Backend) */}
        {!loading && videos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {videos.map((vid, idx) => {
              const key = vid._id || vid.id || idx;
              const imgSrc = resolveTutorialImageUrl(
                vid.thumbnail || vid.thumbnailUrl,
                vid.youtubeId
              );

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -6 }}
                  onClick={() => onSelectVideo(vid)}
                  className="group bg-white rounded-2xl md:rounded-3xl border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
                >
                  {/* Thumbnail Container */}
                  <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-900">
                    <img
                      src={imgSrc}
                      alt={vid.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        if (vid.youtubeId) {
                          e.target.src = `https://img.youtube.com/vi/${vid.youtubeId}/hqdefault.jpg`;
                        }
                      }}
                    />

                    {/* Play hover watermark */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg shadow-secondary/40">
                        <FaPlay className="text-base translate-x-0.5" />
                      </div>
                    </div>

                    {/* Duration Pill bottom-right */}
                    {vid.duration && (
                      <div className="absolute bottom-2.5 right-2.5 bg-black/85 backdrop-blur-xs text-white text-[11px] font-black px-2 py-0.5 rounded-md shadow-md">
                        {vid.duration}
                      </div>
                    )}
                  </div>

                  {/* Card Info Area */}
                  <div className="p-5 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Category Tag */}
                      {vid.category && (
                        <span className="inline-block text-[10px] font-black uppercase tracking-wider text-secondary bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100 mb-2">
                          {vid.category}
                        </span>
                      )}

                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-black text-gray-900 group-hover:text-secondary transition-colors leading-snug line-clamp-2">
                        {vid.title}
                      </h3>
                    </div>

                    {/* Meta Details Row */}
                    <div className="flex items-center gap-6 text-xs text-gray-500 font-semibold mt-4 pt-3 border-t border-gray-50">
                      <div className="flex items-center gap-1.5">
                        <FaCalendarAlt className="text-gray-400 text-xs" />
                        <span>{vid.date || "Recent"}</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <FaEye className="text-gray-400 text-xs" />
                        <span>{vid.views || "1.0K Views"}</span>
                      </div>
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

export default FeaturedVideos;
