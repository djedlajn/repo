module.export = {
  skipCI: false,
  hooks: {
    'pre-commit': 'lint-staged && npm run validate',
  },
};
