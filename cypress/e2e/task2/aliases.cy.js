describe('Aliases & Custom Command Tests', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  })

  it('Alias Practice: Save and reuse an element', () => {
    cy.get('#username').as('usernameField')
    cy.get('@usernameField').type('tomsmith')

    cy.get('#password').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()

    cy.get('.flash.success').should('be.visible')
  })

  it('Custom Command: Login using custom command', () => {
    cy.loginHeroku('tomsmith', 'SuperSecretPassword!')
    cy.get('.flash.success').should('be.visible')
  })
})