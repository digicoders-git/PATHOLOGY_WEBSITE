import React from "react";
import { Link } from "react-router-dom";

const RegistrationHero = () => {
  return (
    <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden pt-36 pb-16 bg-primary">
      {/* Background with Professional Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.freepik.com/premium-photo/laboratory-workspace-with-glassware-book-refrigerator_1259251-3326.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Lab Registration"
          className="w-full h-full object-cover object-top opacity-50"
          loading="eager"
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/40 to-primary/20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <span className="text-secondary font-bold text-xs uppercase tracking-[0.3em] mb-3 block">
          Partner Portal
        </span>

        <h1 className="text-white text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6 leading-tight">
          Lab Registration
        </h1>

        {/* Clean Breadcrumbs */}
        <div className="flex items-center justify-center gap-3 text-white/80 text-xs font-semibold uppercase tracking-wider">
          <Link to="/" className="hover:text-secondary transition-colors">
            Home
          </Link>
          <span className="w-1 h-1 bg-white/30 rounded-full"></span>
          <span className="text-white/50">Registration</span>
        </div>
      </div>
    </section>
  );
};

export default RegistrationHero;
