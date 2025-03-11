const isProduction = process.env.NODE_ENV === 'development';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@trandaison/nuxt-3-auth',
  ],
  devtools: { enabled: !isProduction },
  srcDir: 'src',
  compatibilityDate: '2024-11-01',
  auth: {
    debug: !isProduction,
  },
  eslint: {
    checker: {
      lintOnStart: !isProduction,
      fix: !isProduction,
    },
    config: {
      stylistic: true,
    },
  },
  pinia: {
    storesDirs: [
      './stores/**',
    ],
  },
});
