import { defineConfig } from 'vite'

export default defineConfig({
  assetsInclude: ['**/*.md'],
  esbuild: {
    jsxInject: 'import {factory, fragment} from "/src/core"'
  }
})
