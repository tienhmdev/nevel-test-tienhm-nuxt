// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ['vue3-carousel-nuxt'],
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no',
        },
    },
})
