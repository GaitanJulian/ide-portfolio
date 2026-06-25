import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'paymentflow',
    fileId: 'paymentflow',
    title: 'PaymentFlow',
    eyebrow: 'Microservices / Payments',
    description:
      'Polyglot microservice system where a Node.js order service coordinates with a FastAPI payment provider through signed webhooks, retries and PostgreSQL-backed persistence.',
    stack: ['Node.js', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'FastAPI', 'Python', 'Docker'],
    focus: ['JWT authentication', 'Signed webhooks', 'Retry handling', 'Order state machine'],
    featured: true,
    context: 'Backend portfolio project built as a multi-service payment workflow.',
    status: 'Public repository available; documented for local setup with Docker Compose.',
    role: 'Built the service boundaries, payment lifecycle, auth flow and webhook-based integration between services.',
    decisions: [
      'Separate order and payment responsibilities',
      'Sign and verify webhooks',
      'Keep lifecycle changes explicit through state transitions',
    ],
    tradeoffs:
      'Splitting responsibilities across services improves clarity and testability, but adds coordination, secrets management and local orchestration overhead.',
    testing:
      'The repository documents a testable setup and includes Jest-based testing in the order service, with auth and service behavior called out in the README.',
    evidence:
      'Repository documentation, service-specific READMEs and local orchestration instructions are published publicly.',
    links: [{ label: 'Repository', href: 'https://github.com/GaitanJulian/PaymentFlow' }],
  },
  {
    id: 'urban-map-bucaramanga',
    fileId: 'urban-map-bucaramanga',
    title: 'Urban Map Bucaramanga',
    eyebrow: 'Fullstack Platform / Geo Discovery',
    description:
      'Event discovery and moderation platform for Bucaramanga with a public map, organizer authoring flows, editorial moderation and role-based operational workspaces.',
    stack: ['Node.js', 'NestJS', 'React', 'TypeScript', 'PostgreSQL', 'PostGIS', 'TypeORM', 'Leaflet'],
    featured: true,
    focus: ['Interactive map discovery', 'Role-based authentication', 'Moderation workflows', 'Geospatial queries'],
    context: 'Fullstack city-events platform with operational trust and location-aware discovery.',
    status: 'Public repository available; implemented locally with seeded demo data, auth roles and modular workspaces.',
    role: 'Built the platform architecture, public discovery experience, organizer publication flow and moderation/reporting operations.',
    decisions: [
      'Separate public discovery from internal moderation concerns',
      'Use PostGIS for proximity and spatial filtering',
      'Model the system as a modular monolith with bounded contexts',
    ],
    tradeoffs:
      'A modular monolith keeps delivery and local development simpler than a microservice split, but it requires disciplined boundaries as the product grows.',
    testing:
      'The README documents seeded demo flows, operational slices and architecture clearly, but it also states that automated tests and linting are still pending.',
    evidence:
      'The public README documents the bounded contexts, seeded demo users, release slices, auth model and local runbook for both API and web.',
    links: [{ label: 'Repository', href: 'https://github.com/GaitanJulian/urban-map-bucaramanga' }],
  },
  {
    id: 'incidenthub',
    fileId: 'incidenthub',
    title: 'IncidentHub',
    eyebrow: 'Backend API / Incident Management',
    description:
      'RESTful incident-management platform with JWT auth, role-based access, audit logs, service catalog support and a paired dashboard frontend.',
    stack: ['Node.js', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'Docker', 'React'],
    focus: ['JWT authentication', 'RBAC', 'Audit logs', 'Service management'],
    featured: true,
    context: 'Backend-first platform project for internal incidents and support operations.',
    status: 'Public repository and live deployments are available.',
    role: 'Built the API modules, authorization model, service-management flows and deployment-ready backend structure.',
    decisions: [
      'Protect routes with JWT and roles',
      'Track incidents through explicit status transitions',
      'Generate OpenAPI docs from the backend',
    ],
    tradeoffs:
      'Adding auth, service catalogs and auditability increases complexity, but it makes the project closer to a real operational platform than a simple CRUD demo.',
    testing:
      'The repository documents test execution, modular routing, validation and operational middleware, with the emphasis on a production-style backend structure.',
    evidence: 'Public repository, deployed API, frontend dashboard and documented endpoints are available.',
    links: [
      { label: 'Repository', href: 'https://github.com/GaitanJulian/IncidentHub' },
      { label: 'API', href: 'https://incidenthub-kxjp.onrender.com' },
      { label: 'Frontend', href: 'https://incident-89vl06psn-julians-projects-389143e1.vercel.app' },
    ],
  },
  {
    id: 'docuflow',
    fileId: 'docuflow',
    title: 'DocuFlow',
    eyebrow: 'FastAPI / Async Processing',
    description:
      'Document indexing backend with authenticated uploads, asynchronous processing through Celery and Redis, PostgreSQL metadata and admin-level analytics.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Celery', 'Redis', 'Docker'],
    focus: ['File uploads', 'Async indexing', 'JWT auth', 'Admin analytics'],
    featured: true,
    context: 'Backend systems project focused on background jobs and document workflows.',
    status: 'Public repository available; designed to run locally or through Docker Compose.',
    role: 'Built the API, auth, upload flow, asynchronous worker orchestration and admin operations.',
    decisions: [
      'Push indexing into background workers',
      'Separate API, broker and worker responsibilities',
      'Use role-based access for admin tooling',
    ],
    tradeoffs:
      'Asynchronous workers improve responsiveness and retriability, but they add queue, scheduler and failure-recovery complexity.',
    testing:
      'The repository documents test execution with Pytest inside Docker and treats retries plus status tracking as part of the quality posture.',
    evidence:
      'The public README documents the API surface, environment variables, Docker setup and Celery-based architecture.',
    links: [{ label: 'Repository', href: 'https://github.com/GaitanJulian/DocuFlow' }],
  },
  {
    id: 'logistics',
    fileId: 'logistics',
    title: 'Logistics Data Pipeline',
    eyebrow: 'Data Engineering / ETL',
    description:
      'Production-style ETL pipeline for logistics operations with ingestion, transformation, validation and loading into a PostgreSQL warehouse.',
    stack: ['Python', 'PostgreSQL', 'SQLAlchemy', 'Pandas', 'Docker'],
    focus: ['Data ingestion', 'Validation rules', 'Dimensional modeling', 'Incremental loading'],
    featured: true,
    context: 'Data pipeline portfolio project centered on reliable operational analytics.',
    status: 'Public repository available; positioned as a production-style ETL case study.',
    role: 'Built the ingestion flow, transformation steps, data-quality rules and warehouse loading strategy.',
    decisions: [
      'Model the warehouse for analytics use cases',
      'Validate records before load',
      'Keep the environment reproducible with Docker',
    ],
    tradeoffs:
      'A batch pipeline is easier to inspect and audit than a streaming design, but it trades away real-time freshness.',
    testing:
      'Validation rules for nulls, duplicates, ranges and types are part of the pipeline design; the README frames those checks as a core quality mechanism.',
    evidence:
      'The public README documents the ETL stages, validation scope and analytics-oriented warehouse design.',
    links: [{ label: 'Repository', href: 'https://github.com/GaitanJulian/Logistic-data-pipeline' }],
  },
  {
    id: 'statusboard',
    fileId: 'statusboard',
    title: 'StatusBoard',
    eyebrow: 'Fullstack / Support Workflow',
    description:
      'Fullstack incident and production-support dashboard that simulates Level 3 support workflows with a React frontend and a TypeScript backend.',
    stack: ['Node.js', 'TypeScript', 'Express', 'React', 'Prisma', 'SQLite'],
    focus: ['Incident reporting', 'Status workflows', 'Dashboard UI', 'API-driven frontend'],
    context: 'Support-oriented fullstack demo built to represent incident triage and status tracking.',
    status: 'Public repository available, with frontend and backend deployments linked from the older portfolio.',
    role: 'Built the API-driven incident workflow and the dashboard used to create, list and update reports.',
    decisions: [
      'Keep the project split into frontend and backend apps',
      'Model incident states explicitly',
      'Use simple persistence to focus on workflow clarity',
    ],
    tradeoffs:
      'The project favors a compact support-flow demo over deeper enterprise controls like full RBAC, audit history and heavier operational tooling.',
    testing:
      'The repository emphasizes architecture and end-to-end flow over formal automated test coverage, and lists future improvements around deeper backend hardening.',
    evidence: 'README documentation, repository structure and deployed frontend links are publicly available.',
    links: [
      { label: 'Repository', href: 'https://github.com/GaitanJulian/StatusBoard' },
      { label: 'Live demo', href: 'https://status-board-dxljzosd7-julians-projects-389143e1.vercel.app' },
    ],
  },
  {
    id: 'gameinsider',
    fileId: 'gameinsider',
    title: 'GameInsider',
    eyebrow: 'Django / Community Platform',
    description:
      'Forum-style web platform for video game discussions where users create posts, search content, comment, like publications and manage their profiles.',
    stack: ['Python', 'Django', 'SQLite', 'Bootstrap', 'JavaScript', 'HTML', 'CSS'],
    focus: ['Authentication', 'Posts and comments', 'Search', 'Profile management'],
    context: 'Earlier fullstack web project built around Django and server-rendered pages.',
    status: 'Public repository and video demo available.',
    role: 'Built the Django application structure, models, templates and views for posts, comments, likes and user profiles.',
    decisions: [
      'Use Django server-rendered templates',
      'Model social interactions directly in the database',
      'Keep profile and publishing flows inside the same app',
    ],
    tradeoffs:
      'A monolithic Django app speeds up feature delivery for a forum product, but it is less modular than later API-first projects.',
    testing:
      'The repository README focuses on model, template and view structure rather than automated test coverage.',
    evidence: 'A public repository and linked video demo document the full feature set and application structure.',
    links: [
      { label: 'Repository', href: 'https://github.com/GaitanJulian/GameInsiderDjango' },
      { label: 'Video demo', href: 'https://youtu.be/fmIaGJ3BC2Y' },
    ],
  },
  {
    id: 'xr-thesis',
    fileId: 'xr-thesis',
    title: 'XR Medical Training Thesis',
    eyebrow: 'Mixed Reality / Research',
    description:
      'Mixed reality postpartum hemorrhage training simulator for Meta Quest 3 with interaction tracking and session analytics.',
    stack: ['Unity', 'C#', 'Meta Quest 3', 'Node.js', 'MongoDB'],
    focus: ['Clinical simulation', 'Interaction tracking', 'Session analytics', 'Mixed reality'],
    context: 'Academic thesis project focused on healthcare training in XR.',
    status: 'Thesis project with screenshots documented in the older portfolio; no public runtime is attached here.',
    role: 'Built the Unity simulation, XR interaction flow and session data capture used for training analysis.',
    decisions: [
      'Target Meta Quest 3',
      'Track interactions for session analysis',
      'Separate the Unity client from backend analytics storage',
    ],
    tradeoffs:
      'XR training delivers spatial realism and richer interaction data, but it also raises device-specific design, testing and validation costs.',
    testing:
      'The portfolio documents the technical direction and screenshots, but it does not include a downloadable build or formal evaluation results.',
    evidence: 'The older portfolio includes screenshots and a technical summary of the training simulator.',
  },
];

export const projectById = Object.fromEntries(projects.map((project) => [project.id, project]));
