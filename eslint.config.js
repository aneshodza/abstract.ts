// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      // Modify the no-unused-vars rule to ignore variables starting with '_'
      "@typescript-eslint/no-unused-vars": ["error", {
        "varsIgnorePattern": "^_",
      }],
    },
  },
);
