import React, { useEffect } from "react";
import AboutHero from "../components/about/AboutHero";
import MissionVision from "../components/about/MissionVision";
import NetworkOverview from "../components/about/NetworkOverview";
import MultiLabSupport from "../components/about/MultiLabSupport";
import LabTransparency from "../components/about/LabTransparency";
import QualityFocus from "../components/about/QualityFocus";
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
      <MissionVision />
      <NetworkOverview />
      <MultiLabSupport />
      <LabTransparency />
      <QualityFocus />
      {/* <LabExpertise /> */}
      <LabStandards />
      <EquipmentTesting />
      <DataConfidentiality />
      {/* Additional about sections will go here */}
    </main>
  );
};

export default About;
