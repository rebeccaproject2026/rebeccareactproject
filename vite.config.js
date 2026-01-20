import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  assetsInclude: [
    /\.JPG$/i,
    /\.PNG$/i,
    /\.jpg$/i,
    /\.png$/i,
    /\.jpeg$/i,
    /\.JPEG$/i,
    /\.svg$/i,
    /\.SVG$/i,
    /\.gif$/i,
    /\.GIF$/i,
    /\.webp$/i,
    /\.WEBP$/i,
  ],
  server: {
    port: 3000,
    open: true,
  },
});
