import React, { useEffect, Suspense, lazy } from "react";
import ContactHero from "../components/contact/ContactHero";
import OfficeDetails from "../components/contact/OfficeDetails";
import ContactForm from "../components/contact/ContactForm";
import PartnershipQueries from "../components/contact/PartnershipQueries";
import ResponseDisclaimer from "../components/contact/ResponseDisclaimer";
import GoogleMapSection from "../components/contact/GoogleMapSection";

const ContactDetails = lazy(
  () => import("../components/contact/ContactDetails"),
);

const SectionLoader = () => (
  <div className="py-24 bg-background flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <ContactHero />
            <ContactForm />
      <OfficeDetails />

      {/* <GoogleMapSection /> */}
      <PartnershipQueries />
      <ResponseDisclaimer />
    </main>
  );
};

export default Contact;
