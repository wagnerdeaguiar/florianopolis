# Viva Floripa

**Subtítulo:** O portal mais completo sobre Florianópolis.

## Status atual (28 de abril de 2026)
- ✅ Base Next.js + TypeScript + Tailwind pronta.
- ✅ Áreas públicas, painéis e estrutura territorial inicial implementados.
- ✅ Base CMS (Payload) e PostgreSQL modelada.
- ✅ Camada de produção com healthcheck, headers de segurança, `.env.example`, Docker e CI.

## Produção (checklist)
1. Copiar variáveis: `cp .env.example .env`.
2. Ajustar `PAYLOAD_SECRET` e `DATABASE_URL` reais.
3. Subir stack local: `docker compose up --build`.
4. Validar healthcheck: `GET /api/health`.
5. Garantir pipeline verde em `.github/workflows/ci.yml`.

## Segurança e operação
- Headers de segurança via `next.config.ts`.
- Endpoint de healthcheck em `app/api/health/route.ts`.
- Validação de ambiente com `zod` em `src/lib/env.ts`.
- Error boundary global em `app/error.tsx`.

## Stack
- Next.js + React + TypeScript
- Tailwind CSS
- PostgreSQL (Prisma + Payload)
- Payload CMS
