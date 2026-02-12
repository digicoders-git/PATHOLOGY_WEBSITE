import React, { useEffect } from "react";
import AboutHero from "../components/about/AboutHero";
import LabExpertise from "../components/about/LabExpertise";
import LabStandards from "../components/about/LabStandards";
import EquipmentTesting from "../components/about/EquipmentTesting";
import DataConfidentiality from "../components/about/DataConfidentiality";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <AboutHero />
      <LabExpertise />
      <LabStandards />
      <EquipmentTesting />
      <DataConfidentiality />
      {/* Additional about sections will go here */}
    </main>
  );
};

export default About;
