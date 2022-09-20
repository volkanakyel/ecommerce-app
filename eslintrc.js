module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersions: 2018,
  },

  // add your custom rules here
  rules: {
    rules: { "vue/multi-word-component-names": "off" },
  },
};
