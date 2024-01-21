module.exports = {
  env: {
    node: true,
    commonjs: true,
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    // Your ESLint rules here
    "react/react-in-jsx-scope": "off",
    "no-useless-escape": "off",
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "no-unused-vars": "error",
    "one-var": ["error", "never"],
    "prefer-arrow-callback": "error",
    "object-curly-spacing": ["error", "always"],
    "react/jsx-indent": ["error", 2],
    "react/jsx-closing-bracket-location": ["error", "line-aligned"],
    "react/self-closing-comp": "error",
    "react/prop-types": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  ignorePatterns: ["node_modules/", "dist/"],
};
