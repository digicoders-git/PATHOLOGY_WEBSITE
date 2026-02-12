import React, { Suspense, lazy } from "react";
import Hero from "../components/home/Hero";

// Lazy loading sections for performance optimization
const AboutSection = lazy(() => import("../components/home/AboutSection"));
const StatsSection = lazy(() => import("../components/home/StatsSection"));
const MainServices = lazy(() => import("../components/home/MainServices"));
const QualityAssurance = lazy(
  () => import("../components/home/QualityAssurance"),
);
const SampleCollection = lazy(
  () => import("../components/home/SampleCollection"),
);
const Testimonials = lazy(() => import("../components/home/Testimonials"));
const CTA = lazy(() => import("../components/home/CTA"));

// Loading fallback component
const SectionLoader = () => (
  <div className="h-40 w-full animate-pulse bg-gray-50/50"></div>
);

const Home = () => {
  return (
    <main>
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <AboutSection />
        <StatsSection />
        <MainServices />
        <QualityAssurance />
        <SampleCollection />
        <Testimonials />
        <CTA />
      </Suspense>
    </main>
  );
};

export default Home;
