describe('Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
  })

  it('Navigation Test 1: Click menu and open About page', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#about_sidebar_link').should('be.visible')
  })

  it('Navigation Test 2: Visit inventory and cart pages in sequence', () => {
    cy.url().should('include', '/inventory')
    cy.get('.title').should('have.text', 'Products')

    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart')
    cy.get('.title').should('have.text', 'Your Cart')
  })
})