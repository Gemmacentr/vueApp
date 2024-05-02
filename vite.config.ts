import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/Gemmacentr/vueApp/",
  plugins: [vue()],
  resolve: {
    alias: [],
  },
});
// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      "/assets": {
        target: "https://github.com/Gemmacentr/vueApp",
        changeOrigin: true,
        pathRewrite: {
          "^/assets": "/assets",
        },
      },
    },
  },
};
