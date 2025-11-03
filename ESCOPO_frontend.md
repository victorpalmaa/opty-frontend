Escopo Técnico: Opty - Frontend
Versão: 1.0

1. Visão Geral
Este escopo detalha os requisitos técnicos para a interface de usuário do Opty. A aplicação será uma Single Page Application (SPA) desenvolvida em React, responsável por toda a interação com o usuário.

2. Arquitetura
Componentização: A UI será dividida em componentes funcionais e reutilizáveis (ex: SearchBar, ProductCard, FilterBar).
Gerenciamento de Estado: O estado global (informações do usuário, token de autenticação) será gerenciado com Zustand. O estado local será gerenciado com os hooks useState e useEffect.
Comunicação com API: As chamadas para a API REST do backend serão feitas via Axios, com uma instância configurada para incluir o token JWT nos headers.
Comunicação em Tempo Real: A conexão com o servidor WebSocket será estabelecida após o login do usuário para permitir a troca de mensagens.

3. Principais Componentes e Telas
LoginPage: Formulário de login.
RegisterPage: Formulário de registro.
OnboardingPage: Questionário para personalização.
HomePage: Tela principal com a barra de busca e resultados.
ResultsGrid: Componente que exibe a lista de produtos encontrados.
PriceComparisonChart: Componente que renderiza os gráficos de comparação de preços.
DrawerMenu: Menu lateral com opções de navegação.
ChatWidget: Componente para a troca de mensagens via WebSocket.
