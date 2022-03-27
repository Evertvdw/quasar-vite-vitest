# Quasar App (quasar-vite-vitest)

This is a test repo for vitest with Quasar CLI based on vite.

## Features

- TS
- Pinia
- Vue-router
- Vue-i18n
- Unplugin-auto-import

I included some examples of common patterns in `src/components/__tests__`. These are very minimal but you hopefully get the basics out of this and can extend it where necessary.

## Vitest specific files

To make this work `vitest` requires a vite config. This is added as `vitest.config.ts`. If you have any vite plugins added inside `quasar.config.js` you should also add them here to make the tests work as expected.

Using `unplugin-auto-import` will result in less boilerplate code also for testing. The `mount` function from `@vue/test-utils` for example is available globally, check https://github.com/antfu/unplugin-auto-import to see how it works in detail.

`/test/setup-file.ts` is run before each test file and is used to add stuff that is neccessary/useful for every test. Quasar is not added here but rather called once inside every test file that needs the Quasar plugin. This is only needed when your component uses `$q` or a quasar component or something else quasar related. Not every component in your codebase will necessarely need this, that is why it is setup this way.

Current limitations:

1. If the test server is running and `vitest.config.ts` is changed, the test server will restart but will throw errors. Making changes to the vite config will require rebooting the test server manually.
