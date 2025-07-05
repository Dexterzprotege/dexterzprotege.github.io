const options = {
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  trailingComma: "es5",
  printWidth: 80,
  arrowParens: "avoid",
  endOfLine: "lf",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  jsxSingleQuote: true,
  htmlWhitespaceSensitivity: "css",
  insertPragma: false,
  proseWrap: "always",
  quoteProps: "as-needed",
  requirePragma: false,
  overrides: [
    {
      files: "*.{js,jsx,ts,tsx}",
      options: {
        parser: "typescript",
      },
    },
  ],
};

module.exports = options;
