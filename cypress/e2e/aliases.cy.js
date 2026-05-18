describe('Aliases & Custom Command Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  it('Alias Practice: Save and reuse an element', () => {
    cy.get('[data-test="username"]').as('usernameField')
    cy.get('@usernameField').type('standard_user')

    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.url().should('include', '/inventory')
  })

  it('Custom Command: Login using custom command', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory')
  })
})