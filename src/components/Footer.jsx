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
// import logo removed

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-lab" },
    { name: "Pricing", path: "/pricing" },
    { name: "Registration", path: "/registration" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-white text-black pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Lab Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center p-3 transition-transform group-hover:scale-110 shrink-0">
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
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-black hover:text-white transition-all text-xs border border-gray-200 text-black"
                  >
                    <Icon />
                  </a>
                ),
              )}
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
                    className="text-black hover:text-gray-600 text-sm font-bold flex items-center gap-2 transition-all hover:translate-x-2 group"
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
              <span className="w-6 h-[2px] bg-black"></span>
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
                    className="text-black hover:text-gray-600 text-sm font-bold flex items-center gap-2 transition-all hover:translate-x-2 group"
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
              <span className="w-6 h-[2px] bg-black"></span>
              Contact Info
            </h4>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-black text-lg shrink-0">
                  <FaPhoneAlt />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-black tracking-widest mb-1">
                    Call Support
                  </div>
                  <div className="font-bold text-sm text-black">
                    9355953293
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-black text-lg shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-black tracking-widest mb-1">
                    Email Us
                  </div>
                  <div className="font-bold text-sm text-black">
                    amitmassif@gmail.com
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-start">
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-black text-xs font-bold uppercase tracking-widest">
            © {currentYear} Crafter with ❤️ by{" "}
            <a
              href="https://digicoders.in"
              target="_blank"
              className="hover:text-gray-600"
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
