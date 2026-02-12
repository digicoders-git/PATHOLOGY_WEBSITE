import React, { useEffect } from "react";
import ServicePageHero from "../components/services/ServicePageHero";
import HematologyTesting from "../components/services/HematologyTesting";

const HematologyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <ServicePageHero
        title="Hematology Testing"
        breadcrumb="Hematology"
        image="https://images.unsplash.com/photo-1579152276503-3467c653457d?q=80&w=1600&auto=format&fit=crop"
      />
      <HematologyTesting />
    </main>
  );
};

export default HematologyPage;
