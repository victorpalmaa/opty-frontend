Opty - Frontend
Este repositório contém o código-fonte da interface do usuário (UI) para a aplicação Opty, desenvolvida em React.

Funcionalidades
Interface de login e registro de usuários.
Questionário de onboarding para personalização de perfil.
Página de busca com filtros, ordenação e exibição de resultados.
Gráficos dinâmicos para comparação de preços.
Menu lateral e componentes de UI reutilizáveis.
Integração com o serviço de mensageria via WebSocket.

Tecnologias
UI Library: React.js
Estilização: Tailwind CSS
Gerenciamento de Estado: Zustand
Cliente HTTP: Axios

Executando Localmente
Pré-requisitos
Node.js (v16 ou superior)
npm ou yarn

Passos
Clone o repositório:

git clone [https://github.com/seu-usuario/opty-frontend.git](https://github.com/seu-usuario/opty-frontend.git)
cd opty-frontend

Instale as dependências:

npm install

Configure as variáveis de ambiente:

Crie um arquivo .env.local na raiz do projeto e adicione as URLs dos serviços de backend:

REACT_APP_API_URL=http://localhost:8000/api/v1
REACT_APP_WEBSOCKET_URL=ws://localhost:8080/chat

Execute a aplicação:

npm start

A aplicação estará disponível em http://localhost:3000.
