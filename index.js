/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  plugins: ["@stylistic", "import", "tailwindcss", "unused-imports"],
  rules: {
    "no-var": 2,
    "no-console": 1,
    "no-else-return": [2, { allowElseIf: false }],
    "no-use-before-define": 0,

    // Import rules
    "no-duplicate-imports": 1,
    
    "import/no-unresolved": 0,
    "import/no-unused-modules": [1, { unusedExports: true }],
    "import/no-deprecated": 1,
    "import/no-duplicates": 2,
    "import/no-useless-path-segments": 1,

    // This rule may cause problems with a monorepo setup, turn this off if it does lol
    "import/no-relative-packages": 1,

    "import/newline-after-import": 1,
    "unused-imports/no-unused-imports": 1,

    // TypeScript rules
    "@typescript-eslint/no-namespace": 0,
    "@typescript-eslint/no-unused-vars": 1,
    "@typescript-eslint/member-delimiter-style": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/consistent-type-imports": [
      2,
      { prefer: "type-imports" }
    ],

    // Code quality rules
    "@stylistic/no-confusing-arrow": [2, { onlyOneSimpleParam: true }],
    "@stylistic/no-floating-decimal": 2,
    "@stylistic/new-parens": [2, "always"],
    "@stylistic/arrow-spacing": 1,
    "@stylistic/arrow-parens": [2, "always"],
    "@stylistic/array-element-newline": [2, "consistent"],
    "@stylistic/function-call-spacing": [2, "never"],
    "@stylistic/keyword-spacing": [2, { before: true }],
    "@stylistic/space-before-blocks": 2,
    "@stylistic/object-curly-spacing": [2, "always"],
    "@stylistic/object-curly-newline": [
      2,
      {
        minProperties: 8,
        consistent: true
      }
    ],
    "@stylistic/padding-line-between-statements": [
      2,
      {
        blankLine: "always",
        prev: "directive",
        next: "*"
      },
      {
        blankLine: "always",
        prev: ["multiline-const", "function"],
        next: ["const", "let", "block-like", "export", "return", "try"]
      },
      {
        blankLine: "always",
        prev: "block-like",
        next: "*"
      },
      {
        blankLine: "always",
        prev: "*",
        next: "try"
      }
    ]
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module"
  }
}
