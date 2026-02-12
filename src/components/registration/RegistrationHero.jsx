import React from "react";
import { Link } from "react-router-dom";

const RegistrationHero = () => {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden pt-44 pb-20">
      {/* Background with Professional Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.freepik.com/premium-photo/laboratory-workspace-with-glassware-book-refrigerator_1259251-3326.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Lab Registration"
          className="w-full h-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-[#1E3A5F]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F] via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <span className="text-secondary font-bold text-xs md:text-sm uppercase tracking-[0.4em] mb-4 block drop-shadow-sm">
          Join Our Network
        </span>
        <h1 className="text-white text-3xl md:text-5xl font-semibold uppercase tracking-tight mb-8 leading-tight">
          Patient Registration
        </h1>

        {/* Breadcrumbs with clean style */}
        <div className="flex items-center justify-center gap-3 text-white/90 text-xs md:text-sm font-medium uppercase tracking-[0.2em] bg-white/10 backdrop-blur-md w-fit mx-auto px-8 py-3 rounded-full border border-white/20 shadow-xl">
          <Link to="/" className="hover:text-secondary transition-colors">
            Home
          </Link>
          <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
          <span className="text-white/70">Registration</span>
        </div>
      </div>
    </section>
  );
};

export default RegistrationHero;
