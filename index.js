module.exports = {
    extends: ['./lib/shared'].map(require.resolve),
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.d.ts'],
            },
        },
    },
    rules: {
        'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    },
};
