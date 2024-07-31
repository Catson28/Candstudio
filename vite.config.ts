import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    svgr(), // Adiciona o plugin svgr aqui
  ],
  build: {
    sourcemap: false, // Desativa os source maps
  },
  css: {
    devSourcemap: false, // Desativa os source maps para CSS no modo de desenvolvimento
  },
  base: "/Candstudio",
});
