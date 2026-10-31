import React from "react";
import { FaPlay, FaCalendarAlt, FaRegFileAlt, FaShareAlt } from "react-icons/fa";

export const MEDIA_CATEGORIES = [
  { id: "all", label: "All Updates", icon: null },
  { id: "media", label: "Media", icon: FaPlay },
  { id: "event", label: "Event", icon: FaCalendarAlt },
  { id: "press", label: "Press Note", icon: FaRegFileAlt },
  { id: "social", label: "Social Media", icon: FaShareAlt },
];

const MediaEventTabs = ({ activeTab = "all", onSelectTab }) => {
  return (
    <section className="pt-10 pb-4 bg-white">
      <div className="container mx-auto px-6 lg:px-16 max-w-[1360px]">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 select-none">
          {MEDIA_CATEGORIES.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab && onSelectTab(tab.id)}
                className={`inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-black transition-all duration-300 shadow-xs cursor-pointer active:scale-95 ${
                  isActive
                    ? "bg-secondary text-white shadow-md shadow-secondary/25"
                    : "bg-white text-gray-700 hover:text-secondary border border-gray-200 hover:border-secondary/40 hover:bg-red-50/30"
                }`}
              >
                {Icon && <Icon className="text-xs" />}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MediaEventTabs;
