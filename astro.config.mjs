// astro.config.mjs

import tailwind from "@astrojs/tailwind";
import pagefind from "astro-pagefind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://marioyepes.com/",
	build: {
		format: "directory",
	},
	integrations: [tailwind(), pagefind()],
});
