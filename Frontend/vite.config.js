import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy /guidance requests to your backend server
      "/guidance": {
        target: "http://localhost:8000", // Your backend server address
        changeOrigin: true, // Needed for virtual hosted sites
        // secure: false, // Uncomment if your backend is not using HTTPS
        // rewrite: (path) => path.replace(/^\/api/, ''), // Optional: if you want to remove /api prefix
      },
      // Proxy /report requests to your backend server
      "/report": {
        target: "http://localhost:8000", // Your backend server address
        changeOrigin: true,
        // secure: false,
      },
    },
  },
});
