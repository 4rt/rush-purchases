module.exports = {
    extends: [
        'plugin:react/recommended',
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    env: {
        browser: true
    },
    rules: {
        'react/prop-types': 0,
        quotes: ['error', 'single']
    },
    settings: {
        react: {
            version: 'detect'

        }
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint'
    ]
};