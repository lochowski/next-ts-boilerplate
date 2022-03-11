module.exports = {
  // Type check TypeScript files
  'src/**/*.(ts|tsx)': () => 'tsc --noEmit',

  // Lint then format TypeScript and JavaScript files
  'src/**/*.(ts|tsx|js)': filenames => [
    `eslint --fix ${filenames.join(' ')}`,
    `prettier --write ${filenames.join(' ')}`,
  ],
}
