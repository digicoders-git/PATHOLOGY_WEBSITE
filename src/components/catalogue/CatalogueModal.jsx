import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaFilePdf, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CatalogueModal = ({ catalogue, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);
  if (!catalogue) return null;

  const totalPages = parseInt(catalogue.pages) || 24;

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
          className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border border-gray-200 flex flex-col max-h-[92vh]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-4 px-6 border-b border-gray-100 bg-white">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 bg-red-50 text-secondary text-xs font-black uppercase px-3 py-1 rounded-full border border-red-100">
                <FaFilePdf className="text-secondary" />
                {catalogue.title}
              </span>
              <span className="text-xs font-semibold text-gray-500">
                {catalogue.pages}
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

          {/* Book / Document Preview Area (Clean Light Background - NO Black) */}
          <div className="relative flex-1 bg-gradient-to-b from-gray-50 via-slate-50 to-gray-100 border-y border-gray-100 flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden min-h-[350px]">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[94/153] max-h-[460px] bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col border border-gray-200/80">
              <img
                src={`${catalogue.cover}?v=2`}
                alt={catalogue.title}
                className="w-full h-full object-contain bg-white"
              />

              {/* Page Badge */}
              <div className="absolute bottom-3 right-4 bg-gray-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                Page {currentPage} of {totalPages}
              </div>
            </div>

            {/* Page Navigation Controls (Clean Light Style) */}
            <div className="flex items-center gap-3 mt-4 select-none">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-secondary hover:text-white hover:border-secondary shadow-xs flex items-center justify-center cursor-pointer transition-all disabled:opacity-30 disabled:pointer-events-none"
                title="Previous Page"
              >
                <FaChevronLeft className="text-xs" />
              </button>
              <span className="text-gray-700 text-xs font-bold px-2">
                Page {currentPage} / {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-secondary hover:text-white hover:border-secondary shadow-xs flex items-center justify-center cursor-pointer transition-all disabled:opacity-30 disabled:pointer-events-none"
                title="Next Page"
              >
                <FaChevronRight className="text-xs" />
              </button>
            </div>
          </div>

          {/* Footer Details (NO Download Button) */}
          <div className="p-5 px-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg sm:text-xl font-black text-gray-900 leading-snug">
                {catalogue.title}
              </h3>
              <p className="text-xs text-gray-500 font-medium mt-0.5">
                {catalogue.description}
              </p>
            </div>

            <div className="flex items-center gap-3 self-end sm:self-center">
              <span className="text-xs font-semibold text-gray-400 hidden sm:inline">
                Official Labo India Catalogue
              </span>
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

export default CatalogueModal;
