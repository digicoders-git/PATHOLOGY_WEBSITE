import React, { Suspense, lazy } from "react";
import Hero from "../components/home/Hero";

// Lazy loading sections for performance optimization
const SnapshotSection = lazy(
  () => import("../components/home/SnapshotSection"),
);
const WhatWeOffer = lazy(() => import("../components/home/WhatWeOffer"));
const PricingSection = lazy(() => import("../components/home/PricingSection"));
const MobileAppPromotion = lazy(
  () => import("../components/home/MobileAppPromotion"),
);
const OurCommitment = lazy(() => import("../components/home/OurCommitment"));
const NetworkStrength = lazy(
  () => import("../components/home/NetworkStrength"),
);
const AboutSection = lazy(() => import("../components/home/AboutSection"));
const StatsSection = lazy(() => import("../components/home/StatsSection"));

const QualityAssurance = lazy(
  () => import("../components/home/QualityAssurance"),
);
const HowItWorks = lazy(() => import("../components/home/HowItWorks"));
const SampleCollection = lazy(
  () => import("../components/home/SampleCollection"),
);

// Loading fallback component
const SectionLoader = () => (
  <div className="h-40 w-full animate-pulse bg-gray-50/50"></div>
);

const Home = () => {
  return (
    <main>
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <HowItWorks />
        <OurCommitment />
        <SnapshotSection />
        <WhatWeOffer />
        <PricingSection />
        <MobileAppPromotion />
        <NetworkStrength />
        {/* <AboutSection /> */}
        {/* <StatsSection /> */}

        {/* <QualityAssurance /> */}
        {/* <SampleCollection /> */}
        {/* <Testimonials /> */}
        {/* <CTA /> */}
      </Suspense>
    </main>
  );
};

export default Home;
