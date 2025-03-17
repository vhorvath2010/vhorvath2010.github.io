import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      external: process.platform !== "darwin" ? ["fsevents"] : [],
    },
  },
});
