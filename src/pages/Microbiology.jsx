import React, { useEffect } from "react";
import ServicePageHero from "../components/services/ServicePageHero";
import MicrobiologyTesting from "../components/services/MicrobiologyTesting";

const MicrobiologyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <ServicePageHero
        title="Microbiology Testing"
        breadcrumb="Microbiology"
        image="https://images.unsplash.com/photo-1583912267550-d44d7a125e7e?q=80&w=1600&auto=format&fit=crop"
      />
      <MicrobiologyTesting />
    </main>
  );
};

export default MicrobiologyPage;
