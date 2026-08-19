import { config, fields, collection } from '@keystatic/core';

// Schema base reutilizável para manter os arquivos padronizados para o Starlight
const docSchema = {
  title: fields.slug({ name: { label: 'Título da Página' } }),
  description: fields.text({ label: 'Descrição Breve (Opcional)' }),
  content: fields.mdx({ label: 'Conteúdo do Documento' }),
};

export default config({
  // No desenvolvimento local, salva direto no seu SSD.
  // Quando subirmos para Vercel/Cloudflare, mudaremos para 'github'.
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
    visaoGeral: collection({
      label: 'Visão Geral',
      slugField: 'title',
      path: 'src/content/docs/visao-geral/*',
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
    padroes: collection({
      label: 'Padrões e Arquitetura',
      slugField: 'title',
      path: 'src/content/docs/padroes/*',
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
    pgiProa: collection({
      label: 'Projeto: PGI-PROA',
      slugField: 'title',
      path: 'src/content/docs/projetos/pgi-proa/*',
      format: { contentField: 'content' },
      schema: docSchema,
    }),
    nexusSm: collection({
      label: 'Projeto: Nexus SM',
      slugField: 'title',
      path: 'src/content/docs/projetos/nexus-sm/*',
      format: { contentField: 'content' },
      schema: docSchema,
    }),
    srmTau: collection({
      label: 'Projeto: SRM',
      slugField: 'title',
      path: 'src/content/docs/projetos/srm/*',
      format: { contentField: 'content' },
      schema: docSchema,
    }),
    academicCompanion: collection({
      label: 'Projeto: Academic Companion',
      slugField: 'title',
      path: 'src/content/docs/projetos/academic-companion/*',
      format: { contentField: 'content' },
      schema: docSchema,
    }),
    infraestrutura: collection({
      label: 'Infraestrutura',
      slugField: 'title',
      path: 'src/content/docs/infraestrutura/*',
      format: { contentField: 'content' },
      schema: docSchema,
    }),
  },
});