import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  esbuild: {
    loader: "jsx", // Use JSX loader for .js files
    include: /\.(js|jsx)$/, // Apply to both .js and .jsx files
    exclude: /node_modules/,
  },
});
