import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  esbuild: {
    // Correct usage of the `esbuild` loader for .js files with JSX
    loader: "jsx", // Treat both .js and .jsx as JSX
    include: /src\/.*\.[jt]sx?$/, // Apply to JavaScript and TypeScript files in src folder
    exclude: /node_modules/, // Exclude node_modules by default
  },
});
