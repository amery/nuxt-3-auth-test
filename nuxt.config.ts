// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@trandaison/nuxt-3-auth',
  ],
  devtools: { enabled: true },
  srcDir: 'src',
  compatibilityDate: '2024-11-01',
  eslint: {
    checker: {
      lintOnStart: true,
      fix: true,
    },
    config: {
      stylistic: true,
    },
  },
});
