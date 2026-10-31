import React, { useState, useEffect, useMemo } from "react";
import VideoTutorialHero from "../components/video-tutorial/VideoTutorialHero";
import VideoCategories from "../components/video-tutorial/VideoCategories";
import VideoSearchBar from "../components/video-tutorial/VideoSearchBar";
import FeaturedVideos, { TUTORIAL_VIDEOS } from "../components/video-tutorial/FeaturedVideos";
import YouTubeSubscribeCTA from "../components/video-tutorial/YouTubeSubscribeCTA";
import VideoModal from "../components/video-tutorial/VideoModal";

const VideoTutorial = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredVideos = useMemo(() => {
    return TUTORIAL_VIDEOS.filter((video) => {
      const matchCat =
        activeCategory === "All" ||
        video.category.toLowerCase() === activeCategory.toLowerCase();

      const query = searchQuery.trim().toLowerCase();
      const matchQuery =
        !query ||
        video.title.toLowerCase().includes(query) ||
        video.category.toLowerCase().includes(query);

      return matchCat && matchQuery;
    });
  }, [activeCategory, searchQuery]);

  const handleResetFilters = () => {
    setActiveCategory("All");
    setSearchQuery("");
  };

  return (
    <main className="bg-white min-h-screen">
      {/* 1. Hero Section with Laptop & YouTube 3D Graphics */}
      <VideoTutorialHero />

      {/* 2. Category Filter Cards */}
      <VideoCategories
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* 3. Search Bar */}
      <VideoSearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearchSubmit={() => {}}
      />

      {/* 4. Featured Video Tutorials Grid */}
      <FeaturedVideos
        videos={filteredVideos}
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
