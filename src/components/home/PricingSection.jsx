import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTag, FaFlask } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import api from "../../apis/index";

const PricingSection = () => {
  const [packages, setPackages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  const cleanStr = (str) => str ? str.toString().replace(/^"|"$/g, '').replace(/\\"/g, '"').trim() : "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const catRes = await api.get("/categories");
        const cats = [{ _id: "All", name: "All" }];
        if (catRes.data.success) {
            const mappedCats = catRes.data.data.map(c => ({
                _id: c._id,
                name: cleanStr(c.name)
            }));
            setCategories([...cats, ...mappedCats]);
        } else {
            setCategories(cats);
        }

        const testRes = await api.get("/test-service/get");
        if (testRes.data.success) {
          const mappedData = (testRes.data.data || []).map(item => ({
            _id: item._id,
            packageName: cleanStr(item.title),
            category: cleanStr(item.category_id?.name || "General"),
            categoryId: item.category_id?._id,
            description: cleanStr(item.short_description || item.overview || "Diagnostic Test"),
            actualPrice: item.mrp,
            discountPrice: item.price,
            image: item.image?.cloudinary || item.image?.local,
            tests: [
                cleanStr(item.sample_type) ? `Sample: ${cleanStr(item.sample_type)}` : null,
                cleanStr(item.report_time) ? `Report: ${cleanStr(item.report_time)}` : null,
                item.fasting_required ? "Fasting Required" : null
            ].filter(Boolean),
            isPopular: item.is_featured
          }));
          setPackages(mappedData);
        }
      } catch (error) {
        console.error("Home API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filtered =
    activeCategory === "All"
      ? packages
      : packages.filter((p) => p.category === activeCategory);

  const discount = (actual, discounted) =>
    actual && discounted
      ? Math.round(((actual - discounted) / actual) * 100)
      : null;

  return (
    <section className="py-20 bg-white relative overflow-hidden">
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

        {!loading && categories.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex sm:flex-wrap items-center justify-start sm:justify-center gap-3 mb-12 overflow-x-auto sm:overflow-visible scrollbar-hide -mx-6 px-6 sm:mx-0 sm:px-0"
          >
            {categories.map((cat) => (
              <button
                key={cat._id}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex-shrink-0 px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.15em] rounded-full border transition-all duration-300 whitespace-nowrap whitespace-nowrap ${
                  activeCategory === cat.name
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105"
                    : "bg-white text-primary/60 border-primary/10 hover:border-primary/40 hover:text-primary"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </motion.div>
        )}

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
          <div className="overflow-x-auto scrollbar-hide pb-12 -mx-4 px-4 sm:-mx-6 sm:px-6">
            <div 
                className="grid grid-rows-1 grid-flow-col gap-6 min-w-max"
                style={{ gridAutoColumns: 'min(calc(100vw - 3rem), 340px)' }}
            >
              {filtered.map((pkg, index) => {
                const off = discount(pkg.actualPrice, pkg.discountPrice);
                const isPopular = pkg.isPopular;
                const thumb = pkg.image;

                return (
                  <motion.div
                    key={pkg._id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.07 }}
                    className={`relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-[280px] sm:w-[320px] lg:w-[340px] ${
                      isPopular
                        ? "border-secondary shadow-lg shadow-secondary/10"
                        : "border-gray-100 shadow-sm"
                    }`}
                  >
                    {isPopular && (
                      <div className="absolute top-4 right-4 z-10 bg-secondary text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow">
                        Most Popular
                      </div>
                    )}

                    {off > 0 && (
                      <div className="absolute top-4 left-4 z-10 bg-green-500 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow flex items-center gap-1">
                        <FaTag size={8} /> {off}% OFF
                      </div>
                    )}

                    <NavLink
                      to={`/test/${pkg._id}`}
                      className="h-36 relative overflow-hidden block bg-primary"
                    >
                      {thumb ? (
                        <img
                          src={thumb.startsWith('http') ? thumb : `${import.meta.env.VITE_API_BASE_URL}/${thumb}`}
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
                    </NavLink>

                    <div className="flex flex-col flex-1 p-6 bg-white">
                      <NavLink to={`/test/${pkg._id}`}>
                          <h3 className="text-base font-black text-primary uppercase tracking-tight mb-1 hover:text-secondary transition-colors cursor-pointer">
                          {pkg.packageName}
                          </h3>
                      </NavLink>

                      {pkg.description && (
                        <p className="text-primary/50 text-xs leading-relaxed mb-4 line-clamp-2">
                          {pkg.description}
                        </p>
                      )}

                      {pkg.tests?.length > 0 && (
                        <ul className="space-y-1.5 mb-5 flex-1">
                          {pkg.tests.slice(0, 4).map((t, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2 text-xs text-primary/70"
                            >
                              <FaCheckCircle className="text-green-500 shrink-0" size={11} />
                              {t}
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="mt-auto pt-4 border-t border-gray-100">
                        <div className="flex items-end justify-between">
                          <div>
                              {pkg.discountPrice ? (
                                  <div className="flex flex-col">
                                      <div className="flex items-center gap-2">
                                          <span className="text-2xl font-black text-primary">
                                              ₹{pkg.discountPrice}
                                          </span>
                                          {off > 0 && (
                                              <span className="text-[10px] bg-green-500 text-white font-black px-1.5 py-0.5 rounded uppercase">
                                                  {off}% OFF
                                              </span>
                                          )}
                                      </div>
                                      {pkg.actualPrice && (
                                          <span className="text-[10px] text-primary/40 font-bold uppercase tracking-widest italic">
                                              MRP: <span className="line-through">₹{pkg.actualPrice}</span>
                                          </span>
                                      )}
                                  </div>
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
                            className="text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg transition-all bg-primary text-white hover:bg-primary/90"
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
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingSection;
