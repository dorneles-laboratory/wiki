// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

const schemaOrgJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://dorneles.dev/#person",
      "name": "Fernando Dorneles da Silva",
      "url": "https://dorneles.dev",
      "image": "https://wiki.dorneles.dev/dorneles.jpeg",
      "jobTitle": "Engenheiro de Computação / Desenvolvedor Full-Stack",
      "worksFor": {
        "@type": "Organization",
        "name": "Dorneles Laboratory",
        "url": "https://dorneles.dev"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Universidade Federal de Santa Maria (UFSM)",
        "url": "https://www.ufsm.br"
      },
      "sameAs": [
        "https://linkedin.com/in/fernandodorneles",
        "https://github.com/dornelesfernando",
        "https://instagram.com/dorneles_fernando",
        "http://lattes.cnpq.br/0532418852427960"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://wiki.dorneles.dev/#website",
      "name": "Wiki Dorneles",
      "url": "https://wiki.dorneles.dev",
      "description": "Base de conhecimento, arquitetura e documentação técnica do ecossistema Dorneles Laboratory, mantida por Fernando Dorneles da Silva.",
      "author": {
        "@id": "https://dorneles.dev/#person"
      },
      "creator": {
        "@id": "https://dorneles.dev/#person"
      }
    }
  ]
});

// https://astro.build/config
export default defineConfig({
  site: 'https://wiki.dorneles.dev',
  integrations: [
    react(),
    keystatic(),
    starlight({
      title: 'Wiki Dorneles',
      components: {
        Footer: './src/components/Footer.astro'
      },
      customCss: [
        './src/styles/custom.css'
      ],
      head: [
        {
          tag: 'meta',
          attrs: { name: 'author', content: 'Fernando Dorneles da Silva' }
        },
        {
          tag: 'meta',
          attrs: {
            name: 'keywords',
            content: 'Wiki Dorneles, arquitetura de software, engenharia de software, microsserviços, Cortex, Identity, Acad, CSM, Fernando Dorneles da Silva'
          }
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: 'https://wiki.dorneles.dev/dorneles.jpeg' }
        },
        {
          tag: 'meta',
          attrs: { name: 'twitter:image', content: 'https://wiki.dorneles.dev/dorneles.jpeg' }
        },
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          content: schemaOrgJsonLd
        }
      ],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/dorneles-laboratory' }],
      sidebar: [
        {
          label: 'Bem-vindo',
          items: [{ autogenerate: { directory: 'welcome' } }]
        },
        {
          label: 'Onboarding',
          items: [{ autogenerate: { directory: 'onboarding' } }]
        },
        {
          label: 'Arquitetura',
          items: [{ autogenerate: { directory: 'architecture' } }]
        },
        {
          label: 'Visão Geral',
          items: [{ autogenerate: { directory: 'visao-geral' } }]
        },
        {
          label: 'Projetos',
          items: [{ autogenerate: { directory: 'projetos' } }]
        },
        {
          label: 'Atas de Reuniões',
          items: [{ autogenerate: { directory: 'reunioes' } }]
        },
        {
          label: 'Planejamento',
          items: [{ autogenerate: { directory: 'planning' } }]
        },
        {
          label: 'Deploy & Infra',
          items: [{ autogenerate: { directory: 'deploy' } }]
        },
        {
          label: 'Processos',
          items: [{ autogenerate: { directory: 'processes' } }]
        },
        {
          label: 'Guias',
          items: [{ autogenerate: { directory: 'guides' } }]
        },
        {
          label: 'Templates',
          items: [{ autogenerate: { directory: 'templates' } }]
        },
        {
          label: 'Referências',
          items: [{ autogenerate: { directory: 'reference' } }]
        },
        {
          label: 'Utilitários',
          items: [{ autogenerate: { directory: 'utils' } }]
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