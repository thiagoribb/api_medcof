# Auth Api MedCof

## Descrição
Api de autenticação

## Pré-requisitos
- Node.js
- npm (gerenciador de pacotes do Node.js)
- Docker
- Docker Compose

## Instalação
1. **Clone o repositório:**

   ```bash
    git clone https://github.com/thiagoribb/api_medcof.git
2. **Navegue até o diretório do projeto:**
   ```bash
    cd api_medcof
3. **Instale as dependências:**
   ```bash
    npm install
4. **Inicie os contêineres Docker:**
   ```bash
    docker-compose up -d
5. **Execute o servidor em modo de desenvolvimento:**
   ```bash
    npm run dev
6. **Execute os testes automatizados:**
   ```bash
    npm run test


## Documentação da API

## Uso

Acesse a API em http://localhost:4000/api/users para inserir novos usuários e receber o token de autenticação.

Acesse a API em http://localhost:4000/api/auth para validar o token através da chave "Authorization" no header da requisição.


## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).