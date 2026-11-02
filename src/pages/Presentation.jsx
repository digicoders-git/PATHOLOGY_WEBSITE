import React, { useState, useEffect, useMemo } from "react";
import { Toaster } from "react-hot-toast";
import PresentationHero from "../components/presentation/PresentationHero";
import PresentationCategories from "../components/presentation/PresentationCategories";
import PresentationSearchBar from "../components/presentation/PresentationSearchBar";
import PresentationCards from "../components/presentation/PresentationCards";
import DiscoverCTA from "../components/presentation/DiscoverCTA";
import PresentationModal from "../components/presentation/PresentationModal";
import { getActivePresentations } from "../apis/presentationService";

const Presentation = () => {
  const [presentations, setPresentations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPresentation, setSelectedPresentation] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const loadPresentations = async () => {
      try {
        setLoading(true);
        const data = await getActivePresentations();
        if (Array.isArray(data) && data.length > 0) {
          setPresentations(data);
        } else {
          setPresentations([]);
        }
      } catch (err) {
        console.warn("Backend not available, showing empty state:", err.message);
        setPresentations([]);
      } finally {
        setLoading(false);
      }
    };

    loadPresentations();
  }, []);

  // Compute dynamic categories strictly from loaded presentations
  const dynamicCategories = useMemo(() => {
    if (!presentations || presentations.length === 0) return [];

    const catMap = new Map();
    presentations.forEach((p) => {
      if (p.category && p.category.trim()) {
        const cat = p.category.trim();
        catMap.set(cat, (catMap.get(cat) || 0) + 1);
      }
    });

    return Array.from(catMap.entries()).map(([title, count]) => ({
      title,
      count,
    }));
  }, [presentations]);

  const filteredPresentations = useMemo(() => {
    if (!presentations || presentations.length === 0) return [];

    return presentations.filter((item) => {
      const matchCat =
        activeCategory === "All" ||
        (item.category &&
          item.category.trim().toLowerCase() ===
            activeCategory.trim().toLowerCase());

      const query = searchQuery.trim().toLowerCase();
      const matchQuery =
        !query ||
        (item.title && item.title.toLowerCase().includes(query)) ||
        (item.description && item.description.toLowerCase().includes(query)) ||
        (item.category && item.category.toLowerCase().includes(query));

      return matchCat && matchQuery;
    });
  }, [presentations, activeCategory, searchQuery]);

  const handleResetFilters = () => {
    setActiveCategory("All");
    setSearchQuery("");
  };

  return (
    <main className="bg-white min-h-screen">
      <Toaster position="top-right" />

      {/* 1. Hero Section */}
      <PresentationHero />

      {/* 2. Category Tab Pills (Dynamic - only shown when categories exist) */}
      {dynamicCategories.length > 0 && (
        <PresentationCategories
          categories={dynamicCategories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
      )}

      {/* 3. Search Bar (Only shown when presentations exist) */}
      {presentations.length > 0 && (
        <PresentationSearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearchSubmit={() => {}}
        />
      )}

      {/* 4. Presentation Cards Grid (Purely from Backend) */}
      <PresentationCards
        presentations={filteredPresentations}
        loading={loading}
        onViewPresentation={(item) => setSelectedPresentation(item)}
        onResetFilters={handleResetFilters}
      />

      {/* 5. Discover Labo India CTA Banner */}
      <DiscoverCTA />

      {/* 6. Interactive Slide Viewer Modal */}
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
