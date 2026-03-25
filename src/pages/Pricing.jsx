import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaStar, FaRocket, FaAngleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import api from "../apis/index";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Pricing = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ab ye .env (VITE_API_BASE_URL) se URL lega
    api
      .get("/plans/get")
      .then((res) => {
        console.log("Plans Load Result:", res.data);
        if (res.data.success) {
          const sorted = (res.data.data || []).sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
          setPlans(sorted);
        }
      })
      .catch((err) => console.error("Plan API Error:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-secondary pt-32 md:pt-44 pb-24 relative overflow-hidden">
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white font-black text-[10px] uppercase tracking-[0.4em] mb-6 px-6 py-2 rounded-full">
              Membership Plans
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tight leading-tight mb-6">
              Membership & <br />
              <span className="text-white opacity-80 decoration-4 underline-offset-8">subscription plan</span>
            </h1>
            <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-10 font-bold uppercase tracking-widest">
              Choose a subscription that fits your growth. Manage bookings, 
              reports, and patients with ease.
            </p>
          </motion.div>
        </div>

        {/* Waves SVG */}
        <div className="absolute -bottom-px left-0 w-full z-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" className="w-full h-auto">
                <path fill="#F8FAFC" fillOpacity="1" d="M0,64L120,58.7C240,53,480,43,720,48C960,53,1200,75,1320,85.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z" transform="rotate(180 720 40)"></path>
            </svg>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-slate-50 py-24 -mt-10 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-[500px] bg-white rounded-3xl animate-pulse shadow-sm border border-slate-100"></div>
              ))}
            </div>
          ) : plans.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
               <FaRocket className="text-5xl text-slate-200 mx-auto mb-4" />
               <p className="text-slate-400 font-black uppercase tracking-widest text-sm">No Active Plans Found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plans.map((plan, idx) => (
                <motion.div
                  key={plan._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-2xl transition-all duration-500 border-b-[6px] group ${
                    plan.isPopular ? 'border-primary ring-2 ring-primary/5 -translate-y-2' : 'border-slate-200'
                  }`}
                >
                  {/* Badge */}
                  {plan.badgeText && (
                    <div 
                      style={{ backgroundColor: "#c32019" }}
                      className="absolute -top-4 right-10 z-20 text-white text-[9px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full shadow-xl"
                    >
                       {plan.badgeText}
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-10 text-center md:text-left">
                     <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/40 mb-3">{plan.name}</h3>
                     <div className="flex items-baseline gap-1 justify-center md:justify-start">
                        <span className="text-5xl font-black text-primary tracking-tighter">₹{plan.price}</span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary/30">
                           {plan.priceLabel || '/ Month'}
                        </span>
                     </div>
                     {plan.totalPrice > 0 && (
                        <div className="mt-2 flex items-center gap-2 justify-center md:justify-start">
                           <span className="text-[10px] uppercase font-bold text-slate-300 tracking-widest">Total Value:</span>
                           <span className="text-xs font-black text-slate-400">₹{plan.totalPrice}</span>
                        </div>
                     )}
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-slate-50 mb-10"></div>

                  {/* Features */}
                  <ul className="space-y-5 mb-12">
                     {plan.features?.map((feat, i) => (
                        <li key={i} className="flex gap-4 items-start group/li">
                           <div className={`mt-0.5 p-1 rounded-full ${plan.isPopular ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400'} group-hover/li:scale-110 transition-transform`}>
                              <FaCheckCircle size={10} />
                           </div>
                           <span className="text-[13px] font-bold text-slate-600 leading-relaxed uppercase tracking-tight">
                              {feat}
                           </span>
                        </li>
                     ))}
                  </ul>

                  {/* Popular Tag (Bottom) */}
                  {plan.isPopular && (
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[8px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-1 shadow-md">
                       <FaStar size={8} /> Most Popular Selection
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FAQ Link or Contact */}
      <section className="bg-slate-50 pb-20">
         <div className="container mx-auto px-6 text-center">
            <div className="max-w-2xl mx-auto p-10 rounded-[2rem] bg-white border border-slate-100 shadow-sm">
               <h4 className="text-md font-black uppercase tracking-widest text-primary mb-4">Custom Enterprise Solutions?</h4>
               <p className="text-sm text-slate-400 font-medium mb-8 uppercase tracking-tight leading-relaxed">
                  Have multiple lab locations or a hospital chain? Contact our business team for tailored enterprise pricing.
               </p>
               <NavLink to="/contact" className="text-[10px] font-black uppercase tracking-[0.3em] text-primary border-b-2 border-primary/20 hover:border-primary transition-all pb-1">
                  Connect With Support
               </NavLink>
            </div>
         </div>
      </section>

      <Footer />
    </>
  );
};

export default Pricing;
