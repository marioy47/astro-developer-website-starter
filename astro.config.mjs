// astro.config.mjs

import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import pagefind from "astro-pagefind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://marioyepes.com/",
	build: {
		format: "directory",
	},
	integrations: [tailwind(), pagefind(), sitemap()],
	markdown: {
		shikiConfig: {
			// List of themes here: https://shiki.style/themes
			themes: {
				light: "rose-pine-dawn",
				dark: "rose-pine-moon",
			},
		},
	},
});
