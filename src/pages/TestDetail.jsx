import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaFlask, FaCheckCircle, FaClock, FaVial, 
  FaInfoCircle, FaChevronLeft, FaShoppingCart, FaStar,
  FaShieldAlt, FaListUl
} from "react-icons/fa";
import api from "../apis/index";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TestDetail = () => {
  const { id } = useParams();
  const [test, setTest] = useState(null);
  const [loading, setLoading] = useState(true);

  const cleanStr = (str) => str ? str.toString().replace(/^"|"$/g, '').replace(/\\"/g, '"').trim() : "";

  useEffect(() => {
    window.scrollTo(0, 0);
    api.get(`/test-service/get/${id}`)
      .then(res => {
        if (res.data.success) {
          setTest(res.data.data);
        }
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-10 h-10 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!test) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6 text-center">
        <h2 className="text-xl font-black text-primary mb-4 uppercase tracking-tight italic">Test Not Found</h2>
        <NavLink to="/" className="text-secondary font-bold border-b-2 border-secondary pb-1 text-xs uppercase tracking-[0.2em]">Go Back Home</NavLink>
      </div>
    );
  }

  const discount = test.mrp && test.price ? Math.round(((test.mrp - test.price) / test.mrp) * 100) : 0;
  const thumb = test.image?.cloudinary || test.image?.local;

  return (
    <>
      <Navbar />
      
      <main className="bg-slate-50 min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
          
          {/* Breadcrumb Navigation */}
          <NavLink to="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary/30 hover:text-secondary mb-10 transition-all group">
            <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Back to all tests
          </NavLink>

          {/* Hero Section: Clean & Premium */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Main Details */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100"
              >
                <div className="h-48 md:h-64 relative bg-primary flex items-center justify-center overflow-hidden">
                   {thumb ? (
                       <img 
                        src={thumb.startsWith('http') ? thumb : `http://localhost:3000/${thumb}`} 
                        className="w-full h-full object-cover opacity-80" 
                        alt={test.title} 
                       />
                   ) : (
                       <FaFlask className="text-white/20 text-8xl" />
                   )}
                   <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
                   
                   <div className="absolute bottom-8 left-8 right-8">
                      <span className="bg-secondary text-white text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-lg mb-2 inline-block">
                         {cleanStr(test.category_id?.name) || "Laboratory Test"}
                      </span>
                      <h1 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-tight">
                         {cleanStr(test.title)}
                      </h1>
                   </div>
                </div>

                <div className="p-8 md:p-10 border-b border-slate-50">
                   <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="flex flex-col gap-1">
                         <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Sample Required</span>
                         <div className="flex items-center gap-2 text-primary font-bold text-xs">
                             <FaVial className="text-secondary" /> {cleanStr(test.sample_type) || "Blood"}
                         </div>
                      </div>
                      <div className="flex flex-col gap-1">
                         <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Report TAT</span>
                         <div className="flex items-center gap-2 text-primary font-bold text-xs">
                             <FaClock className="text-secondary" /> {cleanStr(test.report_time) || "24 Hours"}
                         </div>
                      </div>
                      <div className="flex flex-col gap-1">
                         <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Code</span>
                         <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase">
                             <FaShieldAlt className="text-secondary" /> {cleanStr(test.test_code) || "--"}
                         </div>
                      </div>
                      <div className="flex flex-col gap-1">
                         <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Fasting</span>
                         <div className="flex items-center gap-2 text-primary font-bold text-xs">
                             <FaCheckCircle className={test.fasting_required ? "text-green-500" : "text-slate-300"} /> {test.fasting_required ? "Required" : "Not Required"}
                         </div>
                      </div>
                   </div>
                </div>

                <div className="p-8 md:p-10 bg-slate-50/50">
                    <h4 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary mb-4 italic">
                        <FaInfoCircle className="text-secondary" size={12} /> Test Overview
                    </h4>
                    <p className="text-primary/60 text-xs leading-relaxed font-medium">
                        {cleanStr(test.short_description || test.overview) || "Professional clinical diagnostics with certified laboratory partners. This test is conducted under strict medical standards to ensure 100% accuracy and reliability for your health screening."}
                    </p>
                </div>
              </motion.section>

              {/* Instructions Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <motion.section 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100"
                 >
                    <h4 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary mb-6">
                        <FaListUl className="text-secondary" /> Pre-test Instructions
                    </h4>
                    <div className="space-y-4">
                        {test.instructions?.length > 0 ? test.instructions.map((inst, i) => (
                           <div key={i} className="flex gap-4 group">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-100 group-hover:bg-secondary transition-colors mt-1.5 shrink-0"></span>
                              <div>
                                 <h6 className="text-[10px] font-black text-primary uppercase mb-0.5">{cleanStr(inst.title)}</h6>
                                 <p className="text-[10px] font-medium text-slate-400 leading-relaxed">{cleanStr(inst.description)}</p>
                              </div>
                           </div>
                        )) : (
                            <p className="text-[10px] text-slate-300 font-bold uppercase italic">No instructions available.</p>
                        )}
                    </div>
                 </motion.section>

                 <motion.section 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center group"
                 >
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-4">
                        <FaFlask size={20} />
                    </div>
                    <h5 className="text-[11px] font-black text-primary uppercase tracking-widest">Lab Standards</h5>
                    <p className="text-[9px] text-slate-400 font-bold mt-2 uppercase tracking-tighter leading-relaxed">
                        ISO Certified Lab Partners <br /> Real-time tracking available <br /> Digital reports via SMS/Email
                    </p>
                 </motion.section>
              </div>

            </div>

            {/* Right: Booking Summary Section */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
               <motion.aside 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary p-8 rounded-[2rem] shadow-2xl shadow-primary/10 relative overflow-hidden text-center flex flex-col items-center"
               >
                   <div className="absolute inset-0 opacity-10 pointer-events-none stroke-white">
                        <svg width="100%" height="100%">
                            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="1" fill="white" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                   </div>

                   <span className="text-[9px] font-black text-white/50 uppercase tracking-widest mb-4 block relative z-10">Total Offer Price</span>
                   
                   <div className="flex flex-col mb-8 relative z-10">
                       <h2 className="text-4xl font-black text-white tracking-tighter mb-1">₹{test.price}</h2>
                       {test.mrp > test.price && (
                          <div className="flex items-center justify-center gap-2">
                             <span className="text-[10px] text-white/30 line-through font-bold italic">MRP: ₹{test.mrp}</span>
                             <span className="text-[9px] bg-green-500 text-white font-black px-2 py-0.5 rounded uppercase">{discount}% OFF</span>
                          </div>
                       )}
                   </div>

                   <NavLink 
                    to={`/registration?testId=${test._id}`}
                    className="w-full h-14 rounded-2xl bg-white text-primary text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-secondary hover:text-white transition-all duration-300 relative z-10"
                   >
                     <FaShoppingCart className="text-xs" /> Book This Test
                   </NavLink>

                   <div className="mt-8 pt-8 border-t border-white/5 w-full flex flex-col gap-4 relative z-10">
                        <div className="flex items-center gap-3 text-white/60">
                            <FaCheckCircle className="text-green-500" size={12} />
                            <span className="text-[9px] font-black uppercase tracking-widest">Instant Booking</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/60">
                            <FaCheckCircle className="text-green-500" size={12} />
                            <span className="text-[9px] font-black uppercase tracking-widest">Safe Sample Collection</span>
                        </div>
                   </div>
               </motion.aside>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default TestDetail;
