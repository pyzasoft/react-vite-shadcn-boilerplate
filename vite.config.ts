import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react", // Sets the JSX import source to Emotion
    }),
    svgr({
      svgrOptions: {
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        svgoConfig: {
          floatPrecision: 2,
        },
      },
      // ...
      include: "**/*.svg",
    }),
  ],
  resolve: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }],
  },
});
