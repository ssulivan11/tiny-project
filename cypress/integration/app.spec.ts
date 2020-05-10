/// <reference types="cypress" />

context("App Interaction", () => {
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
    cy.get("h1").should("contain", "Welcome to Tiny Project!");
  });

  it("should route to about page", () => {
    cy.get("nav a:nth-child(2)").click();
    cy.url().should("eq", "http://localhost:3000/about");
    cy.get("h1").should("contain", "About the Tiny Project");
  });

  it("should route to home page", () => {
    cy.get("nav a:nth-child(1)").click();
    cy.url().should("eq", "http://localhost:3000/");
    cy.get("h1").should("contain", "Welcome to Tiny Project!");
  });

  it("should go back to about page", () => {
    cy.go("back");
    cy.url().should("eq", "http://localhost:3000/about");
    cy.get("h1").should("contain", "About the Tiny Project");
  });
});
