module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/strongly-recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    "vue/html-self-closing": ["error", {
      "html": {
      "void": "always",
      }
    }],
  }
}
