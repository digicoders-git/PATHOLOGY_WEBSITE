import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaHospital,
  FaStar,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
  FaNetworkWired,
  FaChevronRight,
  FaChevronLeft,
  FaBuilding,
  FaRegCheckCircle,
} from "react-icons/fa";
import api from "../../apis/index";

// ── Helper: Resolve lab image / logo URL with dual-domain fallback ──
const resolveLabUrl = (url) => {
  if (!url) return null;
  const s = url.toString().trim();
  if (!s || s.toLowerCase().endsWith(".pdf")) return null;
  if (s.startsWith("https://")) return s;
  if (s.startsWith("http://")) return s.replace("http://", "https://");
  const clean = s.replace(/^\/+/, "");
  return `https://api.laboindia.com/${clean}`;
};

// ── Lab Logo Component with Graceful Fallback ──
const LabLogo = ({ url, name, size = "w-14 h-14" }) => {
  const [src, setSrc] = useState(() => resolveLabUrl(url));
  const [failed, setFailed] = useState(false);
  const [triedFallback, setTriedFallback] = useState(false);

  useEffect(() => {
    setSrc(resolveLabUrl(url));
    setFailed(false);
    setTriedFallback(false);
  }, [url]);

  const handleError = () => {
    if (!triedFallback && src && src.includes("api.laboindia.com")) {
      setTriedFallback(true);
      setSrc(src.replace("https://api.laboindia.com", "https://pathology-backend-live.onrender.com"));
    } else {
      setFailed(true);
    }
  };

  if (!src || failed) {
    const initial = (name || "L").trim().charAt(0).toUpperCase();
    return (
      <div className={`${size} rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 text-white flex items-center justify-center font-black shadow-md border-2 border-white shrink-0`}>
        <span className="text-lg">{initial}</span>
      </div>
    );
  }

  return (
    <div className={`${size} rounded-2xl bg-white p-1 shadow-md border-2 border-white flex items-center justify-center overflow-hidden shrink-0`}>
      <img
        src={src}
        alt=""
        onError={handleError}
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
  );
};

// ── Lab Banner Component ──
const LabBanner = ({ url, isFeatured }) => {
  const [src, setSrc] = useState(() => resolveLabUrl(url));
  const [failed, setFailed] = useState(false);
  const [triedFallback, setTriedFallback] = useState(false);

  useEffect(() => {
    setSrc(resolveLabUrl(url));
    setFailed(false);
    setTriedFallback(false);
  }, [url]);

  const handleError = () => {
    if (!triedFallback && src && src.includes("api.laboindia.com")) {
      setTriedFallback(true);
      setSrc(src.replace("https://api.laboindia.com", "https://pathology-backend-live.onrender.com"));
    } else {
      setFailed(true);
    }
  };

  if (!src || failed) {
    return (
      <div className="h-28 w-full bg-gradient-to-r from-red-600 via-rose-600 to-red-700 relative overflow-hidden flex items-center justify-end p-4">
        <FaHospital className="text-white/10 text-6xl absolute -right-2 -bottom-2" />
        {isFeatured && (
          <span className="relative z-10 inline-flex items-center gap-1.5 bg-amber-400 text-black text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
            <FaStar size={10} className="text-black" /> Featured Lab
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="h-28 w-full relative overflow-hidden bg-slate-900">
      <img
        src={src}
        alt=""
        onError={handleError}
        className="w-full h-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      {isFeatured && (
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center gap-1.5 bg-amber-400 text-black text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
            <FaStar size={10} className="text-black" /> Featured Lab
          </span>
        </div>
      )}
    </div>
  );
};

// ── Reusable Auto-Scrolling Row Component ──
const AutoScrollRow = ({ children, cardWidth = 320, autoInterval = 3200 }) => {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      const el = containerRef.current;
      if (!el) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 15) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: cardWidth + 24, behavior: "smooth" });
      }
    }, autoInterval);

    return () => clearInterval(interval);
  }, [isPaused, autoInterval, cardWidth]);

  const handleScroll = (dir) => {
    const el = containerRef.current;
    if (!el) return;
    const distance = (cardWidth + 24) * (dir === "left" ? -1 : 1);
    el.scrollBy({ left: distance, behavior: "smooth" });
  };

  return (
    <div className="relative group">
      {/* Scroll Navigation Buttons */}
      <button
        type="button"
        onClick={() => handleScroll("left")}
        className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 shadow-lg items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all cursor-pointer opacity-0 group-hover:opacity-100"
        title="Scroll Left"
      >
        <FaChevronLeft size={13} />
      </button>

      <button
        type="button"
        onClick={() => handleScroll("right")}
        className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 shadow-lg items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all cursor-pointer opacity-0 group-hover:opacity-100"
        title="Scroll Right"
      >
        <FaChevronRight size={13} />
      </button>

      {/* Horizontal Scroll Track */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="overflow-x-auto scrollbar-hide py-2 -mx-4 px-4 sm:-mx-6 sm:px-6 scroll-smooth"
      >
        <div
          className="grid grid-rows-1 grid-flow-col gap-6 min-w-max pb-4"
          style={{ gridAutoColumns: `min(calc(100vw - 3rem), ${cardWidth}px)` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

// ── Main Labs Section ──
const LabsSection = () => {
  const [featuredLabs, setFeaturedLabs] = useState([]);
  const [allLabs, setAllLabs] = useState([]);
  const [partnerLabs, setPartnerLabs] = useState([]);
  const [loading, setLoading] = useState(true);

  const cleanStr = (s) => (s ? s.toString().replace(/^"|"$/g, "").trim() : "");

  useEffect(() => {
    const fetchAllLabData = async () => {
      try {
        setLoading(true);

        const [featRes, allRes, partnerRes] = await Promise.all([
          api.get("/registrations/get?status=true&featured=true&limit=1000").catch(() => ({ data: { data: [] } })),
          api.get("/registrations/get?status=true&limit=1000").catch(() => ({ data: { data: [] } })),
          api.get("/parent/with-labs?limit=1000").catch(() => ({ data: { data: [] } })),
        ]);

        if (featRes.data?.success && Array.isArray(featRes.data.data)) {
          setFeaturedLabs(featRes.data.data);
        }
        if (allRes.data?.success && Array.isArray(allRes.data.data)) {
          setAllLabs(allRes.data.data);
        }
        if (partnerRes.data?.success && Array.isArray(partnerRes.data.data)) {
          setPartnerLabs(partnerRes.data.data);
        }
      } catch (err) {
        console.error("LabsSection fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllLabData();
  }, []);

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden" id="labs-section">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="labs-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#000000" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#labs-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10 space-y-16">

        {/* ── Main Section Title ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-secondary font-black text-xs uppercase tracking-[0.3em] mb-3 block">
            Verified Pathology Network
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tight leading-tight">
            Our Diagnostic & Pathology Labs
          </h2>
          <p className="text-black/50 text-sm mt-3 max-w-xl mx-auto leading-relaxed">
            Connect with top-rated diagnostic centers, certified pathology labs, and partner networks across India.
          </p>
          <div className="w-16 h-1 bg-secondary mx-auto mt-5 rounded-full" />
        </motion.div>

        {loading ? (
          <div className="space-y-10">
            {[1, 2, 3].map((s) => (
              <div key={s} className="space-y-4">
                <div className="h-6 w-48 bg-slate-200 rounded-md animate-pulse" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-64 rounded-2xl bg-white border border-slate-200 p-4 animate-pulse space-y-4">
                      <div className="h-28 bg-slate-100 rounded-xl" />
                      <div className="h-4 bg-slate-100 rounded w-3/4" />
                      <div className="h-3 bg-slate-100 rounded w-1/2" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* ══════════════════════════════════════════════════════════════════════
                1. FEATURED LABS (SINGLE ROW AUTO-SCROLL)
            ══════════════════════════════════════════════════════════════════════ */}
            {featuredLabs.length > 0 && (
              <div className="space-y-5">
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200/80 pb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="p-1.5 rounded-lg bg-amber-100 text-amber-600">
                        <FaStar size={14} />
                      </span>
                      <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                        Featured Diagnostic Labs
                      </h3>
                      <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-400 text-black font-black uppercase tracking-wider">
                        ★ {featuredLabs.length} Featured
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      Top-rated pathology labs with verified facilities and home sample collection
                    </p>
                  </div>
                </div>

                {/* Auto Scroll Row */}
                <AutoScrollRow cardWidth={330} autoInterval={3000}>
                  {featuredLabs.map((lab) => (
                    <div
                      key={lab._id}
                      className="bg-white rounded-3xl overflow-hidden border-2 border-secondary/20 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between w-[280px] sm:w-[320px] lg:w-[330px]"
                    >
                      {/* Top Banner */}
                      <LabBanner url={lab.labBanner} isFeatured={true} />

                      {/* Content */}
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          {/* Logo + Name */}
                          <div className="flex items-start gap-3 -mt-10 mb-3">
                            <LabLogo url={lab.labLogo} name={lab.labName} size="w-16 h-16" />
                            <div className="pt-7 flex-1 min-w-0">
                              <h4 className="text-sm font-black text-slate-900 line-clamp-1">
                                {cleanStr(lab.labName)}
                              </h4>
                              <p className="text-[11px] text-slate-500 font-semibold flex items-center gap-1 mt-0.5">
                                <FaMapMarkerAlt className="text-secondary shrink-0" size={10} />
                                <span className="truncate">
                                  {[cleanStr(lab.areaName), cleanStr(lab.city), cleanStr(lab.state)].filter(Boolean).join(", ") || "India"}
                                </span>
                              </p>
                            </div>
                          </div>

                          {/* Facilities */}
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {lab.homeCollection && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-100">
                                <FaCheckCircle size={9} /> Home Sample
                              </span>
                            )}
                            {lab.is24x7 && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-100">
                                <FaClock size={9} /> 24x7 Open
                              </span>
                            )}
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold">
                              <FaShieldAlt size={9} className="text-secondary" /> Verified Lab
                            </span>
                          </div>
                        </div>

                        {/* Action Footer */}
                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                          {lab.phone ? (
                            <a
                              href={`tel:${lab.phone}`}
                              className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-secondary transition-colors"
                            >
                              <FaPhoneAlt size={10} className="text-secondary" />
                              <span>{lab.phone}</span>
                            </a>
                          ) : (
                            <span className="text-xs text-slate-400 font-semibold">Verified Partner</span>
                          )}
                          <a
                            href="https://play.google.com/store/apps/details?id=digi.coders.laboindia&pcampaignid=web_share"
                            target="_blank"
                            rel="noreferrer"
                            className="px-3.5 py-1.5 bg-secondary text-white text-[10px] font-black uppercase tracking-wider rounded-lg shadow-sm hover:bg-red-700 transition-all flex items-center gap-1 cursor-pointer"
                          >
                            Book on App <FaChevronRight size={8} />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </AutoScrollRow>
              </div>
            )}

            {/* ══════════════════════════════════════════════════════════════════════
                2. ALL LABS (SINGLE ROW AUTO-SCROLL)
            ══════════════════════════════════════════════════════════════════════ */}
            {allLabs.length > 0 && (
              <div className="space-y-5">
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200/80 pb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="p-1.5 rounded-lg bg-red-100 text-secondary">
                        <FaHospital size={14} />
                      </span>
                      <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                        All Pathology Labs
                      </h3>
                      <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-secondary text-white font-black uppercase tracking-wider">
                        {allLabs.length}+ Active Labs
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      Comprehensive network of certified pathology and diagnostic centers
                    </p>
                  </div>
                </div>

                {/* Auto Scroll Row */}
                <AutoScrollRow cardWidth={310} autoInterval={3400}>
                  {allLabs.map((lab) => (
                    <div
                      key={lab._id}
                      className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col justify-between w-[280px] sm:w-[310px]"
                    >
                      {/* Top Banner */}
                      <LabBanner url={lab.labBanner} isFeatured={lab.isFeatured} />

                      {/* Content */}
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          {/* Logo + Name */}
                          <div className="flex items-start gap-3 -mt-10 mb-3">
                            <LabLogo url={lab.labLogo} name={lab.labName} size="w-14 h-14" />
                            <div className="pt-6 flex-1 min-w-0">
                              <div className="flex items-center gap-1.5">
                                <h4 className="text-sm font-black text-slate-900 truncate">
                                  {cleanStr(lab.labName)}
                                </h4>
                                {lab.isFeatured && (
                                  <FaStar size={11} className="text-amber-500 shrink-0" title="Featured Lab" />
                                )}
                              </div>
                              <p className="text-[11px] text-slate-500 font-semibold flex items-center gap-1 mt-0.5 truncate">
                                <FaMapMarkerAlt className="text-secondary shrink-0" size={10} />
                                <span className="truncate">
                                  {[cleanStr(lab.areaName), cleanStr(lab.city), cleanStr(lab.state)].filter(Boolean).join(", ") || "India"}
                                </span>
                              </p>
                            </div>
                          </div>

                          {/* Facilities */}
                          <div className="flex flex-wrap gap-1 mb-3">
                            {lab.homeCollection && (
                              <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[9px] font-bold">
                                Home Sample
                              </span>
                            )}
                            {lab.is24x7 && (
                              <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[9px] font-bold">
                                24x7 Open
                              </span>
                            )}
                            <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[9px] font-bold">
                              Verified
                            </span>
                          </div>
                        </div>

                        {/* Action Footer */}
                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                          {lab.phone ? (
                            <a
                              href={`tel:${lab.phone}`}
                              className="text-[11px] font-bold text-slate-600 hover:text-secondary flex items-center gap-1"
                            >
                              <FaPhoneAlt size={9} className="text-secondary" /> {lab.phone}
                            </a>
                          ) : (
                            <span className="text-[11px] text-slate-400">Available on App</span>
                          )}
                          <a
                            href="https://play.google.com/store/apps/details?id=digi.coders.laboindia&pcampaignid=web_share"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[10px] font-black uppercase text-secondary hover:underline flex items-center gap-1 cursor-pointer"
                          >
                            Explore <FaChevronRight size={7} />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </AutoScrollRow>
              </div>
            )}

            {/* ══════════════════════════════════════════════════════════════════════
                3. PARTNER LABS (SINGLE ROW AUTO-SCROLL)
            ══════════════════════════════════════════════════════════════════════ */}
            {partnerLabs.length > 0 && (
              <div className="space-y-5">
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200/80 pb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="p-1.5 rounded-lg bg-blue-100 text-blue-700">
                        <FaNetworkWired size={14} />
                      </span>
                      <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                        Partner Diagnostic Chains
                      </h3>
                      <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-slate-900 text-white font-black uppercase tracking-wider">
                        {partnerLabs.length} Partner Chains
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      Multi-center diagnostic chains and integrated laboratory networks
                    </p>
                  </div>
                </div>

                {/* Auto Scroll Row */}
                <AutoScrollRow cardWidth={310} autoInterval={3600}>
                  {partnerLabs.map((partner) => {
                    const count = partner.labCount ?? (partner.labs?.length || 0);
                    return (
                      <div
                        key={partner._id}
                        className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:border-secondary/40 transition-all duration-300 flex flex-col justify-between w-[280px] sm:w-[310px]"
                      >
                        <div>
                          <div className="flex items-center gap-3.5 mb-4">
                            <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-slate-900 to-black text-white flex items-center justify-center font-black shadow-md shrink-0">
                              <FaBuilding size={20} className="text-rose-500" />
                            </div>
                            <div className="min-w-0">
                              <h4 className="text-sm font-black text-slate-900 line-clamp-1">
                                {cleanStr(partner.name)}
                              </h4>
                              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full mt-0.5">
                                <FaRegCheckCircle size={9} /> Official Partner Chain
                              </span>
                            </div>
                          </div>

                          <p className="text-xs text-slate-500 leading-relaxed mb-4">
                            Integrated pathology partner network with standardized reporting and digital bookings.
                          </p>
                        </div>

                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-lg">
                            🏥 {count} Associated {count === 1 ? "Lab" : "Labs"}
                          </span>
                          <a
                            href="https://play.google.com/store/apps/details?id=digi.coders.laboindia&pcampaignid=web_share"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[10px] font-black uppercase text-secondary hover:underline flex items-center gap-1 cursor-pointer"
                          >
                            View on App <FaChevronRight size={7} />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </AutoScrollRow>
              </div>
            )}
          </>
        )}

      </div>
    </section>
  );
};

export default LabsSection;
