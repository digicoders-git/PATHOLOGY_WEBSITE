import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaStar, FaRocket } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import api from "../apis/index";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      <Navbar />

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
              Choose a plan that fits your lab. No hidden charges.
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
        <div className="container mx-auto px-6 max-w-6xl">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-96 bg-white rounded-2xl animate-pulse border border-slate-100" />
              ))}
            </div>
          ) : plans.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-slate-200">
              <FaRocket className="text-4xl text-slate-200 mx-auto mb-3" />
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No Active Plans Found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {plans.map((plan, idx) => (
                <motion.div
                  key={plan._id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`relative bg-white rounded-2xl flex flex-col overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    plan.isPopular
                      ? "border-secondary shadow-lg shadow-secondary/10"
                      : "border-slate-100 shadow-sm"
                  }`}
                >
                  {/* Popular ribbon */}
                  {plan.isPopular && (
                    <div className="bg-secondary text-white text-[9px] font-black uppercase tracking-widest text-center py-2 flex items-center justify-center gap-1.5">
                      <FaStar size={9} /> Most Popular
                    </div>
                  )}

                  {/* Badge */}
                  {plan.badgeText && !plan.isPopular && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                      {plan.badgeText}
                    </div>
                  )}

                  <div className="p-8 flex flex-col flex-1">
                    {/* Plan name */}
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-3">
                      {plan.name}
                    </p>

                    {/* Price */}
                    <div className="flex items-end gap-1 mb-1">
                      <span className="text-4xl font-black text-primary leading-none">
                        ₹{plan.price}
                      </span>
                      <span className="text-xs font-bold text-slate-400 mb-1">
                        {plan.priceLabel || "/ month"}
                      </span>
                    </div>

                    {/* Total price */}
                    {plan.totalPrice > 0 && (
                      <p className="text-[11px] text-slate-400 font-medium mb-6">
                        Total value:{" "}
                        <span className="font-bold text-slate-500">₹{plan.totalPrice}</span>
                      </p>
                    )}

                    {/* Divider */}
                    <div className="h-px bg-slate-100 my-6" />

                    {/* Features */}
                    <ul className="space-y-3 flex-1 mb-8">
                      {plan.features?.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <FaCheckCircle
                            className={`mt-0.5 shrink-0 ${
                              plan.isPopular ? "text-secondary" : "text-slate-300"
                            }`}
                            size={13}
                          />
                          <span className="text-sm text-slate-600 leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <NavLink
                      to="/registration"
                      className={`w-full py-3 rounded-xl text-[11px] font-black uppercase tracking-widest text-center transition-all ${
                        plan.isPopular
                          ? "bg-secondary text-white hover:bg-secondary/90"
                          : "bg-primary text-white hover:bg-primary/90"
                      }`}
                    >
                      Get Started
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
          <div className="max-w-xl mx-auto p-10 rounded-2xl bg-white border border-slate-100 shadow-sm">
            <h4 className="text-base font-black uppercase tracking-widest text-primary mb-3">
              Need a Custom Plan?
            </h4>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Multiple lab locations or a hospital chain? Contact us for tailored enterprise pricing.
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

      <Footer />
    </>
  );
};

export default Pricing;
