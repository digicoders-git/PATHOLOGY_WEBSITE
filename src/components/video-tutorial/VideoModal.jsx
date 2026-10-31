import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaCalendarAlt, FaEye, FaYoutube } from "react-icons/fa";

const VideoModal = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
        {/* Backdrop click to close */}
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border border-gray-200"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-4 px-6 border-b border-gray-100 bg-white">
            <div className="flex items-center gap-3">
              <span className="bg-red-50 text-secondary text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-red-100">
                {video.category}
              </span>
              <span className="text-xs font-semibold text-gray-500">
                Duration: {video.duration}
              </span>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-secondary hover:text-white flex items-center justify-center transition-colors cursor-pointer text-gray-600"
              title="Close"
            >
              <FaTimes className="text-sm" />
            </button>
          </div>

          {/* Video Player Area */}
          <div className="relative w-full aspect-video bg-gray-900 flex items-center justify-center">
            {video.youtubeId ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-white p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4 shadow-lg shadow-secondary/40">
                  <FaYoutube className="text-3xl text-white" />
                </div>
                <h4 className="text-lg font-bold mb-1">{video.title}</h4>
                <p className="text-xs text-gray-300 max-w-md">
                  Official Labo India Tutorial Video. Connecting pathology labs across India.
                </p>
                <a
                  href="https://www.youtube.com/@laboindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-secondary hover:bg-red-700 text-white text-xs font-bold px-6 py-2.5 rounded-full transition-colors inline-flex items-center gap-2"
                >
                  <FaYoutube className="text-sm" /> Watch on YouTube Channel
                </a>
              </div>
            )}
          </div>

          {/* Footer Info Area */}
          <div className="p-5 px-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-1">
                {video.title}
              </h3>
              <div className="flex flex-wrap items-center gap-5 text-xs text-gray-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <FaCalendarAlt className="text-secondary" /> {video.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <FaEye className="text-secondary" /> {video.views}
                </span>
                <span className="text-gray-400">• Labo India Official Guide</span>
              </div>
            </div>

            <div className="flex items-center gap-3 self-end sm:self-center">
              <button
                onClick={onClose}
                className="inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs sm:text-sm px-6 py-2 rounded-full transition-all duration-200 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default VideoModal;
