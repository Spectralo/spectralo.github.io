// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  router: {
    base: '/spectralo.github.io/'
  },
  devtools: { enabled: false },
  modules: ['@nuxtjs/google-fonts', "@nuxt/image"],
  googleFonts: {
    families: {
      Inconsolata: [400, 700, 900],
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  }

})