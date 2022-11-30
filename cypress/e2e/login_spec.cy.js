import Login from "../pageObject/login";

describe("log in", () => {
  const login = new Login();

  beforeEach(() => {
    cy.visit("http://localhost:4200/home");
  });
  it("check form validation with wrong data and next right data", () => {
    cy.url().should("include", "home");
    cy.contains("Login");
    cy.get("form").within(($form) => {
      login.email().type("sdfg.com").should("have.value", "sdfg.com");
      login.password().type("azer").should("have.value", "azer");
      login
        .messageErrorEmail()
        .should("be.visible")
        .contains("Désolé, email incorrect");
      login
        .email()
        .clear()
        .type("fake@email.com")
        .should("have.value", "fake@email.com");
      login.messageErrorPassword().should("be.visible")
      .contains('Désolé, password incorrect');
      login
        .password()
        .clear()
        .should("have.value", "")
        .type("azer-tyu@kjh")
        .should("have.value", "azer-tyu@kjh");
      login
        .messageErrorPassword()
        .should("be.visible")
        .contains("Désolé, password incorrect");
      login
        .password()
        .clear()
        .type("123sdergg")
        .should("have.value", "123sdergg");
      cy.get('[data-cy="submit"]').click();
      cy.url().should("include", "accueil");
    });
  });
});
