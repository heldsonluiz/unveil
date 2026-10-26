import { defineConfig, globalIgnores } from "eslint/config";
import react from "@eslint-react/eslint-plugin";
import next from "@next/eslint-plugin-next";
import importX from "eslint-plugin-import-x";
import jsxA11y from "eslint-plugin-jsx-a11y-x";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  {
    files: ["**/*.{js,jsx,mjs,ts,tsx,mts,cts}"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    extends: [
      next.configs["core-web-vitals"],
      reactHooks.configs.flat.recommended,
    ],
    plugins: {
      "@eslint-react": react,
      "import-x": importX,
      "jsx-a11y-x": jsxA11y,
    },
    settings: { "react-x": { version: "detect" } },
    // Explicit equivalents for React, import and accessibility checks.
    rules: {
      "@eslint-react/no-direct-mutation-state": "error",
      "@eslint-react/no-missing-key": "error",
      "@eslint-react/jsx-no-children-prop": "error",
      "@eslint-react/jsx-no-comment-textnodes": "error",
      "@eslint-react/dom-no-dangerously-set-innerhtml-with-children": "error",
      "@eslint-react/dom-no-void-elements-with-children": "error",
      "import-x/no-anonymous-default-export": "warn",
      "jsx-a11y-x/alt-text": ["warn", { elements: ["img"], img: ["Image"] }],
      "jsx-a11y-x/aria-props": "warn",
      "jsx-a11y-x/aria-proptypes": "warn",
      "jsx-a11y-x/aria-unsupported-elements": "warn",
      "jsx-a11y-x/role-has-required-aria-props": "warn",
      "jsx-a11y-x/role-supports-aria-props": "warn",
    },
  },
  {
    files: ["**/*.{ts,tsx,mts,cts}"],
    extends: [tseslint.configs.recommended],
  },
]);
