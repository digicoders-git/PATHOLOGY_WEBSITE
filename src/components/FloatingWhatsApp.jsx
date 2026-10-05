import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingWhatsApp = () => {
  return (
    <aside
      aria-label="Quick Support Contacts"
      className="fixed bottom-6 right-6 z-[9990] flex flex-col items-end gap-2.5"
    >
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918400800821"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center bg-[#25D366] text-white p-3.5 sm:p-4 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_30px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 active:scale-95"
        title="Chat on WhatsApp: 8400 800 821"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[200px] transition-all duration-500 ease-in-out text-xs sm:text-sm font-bold tracking-wide pl-0 group-hover:pr-2.5">
          WhatsApp: 8400 800 821
        </span>
        <div className="relative">
          <FaWhatsapp className="text-2xl sm:text-3xl shrink-0" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
        </div>
      </a>
    </aside>
  );
};

export default FloatingWhatsApp;
