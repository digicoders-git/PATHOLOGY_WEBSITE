import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTag, FaFlask, FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import api from "../apis/index";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Pricing = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    api
      .get("/manage-package?status=true")
      .then((res) => {
        if (res.data.success) setPackages(res.data.data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const categories = [
    "All",
    ...Array.from(new Set(packages.map((p) => p.category).filter(Boolean))),
  ];

  const filtered = packages.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      !search ||
      p.packageName?.toLowerCase().includes(search.toLowerCase()) ||
      p.description?.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const discount = (actual, discounted) =>
    actual && discounted
      ? Math.round(((actual - discounted) / actual) * 100)
      : null;

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-secondary pt-28 md:pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white/10 border border-white/20 text-white/80 font-black text-[10px] uppercase tracking-[0.3em] mb-5 px-4 py-1.5 rounded-full">
              Transparent Pricing
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-tight mb-5">
              Health Packages &<br />
              <span className="text-white">Pricing Plans</span>
            </h1>
            <p className="text-white/60 text-sm max-w-lg mx-auto leading-relaxed mb-8">
              Choose from our curated diagnostic packages. No hidden charges —
              just honest, affordable healthcare.
            </p>
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest">
              <NavLink to="/" className="hover:text-white transition-colors">Home</NavLink>
              <span className="w-1 h-1 bg-white/30 rounded-full"></span>
              <span className="text-white">Pricing</span>
            </div>
          </motion.div>
        </div>
        <div className="absolute -bottom-px left-0 w-full z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60" className="w-full h-auto">
            <path fill="#F5F7FA" fillOpacity="1" d="M0,32L80,26C160,21,320,11,480,16C640,21,800,43,960,48C1120,53,1280,43,1360,37L1440,32L1440,60L0,60Z" />
          </svg>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white py-5 sticky top-[60px] md:top-[80px] z-30 shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col sm:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative w-full sm:w-72">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/30 text-xs" />
            <input
              type="text"
              placeholder="Search packages..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-xs rounded-xl border border-gray-200 bg-white outline-none focus:border-primary/40 text-primary placeholder:text-primary/30 font-medium"
            />
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-full border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-white border-primary shadow"
                    : "bg-white text-primary border-primary/20 hover:border-primary/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-80 rounded-2xl bg-gray-100 animate-pulse" />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-24">
              <FaFlask className="text-5xl text-primary/10 mx-auto mb-4" />
              <p className="text-primary/40 font-bold uppercase tracking-widest text-sm">
                No packages found
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((pkg, index) => {
                const off = discount(pkg.actualPrice, pkg.discountPrice);
                return (
                  <motion.div
                    key={pkg._id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index % 3) * 0.07 }}
                    className="relative flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    {/* Badges */}
                    {off && (
                      <div className="absolute top-4 left-4 z-10 bg-green-500 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow flex items-center gap-1">
                        <FaTag size={8} /> {off}% OFF
                      </div>
                    )}

                    {/* Header */}
                    <div className="h-32 bg-primary relative overflow-hidden">
                      {pkg.image && (
                        <img
                          src={pkg.image}
                          alt={pkg.packageName}
                          className="w-full h-full object-cover opacity-25"
                        />
                      )}
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center mb-1.5">
                          <FaFlask className="text-white text-lg" />
                        </div>
                        {pkg.category && (
                          <span className="text-white/70 text-[9px] font-black uppercase tracking-widest">
                            {pkg.category}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Body */}
                    <div className="flex flex-col flex-1 p-6">
                      <h3 className="text-sm font-black text-primary uppercase tracking-tight mb-1">
                        {pkg.packageName}
                      </h3>
                      {pkg.description && (
                        <p className="text-primary/50 text-xs leading-relaxed mb-4 line-clamp-2">
                          {pkg.description}
                        </p>
                      )}

                      {/* Tests */}
                      {pkg.tests?.length > 0 && (
                        <ul className="space-y-1.5 mb-5 flex-1">
                          {pkg.tests.slice(0, 5).map((t, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs text-primary/70">
                              <FaCheckCircle className="text-green-500 shrink-0" size={10} />
                              {t.name || t}
                            </li>
                          ))}
                          {pkg.tests.length > 5 && (
                            <li className="text-[10px] text-primary/40 font-bold pl-4">
                              +{pkg.tests.length - 5} more tests included
                            </li>
                          )}
                        </ul>
                      )}

                      {/* Price + CTA */}
                      <div className="mt-auto pt-4 border-t border-gray-100 flex items-end justify-between gap-3">
                        <div>
                          {pkg.discountPrice ? (
                            <>
                              <span className="text-2xl font-black text-primary">
                                ₹{pkg.discountPrice}
                              </span>
                              {pkg.actualPrice && (
                                <span className="text-xs text-primary/30 line-through ml-2">
                                  ₹{pkg.actualPrice}
                                </span>
                              )}
                            </>
                          ) : pkg.actualPrice ? (
                            <span className="text-2xl font-black text-primary">
                              ₹{pkg.actualPrice}
                            </span>
                          ) : (
                            <span className="text-xs font-bold text-primary/40">
                              Price on request
                            </span>
                          )}
                        </div>
                        <NavLink
                          to="/registration"
                          className="text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg bg-primary text-white hover:bg-secondary transition-all shrink-0"
                        >
                          Book Now
                        </NavLink>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* Result count */}
          {!loading && filtered.length > 0 && (
            <p className="text-center text-primary/30 text-xs font-bold uppercase tracking-widest mt-10">
              Showing {filtered.length} package{filtered.length !== 1 ? "s" : ""}
            </p>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      {/* <section className="bg-primary py-16">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-3">
            Can't find what you need?
          </h2>
          <p className="text-white/50 text-sm mb-8">
            Contact us and we'll help you find the right diagnostic package for your needs.
          </p>
          <NavLink
            to="/contact"
            className="inline-block bg-secondary text-white font-black text-xs uppercase tracking-widest px-8 py-3 rounded-xl hover:bg-white hover:text-primary transition-all"
          >
            Contact Us
          </NavLink>
        </div>
      </section>

      <Footer /> */}
    </>
  );
};

export default Pricing;
