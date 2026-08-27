import { config, fields, collection } from '@keystatic/core';
import { mark } from '@keystatic/core/content-components';
import { createElement } from 'react';
import { Highlighter } from 'lucide-react';

// O schema é o mesmo para todos, centralizado para facilitar manutenção
const docSchema = {
  title: fields.slug({
    name: { label: 'Título da Página' },
  }),

  description: fields.text({
    label: 'Descrição Breve (Opcional)',
  }),

  content: fields.mdx({
    label: 'Conteúdo do Documento',
    components: {
      mark: mark({
        label: 'Destaque verde',
        icon: createElement(Highlighter),
        schema: {},
      }),
    },
  }),
};

export default config({
  storage: {
    kind: 'github',
    repo: 'dorneles-laboratory/wiki', // Confirme se o nome do repo está correto
  },

  ui: {
    brand: {
      name: 'Dorneles - Wiki',
      mark: () => {
        return createElement(
          'a',
          {
            href: 'https://wiki.dorneles.dev/welcome/guia-de-contribuicao',
            title: 'Voltar para a Documentação',
            style: {
              backgroundColor: '#059669',
              color: '#ffffff',
              padding: '4px 10px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '12px',
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              marginLeft: '12px',
              display: 'inline-block'
            },
          },
          'Acessar Doc ↗'
        );
      },
    },
    // Organização da barra lateral do painel Keystatic para não ficar poluída
    navigation: {
      '📌 Geral': [
        'welcome',
        'visaoGeral',
      ],
      '📖 Guias e Processos': [
        'guides',
        'processes',
      ],
      '🚀 Projetos e Submissões': [
        'projetos',
        'submissoes',
      ],
      '🛠️ Recursos': [
        'reference',
        'templates',
        'utils',
      ],
    },
  },

  collections: {
    welcome: collection({
      label: 'Bem-vindo',
      slugField: 'title',
      path: 'src/content/docs/welcome/**',
      format: { contentField: 'content' },
      schema: docSchema,
    }),

    visaoGeral: collection({
      label: 'Visão Geral',
      slugField: 'title',
      path: 'src/content/docs/visao-geral/**',
      format: { contentField: 'content' },
      schema: docSchema,
    }),

    guides: collection({
      label: 'Guias',
      slugField: 'title',
      path: 'src/content/docs/guides/**',
      format: { contentField: 'content' },
      schema: docSchema,
    }),

    processes: collection({
      label: 'Processos',
      slugField: 'title',
      path: 'src/content/docs/processes/**',
      format: { contentField: 'content' },
      schema: docSchema,
    }),

    projetos: collection({
      label: 'Projetos',
      slugField: 'title',
      // Permite criar e navegar nas pastas: ares, ares/fases, federal-status, nematodes, etc.
      path: 'src/content/docs/projetos/**',
      format: { contentField: 'content' },
      schema: docSchema,
    }),

    submissoes: collection({
      label: 'Submissões',
      slugField: 'title',
      // Permite as subpastas como projetos/ares/...
      path: 'src/content/docs/submissoes/**',
      format: { contentField: 'content' },
      schema: docSchema,
    }),

    reference: collection({
      label: 'Referências',
      slugField: 'title',
      path: 'src/content/docs/reference/**',
      format: { contentField: 'content' },
      schema: docSchema,
    }),

    templates: collection({
      label: 'Templates',
      slugField: 'title',
      path: 'src/content/docs/templates/**',
      format: { contentField: 'content' },
      schema: docSchema,
    }),

    utils: collection({
      label: 'Utilitários e Prompts',
      slugField: 'title',
      path: 'src/content/docs/utils/**',
      format: { contentField: 'content' },
      schema: docSchema,
    }),
  },
});