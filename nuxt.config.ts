// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: [
    "~/assets/css/tailwind.css", // first
    "~/assets/scss/main.scss", // then your custom SCSS
  ],

  devtools: { enabled: true },
});
