# Playground FlyRank Assignment

This repository is built for an assignment and to learn accessible component patterns in React + TypeScript.

## Purpose

- This project contains a hand-built modal dialog, tabs, and disclosure component.
- It is meant to practice W3C ARIA Authoring Practices, keyboard interaction, and focus management.
- It also includes a small shadcn/ui reference setup to compare against the hand-built components.

## What is included

- `playground/components/Modal.tsx` - custom modal dialog implementation
- `playground/components/Tabs.tsx` - custom tabs implementation
- `playground/components/Disclosure.tsx` - custom disclosure implementation
- `playground/NOTES.md` - comparison notes between the hand-built version and shadcn/ui
- `src/components/ui/` - generated shadcn/ui dialog and tabs components for reference

## Notes

This repo is not intended as a production app. It is a learning exercise for building accessible UI components by hand and seeing how shadcn/ui structures similar components.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
