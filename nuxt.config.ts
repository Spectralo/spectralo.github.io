// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/google-fonts', "@nuxt/image"],
  googleFonts: {
    families: {
      Inconsolata: [400, 700, 900],
    },
  },
  app: {
    buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
  }
})