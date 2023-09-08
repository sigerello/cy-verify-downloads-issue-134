const { defineConfig } = require("cypress");
const { verifyDownloadTasks } = require("cy-verify-downloads");
const vitePreprocessor = require("cypress-vite");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", vitePreprocessor());
      on("task", verifyDownloadTasks);
    },
    baseUrl: "http://localhost:8039",
  },
});
