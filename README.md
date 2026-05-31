# PROJETO VA02 DE QA - P5 Projeto BDD: Cypress + Cucumber + Gherkin

Projeto acadêmico de QA (Qualidade de Software) que automatiza testes E2E no **Portal da Transparência do Governo Federal** utilizando a abordagem BDD.

---

## Tecnologias

| Ferramenta                              | Versão |
| --------------------------------------- | ------ |
| Node.js                                 | 18+    |
| Cypress                                 | 13.x   |
| @badeball/cypress-cucumber-preprocessor | 20.x   |
| @bahmutov/cypress-esbuild-preprocessor  | 2.x    |

---

## Planejamento dos Testes

### Estratégia de Teste

**Objetivo**: Validar a funcionalidade de filtro de licitações por status no Portal da Transparência

**Escopo**:
- Filtração por status (Aberto, Encerrado, Cancelado)
- Limpeza de filtros
- Validação de resultados

**Total de 4 testes**:
- 3 Cenários simples
- 1 Esquema do Cenário (com 2 linhas de exemplos)

---

## Estrutura do Projeto

```
cypress/
├── e2e/
│   ├── features/          # Cenários em Gherkin (.feature)
│   │   └── filtroLicitacoes.feature
│   └── steps/             # Implementação dos passos
│       └── filtroLicitacoesSteps.js
├── pages/                 # Page Objects
│   └── FiltroLicitacoesPage.js
├── fixtures/              # Dados de teste
│   └── licitacoes.json
└── support/
    ├── commands.js
    └── e2e.js
```

---

## Como Rodar

**1. Instalar dependências**

```bash
npm install
```

**2. Abrir interface gráfica do Cypress**

```bash
npx cypress open
```

> Selecione **E2E Testing** → **Electron** → clique na feature desejada.

**3. Rodar todos os testes via terminal (headless)**

```bash
npx cypress run --spec "cypress/e2e/features/**/*.feature"
```

---

## Cenários de Teste

### filtroLicitacoes.feature

#### Cenário 1: Filtrar licitações com status aberto
```gherkin
Dado que o usuário está na página de licitações
Quando o usuário seleciona o filtro de status "Aberto"
E o usuário clica no botão filtrar
Então apenas licitações com status "Aberto" devem ser exibidas
```

#### Cenário 2: Filtrar licitações com status encerrado
```gherkin
Dado que o usuário está na página de licitações
Quando o usuário seleciona o filtro de status "Encerrado"
E o usuário clica no botão filtrar
Então apenas licitações com status "Encerrado" devem ser exibidas
```

#### Cenário 3: Limpar filtro de licitações
```gherkin
Dado que o usuário está na página de licitações
E o usuário selecionou um filtro de status
Quando o usuário clica no botão limpar filtro
Então todos os filtros devem ser removidos
```

#### Esquema do Cenário: Filtrar licitações por diferentes status
```gherkin
Dado que o usuário está na página de licitações
Quando o usuário seleciona o filtro de status "<status>"
E o usuário clica no botão filtrar
Então a página deve conter o texto "<resultado_esperado>"

Exemplos:
  | status      | resultado_esperado                |
  | Aberto      | Licitações abertas para concorrência |
  | Cancelado   | Nenhuma licitação encontrada      |
```

---

## Automação

- **Page Object**: `FiltroLicitacoesPage.js`
- **Steps**: `filtroLicitacoesSteps.js`
- **Feature**: `filtroLicitacoes.feature`

---

## Links Externos

**Portal da Transparência do Governo Federal**
`https://portaldatransparencia.gov.br`

**Video**
`https://youtu.be/CrPpmrLhIz0`