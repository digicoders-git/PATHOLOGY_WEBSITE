import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaImages, FaCalendarCheck, FaRegNewspaper, FaUsers } from "react-icons/fa";

export const MEDIA_CARDS_DATA = [
  {
    id: "gallery",
    category: "Media",
    categoryKey: "media",
    title: "Photo Gallery",
    description: "Explore our latest moments from events, activities and achievements.",
    metaText: "120+ Photos",
    metaIcon: FaImages,
    buttonText: "View Gallery",
    image: "/assets/media-event/card-1-photo-gallery.jpg",
  },
  {
    id: "events",
    category: "Event",
    categoryKey: "event",
    title: "Our Events",
    description: "Discover upcoming and past events organized by Labo India.",
    metaText: "25+ Events",
    metaIcon: FaCalendarCheck,
    buttonText: "View Events",
    image: "/assets/media-event/card-2-our-events.jpg",
  },
  {
    id: "press",
    category: "Press Note",
    categoryKey: "press",
    title: "Press Releases",
    description: "Read our official press releases and media updates.",
    metaText: "50+ Press Notes",
    metaIcon: FaRegNewspaper,
    buttonText: "View Press Notes",
    image: "/assets/media-event/card-3-press-releases.jpg",
  },
  {
    id: "social",
    category: "Social Media",
    categoryKey: "social",
    title: "Follow Us",
    description: "Connect with us on social media for the latest updates, health tips and more.",
    metaText: "Social Channels",
    metaIcon: FaUsers,
    buttonText: "Follow Us",
    image: "/assets/media-event/card-4-follow-us.jpg",
  },
];

const MediaEventCards = ({
  cards = MEDIA_CARDS_DATA,
  activeTab = "all",
  onSelectCard,
}) => {
  const filteredCards = cards.filter((card) => {
    if (activeTab === "all") return true;
    return card.categoryKey === activeTab;
  });

  return (
    <section className="py-8 pb-16 bg-white">
      <div className="container mx-auto px-6 lg:px-16 max-w-[1360px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {filteredCards.map((card, idx) => {
            const MetaIcon = card.metaIcon;

            return (
              <motion.div
                key={card.id}
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
                    src={`${card.image}?v=2`}
                    alt={card.title}
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
                    {/* Meta Info */}
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-600">
                      {MetaIcon && <MetaIcon className="text-secondary text-sm" />}
                      <span>{card.metaText}</span>
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
                      <span>{card.buttonText}</span>
                      <FaArrowRight className="text-[10px]" />
                    </button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MediaEventCards;
