import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import CatalogueHero from "../components/catalogue/CatalogueHero";
import CatalogueCards from "../components/catalogue/CatalogueCards";
import CustomCatalogueCTA from "../components/catalogue/CustomCatalogueCTA";
import CatalogueModal from "../components/catalogue/CatalogueModal";
import { getActiveCatalogues } from "../apis/catalogueService";

const Catalogue = () => {
  const [catalogues, setCatalogues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCatalogue, setSelectedCatalogue] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const loadCatalogues = async () => {
      try {
        setLoading(true);
        const data = await getActiveCatalogues();
        if (Array.isArray(data) && data.length > 0) {
          setCatalogues(data);
        } else {
          setCatalogues([]);
        }
      } catch (err) {
        console.warn("Backend not available, showing empty state:", err.message);
        setCatalogues([]);
      } finally {
        setLoading(false);
      }
    };

    loadCatalogues();
  }, []);

  return (
    <main className="bg-white min-h-screen">
      <Toaster position="top-right" />

      {/* 1. Hero Section with 3D Catalogue Book Graphic */}
      <CatalogueHero />

      {/* 2. Catalogue Cards (Purely Dynamic from Backend) */}
      <CatalogueCards
        catalogues={catalogues}
        loading={loading}
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
