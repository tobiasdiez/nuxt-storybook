# GraphQL Server Toolkit for Nuxt

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions][github-actions-src]][github-actions-href]
[![Codecov][codecov-src]][codecov-href]

This package allows you to integrate [Storybook](storybook.js.org/) in your [Nuxt 3](v3.nuxtjs.org) application.


## Features

- TODO
- [Nuxt Devtools](https://devtools.nuxtjs.org) integration: adds the Storybook directly in the devtools.

## Installation

```sh
# npm
npm install nuxt-storybook

# yarn
yarn add nuxt-storybook

# pnpm
pnpm add nuxt-storybook
```

## Usage

1. Add the module in `nuxt.config.ts`:

   ```ts
   export default defineNuxtConfig({
     modules: ['nuxt-storybook'],
     // Optional top-level config
     storybook: {
       // config
     },
   })

   // or

   export default defineNuxtConfig({
     modules: [
       [
         'nuxt-storybook',
         {
           /* Optional inline config */
         },
       ],
     ],
   })
   ```

2. TODO

## Options

```ts
storybook: {
  
}
```

## 💻 Development

- Clone this repository
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable` (use `npm i -g corepack` for Node.js < 16.10).
- Install dependencies using `pnpm install`.
- - Run `pnpm stub` to generate type stubs.
- Use `pnpm dev` to start [playground](./playground) in development mode.

## License

Made with 💛

Published under [MIT License](./LICENSE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-storybook?style=flat-square
[npm-version-href]: https://www.npmjs.com/package/nuxt-storybook
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-storybook?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/nuxt-storybook
[github-actions-src]: https://img.shields.io/github/workflow/status/tobiasdiez/nuxt-storybook/ci/main?style=flat-square
[github-actions-href]: https://github.com/tobiasdiez/nuxt-storybook/actions?query=workflow%3Aci
[codecov-src]: https://img.shields.io/codecov/c/gh/tobiasdiez/nuxt-storybook/main?style=flat-square
[codecov-href]: https://codecov.io/gh/tobiasdiez/nuxt-storybook
