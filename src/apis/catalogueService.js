import api from "./index";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export const resolveCatalogueImageUrl = (cover) => {
  if (!cover) return "";

  let path = "";
  if (typeof cover === "string") {
    path = cover.trim();
  } else if (cover && typeof cover === "object") {
    path = (cover.cloudinary || cover.local || "").trim();
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

    // Local static asset in public folder (e.g. /assets/catalogue/...)
    if (path.startsWith("/assets/") || path.startsWith("assets/")) {
      return path.startsWith("/") ? path : `/${path}`;
    }

    // Uploaded to backend (e.g. uploads/catalogues/...)
    const cleanPath = path.replace(/^\/+/, "");
    const base = API_BASE_URL.replace(/\/+$/, "");
    return `${base}/${cleanPath}`;
  }

  return "";
};

// Pure Dynamic API Call - NO DUMMY DATA
export const getActiveCatalogues = async (params = {}) => {
  try {
    const res = await api.get("/catalogues/active", { params });
    if (res.data && res.data.success) {
      if (Array.isArray(res.data.catalogues)) {
        return res.data.catalogues;
      }
      if (Array.isArray(res.data.data)) {
        return res.data.data;
      }
    }
    return [];
  } catch (err) {
    console.warn("Could not fetch active catalogues:", err.message);
    return [];
  }
};
