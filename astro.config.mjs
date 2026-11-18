import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://informator.szkolamistrzow.info",
  base: "/",
  output: "static",
  integrations: [sitemap({ filter: (page) => !page.endsWith(".ics") && !["/hbsc-2026", "/sses-2026"].some((hidden) => new URL(page).pathname.replace(/\/$/, "").endsWith(hidden)) })],
  redirects: {
    "/dzialania-szkoly": "/aktualnosci",
    "/dzialania-szkoly/higiena-cyfrowa": "/aktualnosci/higiena-cyfrowa",
    "/nasze-dzialania": "/aktualnosci",
    "/nasze-dzialania/higiena-cyfrowa": "/aktualnosci/higiena-cyfrowa",
    "/zpe": "/aktualnosci/zpe-pierwsze-logowanie",
  },
});
