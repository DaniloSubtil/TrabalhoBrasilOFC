# Projeto de Gerenciamento de Tarefas (To-Do List)

Este projeto é uma aplicação web para gerenciamento de tarefas (To-Do List) utilizando Node.js, Express, Swagger, e integração básica com AWS (DynamoDB, S3).

## Funcionalidades

- CRUD (Criar, Ler, Atualizar, Deletar) de tarefas.
- Upload de arquivos relacionados às tarefas (armazenados no AWS S3).
- Notificações assíncronas utilizando AWS SQS.
- Containerização com Docker.
- Deploy na AWS EC2.
- Controle de versão e Integração Contínua com GitHub Actions.

## Pré-requisitos

Antes de iniciar, verifique se você possui o seguinte instalado:

- Node.js (v14 ou superior)
- npm (gerenciador de pacotes do Node.js)
- Docker (opcional para desenvolvimento local)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/todo-list-app.git
   cd todo-list-app
