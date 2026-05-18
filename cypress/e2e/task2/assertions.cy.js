describe('Assertions & Negative Assertions', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com')
  })

  it('Assertion 1: Heading is visible', () => {
    cy.get('h1').should('be.visible')
  })

  it('Assertion 2: Heading has correct text', () => {
    cy.get('h1').should('have.text', 'Welcome to the-internet')
  })

  it('Assertion 3: Login link has correct attribute', () => {
    cy.get('a[href="/login"]').should('have.attr', 'href', '/login')
  })

  it('Negative Assertion: Page does not have wrong text', () => {
    cy.get('h1').should('not.have.text', 'Wrong Page')
  })
})