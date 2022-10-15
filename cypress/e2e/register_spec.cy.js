describe("Inscription", () => {
  before(() => {
    cy.SignIn();
  });

  beforeEach(() => {
    cy.visit("http://localhost:4200/register");
  });

  it("check register form with wrong data", () => {
    cy.get("h3").contains("S'inscrire");
    cy.get("form").within(($form) => {
      cy.get('[data-cy="email"]')
        .type("fgv.com")
        .should("have.value", "fgv.com");
      cy.get('[data-cy="password"]').type("dd-@").should("have.value", "dd-@");
      cy.get('[data-cy="errorEmail"]').contains("Email invalide");
      cy.get('[data-cy="email"]')
        .clear()
        .type("fake@gmail.com")
        .should("have.value", "fake@gmail.com");
      cy.get('[data-cy="errorPassword"]').contains("Password invalide");
      cy.get('[data-cy="password"]')
        .clear()
        .type("dddddddds")
        .should("have.value", "dddddddds");
      cy.get('[data-cy="adresse"]')
        .type("1 rue des champs")
        .should("have.value", "1 rue des champs");
      cy.get('[data-cy="ville"]')
        .type("Casablanca")
        .should("have.value", "Casablanca");
      cy.get('[data-cy="etat"]')
        .type("Casablanca")
        .should("have.value", "Casablanca");
      cy.get('[data-cy="zip"]').type("23456").should("have.value", "23456");
      cy.get('[data-cy="addnewrow"]').click();
      cy.contains("Adresse N°1");
      cy.get('[data-cy="removerow"]', {}).eq("1").click();
      cy.get('[data-cy="submit"]').click();
      cy.url().should("include", "accueil");
    });
  });
});
