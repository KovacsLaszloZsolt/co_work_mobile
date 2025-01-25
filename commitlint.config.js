module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 72], // Enforce a max length for commit headers
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'chore',
        'style',
        'refactor',
        'ci',
        'test',
        'revert',
        'perf',
        'vercel',
      ],
    ],
    'subject-case': [0], // Disable case-check for subject
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^CW-(\d+) (\w+): (.+)$/,
      headerCorrespondence: ['task', 'type', 'subject'], // Map parts of the header
    },
  },
};
