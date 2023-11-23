# Create Trybe App

## Sobre

Esse é um projeto criado com as principais tecnologias utilizadas no módulo de front-end da Trybe e feito com [CREATE TRYBE APP](https://github.com/ricardoraposo/create-trybe-app).

## Funcionalidades

- Reume as noticias da [API gratuita de notícias do IBGE em sua versão 3](https://servicodados.ibge.gov.br/api/docs/noticias?versao=3) para fazer uma listagem com as notícias mais recentes.
- O usuario pode favoritar as suas noticias favoritas.
- O usuario pode fazer uma busca por filtro.

## Layout

O layout da aplicação está disponível no Figma:
<a href="https://www.figma.com/file/KAzG24r3c9QCowMCi1LgTl/News-Website-UI-and-Presentation-for-Opportunists-(Community)?type=design&node-id=0-1&mode=design&t=tOcghJ8CCv7VjWrr-0">
  <img alt="Made by tgmarinho" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>

### Web

### Mobile

## Como executar o projeto

Este projeto ser executado de duas formas:
1. VSCode
2. Docker Compose

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Rodando pelo VSCode

Na raiz do projeto.

```bash

# Clone este repositório
$ git clone git@github.com:jrcarlosanto/trybe-news.git

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:5173 - acesse http://localhost:5173 

```
### Pré-requisitos Docker Compose

Segui os tutorias para a instalação do Docker(https://docs.docker.com/desktop/install/linux-install/) e Docker Compose(https://docs.docker.com/compose/install/)

```bash

# Clone este repositório
$ git clone git@github.com:tgmarinho/README-ecoleta.git

# Execute a aplicação com o docker compose
$ docker compose up -t trybe_news -d

# O servidor inciará na porta:5173 - acesse http://localhost:5173 

```

## Tecnologias

- [CREATE TRYBE APP](https://github.com/ricardoraposo/create-trybe-app)
- [React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- [styled-components](https://styled-components.com/)
- [react-intersection-observer](https://www.npmjs.com/package/react-intersection-observer)

### Utilitários

- Protótipo: [Figma](https://www.figma.com/file/KAzG24r3c9QCowMCi1LgTl/News-Website-UI-and-Presentation-for-Opportunists-(Community)?type=design&node-id=0-1&mode=design&t=tOcghJ8CCv7VjWrr-0)
- API: [IBGE](https://servicodados.ibge.gov.br/api/docs/noticias?versao=3)
- Teste de API: [Visual Studio Code](https://code.visualstudio.com/)

## Licença

Este projeto esta sobe a licença [MIT](./LICENSE).
