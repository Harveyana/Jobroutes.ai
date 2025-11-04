// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  modules: ['@nuxtjs/tailwindcss', 'nuxt-primevue', '@nuxt/image'],
  ssr: false,
  app: {
    head: {
      title: "Vyre Africa",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'crypto x fiat - instant, trustless, and borderless' },

      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/vyreLogo.png' }],
    },
  },
  primevue: {
    usePrimeVue: true,
    importPT: { as: 'Tailwind', from: 'primevue/passthrough/tailwind' },
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
    components: {
      // include: '*',
      include: ['Dialog','Toast','Ripple'],
    },
    directives: {
      include: '*'
    },
    composables: {
      include: '*'
  },
  options: {
    ripple: true,
    unstyled: true
  }
  }
})