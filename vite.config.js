import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Wether-App/", // Correct base path for GitHub Pages
  plugins: [react()],
  build: {
    outDir: "build", // Ensure this matches your deploy script
  },
});
