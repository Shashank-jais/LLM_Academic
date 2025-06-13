/* eslint-disable no-unused-vars */
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import process from "node:process";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    server: {
      host: "0.0.0.0",
      port: 5173,
      strictPort: true,
      cors: true,
      allowedHosts: ["trueyoucareers.com", "localhost", "127.0.0.1", "0.0.0.0"],
      proxy: {
        "/api": {
          target: "https://api.trueyoucareers.com",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
          secure: true,
        },
      },
    },
    preview: {
      host: "0.0.0.0",
      port: 5173,
      strictPort: true,
      cors: true,
      allowedHosts: ["trueyoucareers.com", "localhost", "127.0.0.1", "0.0.0.0"],
    },
    define: {
      __API_URL__: JSON.stringify(env.VITE_API_URL),
    },
  };
});
