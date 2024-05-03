import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/assets": {
        target: "https://github.com/Gemmacentr/vueApp",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/assets/, ""),
      },
    },
  },
});
