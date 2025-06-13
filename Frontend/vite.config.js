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
    },
    preview: {
      host: "0.0.0.0",
      port: 5173,
      strictPort: true,
      cors: true,
    },
  };
});
