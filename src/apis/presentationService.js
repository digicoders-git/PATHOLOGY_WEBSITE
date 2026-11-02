import api from "./index";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://api.laboindia.com";

export const resolvePresentationImageUrl = (banner) => {
  if (!banner) return "";

  let path = "";
  if (typeof banner === "string") {
    path = banner.trim();
  } else if (banner && typeof banner === "object") {
    path = (banner.cloudinary || banner.local || "").trim();
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

    // Local static asset in public folder (e.g. /assets/presentation/...)
    if (path.startsWith("/assets/") || path.startsWith("assets/")) {
      return path.startsWith("/") ? path : `/${path}`;
    }

    // Uploaded to backend (e.g. uploads/presentations/...)
    const cleanPath = path.replace(/^\/+/, "");
    const base = API_BASE_URL.replace(/\/+$/, "");
    return `${base}/${cleanPath}`;
  }

  return "";
};

// Pure Dynamic API Call - NO DUMMY DATA
export const getActivePresentations = async (params = {}) => {
  try {
    const res = await api.get("/presentations/active", { params });
    if (res.data && res.data.success && Array.isArray(res.data.data)) {
      return res.data.data;
    }
    return [];
  } catch (err) {
    return [];
  }
};

export const getPresentationCategories = async () => {
  try {
    const res = await api.get("/presentations/categories");
    if (res.data && res.data.success && Array.isArray(res.data.data)) {
      return res.data.data;
    }
    return [];
  } catch (err) {
    return [];
  }
};
