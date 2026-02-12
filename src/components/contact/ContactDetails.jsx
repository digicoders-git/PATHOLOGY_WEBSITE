import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaEnvelope,
  FaHeadset,
  FaCalendarCheck,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ContactDetails = () => {
  const sections = [
    {
      title: "Lab Location & Address",
      subtitle: "Official Registered Facility",
      icon: FaMapMarkerAlt,
      items: [
        {
          label: "Laboratory Name",
          value: "Certified Pathology Laboratory",
          info: "Main Hub",
        },
        {
          label: "Diagnostic Unit",
          value: "Testing & Analytical Wing",
          info: "Level 2",
        },
        {
          label: "Sample Center",
          value: "Patient Collection Suite",
          info: "Ground Floor",
        },
      ],
    },
    {
      title: "Direct Contact Channels",
      subtitle: "24/7 Support Available",
      icon: FaHeadset,
      items: [
        {
          label: "Primary Helpline",
          value: "+91 99999 99999",
          info: "Call Now",
        },
        {
          label: "Email Support",
          value: "support@labdomain.tld",
          info: "Quick Response",
        },
        {
          label: "Emergency Process",
          value: "Available on Priority Call",
          info: "Emergency",
        },
      ],
    },
    {
      title: "Operating Schedule",
      subtitle: "Dedicated Service Hours",
      icon: FaCalendarCheck,
      items: [
        { label: "Working Days", value: "Monday – Saturday", info: "Full Day" },
        {
          label: "Collection Hours",
          value: "08:00 AM - 06:00 PM",
          info: "Sample",
        },
        {
          label: "Reporting",
          value: "24/7 Post-Process Delivery",
          info: "Digital",
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section className="bg-background py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(30,58,95,0.1)] transition-all duration-500 overflow-hidden will-change-transform"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Accent Icon Area */}
                <div className="lg:w-24 bg-background/50 flex items-center justify-center p-6 border-b lg:border-b-0 lg:border-r border-gray-50 group-hover:bg-primary transition-colors duration-500">
                  <section.icon className="text-secondary text-2xl group-hover:text-white group-hover:scale-110 transition-all duration-500" />
                </div>

                {/* Main Content Area */}
                <div className="flex-grow p-8 lg:p-10">
                  <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-gray-50">
                    <div>
                      <span className="text-secondary font-black text-[9px] uppercase tracking-[0.2em] mb-1 block">
                        {section.subtitle}
                      </span>
                      <h3 className="text-primary font-bold text-lg md:text-xl uppercase tracking-tight">
                        {section.title}
                      </h3>
                    </div>
                    <div className="hidden md:block h-0.5 w-12 bg-secondary/20 mb-2"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {section.items.map((item, i) => (
                      <div
                        key={i}
                        className="relative pl-6 border-l-2 border-transparent hover:border-secondary transition-colors py-1 group/item"
                      >
                        <span className="text-primary/40 font-bold text-[10px] uppercase tracking-widest block mb-1">
                          {item.label}
                        </span>
                        <p className="text-primary font-semibold text-[13px] md:text-sm leading-snug mb-1">
                          {item.value}
                        </p>
                        <span className="inline-block px-2 py-0.5 bg-background text-secondary text-[8px] font-black uppercase tracking-tighter rounded group-hover/item:bg-secondary group-hover/item:text-white transition-colors">
                          {item.info}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Professional Note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/5 flex items-center gap-6 will-change-transform"
        >
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
            <FaEnvelope className="text-sm" />
          </div>
          <p className="text-primary/60 text-xs md:text-sm font-medium leading-relaxed">
            For corporate inquiries or large-scale institutional pathology
            services, please connect with our administrative wing via the
            primary helpline number listed above.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactDetails;
