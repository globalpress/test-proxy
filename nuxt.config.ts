// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    proxyUrl: process.env.PROXY_URL || 'http://localhost:3337/'
  },
})
