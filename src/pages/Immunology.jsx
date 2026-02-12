import React, { useEffect } from "react";
import ServicePageHero from "../components/services/ServicePageHero";
import ImmunologyTesting from "../components/services/ImmunologyTesting";

const ImmunologyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <ServicePageHero
        title="Immunology Testing"
        breadcrumb="Immunology"
        image="https://images.unsplash.com/photo-1579152276503-3467c653457d?q=80&w=1600&auto=format&fit=crop"
      />
      <div className="py-12 bg-pure-white">
        <ImmunologyTesting />
      </div>
    </main>
  );
};

export default ImmunologyPage;
