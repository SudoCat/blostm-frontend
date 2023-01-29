import { defineConfig } from 'astro/config';

// https://astro.build/config
import lit from "@astrojs/lit";

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [lit(), solidJs()]
});