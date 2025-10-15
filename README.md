# Admin Panel

Este repositório contém um painel administrativo construído com Next.js (App Router). Este README descreve as tecnologias usadas e fornece um manual simples para rodar o servidor localmente em um ambiente de desenvolvimento e para gerar o build de produção.

## Tecnologias principais

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS (v4)
- PostCSS (@tailwindcss/postcss)
- PrimeReact + PrimeIcons (componentes UI)
- react-hook-form + @hookform/resolvers (forms)
- Zod (validação de esquema)
- Biome (lint/format)

Arquivos de configuração importantes:

- `next.config.ts` — configuração do Next.js
- `tsconfig.json` — configuração do TypeScript
- `tailwind.config.js` — configuração do Tailwind
- `postcss.config.mjs` — configuração do PostCSS

## Pré-requisitos

- Node.js (recomendado: 18 ou 20)
- npm (ou outro gerenciador de pacotes como pnpm/yarn)
- Git (para clonar o repositório)

Observação: as versões exatas das dependências estão em `package.json`.

## Instalação (clone + dependências)

No Windows PowerShell:

```powershell
git clone <REPO_URL>
cd admin-panel
npm install
```

Substitua `<REPO_URL>` pela URL do repositório remoto se aplicável.

## Comandos úteis

Os scripts disponíveis em `package.json` são:

- `npm run dev` — Inicia o servidor de desenvolvimento (Next.js com Turbopack)
- `npm run build` — Gera o build de produção (usa Turbopack)
- `npm run start` — Inicia o servidor a partir do build gerado
- `npm run lint` — Executa o Biome (checa problemas)
- `npm run format` — Formata o código com Biome

Exemplos (PowerShell):

```powershell
npm run dev
npm run build
npm run start
npm run lint
npm run format
```

### Notas sobre desenvolvimento

- Os scripts `dev` e `build` incluem a flag `--turbopack` atualmente definida no `package.json`. Turbopack é o bundler experimental/performático do ecossistema Next.js; se encontrar problemas, remova a flag momentaneamente ou atualize conforme a documentação do Next.js.
- O projeto usa o App Router (pasta `app/`). Componentes e páginas estão em `app/` e `components/`.

## Estrutura básica do projeto

- `app/` — rotas e páginas (App Router)
- `components/` — componentes reutilizáveis (ex.: `components/layout/sidebar.tsx`)
- `public/` — ativos públicos
- `tailwind.config.js`, `postcss.config.mjs` — estilo e compilação CSS

## Lint, formatação e tips

- Lint/format: o projeto usa Biome (`@biomejs/biome`) configurado via `package.json`.
- Para aplicar formatação automática:

```powershell
npm run format
```

Para checar apenas (sem aplicar):

```powershell
npm run lint
```

## Build e deploy

1. Gerar build:

```powershell
npm run build
```

2. Iniciar servidor a partir do build:

```powershell
npm run start
```

Para deploy, publique o conteúdo conforme a sua plataforma (Vercel, Netlify, Docker, etc.). O Next.js tem configurações específicas para cada plataforma; consulte a documentação oficial.

## Problemas comuns

- Erros de versão do Node: atualize para Node 18/20.
- Dependências ausentes: rode `npm install` novamente e verifique mensagens de erro no terminal.
- Problemas com Turbopack: remova `--turbopack` dos scripts temporariamente para usar o bundler padrão do Next.js.

## Contato / Contribuição

Sinta-se à vontade para abrir issues ou pull requests com melhorias. Para mudanças rápidas de estilo, use `npm run format` antes de commitar.

---

Arquivo gerado automaticamente — descreve as tecnologias detectadas no repositório e instruções básicas para rodar localmente.
