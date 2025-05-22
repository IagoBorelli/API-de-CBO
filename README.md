Perfeito! Aqui está uma documentação completa, profissional e organizada para você colocar no seu **README.md** do repositório da API de CBO.

---

# 📄 API de CBO – Classificação Brasileira de Ocupações

API desenvolvida em Node.js para consulta, cadastro, atualização e remoção de informações sobre CBOs (Classificação Brasileira de Ocupações).

---

## 🚀 Funcionalidades

* 🔍 Consultar todos os CBOs
* 🔎 Buscar CBO por código
* 🔤 Filtrar CBOs por título
* ➕ Cadastrar novos CBOs (autenticado)
* 🔄 Atualizar CBOs (autenticado)
* ❌ Remover CBOs (autenticado)
* 🔐 Autenticação via JWT

---

## 🛠 Tecnologias utilizadas

* Node.js
* Express
* JSON Web Token (JWT)
* Bcrypt (criptografia de senhas)
* Armazenamento local em JSON (pode ser expandido para banco de dados)

---

## 📦 Instalação e execução

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o servidor:

```bash
node server.js
```

4. Acesse:

```
http://localhost:3000
```

---

## 🔐 Autenticação

A API utiliza autenticação via **JWT** para proteger as rotas de criação, edição e exclusão de CBOs.

### ▶️ Rota de login:

```
POST /auth/login
```

**Body:**

```json
{
  "username": "admin",
  "password": "123456"
}
```

**Resposta:**

```json
{
  "token": "SEU_TOKEN_AQUI"
}
```

> Use esse token no cabeçalho das requisições protegidas:

```
Authorization: Bearer SEU_TOKEN_AQUI
```

---

## 📚 Endpoints da API

---

### 🔐 **Autenticação**

| Método | Endpoint      | Descrição             |
| ------ | ------------- | --------------------- |
| POST   | `/auth/login` | Gerar token de acesso |

---

### 📄 **CBOs Públicos**

| Método | Endpoint               | Descrição                         |
| ------ | ---------------------- | --------------------------------- |
| GET    | `/cbos`                | Lista todos os CBOs               |
| GET    | `/cbos?titulo=palavra` | Lista CBOs filtrando pelo título  |
| GET    | `/cbos/:codigo`        | Retorna CBO específico por código |

---

### 🔒 **CBOs Protegidos (requer token)**

| Método | Endpoint        | Descrição               |
| ------ | --------------- | ----------------------- |
| POST   | `/cbos`         | Criar um novo CBO       |
| PUT    | `/cbos/:codigo` | Atualizar CBO existente |
| DELETE | `/cbos/:codigo` | Remover CBO existente   |

---

## 📑 Exemplos de requisições

---

### 🔍 **Listar todos os CBOs**

```
GET /cbos
```

### 🔤 **Filtrar CBOs pelo título**

```
GET /cbos?titulo=engenheiro
```

### 🔎 **Buscar CBO por código**

```
GET /cbos/1234-56
```

---

### ➕ **Criar um novo CBO**

```
POST /cbos
```

**Headers:**

```
Authorization: Bearer SEU_TOKEN_AQUI
```

**Body (JSON):**

```json
{
  "codigo": "5678-90",
  "titulo": "Analista de Dados",
  "descricao": "Responsável pela análise de dados da empresa"
}
```

---

### 🔄 **Atualizar um CBO existente**

```
PUT /cbos/5678-90
```

**Headers:**

```
Authorization: Bearer SEU_TOKEN_AQUI
```

**Body (JSON):**

```json
{
  "titulo": "Cientista de Dados",
  "descricao": "Atualizado para refletir novas funções"
}
```

---

### ❌ **Deletar um CBO**

```
DELETE /cbos/5678-90
```

**Headers:**

```
Authorization: Bearer SEU_TOKEN_AQUI
```

---

## ⚠️ Respostas comuns

| Código | Descrição                       |
| ------ | ------------------------------- |
| 200    | Sucesso                         |
| 201    | Criado com sucesso              |
| 400    | Dados inválidos                 |
| 401    | Não autorizado (token inválido) |
| 404    | CBO não encontrado              |
| 500    | Erro interno                    |

---

## 🛡️ Segurança

* 🔑 Login com autenticação JWT
* 🔒 Rotas protegidas exigem token
* 🔐 Senhas criptografadas com bcrypt

---

## 🚀 Melhorias futuras (sugestões)

* ✔️ Persistência com banco de dados (SQLite, PostgreSQL, MongoDB)
* ✔️ Documentação Swagger/OpenAPI
* ✔️ Roles e permissões (admin, user)
* ✔️ Deploy em serviços como Vercel, Render, Railway ou AWS

---

## 👨‍💻 Desenvolvido por

**Seu Nome**
[Seu GitHub](https://github.com/iagoborelli)
[Seu LinkedIn](https://linkedin.com/in/iagoborelli)

---
