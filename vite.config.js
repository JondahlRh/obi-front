import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    server: {
      port: env.VITE_PORT,
    },
    resolve: {
      alias: {
        utility: "/src/utility",
        layout: "/src/layout",
        pages: "/src/pages",
        "shared-comp": "/src/shared-comp",
        assets: "/src/assets",
      },
    },
  };
});
