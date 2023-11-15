// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    // SCSS file in the project
    "@/assets/css/main.scss",
    '@/assets/css/layout.css',
  ],
  modules: [
    '@element-plus/nuxt'
  ],
  runtimeConfig: {
    public: {
      TOKEN: process.env.TOKEN || "default_token",
    },
  },
  devServer: {
    host: "0.0.0.0",
    port: 3000
  }
})
