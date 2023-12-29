// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-primevue'
  ],
  ssr: false,
  app: {
    head: {
      title: "Jobroute",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'Tailored Applications for Dream Roles', name: 'crafting bespoke CVs and cover letters optimized for your dream job', content: 'No more generic applications! Our cutting-edge AI analyzes your uploaded resume and job description, crafting bespoke CVs and cover letters optimized for your dream job' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/jobroute.png' }],
    },
  },
  primevue: {
    usePrimeVue: true,
    importPT: { as: 'Tailwind', from: 'primevue/passthrough/tailwind' },
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
    components: {
      // include: '*',
      include: ['InputText', 'Button', 'Dialog','Toast','ProgressSpinner','Ripple'],
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
