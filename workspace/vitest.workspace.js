import { defineConfig, defineWorkspace } from "vitest/config";

export default defineWorkspace([
  defineConfig({
    test: { dangerouslyIgnoreUnhandledErrors: true },
  }),
]);
