// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    extends: [
        ['github:meistrari/tela/packages/build#main', { auth: process.env.GITHUB_PAT, install: true }],
    ],
})
