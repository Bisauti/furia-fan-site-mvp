# Documentação do Projeto FURIA Wave (MVP)

Este documento descreve o protótipo de um site para fãs da FURIA, focando nas páginas de Home, Feed, Chatbot e Perfil, desenvolvidas como um Mínimo Produto Viável (MVP).

## Visão Geral

O projeto é um protótipo de aplicação web simples, construído com React e Tailwind CSS, simulando algumas funcionalidades de um site para fãs da FURIA. O objetivo deste MVP é demonstrar a estrutura básica de navegação entre páginas e a implementação de funcionalidades específicas em cada uma delas, utilizando dados estáticos mockados.

## Tecnologias Utilizadas

* **React:** Biblioteca JavaScript para construção de interfaces de usuário.
* **Tailwind CSS:** Framework CSS utilitário para estilização rápida e responsiva.
* **React Router DOM:** Para gerenciar a navegação entre as diferentes páginas da aplicação.
* **React Icons:** Biblioteca de ícones (neste projeto, utilizamos ícones do Font Awesome e Ion Icons).
* **Vite:** Ferramenta de build para projetos frontend.
* **GitHub Actions:** Para automação do deploy.

## Deploy no GitHub Pages (Automatizado)

O deploy deste MVP no GitHub Pages é automatizado via **GitHub Actions**.

* A cada push para a branch configurada no workflow (`.github/workflows/deploy.yml`, ex: `deploy-pages` ou `main`), um workflow é disparado.
* Este workflow constrói o projeto (`npm run build` ou `yarn build`) e publica o conteúdo da pasta `dist/` no GitHub Pages.
* A configuração do GitHub Pages no repositório deve estar definida para usar **"GitHub Actions"** como fonte.

**O site publicado pode ser acessado em:**

`https://https://bisauti.github.io/furia-fan-site-mvp/`


## Configuração e Execução

Para configurar e rodar este projeto localmente:

1.  **Clone o repositório** (ou baixe os arquivos do projeto).
2.  Navegue até o diretório raiz do projeto no seu terminal.
3.  **Instale as dependências** usando npm ou yarn:
    ```bash
    npm install
    # ou
    yarn install
    ```
4.  **Certifique-se de que as imagens utilizadas** nas páginas estão salvas na pasta `src/assets/images/` com os nomes de arquivo corretos, ou ajuste os caminhos nos imports dentro dos arquivos `.jsx`.
5.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```
6.  A aplicação será aberta no seu navegador no endereço indicado pelo terminal (geralmente `http://localhost:5173`).

## Páginas e Funcionalidades Implementadas (MVP)

### Página Home (`src/pages/Home.jsx`)

Página inicial com botões de navegação para Chatbot e Feed, além de placeholders para login social.

### Página Feed (`src/pages/Feed.jsx`)

Exibe um feed simulado de posts sociais da FURIA e relacionados, com conteúdo mockado, avatares e imagens. A área de conteúdo é scrollável.

### Página Chatbot (`src/pages/Chatbot.jsx`)

Chatbot interativo básico com a Pantera, usando botões rápidos para respostas pré-definidas.

### Página Perfil (`src/pages/Perfil.jsx`)

Página de perfil onde o usuário pode gerenciar interesses, visualizar nível de fã e conexões.

## Melhorias Futuras Potenciais

* **Integração com APIs Reais:** Conectar o Feed e o Chatbot a APIs reais de redes sociais e a fontes de dados sobre jogos e jogadores da FURIA.
* **Backend e Autenticação:** Implementar um backend para gerenciar usuários, autenticação, salvar interesses e status de conexão, e fornecer dados dinâmicos.
* **Chatbot Avançado:** Desenvolver uma lógica de chatbot mais complexa.
* **Persistência de Dados:** Salvar o estado do chat e os interesses do usuário.
* **Funcionalidade de Conexões:** Implementar o fluxo de OAuth real para conectar as contas de redes sociais.
* **Responsividade Completa:** O design utiliza Tailwind, mas um ajuste fino para diferentes tamanhos de tela pode ser necessário.
* **Mais Páginas:** Desenvolver as páginas Dashboard e outras funcionalidades.

---