describe('Assertions, Negative Assertions & beforeEach', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
  })

  it('Assertion 1: Login button is visible', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="login-button"]').should('be.visible')
  })

  it('Assertion 2: Page title has correct text', () => {
    cy.get('.title').should('have.text', 'Products')
  })

 it('Assertion 3: Cart link has correct attribute', () => {
    cy.get('.shopping_cart_link').should('have.class', 'shopping_cart_link')
  })
  it('Negative Assertion: Error message does not exist on valid login', () => {
    cy.get('[data-test="error"]').should('not.exist')
  })
})