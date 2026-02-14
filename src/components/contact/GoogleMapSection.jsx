import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkedAlt,
  FaDirections,
  FaExternalLinkAlt,
} from "react-icons/fa";

const GoogleMapSection = () => {
  // Using a professional style map embed for Noida (as per OfficeDetails)
  const mapUrl =
    "//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2927.907758987582!2d80.94701827454179!3d26.904642076651946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd90f852511b%3A0xea3004cdf494ecbb!2sDigiCoders%20Technologies%20Private%20Limited%2C%20Best%20Software%2FWebsite%2FMobile%20App%20Development%20Company%20in%20Lucknow!5e1!3m2!1sen!2sin!4v1771050792115!5m2!1sen!2sin";

  return (
    <section className="py-2 bg-gray-50/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side: Map Container */}
          <div className="w-full lg:w-2/3 h-[500px] relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full h-full rounded-xl overflow-hidden shadow-2xl border-4 border-white shadow-primary/10 relative group"
            >
              <iframe
                src={mapUrl}
                className="w-full h-full grayscale-[0.2] contrast-[1.1] transition-all duration-700 group-hover:grayscale-0"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>

              {/* Overlay for map interactivity cue */}
              <div className="absolute top-4 right-4 z-10">
                <div className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl text-primary font-bold text-xs shadow-lg border border-white flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full animate-ping"></span>
                  Interactive Map
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Information & Directions */}
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/10 text-secondary font-bold text-sm mb-6 uppercase tracking-wider">
                <FaMapMarkedAlt />
                <span>Visit Us</span>
              </div>

              <h2 className="text-4xl font-black text-primary mb-6 leading-tight">
                Our Physical{" "}
                <span className="text-secondary italic">Presence</span>
              </h2>

              <p className="text-lg text-primary/60 font-medium leading-relaxed mb-8 italic">
                Our main hub is strategically located in the heart of
                health-tech ecosystem, ensuring rapid coordination with all our
                network partners.
              </p>

              <div className="space-y-6 mb-10">
                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <h4 className="font-black text-primary text-sm uppercase mb-2 tracking-widest">
                    Main Hub
                  </h4>
                  <p className="text-primary/70 font-bold leading-snug">
                    Plot No. 12, Health Tech Park, Sector 62, Noida, UP 201309
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="p-4 rounded-xl bg-primary/5 flex-1 text-center border border-primary/5">
                    <span className="text-[10px] font-black uppercase text-primary/40 block mb-1">
                      Accessibility
                    </span>
                    <span className="text-sm font-bold text-primary">
                      Metro Connected
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/5 flex-1 text-center border border-secondary/5">
                    <span className="text-[10px] font-black uppercase text-secondary/40 block mb-1">
                      Parking
                    </span>
                    <span className="text-sm font-bold text-secondary">
                      Free On-site
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-secondary transition-all duration-300 shadow-xl shadow-primary/20"
                >
                  <FaDirections className="text-xl" />
                  Get Directions
                </a>
                <button className="flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-primary/10 text-primary font-bold rounded-xl hover:border-secondary hover:text-secondary transition-all duration-300">
                  <FaExternalLinkAlt className="text-sm" />
                  Open in App
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMapSection;
