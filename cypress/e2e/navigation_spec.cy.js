describe("navigation", () => {

  before(() => {
    cy.SignIn()
  });
  


  beforeEach(() => {
    cy.visit("http://localhost:4200/accueil");
  });
 
  it("test tous les liens du menu", () => {
    cy.get(".menu").as("menu");
    cy.get("@menu").within(($menu) => {
      cy.get(".mat-button-wrapper").as("lien");
      cy.get("@lien").first().contains("Home");
      cy.get("@lien").last().contains("Contact");
    });
    cy.url().should("include", "accueil");
    cy.get("h3").contains("Bienvenue");
    cy.get("@lien").contains("S'inscrire").click()
    cy.contains("S'inscrire");
    cy.get("@lien").last().click()
    cy.contains('Contact');
    cy.get("[data-cy='logout']").click();
    cy.url().should('include','home')
  });

});