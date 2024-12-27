import tseslint from '@typescript-eslint/eslint-plugin'
import react from 'eslint-plugin-react'

export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
  settings: { 
    react: { 
      version: '18.3' 
    } 
  },
  plugins: {
    react,
  },
  rules: {
    ...tseslint.configs.recommendedTypeChecked.rules,
    ...tseslint.configs.stylisticTypeChecked.rules,
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
