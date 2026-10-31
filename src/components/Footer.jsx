import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaChevronRight,
  FaVideo,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-lab" },
    { name: "Pricing", path: "/pricing" },
    { name: "Registration", path: "/registration" },
    { name: "Contact Us", path: "/contact" },
  ];

  const supportLinks = [
    { name: "Video Tutorial", path: "/video-tutorial" },
    { name: "Presentation", path: "/presentation" },
    { name: "Catalogue", path: "/catalogue" },
    { name: "Media", path: "/media", isNew: true },
    { name: "Mobile App", path: "/mobile-app" },
  ];

  return (
    <footer className="bg-white text-black pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Lab Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="w-[72px] h-[72px] flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
                <img
                  src="/image.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-2xl font-black leading-none tracking-tight uppercase text-secondary flex items-center">
                  LABO<span className="inline-flex relative -top-[0.5em] text-[0.5em] ml-[1px] mr-[3px]"><FaMapMarkerAlt /></span> INDIA
                </span>
                <span className="text-[9.4px] font-bold text-black uppercase tracking-widest mt-1">
                  Connecting Pathology Labs
                </span>
              </div>
            </Link>
            <p className="text-black text-sm leading-relaxed font-medium">
              Making Diagnostic Testing Affordable, Reliable, and
              Patient-Focused. <br />
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: FaWhatsapp, href: "https://wa.me/918400800821" },
                { icon: FaFacebookF, href: "#" },
                { icon: FaInstagram, href: "#" },
                { icon: FaXTwitter, href: "#" },
                { icon: FaLinkedinIn, href: "#" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href !== "#" ? "_blank" : undefined}
                  rel={item.href !== "#" ? "noopener noreferrer" : undefined}
                  className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-black hover:text-white transition-all text-xs border border-gray-200 text-black active:scale-95"
                >
                  <item.icon />
                </a>
              ))}
            </div>
            <span>Powered by Easy Health India.</span>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-black uppercase tracking-widest mb-8 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-black"></span>
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-black hover:text-secondary text-sm font-bold flex items-center gap-2 transition-all hover:translate-x-2 group"
                  >
                    <FaChevronRight className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity text-secondary" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support & Tutorials */}
          <div>
            <h4 className="text-lg font-black uppercase tracking-widest mb-8 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-secondary"></span>
              Support
            </h4>
            <ul className="space-y-4">
              {supportLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-black hover:text-secondary text-sm font-bold flex items-center gap-2 transition-all hover:translate-x-2 group"
                  >
                    <FaChevronRight className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity text-secondary" />
                    <span>{link.name}</span>
                    {link.isNew && (
                      <span className="bg-secondary text-white text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full shadow-xs">
                        New
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-black uppercase tracking-widest mb-8 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-black"></span>
              Contact Info
            </h4>
            <div className="space-y-4">
              <a
                href="tel:8400800821"
                className="flex gap-4 items-center group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-black text-sm shrink-0 group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all">
                  <FaPhoneAlt />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-0.5">
                    Call Support
                  </div>
                  <div className="font-bold text-sm text-black group-hover:text-secondary transition-colors">
                    +91 8400 800 821
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/918400800821"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 items-center group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 text-base shrink-0 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all">
                  <FaWhatsapp />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-emerald-600 tracking-widest mb-0.5">
                    WhatsApp Chat
                  </div>
                  <div className="font-bold text-sm text-black group-hover:text-emerald-600 transition-colors">
                    8400 800 821
                  </div>
                </div>
              </a>

              <a
                href="mailto:info@laboindia.com"
                className="flex gap-4 items-center group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-black text-base shrink-0 group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-0.5">
                    Email Us
                  </div>
                  <div className="font-bold text-sm text-black group-hover:text-secondary transition-colors truncate">
                    info@laboindia.com
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col lg:flex-row justify-between items-center gap-4 text-center">
          <p className="text-black text-xs font-bold uppercase tracking-widest">
            © {currentYear} Labo India. All Rights Reserved.
          </p>

          {/* Crafted by Team DigiCoders */}
          <p className="text-xs font-bold text-gray-600 flex items-center justify-center gap-1.5">
            <span>Crafted with</span>
            <span className="text-secondary text-sm">❤️</span>
            <span>by</span>
            <a
              href="https://digicoders.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-black hover:underline transition-all"
            >
              Team DigiCoders
            </a>
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs font-bold text-gray-500">
            <Link to="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms-of-service" className="hover:text-secondary transition-colors">Terms & Conditions</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-secondary transition-colors">Help & Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
