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
      {/* Background Pathology Watermark - Full Secondary Theme */}
      <div className="absolute inset-0 pointer-events-none bg-secondary/5 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/5910956/pexels-photo-5910956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-full h-full object-cover opacity-[0.05] grayscale brightness-50 contrast-125"
        />
        {/* Deep Secondary Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-secondary/10 via-transparent to-secondary/5"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Tab Switcher */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <div className="bg-white p-1.5 rounded-xl shadow-md border border-gray-100 flex gap-1 w-full max-w-xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex-1 flex items-center justify-center gap-3 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-primary/50 hover:text-primary"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-lg"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <tab.icon
                    className={`text-sm ${activeTab === tab.id ? "text-secondary" : ""}`}
                  />
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
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
