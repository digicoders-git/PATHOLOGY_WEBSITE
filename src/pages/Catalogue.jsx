import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import CatalogueHero from "../components/catalogue/CatalogueHero";
import CatalogueCards, { CATALOGUES_DATA } from "../components/catalogue/CatalogueCards";
import CustomCatalogueCTA from "../components/catalogue/CustomCatalogueCTA";
import CatalogueModal from "../components/catalogue/CatalogueModal";

const Catalogue = () => {
  const [selectedCatalogue, setSelectedCatalogue] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white min-h-screen">
      <Toaster position="top-right" />

      {/* 1. Hero Section with 3D Catalogue Book Graphic */}
      <CatalogueHero />

      {/* 2. Catalogue Cards (6 Cards Grid) */}
      <CatalogueCards
        catalogues={CATALOGUES_DATA}
        onViewOnline={(item) => setSelectedCatalogue(item)}
      />

      {/* 3. Need a Custom Catalogue Banner CTA */}
      <CustomCatalogueCTA />

      {/* 4. Interactive Online Catalogue Viewer Modal */}
      {selectedCatalogue && (
        <CatalogueModal
          catalogue={selectedCatalogue}
          onClose={() => setSelectedCatalogue(null)}
        />
      )}
    </main>
  );
};

export default Catalogue;
