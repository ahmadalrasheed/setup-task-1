module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "dot-notation": "off",
    "arrow-body-style": "off",
    "import/no-named-default": "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".tsx", ".ts"] }],
    camelcase: [2, { properties: "never" }],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "function-declaration",
      },
    ],
  },

  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["src", "node_modules"],
      },
    },
  },
};
