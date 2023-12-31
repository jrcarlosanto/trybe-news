# Create Trybe App

<p align="center">
<img loading="lazy" src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
</p>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#sobre-o-projeto)
   * [Funcionalidades](#funcionalidades)
   * [Layout](#layout)
     * [Web](#web)
     * [Mobile](#mobile)
   * [Como executar o projeto](#como-executar-o-projeto)
     * [Pré-requisitos pelo VSCode](#pré-requisitos-pelo-vscode)
     * [Rodando pelo VSCode)](#rodando-pelo-vscode)
     * [Pré-requisitos pelo Docker](#pré-requisitos-pelo-docker)
     * [Rodando pelo Docker)](#rodando-pelo-docker)
   * [Deploy](#deploy)
   * [Tecnologias](#tecnologias)
   * [Autor](#autor)
   * [Licença](#licença)
<!--te-->


## Sobre

Esse é um projeto criado com as principais tecnologias utilizadas no módulo de front-end da Trybe e feito com [CREATE TRYBE APP](https://github.com/ricardoraposo/create-trybe-app).

## Funcionalidades

- Reume as noticias da [API gratuita de notícias do IBGE em sua versão 3](https://servicodados.ibge.gov.br/api/docs/noticias?versao=3) para fazer uma listagem com as notícias mais recentes.
- O usuario pode favoritar as suas notícias favoritas.
- O usuario pode fazer uma busca por filtro.
- A lista tem scroll infinito.

## Layout

O layout da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/KAzG24r3c9QCowMCi1LgTl/News-Website-UI-and-Presentation-for-Opportunists-(Community)?type=design&node-id=0-1&mode=design&t=tOcghJ8CCv7VjWrr-0">
  <img alt="Made by tgmarinho" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>

### Web

#### Dark Theme

<p align="center">
  <img alt="NextLevelWeek" title="#NextLevelWeek" src="/assets/cap-web-dark.png" width="600px">

  <img alt="NextLevelWeek" title="#NextLevelWeek" src="/assets/notfound-dark.png" width="600px">
</p>

#### Light Theme

<p align="center">
  <img alt="NextLevelWeek" title="#NextLevelWeek" src="/assets/cap-web-light.png" width="600px">

  <img alt="NextLevelWeek" title="#NextLevelWeek" src="/assets/notfound-light.png" width="600px">
</p>

### Mobile

#### Dark Theme

<p align="center">
  <img alt="NextLevelWeek" title="#NextLevelWeek" src="/assets/cap-mobile-dark.png" width="200px">

  <img alt="NextLevelWeek" title="#NextLevelWeek" src="/assets/cap-mobile-dark-2.png" width="200px">

  <img alt="NextLevelWeek" title="#NextLevelWeek" src="/assets/notfound-mobile-dark.png" width="200px">
</p>

#### Light Theme

<p align="center">
  <img alt="NextLevelWeek" title="#NextLevelWeek" src="/assets/cap-mobile-light.png" width="200px">

  <img alt="NextLevelWeek" title="#NextLevelWeek" src="/assets/cap-mobile-light-2.png" width="200px">

  <img alt="NextLevelWeek" title="#NextLevelWeek" src="/assets/notfound-mobile-light.png" width="200px">
</p>

## Como executar o projeto

Este projeto pode ser executado de duas formas:
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

Segui os tutorias para a instalação do [Docker](https://docs.docker.com/desktop/install/linux-install/) e [Docker Compose](https://docs.docker.com/compose/install/)

### Rodando pelo Docker

Na raiz do projeto.

```bash

# Clone este repositório
$ git clone git@github.com:tgmarinho/README-ecoleta.git

# Execute a aplicação com o docker compose no segundo plano
$ docker-compose up -d --build

# Execute a aplicação com o docker compose para observar o terminal
$ docker-compose up --build

# O servidor inciará na porta:5173 - acesse http://localhost:5173 

# Execute o comando no terminal para encerar o docker

$ docker-compose down

```

##### Obs: Se ocorrer algum erro de EACCES: permission denied. Você excluir a pasta de node_modules.

## Deploy

- Feito no [Vercel](https://vercel.com/)
- [Link](https://trybe-news-taupe.vercel.app/) da aplicação.

## Tecnologias

- [CREATE TRYBE APP](https://github.com/ricardoraposo/create-trybe-app)
- [React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- [styled-components](https://styled-components.com/)
- [react-intersection-observer](https://www.npmjs.com/package/react-intersection-observer)
- [moment](https://momentjs.com/docs/)

### Utilitários

- Protótipo: [Figma](https://www.figma.com/file/KAzG24r3c9QCowMCi1LgTl/News-Website-UI-and-Presentation-for-Opportunists-(Community)?type=design&node-id=0-1&mode=design&t=tOcghJ8CCv7VjWrr-0)
- API: [IBGE](https://servicodados.ibge.gov.br/api/docs/noticias?versao=3)
- Teste: [Vitest](https://vitest.dev/)


## Autor

Carlos Antonio Sales de Oliveira Junior
[Perfil GitHub](https://github.com/jrcarlosanto)

## Licença

Este projeto esta sobe a licença [MIT](./LICENSE).
