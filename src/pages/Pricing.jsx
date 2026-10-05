import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  FaCheck, FaStar, FaRocket, FaCalendarAlt, 
  FaTicketAlt, FaArrowRight, FaTag, FaGift 
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import api from "../apis/index";

const Pricing = () => {
  const [plans, setPlans] = useState([]);
  const [activeOffers, setActiveOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Fetch Plans
    const fetchPlans = api.get("/plans/get");
    // 2. Fetch Active Sitewide Offers (optional/safe fallback)
    const fetchOffers = api.get("/offers/active").catch(() => ({ data: { data: [] } }));

    Promise.all([fetchPlans, fetchOffers])
      .then(([planRes, offerRes]) => {
        if (planRes.data.success) {
          const sorted = (planRes.data.data || []).sort(
            (a, b) => (a.displayOrder || 0) - (b.displayOrder || 0)
          );
          setPlans(sorted);
        }
        if (offerRes.data && offerRes.data.data) {
          setActiveOffers(offerRes.data.data || []);
        }
      })
      .catch((err) => console.error("Pricing API Error:", err))
      .finally(() => setLoading(false));
  }, []);

  // Helper: Calculate fully dynamic offer & savings details for each plan
  const getOfferDetails = (plan) => {
    const price = Number(plan.price) || 0;
    const totalPrice = Number(plan.totalPrice) || 0;
    const badgeText = plan.badgeText ? plan.badgeText.trim() : "";

    let originalPrice = totalPrice > price ? totalPrice : 0;
    let savings = originalPrice > price ? originalPrice - price : 0;

    // Fallback: If totalPrice wasn't filled in admin, but badgeText mentions 50%
    if (savings === 0 && badgeText.includes("50%") && price > 0) {
      originalPrice = price * 2;
      savings = price;
    }

    const savingsPercent = originalPrice > price 
      ? Math.round(((originalPrice - price) / originalPrice) * 100) 
      : 0;

    // Compose dynamic offer text for the yellow savings pill
    let offerText = "";
    if (savings > 0 && badgeText) {
      offerText = `${badgeText} • ₹${savings.toLocaleString("en-IN")} savings *`;
    } else if (savings > 0) {
      offerText = savingsPercent > 0
        ? `Save ${savingsPercent}% • ₹${savings.toLocaleString("en-IN")} savings *`
        : `₹${savings.toLocaleString("en-IN")} savings *`;
    } else if (badgeText) {
      offerText = `${badgeText} *`;
    }

    return {
      originalPrice,
      savings,
      savingsPercent,
      badgeText,
      offerText,
    };
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary pt-32 md:pt-44 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pricing-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pricing-grid)" />
          </svg>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-white/10 border border-white/20 text-white font-black text-[10px] uppercase tracking-[0.4em] mb-6 px-6 py-2 rounded-full">
              Membership Plans
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-tight mb-4">
              Simple, Transparent <br /> Pricing
            </h1>
            <p className="text-white/60 text-sm max-w-lg mx-auto leading-relaxed font-medium">
              Choose a plan that fits your lab. Get verified bookings, expand network reach, and unlock premium features.
            </p>

            {/* Active Sitewide Promo Pill if available */}
            {activeOffers.length > 0 && activeOffers[0].title && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 inline-flex items-center gap-2 bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider py-2 px-5 rounded-full shadow-lg"
              >
                <FaGift />
                <span>{activeOffers[0].title}: {activeOffers[0].subtitle || activeOffers[0].description}</span>
                {activeOffers[0].couponCode && (
                  <span className="bg-slate-950 text-white px-2 py-0.5 rounded text-[10px]">
                    Use Code: {activeOffers[0].couponCode}
                  </span>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
        <div className="absolute -bottom-px left-0 w-full z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" className="w-full h-auto">
            <path
              fill="#F8FAFC"
              fillOpacity="1"
              d="M0,64L120,58.7C240,53,480,43,720,48C960,53,1200,75,1320,85.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
              transform="rotate(180 720 40)"
            />
          </svg>
        </div>
      </section>

      {/* Cards Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-[520px] bg-white rounded-3xl animate-pulse border border-slate-200" />
              ))}
            </div>
          ) : plans.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
              <FaRocket className="text-4xl text-slate-300 mx-auto mb-3" />
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
                No Active Plans Found
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
              {plans.map((plan, idx) => {
                const { originalPrice, savings, savingsPercent, badgeText, offerText } = getOfferDetails(plan);
                const isTopTier = plan.isPopular;

                return (
                  <motion.div
                    key={plan._id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className={`relative bg-white rounded-3xl flex flex-col overflow-hidden border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                      isTopTier
                        ? "border-secondary shadow-xl shadow-secondary/15 ring-1 ring-secondary/20"
                        : "border-slate-200 shadow-md hover:border-slate-300"
                    }`}
                  >
                    {/* Top Ribbon for Popular Plan */}
                    {isTopTier && (
                      <div className="bg-secondary text-white text-[10px] font-black uppercase tracking-widest text-center py-2.5 flex items-center justify-center gap-1.5 shadow-inner">
                        <FaStar size={11} className="text-amber-300" />
                        <span>Most Popular</span>
                      </div>
                    )}

                    <div className="p-6 sm:p-8 flex flex-col flex-1">
                      {/* Top Badge: Best Deal / Category Badge */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="inline-flex items-center gap-1.5 bg-black text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-xs">
                          {isTopTier ? "Best Deal" : "Standard Plan"}
                        </span>

                        {/* Additional tag if duration is annual/quarterly */}
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          {plan.duration >= 365 ? "1 Year" : plan.duration >= 90 ? "3 Months" : "Monthly"}
                        </span>
                      </div>

                      {/* Plan Name */}
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight uppercase">
                        {plan.name}
                      </h3>

                      {/* Plan Description / Tagline */}
                      <p className="text-slate-500 text-xs sm:text-sm mt-1.5 mb-4 leading-relaxed font-medium">
                        Grow your lab with verified patient leads, digital bookings, and marketplace visibility.
                      </p>

                      {/* Strikethrough Original Price (normally ₹...) */}
                      <div className="min-h-[22px]">
                        {originalPrice > plan.price ? (
                          <p className="text-slate-400 text-xs sm:text-sm font-bold line-through decoration-red-500/80">
                            normally ₹{originalPrice.toLocaleString("en-IN")}
                          </p>
                        ) : (
                          <span className="text-transparent text-xs select-none">No Strikethrough</span>
                        )}
                      </div>

                      {/* Current Offer Price Display */}
                      <div className="flex items-baseline gap-1 my-1">
                        <span className="text-lg font-bold text-slate-600">₹</span>
                        <span className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-none">
                          {plan.price > 0 ? plan.price.toLocaleString("en-IN") : "0"}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-slate-500 ml-1.5">
                          {plan.priceLabel ? `/${plan.priceLabel.replace(/^\//, '').trim()}` : "/ month"}
                        </span>
                      </div>

                      {/* ── HIGHLIGHTED YELLOW/GOLD OFFER BAR (Exact reference from user image) ── */}
                      {offerText ? (
                        <div className="w-full bg-[#FEF08A] border border-amber-300 text-amber-950 font-black text-xs sm:text-sm py-2.5 px-3.5 rounded-xl text-center shadow-xs flex items-center justify-center gap-1.5 my-3.5 transition-all">
                          <FaTag size={12} className="text-amber-700 shrink-0" />
                          <span className="truncate">{offerText}</span>
                        </div>
                      ) : (
                        <div className="h-2 my-2" />
                      )}

                      {/* ── CTA Button (Right under Offer Bar as in reference image) ── */}
                      <NavLink
                        to="/registration"
                        className={`w-full py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-center transition-all shadow-lg flex items-center justify-center gap-2 group active:scale-95 ${
                          isTopTier
                            ? "bg-secondary hover:bg-secondary/90 text-white shadow-secondary/25"
                            : "bg-slate-900 hover:bg-black text-white shadow-slate-900/20"
                        }`}
                      >
                        <span>{plan.price === 0 ? "Get Started Free" : "Get Started Now"}</span>
                        <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                      </NavLink>

                      {/* Key Metrics Row: Bookings & Validity */}
                      <div className="grid grid-cols-2 gap-2 mt-5 mb-2">
                        {/* Bookings */}
                        <div className="p-2.5 bg-emerald-50/70 rounded-xl border border-emerald-100 flex items-center justify-center gap-2 text-center">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                            <FaTicketAlt className="text-emerald-700" size={10} />
                          </div>
                          <div className="text-left">
                            <span className="block text-[8px] font-black uppercase tracking-wider text-emerald-600 leading-none">
                              Bookings
                            </span>
                            <span className="text-xs font-black text-emerald-800 leading-tight">
                              {plan.totalBookings > 0 ? `${plan.totalBookings} Total` : "Unlimited"}
                            </span>
                          </div>
                        </div>

                        {/* Validity */}
                        <div className="p-2.5 bg-slate-100/70 rounded-xl border border-slate-200 flex items-center justify-center gap-2 text-center">
                          <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                            <FaCalendarAlt className="text-slate-700" size={10} />
                          </div>
                          <div className="text-left">
                            <span className="block text-[8px] font-black uppercase tracking-wider text-slate-500 leading-none">
                              Validity
                            </span>
                            <span className="text-xs font-black text-slate-900 leading-tight">
                              {plan.duration || 30} Days
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-slate-200 my-4" />

                      {/* Features Checklist */}
                      <div className="flex-1">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">
                          What's Included:
                        </p>
                        <ul className="space-y-2.5">
                          {plan.features && plan.features.length > 0 ? (
                            plan.features.map((feat, i) => (
                              <li key={i} className="flex items-start gap-2.5">
                                <div className="w-4 h-4 rounded-full bg-emerald-100/80 border border-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                                  <FaCheck className="text-emerald-700" size={9} />
                                </div>
                                <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                                  {feat}
                                </span>
                              </li>
                            ))
                          ) : (
                            <li className="text-xs text-slate-400 italic">Standard lab features included</li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Bottom Custom Enterprise Box */}
      <section className="bg-slate-50 pb-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-xl mx-auto p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <h4 className="text-base font-black uppercase tracking-widest text-primary mb-3">
              Need a Custom Plan?
            </h4>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              Multiple lab branches, regional diagnostic chains, or hospital networks? Contact our team for customized enterprise pricing and volume discounts.
            </p>
            <NavLink
              to="/contact"
              className="inline-block text-xs font-black uppercase tracking-widest text-secondary border-b-2 border-secondary/30 hover:border-secondary transition-all pb-1"
            >
              Contact Our Team →
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
