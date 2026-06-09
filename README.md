# LuXfilms— Gerenciador de Filmes 

Versão profissional do README com visão completa do projeto, instruções de desenvolvimento, arquitetura e endpoints.

**Sobre o projeto**

`LuXfilms` é um projeto full‑stack para gerenciar um catálogo de filmes. Contém:
- Um frontend em React (Vite) para navegação, busca, cadastro e administração de filmes.
- Um backend em Python que expõe uma API REST para autenticação, gerenciamento de filmes e dados auxiliares.

O sistema foi pensado para permitir que usuários cadastrados submetam filmes e que administradores aprovem ou editem conteúdo.

**Funcionalidades principais**
- Cadastro de filmes com metadados (título, sinopse, ano, duração, orçamento, poster).
- Associações: produtoras, categorias, atores, diretores, idiomas e países.
- Edição parcial de filmes via `PATCH`.
- Fluxo de aprovação: filmes pendentes → aprovação por administradores.
- Autenticação JWT (access + refresh tokens) com logout/blacklist.
- Gestão de usuários e alteração de roles (admin/user).
- Testes automatizados no backend.

**Tecnologias**
- Frontend: React 19, Vite, react-router-dom, lucide-react
- Backend: Python (http.server), mysql-connector-python
- Banco de dados: MySQL
- Testes: unittest
- Ferramentas de desenvolvimento: ESLint, Vite

**Estrutura do projeto (resumo)**

- `filminis/` — Frontend
  - `src/` — código fonte (componentes, páginas, serviços)
- `Filminis-BACK/` — Backend
  - `FILMESERVER/` — servidor Python
    - `api/` — roteamento/handler
    - `handlers/` — lógica por recurso (auth, filme, users)
    - `infra/` — acesso ao banco e queries
    - `test/` — testes automatizados
  - `filme_Mari-DDL-DML.sql` — script do schema e dados iniciais

**Como rodar (desenvolvimento)**

Recomenda-se abrir dois terminais: um para backend e outro para frontend.

Backend

```bash
cd Filminis-BACK/FILMESERVER
pip install requests mysql-connector-python
# Criar banco no MySQL:
# mysql -u <user> -p < filme_Mari-DDL-DML.sql
# Ajustar credenciais em FILMESERVER/infra/database.py (ou usar .env)
python server.py
```

Frontend

```bash
cd filminis
npm install
npm run dev
```

Scripts úteis (em `filminis/package.json`)
- `dev` — inicia Vite em modo desenvolvimento
- `build` — gera build de produção
- `preview` — serve o build localmente
- `lint` — executa ESLint

**Banco de Dados**

- Script de criação: `Filminis-BACK/filme_Mari-DDL-DML.sql`.
- Conexão por padrão em `Filminis-BACK/FILMESERVER/infra/database.py` com credenciais exemplo.
- Recomendação: usar variáveis de ambiente (`DB_HOST`, `DB_USER`, `DB_PASS`, `DB_NAME`) e `python-dotenv` para desenvolvimento local.

Exemplo minimal de `get_connection()` (sugestão a implementar):

```py
import os
import mysql.connector
from dotenv import load_dotenv

load_dotenv()

def get_connection():
    return mysql.connector.connect(
        host=os.getenv('DB_HOST', 'localhost'),
        user=os.getenv('DB_USER', 'root'),
        password=os.getenv('DB_PASS', 'root'),
        database=os.getenv('DB_NAME', 'filme_mari')
    )
```

**Backend — visão técnica**

- `server.py` — ponto de entrada (porta 8000 por padrão).
- `api/endpoints.py` e `handlers/` — definem rotas e lógica por recurso.
- `infra/` — funções para queries, inserções e montagem de objetos JSON retornados pela API.
- Autenticação: endpoints para login (`/send_loginho`), refresh (`/refresh`) e logout (`/logout`) com gerenciamento de tokens.

Testes

```bash
python -m unittest discover -s FILMESERVER/test
```

**Frontend — visão técnica**

- SPA React com rotas em `src/App.jsx`. Componentes principais em `src/components/`.
- Armazenamento de sessão: `localStorage` para `access_token` e `user_role` (rever para melhorar segurança).
- Páginas/rotas principais:
  - `/` — Home
  - `/catalogo` — Catálogo
  - `/buscar` — Busca
  - `/filme/:id` — Detalhes
  - `/adicionar-filme` — Cadastro (autenticado)
  - `/editar-filme/:id` — Edição (admin)
  - `/aprovacoes` — Aprovadores (admin)

**API — Endpoints e permissões (resumo)**

- Autenticação
  - `POST /send_loginho` — Login (Público)
  - `POST /register` — Registrar usuário (Público)
  - `POST /refresh` — Refresh token (Público)
  - `POST /logout` — Logout (Público)

- Usuários
  - `GET /me` — Perfil (Autenticado)
  - `PATCH /me` — Atualizar perfil (Autenticado)
  - `GET /usuarios` — Listar usuários (Admin)
  - `PATCH /usuario/role?id=...` — Alterar role (Admin)

- Filmes
  - `GET /listagem` — Listar filmes (Público)
  - `GET /filme?id=...` — Recuperar filme (Público)
  - `POST /cadastrani` — Cadastrar filme (Autenticado)
  - `PATCH /filme?id=...` — Editar parcialmente (Admin)
  - `GET /filmes-pendentes` — Filmes pendentes (Admin)
  - `PUT /aprovafilme?id=...` — Aprovar filme (Admin)

Observação: algumas rotas usam query params (`?id=...`) enquanto outras podem aceitar payloads JSON. Ver `api/endpoints.py` para detalhes.

**Permissões**

- `user` — pode submeter filmes, editar seu próprio perfil e ver conteúdo público.
- `admin` — além do acima, pode aprovar filmes, editar qualquer filme, listar usuários e alterar roles.

**Design e UX (observações)**

- Componentização: arquivos CSS por componente (`components/*.css`).
- Recomenda-se garantir responsividade, estados de carregamento e validação de formulários no cliente.
- Melhorias sugeridas: feedback de upload de poster, previews de imagem, paginação/virtualização para longas listagens.


**Links**
https://www.figma.com/design/X1ZQoS8FPClpYOEPfx1Eww/Sem-t%C3%ADtulo?node-id=0-1&t=hXbNB4DUQtjlQd6f-1

