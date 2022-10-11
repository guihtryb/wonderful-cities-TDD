
describe('Testing home page',() => {
  beforeEach(() => {
    cy.server();
    cy.route('GET', '**/cities', 'fixture:cities');
    cy.visit('/');
  });

  it('home page previous slide works correctly', () => {
    cy.get('#slide-button-previous').click();
    cy.get('[data-testid="city-name"]').contains(/Curitiba/i)
    cy.get('#slide-button-previous').click();
    cy.get('[data-testid="city-name"]').contains(/Singapore/i)
  });

  it('home page next slide works correctly', () => {
    cy.get('#slide-button-next').click();
    cy.get('[data-testid="city-name"]').contains(/Curitiba/i)
    cy.get('#slide-button-next').click();
    cy.get('[data-testid="city-name"]').contains(/Singapore/i)
  });

  it('home page FAQ accordion works correctly', () => {
    cy.get('dt').should((dt) => {
      expect(dt).to.have.length(3)
    });
    cy.get('dd').should('have.css', 'display', 'none');
    cy.get('dt').first().click();
    cy.get('dd').first().should('have.css', 'display', 'block');
  });
});