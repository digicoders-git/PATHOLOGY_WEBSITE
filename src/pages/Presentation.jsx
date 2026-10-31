import React, { useState, useEffect, useMemo } from "react";
import { Toaster } from "react-hot-toast";
import PresentationHero from "../components/presentation/PresentationHero";
import PresentationCategories from "../components/presentation/PresentationCategories";
import PresentationSearchBar from "../components/presentation/PresentationSearchBar";
import PresentationCards, { PRESENTATIONS_DATA } from "../components/presentation/PresentationCards";
import DiscoverCTA from "../components/presentation/DiscoverCTA";
import PresentationModal from "../components/presentation/PresentationModal";

const Presentation = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPresentation, setSelectedPresentation] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPresentations = useMemo(() => {
    return PRESENTATIONS_DATA.filter((item) => {
      const matchCat =
        activeCategory === "All" ||
        item.category.toLowerCase() === activeCategory.toLowerCase();

      const query = searchQuery.trim().toLowerCase();
      const matchQuery =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      return matchCat && matchQuery;
    });
  }, [activeCategory, searchQuery]);

  const handleResetFilters = () => {
    setActiveCategory("All");
    setSearchQuery("");
  };

  return (
    <main className="bg-white min-h-screen">
      <Toaster position="top-right" />

      {/* 1. Hero Section with Projector and Podium Graphic */}
      <PresentationHero />

      {/* 2. Category Tab Pills */}
      <PresentationCategories
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* 3. Search Bar */}
      <PresentationSearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearchSubmit={() => {}}
      />

      {/* 4. Presentation Cards Grid (3x3 / 3-per-row layout) */}
      <PresentationCards
        presentations={filteredPresentations}
        onViewPresentation={(item) => setSelectedPresentation(item)}
        onResetFilters={handleResetFilters}
      />

      {/* 5. Discover Labo India CTA Banner */}
      <DiscoverCTA />

      {/* 6. Interactive Presentation Slide Viewer Modal */}
      {selectedPresentation && (
        <PresentationModal
          presentation={selectedPresentation}
          onClose={() => setSelectedPresentation(null)}
        />
      )}
    </main>
  );
};

export default Presentation;
