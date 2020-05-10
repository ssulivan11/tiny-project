/// <reference types="cypress" />

context("App", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("should get the global window object", () => {
    cy.window().should("have.property", "top");
  });

  it("should have a document object", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
  });

  it("should have the proper title", () => {
    cy.title().should("include", "Tiny Project");
  });

  it("should have the correct heading", () => {
    cy.get("h1").should("contain", "Welcome to tiny project!");
  });
});
