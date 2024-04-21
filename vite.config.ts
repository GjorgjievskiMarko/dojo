import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets/index.ts"),
      "@utils": path.resolve(__dirname, "./src/utils/index.ts"),
      "@styles": path.resolve(__dirname, "./src/styles/index.ts"),
      "@types": path.resolve(__dirname, "./src/types/index.ts"),
    },
    extensions: [".mdx", ".js", ".svelte", ".tsx", ".ts"],
  },
  plugins: [react(), libInjectCss(), dts({ include: ["lib"] })],
  optimizeDeps: {
    include: ["react/jsx-runtime"],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "output"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    //Generates sourcemaps for the built files,
    //aiding in debugging.
    sourcemap: true,
    //Clears the output directory before building.
    emptyOutDir: true,
  },
});
