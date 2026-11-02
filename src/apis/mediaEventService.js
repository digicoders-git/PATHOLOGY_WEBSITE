import api from "./index";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export const resolveMediaImageUrl = (img) => {
  if (!img) return "";

  let path = "";
  if (typeof img === "string") {
    path = img.trim();
  } else if (img && typeof img === "object") {
    path = (img.cloudinary || img.local || "").trim();
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

    // Local static asset in public folder (e.g. /assets/media-event/...)
    if (path.startsWith("/assets/") || path.startsWith("assets/")) {
      return path.startsWith("/") ? path : `/${path}`;
    }

    // Uploaded to backend (e.g. uploads/media/...)
    const cleanPath = path.replace(/^\/+/, "");
    const base = API_BASE_URL.replace(/\/+$/, "");
    return `${base}/${cleanPath}`;
  }

  return "";
};

// Pure Dynamic API Call - NO DUMMY DATA
export const getActiveMediaEvents = async (params = {}) => {
  try {
    const res = await api.get("/media-events/active", { params });
    if (res.data && res.data.success) {
      if (Array.isArray(res.data.mediaEvents)) {
        return res.data.mediaEvents;
      }
      if (Array.isArray(res.data.data)) {
        return res.data.data;
      }
    }
    return [];
  } catch (err) {
    console.warn("Could not fetch active media events:", err.message);
    return [];
  }
};

export const getMediaEventCategories = async () => {
  try {
    const res = await api.get("/media-events/categories");
    if (res.data && res.data.success && Array.isArray(res.data.categories)) {
      return res.data.categories;
    }
    return [];
  } catch (err) {
    console.warn("Could not fetch media event categories:", err.message);
    return [];
  }
};
