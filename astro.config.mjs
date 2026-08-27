// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    keystatic(),
    starlight({
      title: 'Wiki Dorneles',
      customCss: [
        './src/styles/custom.css'
      ],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/dorneles-laboratory' }],
      sidebar: [
        {
          label: 'Bem-vindo',
          items: [{ autogenerate: { directory: 'welcome' } }]
        },
        {
          label: 'Visão Geral',
          items: [{ autogenerate: { directory: 'visao-geral' } }]
        },
        {
          label: 'Guias',
          items: [{ autogenerate: { directory: 'guides' } }]
        },
        {
          label: 'Processos',
          items: [{ autogenerate: { directory: 'processes' } }]
        },
        {
          label: 'Referências',
          items: [{ autogenerate: { directory: 'reference' } }]
        },
        {
          label: 'Templates',
          items: [{ autogenerate: { directory: 'templates' } }]
        },
        {
          label: 'Utilitários',
          items: [{ autogenerate: { directory: 'utils' } }]
        },
        {
          label: 'Projetos',
          items: [{ autogenerate: { directory: 'projetos' } }]
        },
        {
          label: 'Submissões',
          items: [{ autogenerate: { directory: 'submissoes' } }]
        }
      ],
    }),
  ],

  adapter: vercel(),
});