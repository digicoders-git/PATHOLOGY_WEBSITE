import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaGavel,
  FaVial,
  FaFileMedical,
  FaUserCircle,
  FaExclamationTriangle,
  FaShieldAlt,
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
        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1600&auto=format&fit=crop"
        alt="Terms Background"
        className="w-full h-full object-cover object-[center_20%]"
      />
      <div className="absolute inset-0 bg-primary/60"></div>
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

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: FaShieldAlt,
      title: "Platform Overview",
      content:
        "This platform provides informational connectivity between pathology laboratories and users. We function as a digital ecosystem bridge, facilitating the structured transfer of diagnostic information while ensuring architectural integrity and communication efficiency.",
    },
    {
      icon: FaExclamationTriangle,
      title: "Medical Responsibility",
      content:
        "Diagnostic accuracy, reporting, and clinical interpretation remain the sole responsibility of the respective diagnostic laboratories. The platform does not provide medical advice or independent diagnostic conclusions.",
    },
    {
      icon: FaFileMedical,
      title: "Pricing & Reporting",
      content:
        "All pricing structures, report timelines, and billing details are governed by the specific laboratory fulfilling the test request. The platform acts as a transparent medium for displaying these details but does not dictate individual lab commercial policies.",
    },
    {
      icon: FaVial,
      title: "Diagnostic Limitations",
      content:
        "Users acknowledge that diagnostic testing has biological limitations. All reports generated via partner laboratories should be reviewed by a qualified healthcare professional in the context of clinical history.",
    },
    {
      icon: FaUserCircle,
      title: "User Obligations",
      content:
        "Users are responsible for providing accurate personal and medical information. Any decisions made based on diagnostic data retrieved through the platform should be done in consultation with a registered medical practitioner.",
    },
    {
      icon: FaGavel,
      title: "Jurisdiction & Compliance",
      content:
        "These terms are governed by the medical informatics and digital data regulations of India. Laboratories on the platform are expected to maintain their respective clinical certifications and compliance standards independently.",
    },
  ];

  return (
    <main className="bg-gray-50/50">
      <PolicyHero title="Terms & Conditions" subtitle="Legal Framework" />

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Header Disclaimer */}
            <div className="bg-primary p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight italic">
                  Important <span className="text-secondary">Disclaimer</span>
                </h2>
                <p className="text-white/80 font-medium max-w-2xl mx-auto leading-relaxed italic">
                  "This platform provides informational connectivity between
                  pathology laboratories and users. Diagnostic accuracy,
                  reporting, pricing, and medical responsibility remain with
                  respective laboratories."
                </p>
              </div>
            </div>

            {/* Terms Grid */}
            <div className="p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12">
              {sections.map((section, idx) => (
                <div key={idx} className="group">
                  <div className="flex gap-6 mb-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-secondary text-xl border border-gray-100 group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-sm">
                      <section.icon />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-primary uppercase tracking-tight mb-3">
                        {section.title}
                      </h3>
                      <div className="h-0.5 w-12 bg-secondary/20 group-hover:w-20 transition-all duration-500 mb-4"></div>
                    </div>
                  </div>
                  <p className="text-primary/70 font-semibold text-sm leading-relaxed italic border-l-2 border-gray-50 pl-6 group-hover:border-secondary/20 transition-colors">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Note */}
            <div className="bg-gray-50 p-10 border-t border-gray-100 text-center">
              <p className="text-primary/40 text-xs font-bold uppercase tracking-[0.4em] mb-4">
                Structured • Transparent • Accountable
              </p>
              <div className="flex justify-center gap-8">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default TermsOfService;
