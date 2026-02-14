import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaUserShield,
  FaLock,
  FaDatabase,
  FaEyeSlash,
  FaUserCheck,
  FaShieldAlt,
  FaInfinity,
} from "react-icons/fa";

const PolicyHero = ({ title, subtitle }) => (
  <section className="relative min-h-[450px] flex items-center justify-center overflow-hidden pt-44 pb-20 bg-primary">
    <motion.div
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="absolute inset-0 z-0"
    >
      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
        alt="Privacy Policy Background"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-primary/70"></div>
      <div className="absolute inset-0 bg-linear-to-t from-primary via-transparent to-transparent"></div>
    </motion.div>

    <div className="container mx-auto px-6 relative z-10 text-center">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-secondary font-bold text-xs uppercase tracking-[0.4em] mb-4 block"
      >
        {subtitle}
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-white text-3xl md:text-5xl font-black uppercase tracking-tight mb-8"
      >
        {title}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="flex items-center justify-center gap-3 text-white/90 text-xs font-medium uppercase tracking-[0.2em] bg-white/10 backdrop-blur-md w-fit mx-auto px-8 py-3 rounded-full border border-white/20 shadow-xl"
      >
        <Link to="/" className="hover:text-secondary transition-colors">
          Home
        </Link>
        <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
        <span className="text-white/70">{title}</span>
      </motion.div>
    </div>
  </section>
);

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const privacySections = [
    {
      icon: FaLock,
      title: "Data Protection",
      content:
        "We prioritize data privacy and security. User information is protected and used strictly for platform functionality and service improvement, ensuring elite-level encryption standards at every touchpoint.",
    },
    {
      icon: FaDatabase,
      title: "Information Storage",
      content:
        "All diagnostic reports and personal metadata are stored on encrypted, highly-compliant cloud servers. We maintain strict protocols to ensure your data remains durable and accessible only to authorized entities.",
    },
    {
      icon: FaUserCheck,
      title: "Authorized Usage",
      content:
        "Your information is used to facilitate laboratory connectivity, manage test bookings, and deliver accurate reporting. We do not sell or trade user data to third-party marketing organizations.",
    },
    {
      icon: FaEyeSlash,
      title: "Privacy Controls",
      content:
        "Users maintain full control over their diagnostic history. You have the right to view, download, or request the closure of your digital profile at any time through our secure interface.",
    },
    {
      icon: FaShieldAlt,
      title: "Service Improvement",
      content:
        "Anonymized data may be used to analyze platform performance and improve our diagnostic ecosystem, helping laboratories provide better turn-around times and service quality.",
    },
    {
      icon: FaInfinity,
      title: "Platform Continuity",
      content:
        "Our commitment to your privacy is absolute. As our platform evolves with new technologies, our core principles of data security and transparency remain the fundamental pillar of our architecture.",
    },
  ];

  return (
    <main className="bg-gray-50/50">
      <PolicyHero title="Privacy Policy" subtitle="Confidential Framework" />

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Mission Critical Banner */}
            <div className="bg-primary p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] -translate-y-1/2 -translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-secondary text-2xl mx-auto mb-6 backdrop-blur-md border border-white/5">
                  <FaUserShield />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight">
                  Privacy <span className="text-secondary">Commitment</span>
                </h2>
                <p className="text-white/80 font-medium max-w-2xl mx-auto leading-relaxed italic">
                  "We prioritize data privacy and security. User information is
                  protected and used strictly for platform functionality and
                  service improvement."
                </p>
              </div>
            </div>

            {/* Privacy Details Grid */}
            <div className="p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12">
              {privacySections.map((section, idx) => (
                <div key={idx} className="group">
                  <div className="flex gap-6 mb-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-secondary text-xl border border-gray-100 group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-sm">
                      <section.icon />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-primary uppercase tracking-tight mb-3 italic">
                        {section.title}
                      </h3>
                      <div className="h-0.5 w-12 bg-secondary/20 group-hover:w-20 transition-all duration-500"></div>
                    </div>
                  </div>
                  <p className="text-primary/70 font-semibold text-sm leading-relaxed border-l-2 border-gray-50 pl-6 group-hover:border-secondary/20 transition-colors italic">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Verification Line */}
            <div className="bg-gray-50 p-10 border-t border-gray-100 flex flex-col items-center">
              <div className="flex gap-12 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span className="text-primary/40 text-[10px] font-black uppercase tracking-widest">
                    Encrypted
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span className="text-primary/40 text-[10px] font-black uppercase tracking-widest">
                    Confidential
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span className="text-primary/40 text-[10px] font-black uppercase tracking-widest">
                    Protected
                  </span>
                </div>
              </div>
              <p className="text-primary/30 text-[9px] font-bold uppercase tracking-[0.5em]">
                Your Health Data • Your Digital Right • Our Absolute Priority
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
