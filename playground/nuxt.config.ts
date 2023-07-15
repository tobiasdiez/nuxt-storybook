import { defineNuxtConfig } from 'nuxt/config'
import StorybookModule from '..'

export default defineNuxtConfig({
  modules: [StorybookModule, '@nuxt/devtools'],
})
