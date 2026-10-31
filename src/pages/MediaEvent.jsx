import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import MediaEventHero from "../components/media-event/MediaEventHero";
import MediaEventTabs from "../components/media-event/MediaEventTabs";
import MediaEventCards, { MEDIA_CARDS_DATA } from "../components/media-event/MediaEventCards";
import NewsletterCTA from "../components/media-event/NewsletterCTA";
import MediaEventModal from "../components/media-event/MediaEventModal";

const MediaEvent = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white min-h-screen">
      <Toaster position="top-right" />

      {/* 1. Hero Section with DSLR Camera, Mic, Calendar, Press Release */}
      <MediaEventHero />

      {/* 2. Category Filter Tabs */}
      <MediaEventTabs
        activeTab={activeTab}
        onSelectTab={setActiveTab}
      />

      {/* 3. 2x2 Category Cards Grid */}
      <MediaEventCards
        cards={MEDIA_CARDS_DATA}
        activeTab={activeTab}
        onSelectCard={(card) => setSelectedCard(card)}
      />

      {/* 4. Newsletter Subscription Banner */}
      <NewsletterCTA />

      {/* 5. Interactive Detail Modal (Clean Light UI, No Black Background, No Download Button) */}
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
