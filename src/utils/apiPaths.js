export const BASE_URL =
  process.env.REACT_APP_BASE_URL ||
  (process.env.NODE_ENV === "production"
    ? "https://resume-builder-backend-flame.vercel.app"
    : "http://localhost:4000");
console.log("ENV variable", REACT_APP_BASE_URL);

// routes used for frontend
export const API_PATHS = {
  AUTH: {
    REGISTER: "/api/auth/register",
    LOGIN: "/api/auth/login",
    GET_PROFILE: "/api/auth/profile",
  },
  RESUME: {
    CREATE: "/api/resume",
    GET_ALL: "/api/resume",
    GET_BY_ID: (id) => `/api/resume/${id}`,
    UPDATE: (id) => `/api/resume/${id}`,
    DELETE: (id) => `/api/resume/${id}`,
    UPLOAD_IMAGES: (id) => `/api/resume/${id}/upload-images`,
  },
  image: {
    UPLOAD_IMAGE: "/api/auth/upload-image",
  },
};
