// https://nuxt.com/docs/api/configuration/nuxt-config
// import { defineNuxtConfig } from 'nuxt'
export default defineNuxtConfig({
    // ssr: false,
    css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
    build: {
        transpile: ['vuetify'],
    },
})