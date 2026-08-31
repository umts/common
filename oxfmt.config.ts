import { defineConfig } from "oxfmt";

export default defineConfig({
  $schema: "./node_modules/oxfmt/configuration_schema.json",
  ignorePatterns: [
    ".bundle/**",
    "app/assets/builds/**",
    "app/javascript/controllers/index.js",
    "public/assets/**",
    "vendor/assets/**",
  ],
});
