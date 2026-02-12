import React from "react";
import { Link } from "react-router-dom";

const ServicePageHero = ({ title, breadcrumb, image }) => {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden pt-44 pb-20">
      {/* Background with Professional Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={
            image ||
            "https://images.unsplash.com/photo-1579152276503-3467c653457d?q=80&w=1600&auto=format&fit=crop"
          }
          alt={title}
          className="w-full h-full object-cover object-[center_10%]"
        />
        <div className="absolute inset-0 bg-primary/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <span className="text-secondary font-bold text-xs md:text-sm uppercase tracking-[0.4em] mb-4 block drop-shadow-sm">
          Specialized Diagnostics
        </span>
        <h1 className="text-white text-3xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-tight">
          {title}
        </h1>

        {/* Breadcrumbs with clean style */}
        <div className="flex items-center justify-center gap-3 text-white/90 text-xs md:text-sm font-medium uppercase tracking-[0.2em] bg-white/10 backdrop-blur-md w-fit mx-auto px-8 py-3 rounded-full border border-white/20 shadow-xl">
          <Link
            to="/"
            className="hover:text-secondary transition-colors text-white/70"
          >
            Home
          </Link>
          <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
          <Link
            to="/tests-services"
            className="hover:text-secondary transition-colors text-white/70"
          >
            Services
          </Link>
          <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
          <span className="text-white font-bold">{breadcrumb}</span>
        </div>
      </div>
    </section>
  );
};

export default ServicePageHero;
