class login {
  email() {
    return cy.get('[data-cy="email"]');
  }
  password() {
    return cy.get('[data-cy="password"]');
  }
  messageErrorEmail() {
    return cy.get('[data-cy="messageErrorEmail"]');
  }
  messageErrorPassword() {
    return cy.get('[data-cy="messagErrorPassword"]');
  }
}


export default login