/** @type {import("prettier").Config} */
const prettierConfig = {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  arrowParens: 'always',
  bracketSpacing: true,
  semi: false,
  importOrder: ['^node:(.*)$', '<THIRD_PARTY_MODULES>', '^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}

export default prettierConfig
