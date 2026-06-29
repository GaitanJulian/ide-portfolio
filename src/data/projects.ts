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
    notes: [
      { title: 'Service boundaries', description: 'Auth, order orchestration, payment execution and webhook intake stay isolated so failures and changes remain local.' },
      { title: 'Order state transitions', description: 'The workflow keeps named states across creation, payment, confirmation and failure paths instead of relying on implicit flags.' },
      { title: 'Webhook validation', description: 'Incoming provider callbacks are authenticated before touching order state, which keeps external traffic outside trusted paths.' },
      { title: 'Retry handling', description: 'Recoverable provider failures follow controlled retry paths instead of hidden duplicate execution.' },
      { title: 'Auth boundaries', description: 'Token-based access is kept in the authenticated edge so payment operations stay protected without mixing concerns.' },
      { title: 'Testing strategy', description: 'Service behavior, route contracts and transition logic are framed as boundary-level tests instead of only UI checks.' },
    ],
    qualitySignals: ['Signed provider inputs', 'Explicit state machine', 'Retry-aware failure paths', 'Boundary-level tests'],
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
    notes: [
      { title: 'Bounded contexts', description: 'Public discovery, organizer authoring, moderation and reporting are kept separate even inside a single deployable codebase.' },
      { title: 'Role boundaries', description: 'Public visitors, organizers and moderators interact with different capabilities and operational views.' },
      { title: 'Editorial trust', description: 'Moderation and reporting flows exist to keep discovery quality from collapsing into unreviewed public submissions.' },
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
    notes: [
      { title: 'RBAC boundaries', description: 'Protected routes and role checks keep operational actions scoped to the right actors instead of exposing a flat admin surface.' },
      { title: 'Audit logs', description: 'Incident and service actions are tracked so operational history can be inspected after updates happen.' },
      { title: 'Service catalog', description: 'Incidents are tied to managed services rather than free-form labels, which makes support context more consistent.' },
      { title: 'Incident lifecycle', description: 'Status transitions are explicit so triage, progress and closure states remain understandable.' },
      { title: 'Dashboard visibility', description: 'The paired frontend reflects the API structure instead of hiding backend concepts behind an opaque UI.' },
    ],
    qualitySignals: ['JWT-protected routes', 'Role-aware operations', 'Tracked incident history', 'Documented API contracts'],
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
    notes: [
      { title: 'Async boundaries', description: 'Upload handling, queue coordination and document indexing stay separate so slower work does not block request-response paths.' },
      { title: 'Failure recovery', description: 'Background processing is treated as a recoverable workflow with status visibility instead of a blind fire-and-forget task.' },
      { title: 'Admin controls', description: 'Analytics and operational views are bounded away from standard user flows through authenticated roles.' },
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
    notes: [
      { title: 'ETL boundaries', description: 'Ingestion, transformation, validation and warehouse loading are separated into inspectable stages instead of one opaque script.' },
      { title: 'Data quality checks', description: 'Null, duplicate, range and type validation run before loading so broken operational records do not quietly enter the warehouse.' },
      { title: 'Upserts and dimensional modeling', description: 'The warehouse is shaped for analytics use cases with repeatable loads instead of append-only raw dumps.' },
      { title: 'Failure handling', description: 'The batch design favors traceable reruns and explicit stage failures over hidden partial success.' },
      { title: 'Reproducible runs', description: 'Dockerized setup keeps local execution and reruns consistent across environments.' },
    ],
    qualitySignals: ['Validated before load', 'Warehouse-oriented schema', 'Repeatable batch runs', 'Failure visibility by stage'],
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
    notes: [
      { title: 'Incident lifecycle', description: 'The project stays centered on explicit report states so triage and updates remain visible in the dashboard.' },
      { title: 'Dashboard visibility', description: 'Frontend views map directly to backend status operations instead of masking the operational workflow.' },
      { title: 'Support workflow scope', description: 'The design favors a compact support board over broader enterprise controls such as full audit history or heavier RBAC.' },
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
    notes: [
      { title: 'Interaction tracking', description: 'The simulation captures user actions so sessions can be reviewed as more than a visual prototype.' },
      { title: 'Session analytics', description: 'Captured data is structured for later analysis rather than treated as disposable runtime telemetry.' },
      { title: 'Unity and XR architecture', description: 'XR interaction flow stays in the Unity client while analytics storage remains separate to keep responsibilities clear.' },
      { title: 'Academic prototype context', description: 'This remains a thesis-grade technical prototype, not a claimed production medical platform.' },
    ],
    qualitySignals: ['Quest-targeted interaction design', 'Tracked training sessions', 'Separated analytics storage', 'Research-oriented scope'],
    tradeoffs:
      'XR training delivers spatial realism and richer interaction data, but it also raises device-specific design, testing and validation costs.',
    testing:
      'The portfolio documents the technical direction and screenshots, but it does not include a downloadable build or formal evaluation results.',
    evidence: 'The older portfolio includes screenshots and a technical summary of the training simulator.',
  },
];

export const projectById = Object.fromEntries(projects.map((project) => [project.id, project]));
