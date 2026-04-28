import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { collections } from '@/cms/collections';

export default buildConfig({
  admin: {
    user: 'usuarios',
    meta: {
      titleSuffix: ' | Viva Floripa CMS',
      description: 'Painel administrativo da Viva Floripa',
    },
  },
  collections: [
    {
      slug: 'usuarios',
      auth: true,
      fields: [
        { name: 'nome', type: 'text', required: true },
        {
          name: 'perfil',
          type: 'select',
          required: true,
          options: [
            { label: 'Administrador', value: 'admin' },
            { label: 'Editorial', value: 'editorial' },
            { label: 'Parceiro Comercial', value: 'partner' },
            { label: 'Anfitrião', value: 'host' },
            { label: 'Turista/Visitante', value: 'visitor' },
          ],
        },
      ],
    },
    ...collections,
  ],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL ?? 'postgresql://postgres:postgres@localhost:5432/viva_floripa',
    },
  }),
  typescript: {
    outputFile: 'src/types/payload-types.ts',
  },
});
