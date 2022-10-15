describe("log in", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/home");
  });
  it("check form validation with wrong data", () => {
    cy.url().should("include", "home");
    cy.contains("Login");
    cy.get("form").within(($form) => {
      cy.get('[data-cy="email"]')
        .type("sdfg.com")
        .should("have.value", "sdfg.com");
      cy.get('[data-cy="password"]').type("azer").should("have.value", "azer");
      cy.get('[data-cy="messageErrorEmail"]')
        .should("be.visible")
        .contains("Désolé, email incorrecte");
      cy.get('[data-cy="email"]').click()
      cy.get('[data-cy="messagErrorPassword"]')
        .should("be.visible");
      cy.get('[data-cy="password"]').clear().should("have.value", "");
      cy.get('[data-cy="password"]')
        .type("azer-tyu@kjh")
        .should("have.value", "azer-tyu@kjh")
        cy.get('[data-cy="messagErrorPassword"]')
        .should("be.visible").should("contain", "Désolé, caractères non autorisé");
    });
  });

  it("check form validation with valid data", () =>{
    cy.get('form').within(($form) => {
      cy.get('[data-cy="email"]').type('fake@email.com').should('have.value','fake@email.com');
      cy.get('[data-cy="password"]').type('123sdergg').should('have.value','123sdergg');
      cy.get('[data-cy="submit"]').click();
      cy.url()
      .should("include","accueil")
    })
   
  })
});
