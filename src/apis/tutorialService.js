import api from "./index";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export const resolveTutorialImageUrl = (thumbnail, youtubeId) => {
  if (!thumbnail && !youtubeId) return "";

  let path = "";
  if (typeof thumbnail === "string") {
    path = thumbnail.trim();
  } else if (thumbnail && typeof thumbnail === "object") {
    path = (thumbnail.cloudinary || thumbnail.local || "").trim();
  }

  if (path) {
    if (
      path.startsWith("http://") ||
      path.startsWith("https://") ||
      path.startsWith("data:") ||
      path.startsWith("blob:")
    ) {
      if (path.includes("pathology-backend-live.onrender.com")) {
        return path.replace(
          "https://pathology-backend-live.onrender.com",
          API_BASE_URL
        );
      }
      return path;
    }

    // Local static asset in public folder (e.g. /assets/video-tutorial/...)
    if (path.startsWith("/assets/") || path.startsWith("assets/")) {
      return path.startsWith("/") ? path : `/${path}`;
    }

    // Uploaded to backend (e.g. uploads/tutorials/...)
    const cleanPath = path.replace(/^\/+/, "");
    const base = API_BASE_URL.replace(/\/+$/, "");
    return `${base}/${cleanPath}`;
  }

  // Fallback to YouTube HQ thumbnail
  if (youtubeId) {
    return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  }

  return "";
};

// Pure Dynamic API Call - NO DUMMY DATA
export const getActiveTutorialVideos = async (params = {}) => {
  try {
    const res = await api.get("/tutorials/active", { params });
    if (res.data && res.data.success && Array.isArray(res.data.data)) {
      return res.data.data;
    }
    return [];
  } catch (err) {
    // If backend is off, return strictly empty array
    return [];
  }
};

export const getTutorialCategories = async () => {
  try {
    const res = await api.get("/tutorials/categories");
    if (res.data && res.data.success && Array.isArray(res.data.data)) {
      return res.data.data;
    }
    return [];
  } catch (err) {
    return [];
  }
};
