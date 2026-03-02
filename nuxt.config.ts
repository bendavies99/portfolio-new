import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],

  nitro: {
    preset: 'cloudflare-pages'
  },

  routeRules: {
    '/blog/**': { static: true, appLayout: 'blog' }
  },

  vite: {
    plugins: [
        //@ts-expect-error there's a bug with this not liking the plugin
        tailwindcss()
    ]
  },

  modules: ['shadcn-nuxt'],

  shadcn: {
    prefix: '',
    componentDir: '@/components/ui'
  }
})