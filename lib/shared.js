module.exports = {
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'prettier',
        'plugin:@typescript-eslint/recommended',
        'plugin:sonarjs/recommended',
        'plugin:promise/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
        'plugin:import/recommended',
        'plugin:prettier/recommended'
    ],
    plugins: ['@typescript-eslint','prettier'],
    env: {
        browser: true,
        es6: true,
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
        },
        'import/resolver': {
            node: {
                extensions: ['.mjs', '.js', '.json', '.ts', '.d.ts'],
            },
            typescript: {}
        },
        'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
        'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': ['error'],
        'react/jsx-props-no-spreading': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/destructuring-assignment': 'off',
        'linebreak-style': 'off',
        'global-require': 'off',
        'no-nested-ternary': 'off',
        'prefer-const': 'error',
        'sonarjs/no-nested-template-literals': 'off',
        'unicode-bom': 'off',
        'promise/always-return': 'off',
        'promise/catch-or-return': 'off'
    }
}
