import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import react from 'eslint-plugin-react';
import jest from 'eslint-plugin-jest';
import security from 'eslint-plugin-security';
import tseslint from 'typescript-eslint';

export default [
    {
        ignores: [
            'node_modules/**',
            'dist/**',
            'lib/**',
            'es/**',
            'build/**',
            'docs/**',
            '*.config.js'
        ]
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['**/*.js', '**/*.jsx'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2021
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        plugins: {
            react,
            jest,
            prettier,
            security
        },
        settings: {
            react: {
                version: 'detect'
            }
        },
        rules: {
            ...prettierConfig.rules,
            'no-const-assign': 'error',
            'no-var': 'error',
            'semi': 'error',
            'prefer-const': 'error',
            'react/prop-types': 'off',
            'react/no-unused-prop-types': 'off',
            'prettier/prettier': [
                'error',
                {
                    tabWidth: 4,
                    singleQuote: true,
                    trailingComma: 'none',
                    endOfLine: 'auto'
                }
            ],
            'security/detect-object-injection': 'warn',
            'security/detect-non-literal-regexp': 'warn',
            'security/detect-unsafe-regex': 'error'
        }
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2021
            },
            parser: tseslint.parser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        plugins: {
            react,
            jest,
            prettier,
            security,
            '@typescript-eslint': tseslint.plugin
        },
        settings: {
            react: {
                version: 'detect'
            }
        },
        rules: {
            ...prettierConfig.rules,
            'no-const-assign': 'error',
            'no-var': 'error',
            'semi': 'error',
            'prefer-const': 'error',
            'react/prop-types': 'off',
            'react/no-unused-prop-types': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
            'prettier/prettier': [
                'error',
                {
                    tabWidth: 4,
                    singleQuote: true,
                    trailingComma: 'none',
                    endOfLine: 'auto'
                }
            ],
            'security/detect-object-injection': 'warn',
            'security/detect-non-literal-regexp': 'warn',
            'security/detect-unsafe-regex': 'error'
        }
    },
    {
        files: ['**/*.test.js', '**/*.test.jsx', '**/*.test.ts', '**/*.test.tsx', '**/*.spec.js', '**/*.spec.jsx', '**/*.spec.ts', '**/*.spec.tsx'],
        ...jest.configs['flat/recommended'],
        rules: {
            ...jest.configs['flat/recommended'].rules,
            'jest/expect-expect': 'warn',
            'jest/no-disabled-tests': 'warn',
            'jest/no-focused-tests': 'error',
            'jest/no-identical-title': 'error',
            'jest/valid-expect': 'error'
        }
    }
];
