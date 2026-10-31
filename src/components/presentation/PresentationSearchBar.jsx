import React from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

const PresentationSearchBar = ({ searchQuery, setSearchQuery, onSearchSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearchSubmit) onSearchSubmit(searchQuery);
  };

  return (
    <div className="py-6 bg-white">
      <div className="container mx-auto px-6 lg:px-16 max-w-[1360px]">
        <form
          onSubmit={handleSubmit}
          className="relative flex items-center w-full bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow p-1.5 pl-6"
        >
          {/* Search Icon */}
          <FaSearch className="text-gray-400 text-base shrink-0 mr-3" />

          {/* Text Input */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search presentations..."
            className="w-full bg-transparent border-none outline-none text-sm md:text-base text-gray-800 placeholder-gray-400 font-medium pr-3"
          />

          {/* Clear button if query present */}
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="text-gray-400 hover:text-gray-600 p-1 mr-2 cursor-pointer"
            >
              <FaTimes className="text-xs" />
            </button>
          )}

          {/* Red Search Button */}
          <button
            type="submit"
            className="bg-secondary hover:bg-red-700 text-white font-bold text-sm md:text-base px-7 md:px-10 py-2.5 md:py-3 rounded-full transition-all duration-200 shadow-md active:scale-95 cursor-pointer shrink-0"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default PresentationSearchBar;
