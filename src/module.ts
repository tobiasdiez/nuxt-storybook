import { defineNuxtModule, useLogger } from '@nuxt/kit'

export interface ModuleOptions {}

const logger = useLogger('storybook')

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-storybook',
    configKey: 'storybook',
  },
  defaults: {},
  setup(options, nuxt) {
    // TODO
  },
})
