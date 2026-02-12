import React, { useEffect } from "react";
import ServicePageHero from "../components/services/ServicePageHero";
import BiochemistryTesting from "../components/services/BiochemistryTesting";

const BiochemistryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <ServicePageHero
        title="Biochemistry Testing"
        breadcrumb="Biochemistry"
        image="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1600&auto=format&fit=crop"
      />
      <BiochemistryTesting />
    </main>
  );
};

export default BiochemistryPage;
