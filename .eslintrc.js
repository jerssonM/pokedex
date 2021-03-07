module.exports = {
  root: true,

  extends: [
    "plugin:vue/essential",
    "plugin:prettier/recommended",
    "eslint:recommended",
  ],

  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
