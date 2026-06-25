import type { AiResponse } from '../types';

const responses: { match: string[]; response: AiResponse }[] = [
  {
    match: ['paymentflow', 'strongest', 'case study'],
    response: {
      text: 'PaymentFlow is the strongest backend case study. It documents service separation, authentication, webhook verification, retries and explicit order state transitions.',
      action: { label: 'Open PaymentFlow', fileId: 'paymentflow' },
    },
  },
  {
    match: ['backend projects', 'backend'],
    response: {
      text: 'The clearest backend-focused projects are PaymentFlow, IncidentHub, StatusBoard, Logistics Data Pipeline and DocuFlow.',
      action: { label: 'Open project database', fileId: 'systems' },
    },
  },
  {
    match: ['postgres', 'postgresql'],
    response: {
      text: 'PostgreSQL appears in PaymentFlow, Logistics Data Pipeline, IncidentHub and DocuFlow.',
      action: { label: 'Open capabilities.json', fileId: 'capabilities' },
    },
  },
  {
    match: ['fit', 'node.js', 'nodejs'],
    response: {
      text: 'The portfolio supports Node.js backend roles through projects using Node.js, TypeScript, Express, Prisma, PostgreSQL, authentication and API design. It does not claim unverified scale or seniority.',
      action: { label: 'Open experience.log', fileId: 'experience' },
    },
  },
  {
    match: ['ai tooling', 'ai experience', 'whisper', 'ollama'],
    response: {
      text: 'Julian’s AI tooling context includes LLM code evaluation and local AI workflows using LangGraph, Ollama, Faster-Whisper and retrieval-style patterns.',
      action: { label: 'Open experience.log', fileId: 'experience' },
    },
  },
  {
    match: ['contact', 'hire', 'email'],
    response: {
      text: 'Professional contact options are collected in contact.sh. The portfolio currently avoids publishing an unverified email address.',
      action: { label: 'Open contact.sh', fileId: 'contact' },
    },
  },
];

export function queryPortfolioContext(query: string): AiResponse {
  const normalized = query.toLowerCase();
  return (
    responses.find((entry) => entry.match.some((term) => normalized.includes(term)))?.response ?? {
      text: 'I can answer questions about Julian’s projects, stack and verified experience. Try asking about PaymentFlow, PostgreSQL, backend projects or AI tooling.',
    }
  );
}
