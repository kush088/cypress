describe("Cypress Cloud Demo", () => {
  it("Visit Cypress Example Site", () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();

    cy.url().should("include", "/commands/actions");
  });
});
