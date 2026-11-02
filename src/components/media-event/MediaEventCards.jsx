import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaImages,
  FaCalendarCheck,
  FaRegNewspaper,
  FaUsers,
} from "react-icons/fa";
import { resolveMediaImageUrl } from "../../apis/mediaEventService";

const getMetaIcon = (category = "", metaText = "") => {
  const c = (category + " " + metaText).toLowerCase();
  if (c.includes("photo") || c.includes("image") || c.includes("gallery")) return FaImages;
  if (c.includes("event") || c.includes("conclave") || c.includes("award")) return FaCalendarCheck;
  if (c.includes("press") || c.includes("note") || c.includes("news")) return FaRegNewspaper;
  if (c.includes("social") || c.includes("channel") || c.includes("follow")) return FaUsers;
  return FaImages;
};

const MediaEventCards = ({
  cards = [],
  activeTab = "all",
  onSelectCard,
  loading = false,
}) => {
  const filteredCards = cards.filter((card) => {
    if (activeTab === "all") return true;
    const cat = (card.category || "").toLowerCase();
    const catKey = (card.categoryKey || "").toLowerCase();
    const tab = activeTab.toLowerCase();
    return cat === tab || catKey === tab || cat.replace(/[^a-z0-9]/g, "") === tab;
  });

  return (
    <section className="py-8 pb-16 bg-white">
      <div className="container mx-auto px-6 lg:px-16 max-w-[1360px]">
        {/* Loading Spinner */}
        {loading && (
          <div className="py-20 text-center">
            <div className="w-10 h-10 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-xs font-bold text-gray-400">Loading media & events from server...</p>
          </div>
        )}

        {/* Empty State when no media cards exist */}
        {!loading && filteredCards.length === 0 && (
          <div className="text-center py-20 px-6 bg-gray-50 rounded-3xl border border-dashed border-gray-200 max-w-2xl mx-auto">
            <div className="w-14 h-14 rounded-full bg-red-50 text-secondary flex items-center justify-center mx-auto mb-3">
              <FaImages className="text-2xl" />
            </div>
            <h3 className="text-base font-black text-gray-800 mb-1">No Media / Events Available</h3>
            <p className="text-gray-500 text-xs max-w-md mx-auto leading-relaxed">
              Currently there are no media updates or events published in this category.
            </p>
          </div>
        )}

        {/* Cards Grid */}
        {!loading && filteredCards.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {filteredCards.map((card, idx) => {
              const key = card._id || card.id || idx;
              const imageSrc = resolveMediaImageUrl(card.image || card.imageUrl);

              // 100% Dynamic Photo / Item Count (NO DUMMY 120!)
              const photoCount = Array.isArray(card.gallery) && card.gallery.length > 0
                ? card.gallery.length
                : (Array.isArray(card.items) ? card.items.length : 0);

              let dynamicMeta = card.metaText || "";
              const cat = (card.category || "").toLowerCase();
              if (cat.includes("media") || cat.includes("gallery") || dynamicMeta.includes("120")) {
                dynamicMeta = `${photoCount} Photos`;
              } else if (!dynamicMeta) {
                dynamicMeta = `${photoCount} Photos`;
              }

              const MetaIcon = getMetaIcon(card.category, dynamicMeta);

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -6 }}
                  onClick={() => onSelectCard && onSelectCard(card)}
                  className="group bg-white rounded-3xl border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:shadow-2xl transition-all duration-300 p-4 sm:p-5 flex flex-col sm:flex-row gap-5 items-stretch cursor-pointer overflow-hidden"
                >
                  {/* Left Visual Area (HD Card Image) */}
                  <div className="sm:w-[44%] shrink-0 rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center relative shadow-xs">
                    <img
                      src={imageSrc}
                      alt={card.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/media-hero.png";
                      }}
                      className="w-full h-full object-cover max-h-[220px] sm:max-h-[240px] rounded-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Right Details Area */}
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      {/* Category Badge */}
                      <div className="mb-2">
                        <span className="inline-block bg-secondary text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                          {card.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-black text-gray-900 leading-snug group-hover:text-secondary transition-colors mb-2">
                        {card.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    {/* Bottom Meta & Button */}
                    <div className="mt-5 pt-3 border-t border-gray-50 flex flex-col gap-3">
                      {/* Dynamic Meta Info (Real photo count!) */}
                      <div className="flex items-center gap-2 text-xs font-bold text-gray-600">
                        <MetaIcon className="text-secondary text-sm" />
                        <span>{dynamicMeta}</span>
                      </div>

                      {/* Action Pill Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectCard && onSelectCard(card);
                        }}
                        className="inline-flex items-center gap-2 bg-secondary hover:bg-red-700 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full transition-all duration-200 shadow-md shadow-secondary/20 hover:shadow-lg active:scale-95 self-start cursor-pointer group-hover:translate-x-1"
                      >
                        <span>{card.buttonText || "View Details"}</span>
                        <FaArrowRight className="text-[10px]" />
                      </button>
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

export default MediaEventCards;
