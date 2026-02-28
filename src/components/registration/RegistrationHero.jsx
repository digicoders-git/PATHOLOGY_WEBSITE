import React from "react";
import { Link } from "react-router-dom";

const RegistrationHero = () => {
  return (
    <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden pt-36 pb-16 bg-secondary">
      {/* Background with Professional Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.freepik.com/premium-photo/laboratory-workspace-with-glassware-book-refrigerator_1259251-3326.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Lab Registration"
          className="w-full h-full object-cover object-top opacity-50"
          loading="eager"
        />
        {/* Changed from primary (blue) to secondary (red) for a more striking appearance as requested */}
        <div className="absolute inset-0 bg-linear-to-t from-secondary via-secondary/40 to-secondary/20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <span className="text-white font-bold text-xs uppercase tracking-[0.3em] mb-4 block bg-white/10 w-fit mx-auto px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-sm">
          Partner Portal
        </span>

        <h1 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-tight mb-8 leading-tight">
          Lab Registration
        </h1>

        {/* Clean Breadcrumbs */}
        <div className="flex items-center justify-center gap-4 text-white/90 text-[10px] font-bold uppercase tracking-[0.2em]">
          <Link to="/" className="hover:text-white/70 transition-colors">
            Home
          </Link>
          <span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span>
          <span className="text-white/60">Registration</span>
        </div>
      </div>
    </section>
  );
};

export default RegistrationHero;
