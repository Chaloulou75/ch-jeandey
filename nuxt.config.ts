// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
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
        name: "Charles Jeandey - Développeur Web Full Stack",
        description:
            "Charles Jeandey, développeur web full stack spécialisé en Laravel, Vue.js, Tailwind CSS, Inertia.js et Nuxt.js. Création de sites web et applications sur mesure.",
        defaultLocale: "fr",
    },

    app: {
        pageTransition: { name: "page", mode: "out-in" },
        head: {
            htmlAttrs: { lang: "fr" },
            link: [
                { rel: "canonical", href: "https://www.charles-jeandey.com" },
            ],
        },
    },

    gtag: {
        id: "G-ZHPSXKGYP6",
    },
});
