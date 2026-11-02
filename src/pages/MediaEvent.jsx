import React, { useState, useEffect, useMemo } from "react";
import { Toaster } from "react-hot-toast";
import MediaEventHero from "../components/media-event/MediaEventHero";
import MediaEventTabs from "../components/media-event/MediaEventTabs";
import MediaEventCards from "../components/media-event/MediaEventCards";
import NewsletterCTA from "../components/media-event/NewsletterCTA";
import MediaEventModal from "../components/media-event/MediaEventModal";
import { getActiveMediaEvents } from "../apis/mediaEventService";

const MediaEvent = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const loadMediaEvents = async () => {
      try {
        setLoading(true);
        const data = await getActiveMediaEvents();
        if (Array.isArray(data) && data.length > 0) {
          setCards(data);
        } else {
          setCards([]);
        }
      } catch (err) {
        console.warn("Backend not available, showing empty state:", err.message);
        setCards([]);
      } finally {
        setLoading(false);
      }
    };

    loadMediaEvents();
  }, []);

  // Compute dynamic categories strictly from loaded cards
  const dynamicCategories = useMemo(() => {
    if (!cards || cards.length === 0) return [];
    const catMap = new Map();
    cards.forEach((c) => {
      if (c.category && c.category.trim()) {
        const cat = c.category.trim();
        const key = c.categoryKey || cat.toLowerCase().replace(/[^a-z0-9]/g, "");
        if (!catMap.has(key)) {
          catMap.set(key, { category: cat, categoryKey: key });
        }
      }
    });
    return Array.from(catMap.values());
  }, [cards]);

  return (
    <main className="bg-white min-h-screen">
      <Toaster position="top-right" />

      {/* 1. Hero Section */}
      <MediaEventHero />

      {/* 2. Category Filter Tabs (Dynamic) */}
      {dynamicCategories.length > 0 && (
        <MediaEventTabs
          categories={dynamicCategories}
          activeTab={activeTab}
          onSelectTab={setActiveTab}
        />
      )}

      {/* 3. 2x2 Category Cards Grid (Pure Dynamic from Backend) */}
      <MediaEventCards
        cards={cards}
        activeTab={activeTab}
        loading={loading}
        onSelectCard={(card) => setSelectedCard(card)}
      />

      {/* 4. Newsletter Subscription Banner */}
      <NewsletterCTA />

      {/* 5. Interactive Detail Modal */}
      {selectedCard && (
        <MediaEventModal
          card={selectedCard}
          onClose={() => setSelectedCard(null)}
        />
      )}
    </main>
  );
};

export default MediaEvent;
