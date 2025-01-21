# React + TypeScript + Vite

This template provides a minimal setup for getting **React** to work with **Vite** using **HMR** (Hot Module Replacement) and some basic **ESLint** rules.

### Official Plugins

Currently, two official plugins are available for React with Vite:

1. **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)**
   Uses [Babel](https://babeljs.io/) for Fast Refresh.

2. **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)**
   Uses [SWC](https://swc.rs/) for Fast Refresh.

### Expanding ESLint Configuration

For production applications, it's recommended to update your ESLint configuration to enable type-aware linting rules.

#### 1. Configure `parserOptions`

Update the top-level `parserOptions` property in your ESLint config:

```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});

2. Use Type-Aware ESLint Configs
Replace tseslint.configs.recommended with either tseslint.configs.recommendedTypeChecked or tseslint.configs.strictTypeChecked.
Optionally, add ...tseslint.configs.stylisticTypeChecked for additional stylistic checks.
3. Install eslint-plugin-react
To enable React-specific linting rules, install the eslint-plugin-react:

bash
Copy
Edit
npm install eslint-plugin-react --save-dev
4. Update ESLint Config
In your ESLint config file (eslint.config.js), update it as follows:

js
Copy
Edit
import react from 'eslint-plugin-react';

export default tseslint.config({
  settings: { react: { version: '18.3' } },
  plugins: {
    react,
  },
  rules: {
    // Enable recommended React rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
