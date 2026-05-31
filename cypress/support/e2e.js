import './commands'

Cypress.on('uncaught:exception', () => {
  return false
})

// Fecha o banner de cookies do portal automaticamente antes de cada teste
Cypress.Commands.add('fecharCookies', () => {
  cy.get('body').then(($body) => {
    if ($body.find('button:contains("Aceitar todos"), button:contains("Rejeitar cookies opcionais")').length > 0) {
      cy.contains('button', /rejeitar cookies opcionais|aceitar todos/i).first().click({ force: true })
    }
  })
})
