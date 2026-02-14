import React, { useEffect } from "react";
import AppHero from "../components/mobile-app/AppHero";
import PatientAppFeatures from "../components/mobile-app/PatientAppFeatures";
import LabAppFeatures from "../components/mobile-app/LabAppFeatures";
import SecurityDataHandling from "../components/mobile-app/SecurityDataHandling";
import AppAvailability from "../components/mobile-app/AppAvailability";
import DownloadCTA from "../components/mobile-app/DownloadCTA";

const MobileApp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <AppHero />
      <PatientAppFeatures />
      <LabAppFeatures />
      <SecurityDataHandling />
      <AppAvailability />
      {/* <DownloadCTA /> */}
      {/* Additional app features and sections can be added here */}
    </main>
  );
};

export default MobileApp;
