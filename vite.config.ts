import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import postcssPresetEnv from "postcss-preset-env";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Calculator-app/",
  plugins: [vue(), Components({ dts: true })],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/css/style.scss";`,
      },
    },
    postcss: {
      plugins: [postcssPresetEnv],
    },
  },
});
