import React from "react";
import { FaPlay, FaCalendarAlt, FaRegFileAlt, FaShareAlt, FaThLarge } from "react-icons/fa";

const getCategoryIcon = (label = "") => {
  const l = label.toLowerCase();
  if (l.includes("media") || l.includes("gallery") || l.includes("photo")) return FaPlay;
  if (l.includes("event") || l.includes("conclave") || l.includes("meet")) return FaCalendarAlt;
  if (l.includes("press") || l.includes("news") || l.includes("note")) return FaRegFileAlt;
  if (l.includes("social") || l.includes("follow") || l.includes("community")) return FaShareAlt;
  return FaThLarge;
};

const MediaEventTabs = ({
  categories = [],
  activeTab = "all",
  onSelectTab,
}) => {
  // If categories array is provided dynamically, use it; otherwise fallback to default list
  const tabList = [
    { id: "all", label: "All Updates", icon: null },
    ...categories.map((c) => {
      const label = typeof c === "string" ? c : c.category || c.label;
      const id = typeof c === "string" ? c.toLowerCase().replace(/[^a-z0-9]/g, "") : c.categoryKey || c.id || label.toLowerCase().replace(/[^a-z0-9]/g, "");
      return {
        id,
        label,
        icon: getCategoryIcon(label),
      };
    }),
  ];

  if (tabList.length <= 1) return null;

  return (
    <section className="pt-10 pb-4 bg-white">
      <div className="container mx-auto px-6 lg:px-16 max-w-[1360px]">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 select-none">
          {tabList.map((tab) => {
            const Icon = tab.icon;
            const isActive =
              activeTab === tab.id ||
              (tab.id !== "all" && activeTab.toLowerCase() === tab.label.toLowerCase());

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
