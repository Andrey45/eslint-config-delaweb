ESLint configuration for react projects, using Typescript.

## Motivation

A single config for all React projects using TypeScript, which can be quickly connected to the project, in place of local configuration files in each project, which causes a discrepancy in styling or syntax checking on projects.

## Description

This configuration uses configurations from [airbnb](https://www.npmjs.com/package/eslint-config-airbnb) for React hooks and [TypeScript](https://www.npmjs.com/package/eslint-config-airbnb-typescript).

Plugins are also used:
1) [eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs) - to identify duplicated code that should be avoided;
2) [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) - to support the ES2015 + (ES6+) import / export syntax and prevent problems with incorrect spelling of file paths and import names.
3) [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise) - plugin that will help you write the right promises and protect you from typical errors when working with them.
4) [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) - will make you write HTML that will meet accessibility standards much better. Your projects will become much more convenient for people with disabilities.
5) [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier) - plugin that connects prettier, a code formatting tool that aims to use hard-coded rules for the design of programs.

## Install

1) First, we install the package and its dependencies

```bash
yarn add eslint-config-delaweb@^2.0.0 --dev
```
```bash
yarn add @typescript-eslint/eslint-plugin@^4.29.3 --dev
```
```bash
yarn add @typescript-eslint/parser@^4.29.3 --dev
```
```bash
yarn add eslint@^7.32.0" --dev
```

2) Adding the configuration to the <b>extends</b> of your configuration file

```js
module.exports = {
    extends: ['delaweb']
}
```

3) If you have the path function configured in tsconfig, you must specify the path to the configuration file in which the function was described

```js
module.exports = {
    extends: ['delaweb'],
    parserOptions: {
        project: './tsconfig.paths.json',
    }
}
```

## Maintainers

- Andrey Kobetz - [@andrey45](https://github.com/Andrey45)