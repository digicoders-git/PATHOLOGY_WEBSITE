import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaHeadset,
  FaGlobeAmericas,
} from "react-icons/fa";

const OfficeDetails = () => {
  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Business Address",
      details:
        "Plot No. 12, Health Tech Park, Sector 62, Noida, Uttar Pradesh 201309",
      label: "Main Headquarters",
    },
    {
      icon: FaEnvelope,
      title: "Email Address",
      details: "contact@pathologyplatform.com",
      label: "General Inquiries",
    },
    {
      icon: FaHeadset,
      title: "Support Contact",
      details: "+91 800-200-5000",
      label: "24/7 Helpline",
    },
  ];

  return (
    <section className="py-24 bg-gray-50/50 relative overflow-hidden">
      {/* Decorative Blur Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary text-2xl mx-auto mb-6 shadow-sm"
          >
            <FaGlobeAmericas />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">
            Our <span className="text-secondary italic">Office Details</span>
          </h2>
          <p className="text-lg text-primary/60 font-medium">
            Find us or get in touch through our official business channels. We
            are here to assist you with all your diagnostic platform needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl border border-gray-100 hover:border-secondary hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Hover Background Accent */}
              <div className="absolute inset-0 bg-linear-to-br from-secondary/0 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-sm border border-gray-100 group-hover:border-secondary">
                  <info.icon className="text-2xl text-secondary group-hover:text-white transition-colors" />
                </div>

                <span className="text-secondary font-black text-[10px] uppercase tracking-[0.2em] mb-2 block">
                  {info.label}
                </span>

                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                  {info.title}
                </h3>

                <p className="text-primary/70 font-semibold leading-relaxed">
                  {info.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Banner */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-primary rounded-4xl p-1 md:p-1.5 shadow-2xl overflow-hidden"
        >
          <div className="bg-white/95 backdrop-blur-sm px-8 py-10 rounded-[2.3rem] flex flex-col md:flex-row items-center justify-between gap-8 border border-white/20">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                <FaPhoneAlt className="text-2xl text-secondary" />
              </div>
              <div>
                <h4 className="text-2xl font-black text-primary mb-1">
                  Scale Your Diagnostics?
                </h4>
                <p className="text-primary/60 font-semibold">
                  For enterprise solutions and partnership inquiries, our
                  corporate team is ready to talk.
                </p>
              </div>
            </div>

            <button className="px-10 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-secondary transition-all duration-300 shadow-lg shadow-primary/20 whitespace-nowrap">
              Schedule a Call
            </button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default OfficeDetails;
