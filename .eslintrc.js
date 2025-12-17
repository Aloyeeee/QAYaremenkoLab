module.exports = {
    root: true,
    parser: "@babel/eslint-parser",
    parserOptions: {
      requireConfigFile: false, // не потрібен babel.config.js
      ecmaVersion: 2021,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true, // включаємо JSX
      },
    },
    env: {
      browser: true,
      es2021: true,
      node: true,
      jest: true, // додаємо Jest глобальні змінні (describe, test, expect)
    },
    plugins: ["react"],
    extends: ["eslint:recommended", "plugin:react/recommended"],
    rules: {
      "react/react-in-jsx-scope": "off", // React 17+ не потребує імпорту React
      "react/prop-types": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  };
  