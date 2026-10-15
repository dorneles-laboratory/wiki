---
title: Backlog Central do Ecossistema
description: Itens de backlog, melhorias arquiteturais e novas funcionalidades planejadas para o ecossistema.
---

# Backlog Central do Ecossistema

> Este documento centraliza os itens de backlog, melhorias arquiteturais e novas funcionalidades planejadas para os projetos do Dorneles Laboratory.
> Para o fluxo operacional de desenvolvimento, consulte o [Fluxo de Trabalho](/processes/fluxo-de-trabalho).

---

## 🔴 Alta Prioridade (Em Andamento / Próxima Sprint)

- [ ] **Cortex:** Finalizar integração do módulo JEV com alias `jev-decision` no LiteLLM Proxy.
- [ ] **Sentinel:** Configurar pipeline de quarentena / DLQ para editais com confiança inferior a 0.65.
- [ ] **Acad:** Migrar chamadas conversacionais do Copiloto para o endpoint unificado `POST /api/copilot/chat` do Cortex.
- [ ] **Identity:** Ativar fluxos de autorização Authorization Code com PKCE para os frontends React.
- [ ] **CMS:** Finalizar cache local de mídias no player web para exibição contínua offline em totens.

---

## 🟡 Média Prioridade (Planejadas)

- [ ] **Cortex:** Implementar extensão `pgvector` e migração de tabelas de embeddings dos 3 pilares acadêmicos.
- [ ] **FederalStatus:** Expandir sondas automáticas para portais de bibliotecas e SIGAA de 10 novas universidades federais.
- [ ] **Health:** Criar painel visual de topologia e gráfico de dependências entre microsserviços.
- [ ] **PGI-PROA:** Adicionar relatórios consolidados de horas por sprint em PDF para prestação de contas.
- [ ] **Sulflux:** Integrar recepção de telemetria de sensores de nível de rios via MQTT e LoRaWAN.
- [ ] **Network:** Adicionar módulo de decodificação automática de pacotes PCAP na interface web.

---

## 🟢 Baixa Prioridade & Melhorias Contínuas

- [ ] **Wiki:** Adicionar busca semântica integrada e refinamento contínuo dos guias.
- [ ] **Shared:** Gerar documentação OpenAPI estática unificada a partir dos registries Zod.
- [ ] **DevOps:** Parametrizar dashboards do Grafana/Jaeger para métricas consolidadas de latência p99.
- [ ] **Design System:** Evoluir componentes comuns em CSS Modules compartilháveis entre os frontends.

---

## ✅ Itens Concluídos Recentemente

- [x] Unificação dos mapas de portas em `PORTS.md` com host ports dedicadas por microsserviço.
- [x] Padronização das respostas de erro HTTP em conformidade com a RFC 7807 (Problem Details).
- [x] Configuração de OpenTelemetry SDK e instrumentação Pino em todos os backends Express 5.
- [x] Criação da documentação arquitetural do ecossistema e especificação detalhada de todos os projetos na Wiki.
