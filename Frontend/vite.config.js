/* eslint-disable no-unused-vars */
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react"; // or your framework plugin
import process from "node:process";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    server: {
      host: "0.0.0.0", // Allow external connections
      port: 5173, // or your preferred port
      strictPort: true,
      cors: true,
      proxy: {
        "/api": {
          target: "http://localhost:8000", // Direct backend URL
          changeOrigin: true,
          secure: false,
          ws: true, // Enable WebSocket proxying if needed
          rewrite: (path) => path.replace(/^\/api/, ""), // Remove /api prefix when forwarding
          configure: (proxy, _options) => {
            proxy.on("error", (err, _req, _res) => {
              console.log("proxy error", err);
            });
            proxy.on("proxyReq", (proxyReq, req, _res) => {
              console.log(
                "Sending Request to the Target:",
                req.method,
                req.url
              );
            });
            proxy.on("proxyRes", (proxyRes, req, _res) => {
              console.log(
                "Received Response from the Target:",
                proxyRes.statusCode,
                req.url
              );
            });
          },
        },
      },
    },
    preview: {
      host: "0.0.0.0",
      port: 5173,
      strictPort: true,
      cors: true,
    },
  };
});
