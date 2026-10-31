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
  FaTwitter
} from "react-icons/fa";

const GALLERY_PHOTOS = [
  {
    title: "Labo India Diagnostic Facilities",
    category: "Infrastructure",
    img: "/assets/media-event/card-1-photo-gallery.jpg",
  },
  {
    title: "Annual Healthcare Leadership Summit",
    category: "Events",
    img: "/assets/media-event/card-2-our-events.jpg",
  },
  {
    title: "Official Media & Press Announcement",
    category: "Press Release",
    img: "/assets/media-event/card-3-press-releases.jpg",
  },
  {
    title: "Digital Pathology & Social Network",
    category: "Innovation",
    img: "/assets/media-event/card-4-follow-us.jpg",
  },
  {
    title: "Molecular Diagnostics Center",
    category: "Lab Operations",
    img: "/assets/video-tutorial/banner-2-track-sample.png",
  },
  {
    title: "Healthcare Awareness & Checkup Drive",
    category: "Community",
    img: "/assets/presentation/pres-5-healthcare-awareness.png",
  },
];

const EVENTS_LIST = [
  {
    title: "National Pathology & Diagnostic Conclave 2025",
    date: "November 15, 2025",
    location: "Vigyan Bhawan, New Delhi",
    status: "Upcoming",
    desc: "Keynote sessions on next-gen diagnostic automation and AI in clinical pathology.",
  },
  {
    title: "Digital Health & Smart Labs Symposium",
    date: "December 05, 2025",
    location: "Jio World Convention Centre, Mumbai",
    status: "Upcoming",
    desc: "Connecting 500+ lab partners, pathologists, and healthcare technology innovators.",
  },
  {
    title: "Free Preventive Health Checkup Drive",
    date: "October 10, 2025",
    location: "Community Health Center, Lucknow",
    status: "Completed",
    desc: "Over 2,500 citizens screened for preventive pathology markers and lifestyle indicators.",
  },
  {
    title: "Annual Lab Partner Excellence Awards",
    date: "September 22, 2025",
    location: "ITC Gardenia, Bengaluru",
    status: "Completed",
    desc: "Celebrating excellence and dedication across our nationwide partner laboratories.",
  },
];

const PRESS_NOTES = [
  {
    title: "Labo India Expands AI-Driven Diagnostic Network Across 200+ Cities",
    source: "The Economic Times",
    date: "October 20, 2025",
    snippet: "Accelerating report turnaround times with connected lab automation and digital pathology integration.",
  },
  {
    title: "Labo India Launches 2-Hour Express Home Sample Collection in Metros",
    source: "Healthcare Asia News",
    date: "October 08, 2025",
    snippet: "State-of-the-art cold-chain logistics ensures zero sample degradation and maximum test accuracy.",
  },
  {
    title: "Strategic Alliance Announced with Leading Multi-Specialty Hospital Chains",
    source: "Business Standard",
    date: "September 15, 2025",
    snippet: "Seamless API integration connects hospital EHR systems directly with Labo India processing hubs.",
  },
  {
    title: "Labo India Recognized as Fastest-Growing Health-Tech Brand of the Year",
    source: "Pharma & MedTech Review",
    date: "August 30, 2025",
    snippet: "Recognizing outstanding growth, digital innovation, and patient trust across urban and rural markets.",
  },
];

const SOCIAL_CHANNELS = [
  {
    name: "YouTube",
    handle: "@laboindia",
    desc: "Video tutorials, lab tours, and health awareness guides.",
    icon: FaYoutube,
    color: "#FF0000",
    url: "https://www.youtube.com/@laboindia",
  },
  {
    name: "Instagram",
    handle: "@laboindia.official",
    desc: "Daily health tips, team updates, and event highlights.",
    icon: FaInstagram,
    color: "#E1306C",
    url: "https://www.instagram.com/",
  },
  {
    name: "Facebook",
    handle: "Labo India Official",
    desc: "Community discussions, patient stories, and health drives.",
    icon: FaFacebook,
    color: "#1877F2",
    url: "https://www.facebook.com/",
  },
  {
    name: "LinkedIn",
    handle: "Labo India Healthcare",
    desc: "Corporate updates, career opportunities, and partner network.",
    icon: FaLinkedin,
    color: "#0A66C2",
    url: "https://www.linkedin.com/",
  },
  {
    name: "X (Twitter)",
    handle: "@LaboIndia",
    desc: "Real-time updates, health news, and announcements.",
    icon: FaTwitter,
    color: "#000000",
    url: "https://twitter.com/",
  },
];

const MediaEventModal = ({ card, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  if (!card) return null;

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
              <span className="text-sm font-black text-gray-900">
                {card.title}
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
            
            {/* 1. PHOTO GALLERY VIEW */}
            {card.id === "gallery" && (
              <div>
                <div className="text-center max-w-lg mx-auto mb-6">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                    Official Photo Gallery
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                    Visual journey through Labo India's high-tech facilities, events and milestones.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {GALLERY_PHOTOS.map((photo, i) => (
                    <div
                      key={i}
                      className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                        <img
                          src={photo.img}
                          alt={photo.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-3 bg-white">
                        <span className="text-[10px] font-bold text-secondary uppercase">
                          {photo.category}
                        </span>
                        <h4 className="text-xs font-black text-gray-800 line-clamp-1 mt-0.5">
                          {photo.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. OUR EVENTS VIEW */}
            {card.id === "events" && (
              <div className="space-y-4">
                <div className="text-center max-w-lg mx-auto mb-6">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                    Conferences & Healthcare Events
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                    Explore our upcoming symposiums and past healthcare conclaves.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {EVENTS_LIST.map((ev, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                    >
                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center gap-3">
                          <span
                            className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full ${
                              ev.status === "Upcoming"
                                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {ev.status}
                          </span>
                          <span className="text-xs font-semibold text-gray-400 flex items-center gap-1">
                            <FaCalendarAlt className="text-secondary text-[11px]" />
                            {ev.date}
                          </span>
                        </div>

                        <h4 className="text-base sm:text-lg font-black text-gray-900">
                          {ev.title}
                        </h4>

                        <p className="text-xs text-gray-500 font-medium">
                          {ev.desc}
                        </p>

                        <div className="flex items-center gap-1.5 text-xs text-gray-600 font-medium pt-1">
                          <FaMapMarkerAlt className="text-secondary text-xs" />
                          <span>{ev.location}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. PRESS RELEASES VIEW */}
            {card.id === "press" && (
              <div className="space-y-4">
                <div className="text-center max-w-lg mx-auto mb-6">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                    Official Press Releases
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                    Company news, expansion updates, and official media statements.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {PRESS_NOTES.map((pr, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow space-y-2"
                    >
                      <div className="flex items-center justify-between text-xs text-gray-500 font-semibold">
                        <span className="text-secondary font-black">
                          {pr.source}
                        </span>
                        <span>{pr.date}</span>
                      </div>

                      <h4 className="text-base sm:text-lg font-black text-gray-900">
                        {pr.title}
                      </h4>

                      <p className="text-xs text-gray-600 font-medium leading-relaxed">
                        {pr.snippet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. SOCIAL MEDIA VIEW */}
            {card.id === "social" && (
              <div>
                <div className="text-center max-w-lg mx-auto mb-6">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                    Connect on Social Media
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                    Join our growing online community for daily health insights and diagnostic tips.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SOCIAL_CHANNELS.map((ch, i) => {
                    const Icon = ch.icon;

                    return (
                      <a
                        key={i}
                        href={ch.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-secondary/30 transition-all flex items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            style={{ backgroundColor: `${ch.color}15`, color: ch.color }}
                            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                          >
                            <Icon className="text-2xl" />
                          </div>
                          <div>
                            <h4 className="text-sm font-black text-gray-900 group-hover:text-secondary transition-colors">
                              {ch.name}
                            </h4>
                            <p className="text-xs font-semibold text-gray-500">
                              {ch.handle}
                            </p>
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

          {/* Footer Bar (Clean, NO Download Button) */}
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
      </div>
    </AnimatePresence>
  );
};

export default MediaEventModal;
