import { defineConfig } from "vite";

export default defineConfig({
  esbuild: {
    jsxInject: 'import {factory, fragment} from "/src/core"',
  }
});
