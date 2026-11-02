import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaImages,
  FaCalendarAlt,
  FaRegNewspaper,
  FaUsers,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaShareAlt,
} from "react-icons/fa";
import { resolveMediaImageUrl } from "../../apis/mediaEventService";

const SOCIAL_ICON_MAP = {
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  YouTube: FaYoutube,
  Instagram: FaInstagram,
  Facebook: FaFacebook,
  LinkedIn: FaLinkedin,
  Twitter: FaTwitter,
  "X (Twitter)": FaTwitter,
};

const MediaEventModal = ({ card, onClose }) => {
  const [activeLightboxImage, setActiveLightboxImage] = useState(null);

  if (!card) return null;

  const categoryKey = (card.categoryKey || card.category || "").toLowerCase();
  const galleryPhotos = Array.isArray(card.gallery) && card.gallery.length > 0
    ? card.gallery
    : (Array.isArray(card.items) ? card.items : []);

  const hasEvents = Array.isArray(card.items) && card.items.some((it) => it.date || it.location);
  const hasPress = Array.isArray(card.items) && card.items.some((it) => it.source || it.snippet);
  const hasSocial = Array.isArray(card.items) && card.items.some((it) => it.handle || it.url);

  const isEvents = categoryKey.includes("event") || categoryKey.includes("conclave") || hasEvents;
  const isPress = categoryKey.includes("press") || categoryKey.includes("news") || hasPress;
  const isSocial = categoryKey.includes("social") || categoryKey.includes("follow") || hasSocial;
  const isGallery = !isEvents && !isPress && !isSocial;

  // Dynamic photo count
  const photoCount = galleryPhotos.length;
  let dynamicMeta = card.metaText || "";
  if (isGallery || dynamicMeta.includes("120")) {
    dynamicMeta = `${photoCount} Photos`;
  }

  const imageSrc = resolveMediaImageUrl(card.image || card.imageUrl);

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
          className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border border-gray-200 flex flex-col max-h-[90vh]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-4 px-6 border-b border-gray-100 bg-white">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 bg-red-50 text-secondary text-xs font-black uppercase px-3.5 py-1 rounded-full border border-red-100">
                {card.category}
              </span>
              <span className="text-sm font-black text-gray-900 truncate max-w-xs sm:max-w-md">
                {card.title}
              </span>
              <span className="text-xs font-bold text-gray-400 hidden sm:inline">
                • {dynamicMeta}
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

          {/* Modal Content Area (Clean Light Background - Zero Black) */}
          <div className="relative flex-1 bg-gradient-to-b from-gray-50 via-slate-50 to-gray-100 p-5 sm:p-6 md:p-8 overflow-y-auto">
            
            {/* 1. PHOTO GALLERY VIEW (With Full Dynamic Multiple Photos Grid!) */}
            {isGallery && (
              <div>
                <div className="text-center max-w-lg mx-auto mb-6">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                    {card.description}
                  </p>
                  <div className="inline-flex items-center gap-1.5 bg-red-50 text-secondary border border-red-100 text-xs font-black px-3 py-1 rounded-full mt-2.5">
                    <FaImages className="text-xs" />
                    <span>{photoCount} Photos in Gallery</span>
                  </div>
                </div>

                {photoCount > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {galleryPhotos.map((photo, i) => {
                      const photoSrc = resolveMediaImageUrl(photo.local || photo.image || photo.imageUrl);
                      return (
                        <div
                          key={photo._id || i}
                          onClick={() => setActiveLightboxImage(photoSrc)}
                          className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all cursor-pointer"
                        >
                          <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                            <img
                              src={photoSrc}
                              alt={photo.title || `Photo ${i + 1}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs">
                              Click to view
                            </div>
                          </div>
                          {(photo.title || photo.caption) && (
                            <div className="p-3 bg-white">
                              {photo.caption && (
                                <span className="text-[10px] font-bold text-secondary uppercase block">
                                  {photo.caption}
                                </span>
                              )}
                              {photo.title && (
                                <h4 className="text-xs font-black text-gray-800 line-clamp-1 mt-0.5">
                                  {photo.title}
                                </h4>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-200">
                    <FaImages className="text-3xl text-gray-300 mx-auto mb-2" />
                    <p className="text-xs text-gray-500 font-bold">
                      No photos uploaded in this gallery yet.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* 2. OUR EVENTS VIEW */}
            {isEvents && (
              <div className="space-y-4">
                <div className="text-center max-w-lg mx-auto mb-6">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                    {card.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {card.items.map((ev, i) => (
                    <div
                      key={ev._id || i}
                      className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                    >
                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center gap-3">
                          {ev.status && (
                            <span
                              className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full ${
                                ev.status === "Upcoming"
                                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                  : "bg-gray-100 text-gray-600"
                              }`}
                            >
                              {ev.status}
                            </span>
                          )}
                          {ev.date && (
                            <span className="text-xs font-semibold text-gray-400 flex items-center gap-1">
                              <FaCalendarAlt className="text-secondary text-[11px]" />
                              {ev.date}
                            </span>
                          )}
                        </div>

                        <h4 className="text-base sm:text-lg font-black text-gray-900">
                          {ev.title}
                        </h4>

                        {ev.desc && (
                          <p className="text-xs text-gray-500 font-medium">
                            {ev.desc}
                          </p>
                        )}

                        {ev.location && (
                          <div className="flex items-center gap-1.5 text-xs text-gray-600 font-medium pt-1">
                            <FaMapMarkerAlt className="text-secondary text-xs" />
                            <span>{ev.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. PRESS RELEASES VIEW */}
            {isPress && (
              <div className="space-y-4">
                <div className="text-center max-w-lg mx-auto mb-6">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                    {card.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {card.items.map((pr, i) => (
                    <div
                      key={pr._id || i}
                      className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow space-y-2"
                    >
                      <div className="flex items-center justify-between text-xs text-gray-500 font-semibold">
                        <span className="text-secondary font-black">
                          {pr.source || "Official Press"}
                        </span>
                        <span>{pr.date}</span>
                      </div>

                      <h4 className="text-base sm:text-lg font-black text-gray-900">
                        {pr.title}
                      </h4>

                      <p className="text-xs text-gray-600 font-medium leading-relaxed">
                        {pr.snippet || pr.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. SOCIAL MEDIA VIEW */}
            {isSocial && (
              <div>
                <div className="text-center max-w-lg mx-auto mb-6">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                    {card.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {card.items.map((ch, i) => {
                    const Icon = SOCIAL_ICON_MAP[ch.icon] || SOCIAL_ICON_MAP[ch.title] || FaShareAlt;
                    const color = ch.color || "#FF0000";

                    return (
                      <a
                        key={ch._id || i}
                        href={ch.url || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-secondary/30 transition-all flex items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            style={{ backgroundColor: `${color}15`, color: color }}
                            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                          >
                            <Icon className="text-2xl" />
                          </div>
                          <div>
                            <h4 className="text-sm font-black text-gray-900 group-hover:text-secondary transition-colors">
                              {ch.title || ch.name}
                            </h4>
                            {ch.handle && (
                              <p className="text-xs font-semibold text-gray-500">
                                {ch.handle}
                              </p>
                            )}
                            <p className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">
                              {ch.desc}
                            </p>
                          </div>
                        </div>

                        <div className="text-gray-400 group-hover:text-secondary transition-colors">
                          <FaExternalLinkAlt className="text-xs" />
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}

          </div>

          {/* Footer Bar */}
          <div className="p-4 px-6 bg-white border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-400 hidden sm:inline">
              Official Labo India Media & Event Portal
            </span>

            <button
              onClick={onClose}
              className="inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs sm:text-sm px-6 py-2 rounded-full transition-all duration-200 cursor-pointer ml-auto"
            >
              Close
            </button>
          </div>
        </motion.div>

        {/* Lightbox Modal for Full Size Photo Preview */}
        {activeLightboxImage && (
          <div
            className="fixed inset-0 z-60 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setActiveLightboxImage(null)}
          >
            <div className="relative max-w-4xl max-h-[85vh] bg-white rounded-2xl overflow-hidden shadow-2xl p-2">
              <button
                onClick={() => setActiveLightboxImage(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center z-10 hover:bg-red-600 transition-colors cursor-pointer"
              >
                <FaTimes />
              </button>
              <img
                src={activeLightboxImage}
                alt="Full preview"
                className="max-h-[80vh] w-auto object-contain rounded-xl mx-auto"
              />
            </div>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default MediaEventModal;
