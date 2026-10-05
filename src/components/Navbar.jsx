import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaWhatsapp,
  FaTimes,
  FaBars,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import logo removed

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-lab" },
    { name: "Pricing", path: "/pricing" },
    { name: "Mobile App", path: "/mobile-app" },
    { name: "Contact Us", path: "/contact" },
  ];

  const socialLinks = [
    { icon: <FaWhatsapp size={14} />, name: "whatsapp", href: "https://wa.me/918400800821" },
    { icon: <FaFacebookF size={14} />, name: "facebook", href: "#" },
    { icon: <FaInstagram size={14} />, name: "instagram", href: "#" },
    { icon: <FaTwitter size={14} />, name: "twitter", href: "#" },
    { icon: <FaLinkedinIn size={14} />, name: "linkedin", href: "#" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 shadow-sm transition-all duration-300 text-primary font-sans">
      {/* Top Navbar */}
      <div
        className={`bg-secondary text-pure-white transition-all duration-300 overflow-hidden ${isScrolled
          ? "max-h-0 py-0"
          : "max-h-24 md:max-h-20 py-1.5 md:py-1 border-b border-white/5"
          }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center h-full">
          <div className="flex items-center gap-3 md:gap-5 overflow-hidden">
            <a
              href="mailto:info@laboindia.com"
              className="hidden sm:flex items-center gap-1.5 group cursor-pointer hover:opacity-100 transition-opacity"
              title="Email Us"
            >
              <MdEmail className="text-white text-xs shrink-0" />
              <span className="font-medium text-white text-[10px] md:text-[11px] opacity-90 group-hover:opacity-100 truncate">
                info@laboindia.com
              </span>
            </a>
            <a
              href="tel:8400800821"
              className="flex items-center gap-1.5 group cursor-pointer hover:opacity-100 transition-opacity"
              title="Call Us"
            >
              <FaPhoneAlt className="text-white text-[10px] shrink-0" />
              <span className="font-medium text-white text-[10px] md:text-[11px] opacity-90 group-hover:opacity-100">
                +91 8400 800 821
              </span>
            </a>
            <a
              href="https://wa.me/918400800821"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 group cursor-pointer hover:opacity-100 transition-opacity text-emerald-300"
              title="WhatsApp Us"
            >
              <FaWhatsapp className="text-xs shrink-0 text-white" />
              <span className="font-medium text-white text-[10px] md:text-[11px] opacity-90 group-hover:opacity-100">
                WhatsApp: 8400 800 821
              </span>
            </a>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.href !== "#" ? "_blank" : undefined}
                rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                className="w-6 h-6 rounded-full bg-white hover:bg-slate-100 flex items-center justify-center text-secondary hover:text-primary transition-all cursor-pointer border border-white/5 active:scale-95"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${isScrolled
          ? "bg-white/95 backdrop-blur-md py-1 shadow-md"
          : "bg-white py-1.5 md:py-2"
          }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo Area */}
          <Link
            to="/"
            className="flex items-center gap-1.5 md:gap-3 py-1 group"
          >
            <div
              className={`transition-all duration-300 ${isScrolled ? "w-10 h-10 md:w-16 md:h-16" : "w-14 h-14 md:w-20 md:h-20"} flex items-center justify-center relative`}
            >
              <img
                src="/image.png"
                alt="LABO INDIA Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col justify-center border-l border-gray-100 pl-2 md:pl-3 h-10 md:h-16">
              <span
                className="text-[11px] md:text-4xl font-black text-secondary leading-none tracking-tight uppercase transition-all duration-300 flex items-center"
              >
                LABO<span className="inline-flex relative -top-[0.5em] text-[0.5em] ml-[1px] mr-[3px]"><FaMapMarkerAlt /></span> INDIA
              </span>
              <span className="text-[6px] md:text-[13.4px] font-bold text-black leading-tight uppercase mt-0">
                Connecting <br className="md:hidden" /> Pathology Labs
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-1.5 text-[11px] font-bold tracking-widest transition-all relative group ${isActive
                    ? "text-secondary"
                    : "text-black hover:text-secondary"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name.toUpperCase()}
                    <span
                      className={`absolute bottom-0 left-4 right-4 h-0.5 bg-secondary transform origin-left transition-transform duration-300 group-hover:scale-x-100 ${isActive ? "scale-x-100" : "scale-x-0"
                        }`}
                    ></span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-4">
            <NavLink
              to="/registration"
              className={({ isActive }) =>
                `${isActive ? "bg-secondary text-white" : "bg-black text-white"} hover:bg-secondary hover:text-white ${isScrolled ? "px-5 py-1.5 text-[10px]" : "px-5 py-2 text-[10px]"} rounded-lg font-black transition-all active:scale-95 uppercase tracking-widest shadow-lg shadow-primary/10`
              }
            >
              Lab Registration
            </NavLink>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-primary p-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              {isMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Side Drawer / Overlay Menu */}
        <div
          className={`fixed inset-0 bg-primary/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className={`absolute top-0 right-0 h-screen w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-out z-50 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-2">
                  <div className="w-14 h-14 flex items-center justify-center">
                    <img
                      src="/image.png"
                      alt="Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-black text-secondary uppercase text-lg flex items-center">
                    LABO<span className="inline-flex relative -top-[0.5em] text-[0.5em] ml-[1px] mr-[3px]"><FaMapMarkerAlt /></span> INDIA
                  </span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-primary hover:text-secondary"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-5 py-4 text-sm font-black tracking-widest rounded-xl transition-all flex items-center justify-between group ${isActive
                        ? "bg-[#c32019] text-white"
                        : "text-black hover:bg-background"
                      }`
                    }
                  >
                    {link.name.toUpperCase()}
                  </NavLink>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-3">
                <a
                  href="tel:8400800821"
                  className="flex items-center gap-3 text-slate-700 text-xs font-bold hover:text-secondary transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-secondary shrink-0">
                    <FaPhoneAlt size={11} />
                  </div>
                  <span>+91 8400 800 821</span>
                </a>
                <a
                  href="https://wa.me/918400800821"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-700 text-xs font-bold hover:text-emerald-600 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                    <FaWhatsapp size={13} />
                  </div>
                  <span>WhatsApp: 8400 800 821</span>
                </a>
                <a
                  href="mailto:info@laboindia.com"
                  className="flex items-center gap-3 text-slate-700 text-xs font-bold hover:text-secondary transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-secondary shrink-0">
                    <MdEmail size={13} />
                  </div>
                  <span className="truncate">info@laboindia.com</span>
                </a>

                <NavLink
                  to="/registration"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full bg-secondary text-white font-black py-3.5 rounded-xl text-center block uppercase tracking-[0.2em] text-xs shadow-lg active:scale-95 mt-2"
                >
                  Registration Page
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
