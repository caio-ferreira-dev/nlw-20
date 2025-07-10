# 🎤 Let me ask

## 📝 Sobre o Projeto

"Let me ask" é uma aplicação inovadora que transforma transmissões de áudio em uma base de conhecimento interativa. Desenvolvida durante o evento online **NLW Agents (Next Level Week Agents)** da Rocketseat, esta é a vigésima edição da NLW com foco em integrar Inteligência Artificial ao código. Através dela, é possível transcrever o conteúdo falado, armazená-lo em um banco de dados otimizado para busca semântica (vetores), e posteriormente, utilizar I.A. para responder perguntas com base nesse contexto gravado. É como ter uma memória instantânea de suas transmissões, sempre pronta para responder!

## 🛠️ Tecnologias Utilizadas

Este projeto é dividido em duas partes principais: o **Backend** (servidor) e o **Frontend** (interface do usuário), cada um com suas próprias tecnologias e bibliotecas.

### Backend

O servidor é construído com Node.js e TypeScript, focado em performance e tipagem segura.

-   **`fastify`**: Um framework web rápido e de baixo overhead para Node.js, otimizado para alto desempenho.
-   **`fastify-type-provider-zod`**: Integração entre Fastify e Zod para validação de esquemas e tipagem automática de rotas.
-   **`fastify-cors`**: Middleware para habilitar o CORS (Cross-Origin Resource Sharing), permitindo que o frontend se comunique com o backend.
-   **`fastify-multipart`**: Plugin para Fastify que facilita o tratamento de requisições `multipart/form-data`, essencial para upload de áudios.
-   **`@google/genai`**: SDK oficial para interagir com a API do Google Gemini, utilizada para as funcionalidades de inteligência artificial.
-   **`drizzle-orm`**: Um ORM (Object-Relational Mapping) moderno e leve para TypeScript, permitindo interagir com o banco de dados de forma segura e eficiente.
-   **`postgres`**: Cliente PostgreSQL para Node.js, usado pelo Drizzle ORM para conexão com o banco de dados.
-   **`zod`**: Biblioteca de validação de esquemas TypeScript-first, garantindo que os dados de entrada e saída estejam sempre no formato esperado.
-   **`drizzle-kit`**: Ferramenta CLI para Drizzle ORM, auxiliando na geração de migrações e esquemas de banco de dados.

### Frontend

A interface do usuário é desenvolvida com React, focada em uma experiência dinâmica e responsiva.

-   **`react`** e **`react-dom`**: As bibliotecas fundamentais para a construção de interfaces de usuário reativas.
-   **`vite`**: Um build tool e servidor de desenvolvimento frontend de próxima geração, oferecendo uma experiência de desenvolvimento extremamente rápida.
-   **`react-router-dom`**: Biblioteca para roteamento declarativo no React, permitindo a navegação entre as diferentes páginas do aplicativo.
-   **`@tanstack/react-query`**: Uma poderosa biblioteca para gerenciamento de estado assíncrono, caching e sincronização de dados, facilitando a interação com a API do backend.
-   **`zod`** e **`@hookform/resolvers`**: Utilizados em conjunto para validação de formulários com `react-hook-form`, garantindo a integridade dos dados enviados.
-    **`tailwindcss`**: Framework CSS utilitário que permite construir designs rapidamente, com Tailwind Merge para resolver conflitos de classes.
-   **`shadcn/ui`**: Uma coleção de componentes de UI re-utilizáveis, construídos com Radix UI e Tailwind CSS, facilitando a criação de interfaces modernas e acessíveis.
-   **`lucide-react`**: Uma coleção de ícones bonitos e personalizáveis para React.
-   **`dayjs`**: Uma biblioteca leve para parsear, validar, manipular e exibir datas e horas.
-   **`@radix-ui/react-label`** e **`@radix-ui/react-slot`**: Componentes de UI de baixo nível do Radix UI, fornecendo primitivos acessíveis para construir sistemas de design.

## 🚀 Como Executar o Projeto

Siga os passos abaixo para configurar e rodar o projeto "Let me ask" em sua máquina local.

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

-   Node.js (versão 22.6.0 ou superior)
-   npm ou yarn (gerenciador de pacotes)
-   Docker e Docker Compose

### 1. Configuração do Banco de Dados com Docker

O projeto utiliza PostgreSQL com a extensão `pgvector` para o armazenamento de vetores. O `docker-compose.yml` já está configurado para isso.

Navegue até a pasta `server`:

```bash
cd server
```

Execute o Docker Compose para iniciar o banco de dados:

```bash
docker-compose up -d
```

Este comando irá baixar a imagem do `pgvector`, criar o contêiner do PostgreSQL e rodar o script `setup.sql` (localizado em `docker/setup.sql`) que é responsável por habilitar a extensão `vector`.

### 2. Configuração e Execução do Backend

Ainda na pasta `server`:

Instale as dependências:

```bash
npm install
# ou yarn install
```

Crie um arquivo `.env` na raiz da pasta `server` com as variáveis de ambiente necessárias. Um exemplo mínimo seria:

```
PORT=3333
DATABASE_URL="postgresql://docker:docker@localhost:5433/agents"
GOOGLE_API_KEY="SUA_CHAVE_API_GOOGLE"
```

Substitua `"SUA_CHAVE_API_GOOGLE"` pela sua chave da API do Google Gemini.

Execute as migrações do banco de dados para criar as tabelas:

```bash
npm run db:migrate
# ou yarn db:migrate
```

Opcional: Se desejar popular o banco de dados com dados de exemplo, execute o seed:

```bash
npm run db:seed
# ou yarn db:seed
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou yarn dev
```

O backend estará rodando em `http://localhost:3333` (ou na porta que você configurou no `.env`).

### 3. Configuração e Execução do Frontend

Abra um novo terminal e navegue até a pasta `web`:

```bash
cd ../web
```

Instale as dependências:

```bash
npm install
# ou yarn install
```

Inicie o aplicativo React:

```bash
npm run dev
# ou yarn dev
```

O frontend estará acessível em `http://localhost:5173`.

---

Agora você está pronto para utilizar o "Let me ask"! Aproveite a funcionalidade de transcrever áudios e interagir com o conteúdo via I.A. 🚀

## 📜 Licença

[MIT License](https://opensource.org/licenses/MIT)

--- 