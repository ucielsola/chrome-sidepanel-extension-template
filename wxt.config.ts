import path from "path";
import { defineConfig } from "wxt";
import tailwindcss from "@tailwindcss/vite";

import packageJson from "./package.json";

export default defineConfig({
  srcDir: "src",
  publicDir: "src/public",
  modules: ["@wxt-dev/module-svelte"],
  vite: () => ({
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        $lib: path.resolve(__dirname, "./src/lib"),
      },
    },
  }),
  manifest: {
    name: "Chrome Sidepanel Extension Template",
    description: packageJson.description,
    version: packageJson.version,
    permissions: ["storage", "sidePanel"],
    action: {
      default_title: "Chrome Sidepanel Extension Template",
    },
    side_panel: {},
  },
});
