import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
    { name: "Tests & Services", path: "/tests-services" },
    { name: "Contact Us", path: "/contact" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF size={14} />, name: "facebook" },
    { icon: <FaInstagram size={14} />, name: "instagram" },
    { icon: <FaTwitter size={14} />, name: "twitter" },
    { icon: <FaLinkedinIn size={14} />, name: "linkedin" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 shadow-sm transition-all duration-300 text-primary font-sans">
      {/* Top Navbar: Disappears on scroll and hidden on small mobile */}
      <div
        className={`bg-primary text-pure-white transition-all duration-300 overflow-hidden ${
          isScrolled
            ? "max-h-0 py-0 border-none"
            : "max-h-24 md:max-h-20 py-2 md:py-1 border-b border-white/5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            <div className="flex items-center gap-1.5 group cursor-pointer hover:text-secondary transition-all">
              <MdEmail className="text-secondary text-sm md:text-base" />
              <span className="font-medium tracking-wide text-white text-[10px] md:text-xs">
                support@domain.tld
              </span>
            </div>
            <div className="flex items-center gap-1.5 group cursor-pointer hover:text-secondary transition-all">
              <FaPhoneAlt className="text-secondary text-[11px] md:text-sm" />
              <span className="font-medium tracking-wide text-white text-[10px] md:text-xs">
                +91 99999 88888
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <div
                key={social.name}
                className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary text-pure-white hover:text-primary transition-all cursor-pointer border border-white/5 active:scale-95"
              >
                {social.icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-background py-2 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
            : "bg-pure-white py-3 md:py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo Area */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <div
              className={`transition-all duration-300 ${isScrolled ? "w-8 h-8 md:w-9 md:h-9" : "w-10 h-10 md:w-11 md:h-11"} bg-primary group-hover:bg-secondary rounded-xl flex items-center justify-center transition-colors shadow-lg`}
            >
              <svg
                className={`${isScrolled ? "w-5 h-5" : "w-6 h-6"} text-pure-white`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.628.282a2 2 0 01-1.998 0l-.628-.282a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547l-1.16 1.16a2 2 0 001.218 3.395L8.683 20.35a6 6 0 004.634 0l6.626-2.228a2 2 0 001.218-3.395l-1.16-1.16zM15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span
                className={`${isScrolled ? "text-sm md:text-base" : "text-base md:text-lg"} font-black text-primary leading-none tracking-tight uppercase transition-all duration-300`}
              >
                Pathology
              </span>
              <span className="text-[9px] md:text-[10px] font-bold text-secondary tracking-[0.2em] leading-none mt-1 uppercase">
                Center
              </span>
            </div>
          </Link>

          {/* Navigation Links (Hidden on Mobile) */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 text-xs font-bold tracking-tight rounded-lg transition-all ${
                    isActive
                      ? "text-secondary bg-secondary/5"
                      : "text-primary hover:text-secondary hover:bg-background"
                  }`
                }
              >
                {link.name.toUpperCase()}
              </NavLink>
            ))}
          </div>

          {/* Action Button & Menu Icon */}
          <div className="flex items-center gap-3 md:gap-4">
            <NavLink
              to="/registration"
              className={`bg-primary hover:bg-primary/95 text-pure-white ${isScrolled ? "px-4 py-1.5 text-[10px]" : "px-5 md:px-6 py-2 md:py-2.5 text-[10px] md:text-xs"} rounded-full font-extrabold shadow-lg transition-all active:scale-95 uppercase tracking-wider shrink-0 whitespace-nowrap`}
            >
              Registration
            </NavLink>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-primary p-1.5 focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
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
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.628.282a2 2 0 01-1.998 0l-.628-.282a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547l-1.16 1.16a2 2 0 001.218 3.395L8.683 20.35a6 6 0 004.634 0l6.626-2.228a2 2 0 001.218-3.395l-1.16-1.16zM15 7a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <span className="font-black text-primary uppercase text-sm">
                    Pathology
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
                      `px-5 py-4 text-sm font-black tracking-widest rounded-xl transition-all flex items-center justify-between group ${
                        isActive
                          ? "bg-primary text-white"
                          : "text-primary hover:bg-background"
                      }`
                    }
                  >
                    {link.name.toUpperCase()}
                  </NavLink>
                ))}
              </div>

              <div className="mt-10 pt-10 border-t border-gray-100">
                <NavLink
                  to="/registration"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full bg-secondary text-primary font-black py-4 rounded-xl text-center block uppercase tracking-[0.2em] text-xs shadow-lg active:scale-95"
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
