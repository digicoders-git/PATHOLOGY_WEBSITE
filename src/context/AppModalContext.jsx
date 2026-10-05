import React, { createContext, useContext, useState, useEffect } from "react";
import AppleComingSoonModal from "../components/AppleComingSoonModal";

const AppModalContext = createContext();

export const AppModalProvider = ({ children }) => {
  const [isAppleModalOpen, setIsAppleModalOpen] = useState(false);

  const openAppleStoreModal = () => setIsAppleModalOpen(true);
  const closeAppleStoreModal = () => setIsAppleModalOpen(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeAppleStoreModal();
      }
    };
    if (isAppleModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isAppleModalOpen]);

  return (
    <AppModalContext.Provider value={{ isAppleModalOpen, openAppleStoreModal, closeAppleStoreModal }}>
      {children}
      <AppleComingSoonModal isOpen={isAppleModalOpen} onClose={closeAppleStoreModal} />
    </AppModalContext.Provider>
  );
};

export const useAppModal = () => {
  const context = useContext(AppModalContext);
  if (!context) {
    throw new Error("useAppModal must be used within an AppModalProvider");
  }
  return context;
};
