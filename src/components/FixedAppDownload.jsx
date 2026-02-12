import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const FixedAppDownload = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-9999 flex flex-col gap-3">
      {/* Android Download Link */}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center bg-white text-primary rounded-l-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-y border-l border-gray-100 p-3 md:p-4 transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-x-2"
        title="Download for Android"
      >
        <FaGooglePlay className="text-xl md:text-2xl" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[150px] group-hover:ml-3 transition-all duration-500 ease-in-out text-[11px] md:text-sm font-semibold uppercase tracking-wider">
          Android App
        </span>
      </a>

      {/* iOS Download Link */}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center bg-white text-primary rounded-l-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-y border-l border-gray-100 p-3 md:p-4 transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-x-2"
        title="Download for iOS"
      >
        <FaApple className="text-xl md:text-2xl" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[150px] group-hover:ml-3 transition-all duration-500 ease-in-out text-[11px] md:text-sm font-semibold uppercase tracking-wider">
          iOS App
        </span>
      </a>
    </div>
  );
};

export default FixedAppDownload;
