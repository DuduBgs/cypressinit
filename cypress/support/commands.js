// Aguarda a página carregar completamente antes de interagir
Cypress.Commands.add('aguardarCarregamento', () => {
  cy.get('body').should('be.visible')
  cy.document().should('have.property', 'readyState', 'complete')
})

// Verifica se um texto existe em qualquer lugar da página
Cypress.Commands.add('textoVisivel', (texto) => {
  cy.contains(texto).should('be.visible')
})
