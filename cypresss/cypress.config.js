const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "eia7yr",
  e2e: {
    baseUrl: "https://example.cypress.io", // 👈 no localhost needed
  },
});
