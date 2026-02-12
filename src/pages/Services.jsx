import React, { useEffect, Suspense, lazy } from "react";
import ServicesHero from "../components/services/ServicesHero";

// Lazy loading sections for performance
const HematologyTesting = lazy(
  () => import("../components/services/HematologyTesting"),
);
const BiochemistryTesting = lazy(
  () => import("../components/services/BiochemistryTesting"),
);
const MicrobiologyTesting = lazy(
  () => import("../components/services/MicrobiologyTesting"),
);
const ImmunologyTesting = lazy(
  () => import("../components/services/ImmunologyTesting"),
);

const SectionLoader = () => (
  <div className="py-24 bg-pure-white flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <ServicesHero />
      <Suspense fallback={<SectionLoader />}>
        <HematologyTesting />
        <BiochemistryTesting />
        <MicrobiologyTesting />
        <ImmunologyTesting />
      </Suspense>
    </main>
  );
};

export default Services;
