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
import logo from "../assets/updated_logo.png";

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
    { name: "Mobile App", path: "/mobile-app" },
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
      {/* Top Navbar */}
      <div
        className={`bg-secondary text-pure-white transition-all duration-300 overflow-hidden ${isScrolled
          ? "max-h-0 py-0"
          : "max-h-24 md:max-h-20 py-1.5 md:py-1 border-b border-white/5"
          }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center h-full">
          <div className="flex items-center gap-3 md:gap-6 overflow-hidden">
            <div className="hidden sm:flex items-center gap-1.5 group cursor-pointer">
              <MdEmail className="text-white text-xs shrink-0" />
              <span className="font-medium text-white text-[10px] md:text-[11px] opacity-90 truncate">
                amitmassif@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-1.5 group cursor-pointer">
              <FaPhoneAlt className="text-white text-[10px] shrink-0" />
              <span className="font-medium text-white text-[10px] md:text-[11px] opacity-90">
                +91 99999 88888
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {socialLinks.map((social) => (
              <div
                key={social.name}
                className="w-6 h-6 rounded-full bg-white hover:bg-white flex items-center justify-center text-secondary hover:text-primary transition-all cursor-pointer border border-white/5 active:scale-95"
              >
                {social.icon}
              </div>
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
                src={logo}
                alt="LABO INDIA Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col justify-center border-l border-gray-100 pl-2 md:pl-3 h-10 md:h-16">
              <span
                className="text-[11px] md:text-4xl font-black text-primary leading-none tracking-tight uppercase transition-all duration-300"
              >
                LABO INDIA
              </span>
              <span className="text-[8px] md:text-[13.4px] font-bold text-secondary leading-tight uppercase mt-0">
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
                    : "text-primary hover:text-secondary"
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
                `${isActive ? "bg-secondary text-white" : "bg-primary text-white"} hover:bg-secondary hover:text-white ${isScrolled ? "px-5 py-1.5 text-[10px]" : "px-6 py-2 text-[10px]"} rounded-lg font-black transition-all active:scale-95 uppercase tracking-widest shadow-lg shadow-primary/10`
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
                      src={logo}
                      alt="Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-black text-primary uppercase text-lg">
                    LABO INDIA
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

              <div className="mt-10 pt-10 border-t border-gray-100">
                <NavLink
                  to="/registration"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full bg-secondary text-white font-black py-4 rounded-xl text-center block uppercase tracking-[0.2em] text-xs shadow-lg active:scale-95"
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
