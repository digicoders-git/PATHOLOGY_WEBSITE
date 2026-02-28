import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IndividualLabForm from "./IndividualLabForm";
import ParentLabForm from "./ParentLabForm";
import { FaUserPlus, FaUsers } from "react-icons/fa";

const RegistrationForm = () => {
  const [activeTab, setActiveTab] = useState("individual");

  const tabs = [
    { id: "individual", label: "Individual Registration", icon: FaUserPlus },
    { id: "parent", label: "Parent Registration", icon: FaUsers },
  ];

  return (
    <section className="py-12 bg-background min-h-screen relative overflow-hidden">
      {/* Background - Minimalist Professional */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 blur-[100px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-secondary/5 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Compact Tab Switcher */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <div className="bg-white p-1.5 rounded-xl shadow-sm border border-gray-100 flex gap-1 w-full max-w-xl">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex-1 flex items-center justify-center gap-3 py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer overflow-hidden ${
                    isActive
                      ? "text-white"
                      : "text-primary/40 hover:text-primary/70"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className="absolute inset-0 bg-primary"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 35,
                      }}
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-2">
                    <tab.icon
                      className={`text-[12px] ${isActive ? "text-secondary" : "text-primary/20"}`}
                    />
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Form Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {activeTab === "individual" ? (
                <IndividualLabForm />
              ) : (
                <ParentLabForm />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
