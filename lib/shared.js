module.exports = {
    plugins: ['@typescript-eslint', 'react', 'import', 'sonarjs', 'no-loops', 'promise', 'react-hooks', 'jest', 'jsx-a11y'],
    parser: '@typescript-eslint/parser',
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
        },
        'import/resolver': {
            node: {
                extensions: ['.mjs', '.js', '.json', '.ts', '.d.ts'],
            },
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
        'indent': ['error', 2],
        'no-constant-condition': 'error',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-empty': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-semi': 'error',
        'no-func-assign': 'error',
        'no-unreachable': 'error',
        'require-atomic-updates': 'error',
        'eqeqeq': ['error', 'always'],
        'array-bracket-spacing': ['error', 'always'],
        'prefer-const': 'error'
    },
}
