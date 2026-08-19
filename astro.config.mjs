// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // 'hybrid' permite que o site seja estático (rápido), mas mantém 
  // as rotas da API do Keystatic dinâmicas rodando no servidor.
  integrations: [
      react(),
  keystatic(),
  starlight({
          title: 'Wiki Dorneles',
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/dorneles-laboratory' }],
          sidebar: [
              { 
                  label: 'Bem-vindo', items: [{ autogenerate: { directory: 'welcome' } }],
              },
              {
                  label: 'Reference',
                  items: [{ autogenerate: { directory: 'reference' } }],
              },
              {
        label: 'Visão Geral',
        items: [{ autogenerate: { directory: 'visao-geral' } },],
      },
      {
        label: 'Padrões e Arquitetura',
        items: [{ autogenerate: { directory: 'padroes' } },],
      },
      {
        label: 'Projetos',
        items: [
                      { label: 'Ares', items: [{ autogenerate: { directory: 'projetos/ares' } }] },
          { label: 'PGI-PROA', items: [{ autogenerate: { directory: 'projetos/pgi-proa' } }] },
          { label: 'Nexus SM', items: [{ autogenerate: { directory: 'projetos/nexus-sm' } }] },
          { label: 'SRM', items: [{ autogenerate: { directory: 'projetos/srm' } }] },
          { label: 'Academic Companion', items: [{ autogenerate: { directory: 'projetos/academic-companion' } }] },
        ],
      },
      {
        label: 'Infraestrutura',
        items: [
          { autogenerate: { directory: 'infraestrutura' } },
        ],
      },
          ],
      }),
	],

  adapter: vercel(),
});