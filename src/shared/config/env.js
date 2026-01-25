const raw = import.meta.env && import.meta.env.VITE_API_BASE_URL ? String(import.meta.env.VITE_API_BASE_URL) : "https://taxsense-backend.onrender.com";
export const API_BASE_URL = raw.replace(/\/+$/, "");
export const apiUrl = (path) => `${API_BASE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
