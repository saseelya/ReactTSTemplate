/* eslint-disable prettier/prettier */
// @ts-check
/** @type {import('eslint').Linter.Config} */

const config = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2022,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		browser: true,
		node: true,
		jest: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	plugins: ['simple-import-sort', 'prettier', 'jsx-a11y', 'unused-imports'],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
		'prettier',
		'plugin:prettier/recommended',
		'plugin:testing-library/react',
		'plugin:jest-dom/recommended',
	],
	ignorePatterns: ['node_modules', 'build'],
	rules: {
		quotes: [2, 'single', { avoidEscape: true }],
		'simple-import-sort/imports': 'warn',
		'prettier/prettier': [
			'error',
			{
				jsxSingleQuote: true,
				printWidth: 120,
				semi: true,
				singleQuote: true,
				tabWidth: 4,
				trailingComma: 'all',
				useTabs: true,
			},
		],
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'no-console': ['warn'],
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': 'error',
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			extends: [
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
			],
			parserOptions: {
				project: ['./tsconfig.json'],
			},
		},
	],
};

module.exports = config;
