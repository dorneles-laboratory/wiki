import { config, fields, collection } from '@keystatic/core';

// Schema base reutilizável para manter os arquivos padronizados para o Starlight
const docSchema = {
  title: fields.slug({ name: { label: 'Título da Página' } }),
  description: fields.text({ label: 'Descrição Breve (Opcional)' }),
  content: fields.mdx({ label: 'Conteúdo do Documento' }),
};

export default config({
  storage: {
    kind: 'github',
    repo: 'dorneles-laboratory/wiki',
  },
  ui: {
    brand: { name: 'Dorneles - Wiki' },
  },
  collections: {
    welcome: collection({
      label: 'Bem-vindo',
      slugField: 'title',
      path: 'src/content/docs/welcome/*',
      format: { contentField: 'content' },
      schema: docSchema,
    }),
    guides: collection({
      label: 'Guias',
      slugField: 'title',
      path: 'src/content/docs/guides/*',
      format: { contentField: 'content' },
      schema: docSchema,
    }),
    processes: collection({
      label: 'Processos',
      slugField: 'title',
      path: 'src/content/docs/processes/*',
      format: { contentField: 'content' },
      schema: docSchema,
    }),
    reference: collection({
      label: 'Referências',
      slugField: 'title',
      path: 'src/content/docs/reference/*',
      format: { contentField: 'content' },
      schema: docSchema,
    }),
    templates: collection({
      label: 'Templates',
      slugField: 'title',
      path: 'src/content/docs/templates/*',
      format: { contentField: 'content' },
      schema: docSchema,
    }),
    utils: collection({
      label: 'Utilitários e Prompts',
      slugField: 'title',
      path: 'src/content/docs/utils/*',
      format: { contentField: 'content' },
      schema: docSchema,
    }),
    visaoGeral: collection({
      label: 'Visão Geral',
      slugField: 'title',
      path: 'src/content/docs/visao-geral/*',
      format: { contentField: 'content' },
      schema: docSchema,
    }),
    ares: collection({
      label: 'Projeto: Ares',
      slugField: 'title',
      path: 'src/content/docs/projetos/ares/*',
      format: { contentField: 'content' },
      schema: docSchema,
    }),  
    aresTasks: collection({
      label: 'Projeto: Ares - Fases',
      slugField: 'title',
      path: 'src/content/docs/projetos/ares/fases/*',
      format: { contentField: 'content' },
      schema: docSchema,
    }),   
    aresFiles: collection({
      label: 'Projeto: Ares - Arquivos',
      slugField: 'title',
      path: 'src/content/docs/projetos/ares/files/*',
      format: { contentField: 'content' },
      schema: docSchema,
    }), 
  },
});