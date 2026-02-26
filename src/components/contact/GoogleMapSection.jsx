import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkedAlt,
  FaDirections,
  FaExternalLinkAlt,
} from "react-icons/fa";

const GoogleMapSection = () => {
  const mapUrl =
    "//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2927.907758987582!2d80.94701827454179!3d26.904642076651946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd90f852511b%3A0xea3004cdf494ecbb!2sDigiCoders%20Technologies%20Private%20Limited%2C%20Best%20Software%2FWebsite%2FMobile%20App%20Development%20Company%20in%20Lucknow!5e1!3m2!1sen!2sin!4v1771050792115!5m2!1sen!2sin";

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side: Map Container */}
          <div className="w-full lg:w-1/2 h-[400px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full h-full rounded-2xl overflow-hidden shadow-sm border border-gray-100"
            >
              <iframe
                src={mapUrl}
                className="w-full h-full grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Office Location"
              ></iframe>
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight uppercase tracking-tight">
                Our <span className="text-secondary">Location</span>
              </h2>

              <p className="text-gray-500 text-sm md:text-base mb-8 leading-relaxed italic max-w-lg mx-auto lg:mx-0">
                "Our main hub is strategically located in the heart of
                health-tech ecosystem, ensuring rapid coordination with
                partners."
              </p>

              <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 shadow-sm mb-8 inline-block lg:block max-w-md mx-auto lg:mx-0 text-left">
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                  Main Headquarters
                </h4>
                <p className="text-sm font-bold text-gray-900 leading-tight">
                  Plot No. 12, Health Tech Park, Sector 62, Noida, UP 201309
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-secondary text-white font-bold rounded-xl hover:bg-red-600 transition-all shadow-md text-sm uppercase tracking-tight"
                >
                  <FaDirections className="text-lg" />
                  Get Directions
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMapSection;
