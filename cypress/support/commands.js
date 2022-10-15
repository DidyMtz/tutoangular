// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add("SignIn", () => {
  cy.visit("http://localhost:4200/home");
  cy.get('form').within(($form) => {
    cy.get('[data-cy="email"]').type('fake@email.com').should('have.value','fake@email.com');
    cy.get('[data-cy="password"]').type('123sdergg').should('have.value','123sdergg');
    cy.get('[data-cy="submit"]').click();
    cy.url()
    .should("include","accueil")
  })
});
