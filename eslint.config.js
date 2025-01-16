import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  {
    rules: {
      // 'react/react-in-jsx-scope': 'off',
    },
  },
  {
    parseObtions:{
      ecmaVersion:'latest',
      sourceType:'module',
      project:'./tsconfig.json'
    }
  },
  {
    plugins:['react']
  },
  
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];