# language: pt

Funcionalidade: Filtro de Licitações por Status
  Como cidadão usuário
  Quero filtrar licitações por status
  Para encontrar rapidamente as licitações que me interessam

  Cenário: Filtrar licitações com status aberto
    Dado que o usuário está na página de licitações
    Quando o usuário seleciona o filtro de status "Aberto"
    E o usuário clica no botão filtrar
    Então apenas licitações com status "Aberto" devem ser exibidas

  Cenário: Filtrar licitações com status encerrado
    Dado que o usuário está na página de licitações
    Quando o usuário seleciona o filtro de status "Encerrado"
    E o usuário clica no botão filtrar
    Então apenas licitações com status "Encerrado" devem ser exibidas

  Cenário: Limpar filtro de licitações
    Dado que o usuário está na página de licitações
    E o usuário selecionou um filtro de status
    Quando o usuário clica no botão limpar filtro
    Então todos os filtros devem ser removidos

  Esquema do Cenário: Filtrar licitações por diferentes status
    Dado que o usuário está na página de licitações
    Quando o usuário seleciona o filtro de status "<status>"
    E o usuário clica no botão filtrar
    Então a página deve conter o texto "<resultado_esperado>"

    Exemplos:
      | status    | resultado_esperado                      |
      | Aberto    | Licitações abertas para concorrência    |
      | Cancelado | Nenhuma licitação encontrada            |

