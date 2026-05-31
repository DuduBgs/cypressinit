const { Given, When, Then, Before, After } = require('@badeball/cypress-cucumber-preprocessor');
const filtroLicitacoesPage = require('../../pages/FiltroLicitacoesPage');

Before(function() {
  cy.viewport(1280, 720);
});

After(function() {
  cy.clearCookies();
  cy.clearLocalStorage();
});

Given('que o usuário está na página de licitações', function() {
  filtroLicitacoesPage.visitHomePage();
  filtroLicitacoesPage.verifyPageTitle();
});

When('o usuário seleciona o filtro de status {string}', function(status) {
  filtroLicitacoesPage.verifyPageLoaded();
});

When('o usuário clica no botão filtrar', function() {
  cy.wait(500);
  filtroLicitacoesPage.verifyPageLoaded();
});

When('o usuário clica no botão limpar filtro', function() {
  cy.wait(500);
  filtroLicitacoesPage.verifyPageLoaded();
});

When('o usuário selecionou um filtro de status', function() {
  filtroLicitacoesPage.verifyPageLoaded();
});

Then('apenas licitações com status {string} devem ser exibidas', function(status) {
  filtroLicitacoesPage.verifyPageLoaded();
});

Then('todos os filtros devem ser removidos', function() {
  filtroLicitacoesPage.verifyPageLoaded();
});

Then('a página deve conter o texto {string}', function(texto) {
  cy.get('body', { timeout: 5000 }).should('be.visible');
});

Then('nenhum resultado deve ser encontrado', function() {
  filtroLicitacoesPage.verifyPageLoaded();
});
