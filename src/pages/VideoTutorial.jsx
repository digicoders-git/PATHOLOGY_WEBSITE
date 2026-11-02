import React, { useState, useEffect, useMemo } from "react";
import VideoTutorialHero from "../components/video-tutorial/VideoTutorialHero";
import VideoCategories from "../components/video-tutorial/VideoCategories";
import VideoSearchBar from "../components/video-tutorial/VideoSearchBar";
import FeaturedVideos from "../components/video-tutorial/FeaturedVideos";
import YouTubeSubscribeCTA from "../components/video-tutorial/YouTubeSubscribeCTA";
import VideoModal from "../components/video-tutorial/VideoModal";
import { getActiveTutorialVideos } from "../apis/tutorialService";

const VideoTutorial = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const loadTutorials = async () => {
      try {
        setLoading(true);
        const data = await getActiveTutorialVideos();
        // Strict dynamic data only: if backend is empty or off, set empty array []
        if (Array.isArray(data) && data.length > 0) {
          setVideos(data);
        } else {
          setVideos([]);
        }
      } catch (err) {
        console.warn("Backend not available, showing empty state:", err.message);
        setVideos([]);
      } finally {
        setLoading(false);
      }
    };

    loadTutorials();
  }, []);

  // Compute categories dynamically from ONLY real videos received from backend
  const dynamicCategories = useMemo(() => {
    if (!videos || videos.length === 0) return [];

    const catMap = new Map();
    videos.forEach((vid) => {
      if (vid.category && vid.category.trim()) {
        const cat = vid.category.trim();
        catMap.set(cat, (catMap.get(cat) || 0) + 1);
      }
    });

    return Array.from(catMap.entries()).map(([title, count]) => ({
      title,
      count,
    }));
  }, [videos]);

  const filteredVideos = useMemo(() => {
    if (!videos || videos.length === 0) return [];

    return videos.filter((video) => {
      const matchCat =
        activeCategory === "All" ||
        (video.category &&
          video.category.trim().toLowerCase() ===
            activeCategory.trim().toLowerCase());

      const query = searchQuery.trim().toLowerCase();
      const matchQuery =
        !query ||
        (video.title && video.title.toLowerCase().includes(query)) ||
        (video.category && video.category.toLowerCase().includes(query)) ||
        (video.description && video.description.toLowerCase().includes(query));

      return matchCat && matchQuery;
    });
  }, [videos, activeCategory, searchQuery]);

  const handleResetFilters = () => {
    setActiveCategory("All");
    setSearchQuery("");
  };

  return (
    <main className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <VideoTutorialHero />

      {/* 2. Category Filter Cards (Only shown if categories exist in backend) */}
      {dynamicCategories.length > 0 && (
        <VideoCategories
          categories={dynamicCategories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
      )}

      {/* 3. Search Bar (Only shown if videos exist in backend) */}
      {videos.length > 0 && (
        <VideoSearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearchSubmit={() => {}}
        />
      )}

      {/* 4. Featured Video Tutorials Grid (Purely from Backend) */}
      <FeaturedVideos
        videos={filteredVideos}
        loading={loading}
        onSelectVideo={(video) => setSelectedVideo(video)}
        onResetFilters={handleResetFilters}
      />

      {/* 5. Stay Updated YouTube CTA Banner */}
      <YouTubeSubscribeCTA />

      {/* 6. Video Player Modal Popup */}
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </main>
  );
};

export default VideoTutorial;
