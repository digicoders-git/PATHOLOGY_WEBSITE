import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaStar, FaRocket, FaCalendarAlt, FaTicketAlt, FaGift } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import api from "../apis/index";

const Pricing = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/plans/get")
      .then((res) => {
        if (res.data.success) {
          const sorted = (res.data.data || []).sort(
            (a, b) => (a.displayOrder || 0) - (b.displayOrder || 0)
          );
          setPlans(sorted);
        }
      })
      .catch((err) => console.error("Plan API Error:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {/* Hero */}
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
            <p className="text-white/50 text-sm max-w-lg mx-auto leading-relaxed font-medium">
              Choose a plan that fits your lab. Get bookings and unlock premium features.
            </p>
          </motion.div>
        </div>
        <div className="absolute -bottom-px left-0 w-full z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" className="w-full h-auto">
            <path fill="#F8FAFC" fillOpacity="1" d="M0,64L120,58.7C240,53,480,43,720,48C960,53,1200,75,1320,85.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z" transform="rotate(180 720 40)" />
          </svg>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-96 bg-white rounded-3xl animate-pulse border border-slate-100" />
              ))}
            </div>
          ) : plans.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
              <FaRocket className="text-4xl text-slate-200 mx-auto mb-3" />
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No Active Plans Found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plans.map((plan, idx) => (
                <motion.div
                  key={plan._id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`relative bg-white rounded-3xl flex flex-col overflow-hidden border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                    plan.isPopular
                      ? "border-secondary shadow-xl shadow-secondary/20 ring-1 ring-secondary/10"
                      : "border-slate-200 shadow-md hover:border-slate-300"
                  }`}
                >
                  {/* Popular ribbon */}
                  {plan.isPopular && (
                    <div className="bg-gradient-to-r from-secondary to-secondary/80 text-white text-[9px] font-black uppercase tracking-widest text-center py-3 flex items-center justify-center gap-1.5">
                      <FaStar size={10} /> Most Popular
                    </div>
                  )}

                  {/* Badge */}
                  {plan.badgeText && !plan.isPopular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                      {plan.badgeText}
                    </div>
                  )}

                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    {/* Plan name */}
                    <p className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-500 mb-3">
                      {plan.name}
                    </p>

                    {/* Price */}
                    <div className="flex items-end gap-1.5 mb-1">
                      <span className="text-3xl md:text-4xl font-black text-primary leading-none">
                        ₹{plan.price}
                      </span>
                      <span className="text-xs font-bold text-slate-400 mb-1">
                        {plan.priceLabel || "/ month"}
                      </span>
                    </div>

                    {/* Total price */}
                    {plan.totalPrice > 0 && (
                      <p className="text-[11px] text-slate-400 font-bold mb-4">
                        Total value:{" "}
                        <span className="text-primary/70 line-through decoration-red-500/80">₹{plan.totalPrice}</span>
                      </p>
                    )}

                    {/* Key Metrics Row */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {/* Total Bookings */}
                      <div className="p-2.5 bg-purple-50/60 rounded-2xl border border-purple-100 flex flex-col items-center justify-center text-center">
                        <div className="w-7 h-7 rounded-full bg-purple-100/80 flex items-center justify-center mb-1 shrink-0">
                          <FaTicketAlt className="text-purple-600" size={11} />
                        </div>
                        <span className="text-[8px] font-black uppercase tracking-wider text-purple-600 leading-tight">Total</span>
                        <span className="text-base font-black text-purple-700 leading-none mt-0.5">{plan.totalBookings || 0}</span>
                        <span className="text-[7px] text-purple-400 font-bold leading-none mt-0.5">Bookings</span>
                      </div>

                      {/* Free Bookings */}
                      <div className="p-2.5 bg-emerald-50/60 rounded-2xl border border-emerald-100 flex flex-col items-center justify-center text-center">
                        <div className="w-7 h-7 rounded-full bg-emerald-100/80 flex items-center justify-center mb-1 shrink-0">
                          <FaGift className="text-emerald-600" size={11} />
                        </div>
                        <span className="text-[8px] font-black uppercase tracking-wider text-emerald-600 leading-tight">Free</span>
                        <span className="text-base font-black text-emerald-700 leading-none mt-0.5">{plan.freeBookings || 0}</span>
                        <span className="text-[7px] text-emerald-400 font-bold leading-none mt-0.5">Bookings</span>
                      </div>

                      {/* Validity */}
                      <div className="p-2.5 bg-gray-50/60 rounded-2xl border border-gray-200 flex flex-col items-center justify-center text-center">
                        <div className="w-7 h-7 rounded-full bg-gray-200/80 flex items-center justify-center mb-1 shrink-0">
                          <FaCalendarAlt className="text-black" size={11} />
                        </div>
                        <span className="text-[8px] font-black uppercase tracking-wider text-black leading-tight">Validity</span>
                        <span className="text-base font-black text-black leading-none mt-0.5">{plan.duration || 30}</span>
                        <span className="text-[7px] text-gray-500 font-bold leading-none mt-0.5">Days</span>
                      </div>
                    </div>

                    {/* Summary Info */}
                    <div className="text-[10px] text-slate-500 font-semibold text-center mb-4 px-3 py-2.5 bg-slate-50 rounded-2xl border border-slate-100 leading-relaxed">
                      Get <span className="text-emerald-600 font-black">{plan.freeBookings || 0} free</span> bookings out of <span className="text-purple-600 font-black">{plan.totalBookings || 0} total</span>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-slate-150 to-transparent my-4" />

                    {/* Features */}
                    <div className="mb-6 flex-1">
                      <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2.5">What's Included:</p>
                      <ul className="space-y-2">
                        {plan.features && plan.features.length > 0 ? (
                          plan.features.map((feat, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <FaCheckCircle
                                className={`mt-0.5 shrink-0 ${
                                  plan.isPopular ? "text-secondary" : "text-primary"
                                }`}
                                size={12}
                              />
                              <span className="text-xs text-slate-600 leading-snug font-medium">{feat}</span>
                            </li>
                          ))
                        ) : (
                          <li className="text-xs text-slate-400 italic">No features listed</li>
                        )}
                      </ul>
                    </div>

                    {/* CTA */}
                    <NavLink
                      to="/registration"
                      className={`w-full py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest text-center transition-all font-bold shadow-lg mt-auto ${
                        plan.isPopular
                          ? "bg-gradient-to-r from-secondary to-secondary/90 text-white hover:shadow-xl hover:from-secondary/95 hover:to-secondary/85"
                          : "bg-gradient-to-r from-primary to-primary/90 text-white hover:shadow-xl hover:from-primary/95 hover:to-primary/85"
                      }`}
                    >
                      Get Started Now
                    </NavLink>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-50 pb-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-xl mx-auto p-10 rounded-3xl bg-white border-2 border-slate-200 shadow-md">
            <h4 className="text-base font-black uppercase tracking-widest text-primary mb-3">
              Need a Custom Plan?
            </h4>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Multiple lab locations or a hospital chain? Contact us for tailored enterprise pricing and custom booking packages.
            </p>
            <NavLink
              to="/contact"
              className="inline-block text-[11px] font-black uppercase tracking-widest text-secondary border-b-2 border-secondary/30 hover:border-secondary transition-all pb-0.5"
            >
              Contact Our Team
            </NavLink>
          </div>
        </div>
      </section>

    </>
  );
};

export default Pricing;
