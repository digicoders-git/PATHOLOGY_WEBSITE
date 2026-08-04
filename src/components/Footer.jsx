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
    <footer className="bg-white text-red-600 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Lab Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-16 h-16 bg-red-50 border border-red-100 rounded-full flex items-center justify-center p-3 transition-transform group-hover:scale-110 shrink-0">
                <img
                  src="/image.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-2xl font-black leading-none tracking-tight uppercase text-red-600">
                  LABO INDIA
                </span>
                <span className="text-[9.4px] font-bold text-red-700 uppercase tracking-widest mt-1">
                  Connecting Pathology Labs
                </span>
              </div>
            </Link>
            <p className="text-red-600 text-sm leading-relaxed font-medium">
              Making Diagnostic Testing Affordable, Reliable, and
              Patient-Focused. <br />
            </p>
            <div className="flex items-center gap-3">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all text-xs border border-red-200 text-red-600"
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
              <span className="w-6 h-[2px] bg-red-600"></span>
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-red-600 hover:text-red-800 text-sm font-bold flex items-center gap-2 transition-all hover:translate-x-2 group"
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
              <span className="w-6 h-[2px] bg-red-600"></span>
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
                    className="text-red-600 hover:text-red-800 text-sm font-bold flex items-center gap-2 transition-all hover:translate-x-2 group"
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
              <span className="w-6 h-[2px] bg-red-600"></span>
              Contact Info
            </h4>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center text-red-600 text-lg shrink-0">
                  <FaPhoneAlt />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-red-600 tracking-widest mb-1">
                    Call Support
                  </div>
                  <div className="font-bold text-sm text-red-600">
                    9355953293
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center text-red-600 text-lg shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-red-600 tracking-widest mb-1">
                    Email Us
                  </div>
                  <div className="font-bold text-sm text-red-600">
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
        <div className="border-t border-red-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-red-600 text-xs font-bold uppercase tracking-widest">
            © {currentYear} Crafter with ❤️ by{" "}
            <a
              href="https://digicoders.in"
              target="_blank"
              className="hover:text-red-800"
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
