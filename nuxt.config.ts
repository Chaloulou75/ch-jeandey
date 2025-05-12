// https://nuxt.com/docs/api/configuration/nuxt-config

import path from "path";

export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    css: ["~/assets/css/main.css"],

    postcss: {
        plugins: {
            "@tailwindcss/postcss": {},
            autoprefixer: {},
        },
    },

    modules: ["@nuxtjs/seo", "nuxt-gtag"],

    site: {
        url: "https://www.charles-jeandey.com",
        name: "Charles Jeandey, développeur web",
        description:
            "Développeur web, Laravel, Vue js, Tailwind css, Inertia js, Nuxt js. full stack web developper.",
        defaultLocale: "fr",
    },

    gtag: {
        id: "G-ZHPSXKGYP6",
    },
});
