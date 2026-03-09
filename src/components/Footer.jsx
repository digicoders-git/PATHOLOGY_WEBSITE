import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-lab" },
    { name: "Registration", path: "/registration" },
    { name: "Contact Us", path: "/contact" },
  ];

  const labServices = [
    "Hematology Testing",
    "Biochemistry Testing",
    "Microbiology Testing",
    "Immunology Testing",
  ];

  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Lab Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center p-2 transition-transform group-hover:scale-110">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col w-[220px]">
                <span className="text-3xl font-black leading-none tracking-tight uppercase text-white">
                  LABO INDIA
                </span>

                <span className="text-[9px] font-bold text-red-500 uppercase tracking-widest mt-1">
                  Connecting Pathology Labs
                </span>
              </div>

            </Link>
            <p className="text-white text-sm leading-relaxed font-medium">
              Making Diagnostic Testing Affordable, Reliable, and
              Patient-Focused. <br />
              Clinical pathology laboratory providing diagnostic testing and
              sample analysis services. We specialize in providing accurate and
              reliable results.
            </p>
            <div className="flex items-center gap-3">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-all text-xs border border-white/5"
                  >
                    <Icon />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-black uppercase tracking-widest mb-8 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-secondary"></span>
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-white hover:text-secondary text-sm font-bold flex items-center gap-2 transition-all hover:translate-x-2 group"
                  >
                    <FaChevronRight className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal Links */}
          <div>
            <h4 className="text-lg font-black uppercase tracking-widest mb-8 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-secondary"></span>
              Legal Links
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms of Conditions", path: "/terms-of-service" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-white hover:text-secondary text-sm font-bold flex items-center gap-2 transition-all hover:translate-x-2 group"
                  >
                    <FaChevronRight className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info (Added for Professionalism) */}
          <div>
            <h4 className="text-lg font-black uppercase tracking-widest mb-8 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-secondary"></span>
              Contact Info
            </h4>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-secondary text-lg shrink-0">
                  <FaPhoneAlt />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-white tracking-widest mb-1">
                    Call Support
                  </div>
                  <div className="font-bold text-sm text-white">
                    +01 (234) 567 89
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-secondary text-lg shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-white tracking-widest mb-1">
                    Email Us
                  </div>
                  <div className="font-bold text-sm text-white">
                    support@domain.tld
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-secondary text-lg shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-white tracking-widest mb-1">
                    Laboratory Location
                  </div>
                  <div className="font-bold text-sm text-white leading-snug">
                    Clinical Lab Street, 12, Diagnostic City
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-xs font-bold uppercase tracking-widest text-center md:text-left">
            © {currentYear} Design and Developed by{" "}
            <a
              href="https://digicoders.in"
              target="_blank"
              className="hover:text-secondary"
            >
              #TeamDigiCoders
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
