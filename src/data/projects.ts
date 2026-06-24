import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'paymentflow',
    fileId: 'paymentflow',
    title: 'PaymentFlow',
    eyebrow: 'Microservices · Payments',
    description:
      'Microservices-based payment and order system with authentication, webhooks, retries and explicit state transitions.',
    stack: ['Node.js', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'FastAPI', 'Python', 'Docker'],
    focus: ['Authentication', 'Webhook verification', 'Retry handling', 'State machines'],
    featured: true,
  },
  {
    id: 'logistics',
    fileId: 'logistics',
    title: 'Logistics Data Pipeline',
    eyebrow: 'Data Engineering · ETL',
    description:
      'ETL and data warehouse project for shipment analytics, data quality checks and dimensional modeling.',
    stack: ['Python', 'PostgreSQL', 'SQLAlchemy', 'Pandas', 'Docker'],
    focus: ['ETL', 'Data quality', 'Dimensional modeling', 'Shipment analytics'],
    featured: true,
  },
  {
    id: 'incidenthub',
    fileId: 'incidenthub',
    title: 'IncidentHub / StatusBoard',
    eyebrow: 'Production Support · Platform',
    description:
      'Incident management and production support dashboard with authentication, RBAC, audit logs and a service catalog.',
    stack: ['Node.js', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'React'],
    focus: ['Authentication', 'RBAC', 'Audit logs', 'Service catalog'],
    featured: true,
  },
  {
    id: 'meeting-memory',
    fileId: 'meeting-memory',
    title: 'Meeting Memory AI',
    eyebrow: 'Local AI · Knowledge Workflows',
    description:
      'Local meeting transcription and memory system using Whisper, LangGraph, Ollama and retrieval-style workflows.',
    stack: ['Python', 'LangGraph', 'Ollama', 'Faster-Whisper', 'Local AI tooling'],
    focus: ['Transcription', 'Meeting memory', 'Local inference', 'Retrieval workflows'],
  },
  {
    id: 'b2b',
    fileId: 'b2b',
    title: 'B2B Matchmaking Platform',
    eyebrow: 'Backend · Automation',
    description:
      'Platform connecting buyers and sellers through matching logic, authentication, company profiles and external automation providers.',
    stack: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'React', 'n8n integration'],
    focus: ['Profiles', 'Matching logic', 'Authentication', 'Workflow automation'],
  },
  {
    id: 'xr-thesis',
    fileId: 'xr-thesis',
    title: 'XR Medical Training Thesis',
    eyebrow: 'Mixed Reality · Research',
    description:
      'Mixed reality postpartum hemorrhage training simulator for Meta Quest 3 with interaction tracking and session analytics.',
    stack: ['Unity', 'C#', 'Meta Quest 3', 'Node.js', 'MongoDB'],
    focus: ['Clinical simulation', 'Interaction tracking', 'Session analytics', 'Mixed reality'],
  },
];

export const projectById = Object.fromEntries(projects.map((project) => [project.id, project]));
