import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaApple, FaGooglePlay, FaTimes, FaCheck, FaClock, FaShieldAlt } from "react-icons/fa";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=digi.coders.laboindia&pcampaignid=web_share";

const AppleComingSoonModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", duration: 0.45, bounce: 0.15 }}
            className="relative w-full max-w-lg bg-gradient-to-b from-[#18181b] via-[#121214] to-[#09090b] text-white rounded-3xl border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden z-10 p-6 sm:p-8"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -left-24 w-60 h-60 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all active:scale-95"
              aria-label="Close modal"
            >
              <FaTimes size={15} />
            </button>

            {/* Apple Header */}
            <div className="flex flex-col items-center text-center pt-2 pb-4">
              <div className="relative mb-5">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/20 via-white/5 to-transparent border border-white/20 flex items-center justify-center shadow-inner relative group">
                  <FaApple className="text-4xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.45)]" />
                </div>
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full whitespace-nowrap flex items-center gap-1">
                  <FaClock size={8} /> Under Review
                </span>
              </div>

              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-red-500 mb-2">
                Apple App Store
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-snug">
                Available Soon on iOS!
              </h3>
              <p className="text-white/60 text-xs sm:text-sm mt-3 max-w-sm leading-relaxed">
                Hamari official <strong>LaboIndia iOS App</strong> iPhone aur iPad ke liye final testing aur Apple review stage me hai. Bahut jald App Store par live hogi!
              </p>
            </div>

            {/* Status Steps */}
            <div className="bg-white/5 rounded-2xl p-4 border border-white/5 my-4 space-y-2.5 text-xs">
              <div className="flex items-center justify-between text-white/90">
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px]">
                    <FaCheck />
                  </span>
                  App Development & UI Design
                </span>
                <span className="text-emerald-400 font-bold text-[10px] uppercase">Ready</span>
              </div>
              <div className="flex items-center justify-between text-white/90">
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px]">
                    <FaCheck />
                  </span>
                  Internal Beta Testing
                </span>
                <span className="text-emerald-400 font-bold text-[10px] uppercase">Passed</span>
              </div>
              <div className="flex items-center justify-between text-white/90">
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px] animate-pulse">
                    <FaClock />
                  </span>
                  App Store Review & Approval
                </span>
                <span className="text-amber-400 font-bold text-[10px] uppercase">In Progress</span>
              </div>
            </div>

            {/* Android Live Callout */}
            <div className="bg-gradient-to-r from-red-950/40 via-red-900/20 to-transparent border border-red-500/20 rounded-2xl p-3.5 flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-black border border-white/10 flex items-center justify-center text-[#00f2fe] shrink-0 text-base">
                <FaGooglePlay />
              </div>
              <div className="text-left flex-1 min-w-0">
                <p className="text-[11px] font-bold text-white leading-tight truncate">
                  Android App is Already LIVE!
                </p>
                <p className="text-[10px] text-white/60 leading-tight">
                  Aap abhi Google Play Store se download kar sakte hain.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex-1 bg-white hover:bg-slate-100 text-black font-black text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 group"
              >
                <FaGooglePlay className="text-sm text-black" />
                <span>Get on Google Play</span>
              </a>

              <button
                onClick={onClose}
                className="sm:w-32 bg-white/10 hover:bg-white/15 text-white/90 font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl border border-white/10 transition-all active:scale-95"
              >
                Got It
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AppleComingSoonModal;
