// https://nuxt.com/docs/api/configuration/nuxt-config
import presetUno from '@unocss/preset-uno'

export default defineNuxtConfig({
  ssr: true,
	modules: [
    '@nuxtjs/supabase',
    '@element-plus/nuxt',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@pinia/nuxt'
  ],
  elementPlus: {},
	app: {
    head: {
      htmlAttrs: { lang: "en" },
    },
  },
  css: ["@/assets/styles/main.scss"],
  unocss: {
    uno: true,
    icons: true,
    presets: [
        presetUno(),
    ]
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
})
