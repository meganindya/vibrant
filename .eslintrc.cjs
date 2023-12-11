module.exports = {
  root: true,
  env: {
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },

  // prettier-ignore
  extends: [
    'eslint:recommended',
    'prettier',
  ],

  plugins: ['prettier'],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // use `// prettier-ignore` before a line if prettier collapses into 1 line
    'array-element-newline': ['warn', 'consistent'],
    'camelcase': 'off',
    'comma-dangle': ['warn', 'only-multiline'],
    'max-len': [
      'warn',
      {
        code: 100,
        ignoreTrailingComments: true,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
    'no-use-before-define': ['error', 'nofunc'],
    'semi': ['warn', 'always'],

    'prettier/prettier': 'warn',
  },

  overrides: [
    {
      files: ['**/*.vue'],

      settings: {
        'prettier-vue': {
          SFCBlocks: {
            template: false,
            script: true,
            style: true,
          },
          usePrettierrc: true,
        },
      },

      // prettier-ignore
      extends: [
        'plugin:vue/essential',
        'plugin:prettier-vue/recommended',
      ],

      rules: {
        'vue/multi-word-component-names': 'off',
        'vue/no-multiple-template-root': 'off',
        'vue/no-unused-vars': [
          'warn',
          {
            ignorePattern: '^_',
          },
        ],
        'vue/no-v-for-template-key': 'off',
        'vue/no-v-for-template-key-on-child': 'error',

        'prettier/prettier': 'off',
        'prettier-vue/prettier': ['warn'],

        'semi': 'warn',
      },
    },
    {
      files: ['**/*.ts'],

      parserOptions: {
        parser: '@typescript-eslint/parser',
      },

      // prettier-ignore
      extends: [
        'plugin:@typescript-eslint/recommended'
      ],
      // prettier-ignore
      plugins: [
        '@typescript-eslint',
      ],

      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            argsIgnorePattern: '^_',
          },
        ],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', 'nofunc'],
      },
    },
    {
      files: ['**/*.spec.ts', '**/*.test.ts', '**/*.spec.js', '**/*.test.js'],

      globals: {
        suite: true,
        test: true,
        describe: true,
        it: true,
        expectTypeOf: true,
        assertType: true,
        expect: true,
        assert: true,
        vitest: true,
        vi: true,
        beforeAll: true,
        afterAll: true,
        beforeEach: true,
        afterEach: true,
      },
    },
  ],
};
