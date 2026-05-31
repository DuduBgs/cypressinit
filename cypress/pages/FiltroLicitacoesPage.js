class FiltroLicitacoesPage {
  constructor() {
    this.baseUrl = 'https://portaldatransparencia.gov.br';
  }

  visitHomePage() {
    cy.visit(this.baseUrl, { failOnStatusCode: false });
    cy.get('body').should('be.visible');
  }

  verifyPageTitle() {
    cy.get('head title').invoke('text').should('include', 'Transparência');
  }

  verifyMenuExists() {
    // Verifica se o menu principal está visível
    cy.get('nav, [role="navigation"], header').should('be.visible');
  }

  verifyLicitacoesLinkExists() {
    // Verifica se existe algum link/menu para licitações
    cy.get('a, button, [role="menuitem"]').should('contain', /[Ll]icitaç/i);
  }

  navigateToLicitacoes() {
    // Tenta clicar em qualquer elemento que contenha a palavra "Licitação"
    cy.get('body').then($body => {
      if ($body.text().includes('Licitação')) {
        cy.contains(/[Ll]icitaç[õo]/i).click({ force: true });
        cy.wait(1000);
      }
    });
  }

  verifyPageLoaded() {
    cy.get('body').should('be.visible');
  }

  verifyContentPresent(text) {
    cy.get('body').should('contain.text', text);
  }
}

module.exports = new FiltroLicitacoesPage();
