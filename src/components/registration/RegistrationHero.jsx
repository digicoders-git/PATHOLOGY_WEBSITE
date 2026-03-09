import React from "react";
import { Link } from "react-router-dom";

const RegistrationHero = () => {
  return (
    <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden pt-36 pb-16 bg-secondary">

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
