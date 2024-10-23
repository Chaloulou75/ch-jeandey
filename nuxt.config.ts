// https://nuxt.com/docs/api/configuration/nuxt-config

import path from "path";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxtjs/seo", "@primevue/nuxt-module", "nuxt-gtag"],

  site: {
    url: "https://www.charles-jeandey.com",
    name: "Charles Jeandey",
    description:
      "Développeur web, Laravel, Vue js, Tailwind css, Inertia js, Nuxt js. full stack web developper.",
    defaultLocale: "fr",
  },

  gtag: {
    id: "G-QBHLV3XVM5",
  },

  primevue: {
    options: {
      unstyled: true,
    },
    importPT: { from: path.resolve(__dirname, "./presets/lara/") }, //import and apply preset
  },
});
