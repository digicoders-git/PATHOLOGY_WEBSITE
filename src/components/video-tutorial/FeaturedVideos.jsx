import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaEye, FaArrowRight } from "react-icons/fa";

export const TUTORIAL_VIDEOS = [
  {
    id: "v1",
    title: "How to Book a Test on Labo India?",
    category: "Patient Guide",
    thumbnail: "/assets/video-tutorial/banner-1-book-test.png",
    duration: "04:32",
    date: "Oct 25, 2025",
    views: "12.5K Views",
  },
  {
    id: "v2",
    title: "How to Track Your Sample?",
    category: "Patient Guide",
    thumbnail: "/assets/video-tutorial/banner-2-track-sample.png",
    duration: "03:50",
    date: "Oct 24, 2025",
    views: "10.2K Views",
  },
  {
    id: "v3",
    title: "How to Download Reports?",
    category: "Patient Guide",
    thumbnail: "/assets/video-tutorial/banner-3-download-reports.png",
    duration: "03:15",
    date: "Oct 22, 2025",
    views: "8.7K Views",
  },
  {
    id: "v4",
    title: "Lab Partner Dashboard Overview",
    category: "Lab Partner Guide",
    thumbnail: "/assets/video-tutorial/banner-4-partner-dashboard.png",
    duration: "05:20",
    date: "Oct 20, 2025",
    views: "6.9K Views",
  },
  {
    id: "v5",
    title: "How to Manage Bookings?",
    category: "Lab Partner Guide",
    thumbnail: "/assets/video-tutorial/banner-5-manage-bookings.png",
    duration: "04:48",
    date: "Oct 18, 2025",
    views: "7.3K Views",
  },
  {
    id: "v6",
    title: "How to Upload Reports on Labo India?",
    category: "Lab Partner Guide",
    thumbnail: "/assets/video-tutorial/banner-6-upload-reports.png",
    duration: "03:22",
    date: "Oct 16, 2025",
    views: "5.6K Views",
  },
];

const FeaturedVideos = ({ videos = TUTORIAL_VIDEOS, onSelectVideo, onResetFilters }) => {
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

          <button
            onClick={onResetFilters}
            className="inline-flex items-center gap-2 border border-secondary text-secondary hover:bg-secondary hover:text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
          >
            <span>View All Videos</span>
            <FaArrowRight className="text-[10px]" />
          </button>
        </div>

        {/* Videos Grid */}
        {videos.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
            <p className="text-gray-500 font-bold text-base mb-2">No video tutorials found matching your search.</p>
            <button
              onClick={onResetFilters}
              className="text-secondary font-black text-xs uppercase tracking-widest underline hover:opacity-80"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {videos.map((vid, idx) => (
              <motion.div
                key={vid.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                onClick={() => onSelectVideo(vid)}
                className="group bg-white rounded-2xl md:rounded-3xl border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
              >
                {/* Thumbnail Container */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Duration Pill bottom-right */}
                  <div className="absolute bottom-2.5 right-2.5 bg-black/85 backdrop-blur-xs text-white text-[11px] font-black px-2 py-0.5 rounded-md shadow-md">
                    {vid.duration}
                  </div>
                </div>

                {/* Card Info Area */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-black text-gray-900 group-hover:text-secondary transition-colors leading-snug line-clamp-2">
                    {vid.title}
                  </h3>

                  {/* Meta Details Row */}
                  <div className="flex items-center gap-6 text-xs text-gray-500 font-semibold mt-4 pt-3 border-t border-gray-50">
                    <div className="flex items-center gap-1.5">
                      <FaCalendarAlt className="text-gray-400 text-xs" />
                      <span>{vid.date}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <FaEye className="text-gray-400 text-xs" />
                      <span>{vid.views}</span>
                    </div>
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

export default FeaturedVideos;
