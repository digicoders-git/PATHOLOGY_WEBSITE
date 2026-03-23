import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTag, FaFlask } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import api from "../../apis/index";

const PricingSection = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

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

  const filtered =
    activeCategory === "All"
      ? packages
      : packages.filter((p) => p.category === activeCategory);

  const discount = (actual, discounted) =>
    actual && discounted
      ? Math.round(((actual - discounted) / actual) * 100)
      : null;

  if (!loading && packages.length === 0) return null;

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* subtle bg pattern */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#02019D" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-black text-xs uppercase tracking-[0.3em] mb-3 block">
            Our Packages
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tight leading-tight">
            Affordable Health Packages
          </h2>
          <p className="text-primary/50 text-sm mt-3 max-w-md mx-auto">
            Choose from our curated diagnostic packages at the best prices
          </p>
          <div className="w-16 h-1 bg-secondary mx-auto mt-5 rounded-full" />
        </motion.div>

        {/* Category Filter */}
        {categories.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs font-black uppercase tracking-widest rounded-full border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-white border-primary shadow-md"
                    : "bg-white text-primary border-primary/20 hover:border-primary/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        )}

        {/* Cards Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-72 rounded-2xl bg-gray-100 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((pkg, index) => {
              const off = discount(pkg.actualPrice, pkg.discountPrice);
              const isPopular = index === 1 && filtered.length >= 3;

              return (
                <motion.div
                  key={pkg._id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className={`relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    isPopular
                      ? "border-secondary shadow-lg shadow-secondary/10"
                      : "border-gray-100 shadow-sm"
                  }`}
                >
                  {/* Popular badge */}
                  {isPopular && (
                    <div className="absolute top-4 right-4 z-10 bg-secondary text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow">
                      Most Popular
                    </div>
                  )}

                  {/* Discount badge */}
                  {off && (
                    <div className="absolute top-4 left-4 z-10 bg-green-500 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow flex items-center gap-1">
                      <FaTag size={8} /> {off}% OFF
                    </div>
                  )}

                  {/* Image / Gradient Header */}
                  <div
                    className={`h-36 relative overflow-hidden ${
                      isPopular ? "bg-secondary" : "bg-primary"
                    }`}
                  >
                    {pkg.image ? (
                      <img
                        src={pkg.image}
                        alt={pkg.packageName}
                        className="w-full h-full object-cover opacity-30"
                      />
                    ) : null}
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-2">
                        <FaFlask className="text-white text-xl" />
                      </div>
                      {pkg.category && (
                        <span className="text-white/70 text-[9px] font-black uppercase tracking-widest">
                          {pkg.category}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex flex-col flex-1 p-6 bg-white">
                    <h3 className="text-base font-black text-primary uppercase tracking-tight mb-1">
                      {pkg.packageName}
                    </h3>

                    {pkg.description && (
                      <p className="text-primary/50 text-xs leading-relaxed mb-4 line-clamp-2">
                        {pkg.description}
                      </p>
                    )}

                    {/* Tests list */}
                    {pkg.tests?.length > 0 && (
                      <ul className="space-y-1.5 mb-5 flex-1">
                        {pkg.tests.slice(0, 4).map((t, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-xs text-primary/70"
                          >
                            <FaCheckCircle className="text-green-500 shrink-0" size={11} />
                            {t.name || t}
                          </li>
                        ))}
                        {pkg.tests.length > 4 && (
                          <li className="text-[10px] text-primary/40 font-bold pl-4">
                            +{pkg.tests.length - 4} more tests included
                          </li>
                        )}
                      </ul>
                    )}

                    {/* Price */}
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-end justify-between">
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
                            <span className="text-sm font-bold text-primary/40">
                              Price on request
                            </span>
                          )}
                        </div>
                        <NavLink
                          to="/registration"
                          className={`text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg transition-all ${
                            isPopular
                              ? "bg-secondary text-white hover:bg-secondary/90"
                              : "bg-primary text-white hover:bg-primary/90"
                          }`}
                        >
                          Book Now
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingSection;
