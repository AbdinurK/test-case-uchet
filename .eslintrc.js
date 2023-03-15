module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: [],
  rules: {
    'vue/script-setup-uses-vars': 0,
    'no-console': 0,
    'no-useless-constructor': 0,
  },
}
