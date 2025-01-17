import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

// export default eslintConfig;
// module.exports = {
//   extends: ['next/core-web-vitals'],
//   rules: {
//     '@typescript-eslint/no-unused-vars': 'off',
//     'react/no-unescaped-entities': 'off',
//   },
// };
module.exports = {
  files: ["**/*.{js,jsx,ts,tsx}"], // Lint these file types
  rules: {
    // Add your rules here
  },
};
module.exports = {
  rules: {
    // rules here
  },
};
// eslint.config.mjs
export default {
  rules: {
    // ESLint rules go here
  },
};
