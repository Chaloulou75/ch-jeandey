// https://nuxt.com/docs/api/configuration/nuxt-config
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

  modules: ["@nuxtjs/seo"],

  site: {
    url: "https://www.charles-jeandey.com",
    name: "Charles Jeandey",
    description: "Développeur web, Laravel,Vue js, Tailwind css",
    defaultLocale: "fr", // not needed if you have @nuxtjs/i18n installed
  },
});
