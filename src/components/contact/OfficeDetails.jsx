import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaHeadset,
  FaGlobeAmericas,
} from "react-icons/fa";

const OfficeDetails = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Official Email",
      details: "info@laboindia.com",
      link: "mailto:info@laboindia.com",
      actionText: "Send Mail",
    },
    {
      icon: FaPhoneAlt,
      title: "Call Support",
      details: "+91 8400 800 821",
      link: "tel:8400800821",
      actionText: "Call Now",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp Chat",
      details: "8400 800 821",
      link: "https://wa.me/918400800821",
      actionText: "Start Chat",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden text-center">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight uppercase tracking-tight"
        >
          Contact & <span className="text-secondary">Support</span>
        </motion.h2>

        <p className="text-gray-500 text-sm md:text-base mb-10 leading-relaxed max-w-2xl mx-auto">
          Reach out to us through our official channels. Our dedicated team is
          here to assist pathology labs, partners, and patients 24/7.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target={info.link.startsWith("http") ? "_blank" : undefined}
              rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col items-center cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                <info.icon className="text-2xl text-secondary group-hover:text-white transition-all" />
              </div>

              <h3 className="text-sm font-black text-gray-900 mb-1.5 uppercase tracking-tight">
                {info.title}
              </h3>

              <p className="text-gray-700 text-sm font-bold mb-3">
                {info.details}
              </p>

              <span className="text-[11px] font-black uppercase tracking-wider text-secondary group-hover:underline">
                {info.actionText} →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeDetails;
