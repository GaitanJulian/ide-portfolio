import type { Project } from '../types';
import { bilingual as b } from '../i18n/copy';
import { professional } from './professional';
export const projects: Project[] = [
    {
        id: "urban-map-bucaramanga",
        fileId: "urban-map-bucaramanga",
        title: "Urban Map Bucaramanga",
        stack: ["React", "TypeScript", "NestJS", "TypeORM", "PostgreSQL", "PostGIS", "Leaflet", "Better Auth"],
        featured: true,
        eyebrow: b("Events / Full-stack", "Eventos / Full-stack"),
        description: b("Event discovery platform for Bucaramanga with a public map, proximity filters, organizer publishing, editorial moderation and role-based access.", "Plataforma de eventos de Bucaramanga con mapa público, filtros de proximidad, publicación para organizadores, moderación editorial y acceso por roles."),
        context: b("Portfolio project; current scope completed and runnable locally.", "Proyecto de portafolio; alcance actual finalizado y ejecutable en local."),
        status: b("Local demo with seed data. No documented production deployment.", "Demo local con datos de ejemplo. Sin despliegue productivo documentado."),
        role: '',
        focus: [b("Separate the approved-event public model from publishing and moderation workflows.", "Separar el modelo público de eventos aprobados de los flujos de publicación y moderación.")],
        decisions: [b("Separate the approved-event public model from publishing and moderation workflows.", "Separar el modelo público de eventos aprobados de los flujos de publicación y moderación.")],
        tradeoffs: b("A modular monolith simplifies local operation while requiring clear boundaries between domains.", "Un monolito modular simplifica la operación local y requiere límites claros entre dominios."),
        testing: b("Demo flows and seeds are documented. Automated tests, lint, CI/CD and production deployment are not documented as implemented.", "Se documentan flujos de demo y datos de ejemplo. No se documentan pruebas automatizadas, lint, CI/CD o despliegue productivo implementados."),
        evidence: b("Public repository documentation.", "Documentación pública del repositorio."),
        links: [{
                label: 'Repository',
                href: "https://github.com/GaitanJulian/urban-map-bucaramanga"
            }]
    },
    {
        id: "incidenthub",
        fileId: "incidenthub",
        title: "IncidentHub",
        stack: ["Node.js", "TypeScript", "Express", "Prisma", "PostgreSQL", "Docker", "React"],
        featured: true,
        eyebrow: b("Backend / Incident management", "Backend / Gestión de incidentes"),
        description: b("Incident-management API and dashboard with JWT authentication, roles, service management, comments, filtering and audit-oriented middleware.", "API y dashboard de gestión de incidentes con autenticación JWT, roles, gestión de servicios, comentarios, filtros y middleware orientado a auditoría."),
        context: b("Portfolio project for support, IT operations and service-management workflows.", "Proyecto de portafolio para soporte, operaciones TI y gestión de servicios."),
        status: b("Public repository. Deployment URLs are documented; current service availability has not been verified.", "Repositorio público. Hay URLs de despliegue documentadas; no se ha verificado la disponibilidad actual del servicio."),
        role: '',
        focus: [b("Scope incident and service operations through authenticated roles.", "Delimitar las operaciones de incidentes y servicios mediante roles autenticados.")],
        decisions: [b("Scope incident and service operations through authenticated roles.", "Delimitar las operaciones de incidentes y servicios mediante roles autenticados.")],
        tradeoffs: b("Roles and operational context add complexity compared with a small incident board.", "Los roles y el contexto operativo añaden complejidad frente a un tablero de incidentes sencillo."),
        testing: b("README documents a test command and OpenAPI endpoints. Tests were not executed as part of this portfolio review.", "El README documenta un comando de pruebas y endpoints OpenAPI. Las pruebas no se ejecutaron durante esta revisión del portafolio."),
        evidence: b("Public repository documentation.", "Documentación pública del repositorio."),
        links: [{
                label: 'Repository',
                href: "https://github.com/GaitanJulian/IncidentHub"
            }]
    },
    {
        id: "xr-thesis",
        fileId: "xr-thesis",
        title: "XR Medical Training Thesis",
        stack: ["Unity", "C#", "Node.js"],
        featured: true,
        eyebrow: b("XR / Academic thesis", "XR / Tesis de grado"),
        description: b("XR application for training medical interns in the postpartum hemorrhage procedure, including interaction flow, training data capture and API integration.", "Aplicación XR para entrenar a internos de medicina en el procedimiento de hemorragia postparto, con flujo de interacción, captura de datos e integración API."),
        context: b("Systems and Computer Engineering degree project, Universidad Industrial de Santander. Graduated March 2026.", "Proyecto de grado de Ingeniería de Sistemas e Informática, Universidad Industrial de Santander. Grado en marzo de 2026."),
        status: b("Academic project. No public build or formal user-evaluation results are attached.", "Proyecto académico. No se adjunta build público ni resultados de una evaluación formal con usuarios."),
        role: professional.thesisContribution,
        focus: [b("Integrate the XR training flow with the broader student application through an API.", "Integrar el flujo de entrenamiento XR con la aplicación general de estudiantes mediante una API.")],
        decisions: [b("Integrate the XR training flow with the broader student application through an API.", "Integrar el flujo de entrenamiento XR con la aplicación general de estudiantes mediante una API.")],
        tradeoffs: b("The application combines interactive training with data exchange; device details and user evaluation are not claimed.", "La aplicación combina entrenamiento interactivo e intercambio de datos; no se afirman detalles de hardware o evaluación con usuarios."),
        testing: b("No formal evaluation results or automated-test coverage have been supplied.", "No se han aportado resultados de evaluación formal ni cobertura de pruebas automatizadas."),
        evidence: b("Degree and personal contribution provided by the portfolio owner.", "Título y aportación personal aportados por el propietario del portafolio."),
        links: []
    },
    {
        id: "paymentflow",
        fileId: "paymentflow",
        title: "PaymentFlow",
        stack: ["Node.js", "TypeScript", "Express", "Prisma", "PostgreSQL", "Python", "FastAPI", "Docker"],
        featured: false,
        eyebrow: b("Microservices / Payments", "Microservicios / Pagos"),
        description: b("Portfolio payment simulation with a Node.js order service and a FastAPI payment provider, signed webhooks, explicit states, retries and PostgreSQL persistence.", "Simulación de pagos de portafolio con servicio de órdenes Node.js y proveedor FastAPI, webhooks firmados, estados explícitos, reintentos y persistencia PostgreSQL."),
        context: b("Backend portfolio project with separate order and payment services.", "Proyecto backend de portafolio con servicios separados de órdenes y pagos."),
        status: b("Public repository with a documented local Docker Compose setup.", "Repositorio público con configuración local documentada de Docker Compose."),
        role: '',
        focus: [b("Separate order processing from payment simulation and authenticate callbacks.", "Separar las órdenes de la simulación de pagos y autenticar los callbacks.")],
        decisions: [b("Separate order processing from payment simulation and authenticate callbacks.", "Separar las órdenes de la simulación de pagos y autenticar los callbacks.")],
        tradeoffs: b("Service separation makes responsibilities explicit but adds coordination and local orchestration.", "La separación de servicios hace explícitas sus responsabilidades, pero añade coordinación y orquestación local."),
        testing: b("README describes Jest tests for authentication and signed webhook workflows. Test execution and coverage were not independently verified.", "El README describe pruebas Jest para autenticación y flujos de webhooks firmados. No se verificaron de forma independiente su ejecución o cobertura."),
        evidence: b("Public repository documentation.", "Documentación pública del repositorio."),
        links: [{
                label: 'Repository',
                href: "https://github.com/GaitanJulian/PaymentFlow"
            }]
    },
    {
        id: "docuflow",
        fileId: "docuflow",
        title: "DocuFlow",
        stack: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "Celery", "Redis", "Docker"],
        featured: false,
        eyebrow: b("Backend / Async documents", "Backend / Documentos asíncronos"),
        description: b("Document backend with JWT authentication, uploads, PostgreSQL metadata, simulated asynchronous indexing through Celery/Redis, retries and administrator analytics.", "Backend documental con autenticación JWT, cargas, metadatos PostgreSQL, indexación asíncrona simulada mediante Celery/Redis, reintentos y analítica administrativa."),
        context: b("Portfolio/demo project. Indexing is simulated, as stated in the repository.", "Proyecto de portafolio y demo. La indexación es simulada, como indica el repositorio."),
        status: b("Public repository with Docker Compose instructions. No production deployment is claimed.", "Repositorio público con instrucciones de Docker Compose. No se afirma un despliegue productivo."),
        role: '',
        focus: [b("Move simulated indexing to background workers and track failed documents for retries.", "Ejecutar la indexación simulada en workers y registrar documentos fallidos para reintentos.")],
        decisions: [b("Move simulated indexing to background workers and track failed documents for retries.", "Ejecutar la indexación simulada en workers y registrar documentos fallidos para reintentos.")],
        tradeoffs: b("Background processing separates slow work from API requests while adding queue and worker operation.", "El procesamiento en segundo plano separa el trabajo lento de la API y añade operación de colas y workers."),
        testing: b("README documents a Docker-based Pytest command. Tests were not executed during this review.", "El README documenta un comando Pytest mediante Docker. Las pruebas no se ejecutaron durante esta revisión."),
        evidence: b("Public repository documentation.", "Documentación pública del repositorio."),
        links: [{
                label: 'Repository',
                href: "https://github.com/GaitanJulian/DocuFlow"
            }]
    },
    {
        id: "logistics",
        fileId: "logistics",
        title: "Logistics Data Pipeline",
        stack: ["Python", "Pandas", "SQLAlchemy", "PostgreSQL", "Docker"],
        featured: false,
        eyebrow: b("Data engineering / ETL", "Ingeniería de datos / ETL"),
        description: b("ETL simulation of logistics shipments with ingestion, transformation, data-quality checks, incremental upserts and a dimensional PostgreSQL warehouse.", "Simulación ETL de envíos logísticos con ingesta, transformación, controles de calidad, upserts incrementales y almacén dimensional PostgreSQL."),
        context: b("Portfolio project using simulated logistics operations.", "Proyecto de portafolio con operaciones logísticas simuladas."),
        status: b("Public repository and reproducible environment documented.", "Repositorio público y entorno reproducible documentado."),
        role: '',
        focus: [b("Validate data before warehouse loading and use incremental upserts for traceability.", "Validar los datos antes de cargarlos y usar upserts incrementales para su trazabilidad.")],
        decisions: [b("Validate data before warehouse loading and use incremental upserts for traceability.", "Validar los datos antes de cargarlos y usar upserts incrementales para su trazabilidad.")],
        tradeoffs: b("Validation and auditability add processing steps while improving the inspectability of analytical data.", "La validación y la trazabilidad añaden pasos y permiten inspeccionar mejor los datos analíticos."),
        testing: b("README describes validation rules and logging. No measured production outcomes or test coverage are claimed.", "El README describe reglas de validación y logging. No se afirman resultados productivos medidos o cobertura de pruebas."),
        evidence: b("Public repository documentation.", "Documentación pública del repositorio."),
        links: [{
                label: 'Repository',
                href: "https://github.com/GaitanJulian/Logistic-data-pipeline"
            }]
    },
    {
        id: "statusboard",
        fileId: "statusboard",
        title: "StatusBoard",
        stack: ["Node.js", "TypeScript", "Express", "React", "Prisma", "SQLite"],
        featured: false,
        eyebrow: b("Full-stack / Support demo", "Full-stack / Demo de soporte"),
        description: b("Compact incident-reporting dashboard with a React frontend, Express API, status updates and Prisma/SQLite persistence.", "Dashboard compacto de reportes de incidentes con frontend React, API Express, cambios de estado y persistencia Prisma/SQLite."),
        context: b("Portfolio support-workflow demo; narrower in scope than IncidentHub.", "Demo de flujos de soporte; alcance más acotado que IncidentHub."),
        status: b("Public repository. SQLite is confirmed by the Prisma schema; PostgreSQL is a roadmap item.", "Repositorio público. El esquema Prisma confirma SQLite; PostgreSQL figura como mejora futura."),
        role: '',
        focus: [b("Keep incident creation and state updates in a compact API-driven workflow.", "Mantener la creación y actualización de incidentes en un flujo compacto basado en API.")],
        decisions: [b("Keep incident creation and state updates in a compact API-driven workflow.", "Mantener la creación y actualización de incidentes en un flujo compacto basado en API.")],
        tradeoffs: b("A focused board is simpler to operate than IncidentHub, which documents broader service management and JWT/RBAC.", "Un tablero enfocado es más sencillo que IncidentHub, que documenta gestión de servicios y JWT/RBAC más amplios."),
        testing: b("README lists automated tests as future work. No test coverage or current deployment availability is claimed.", "El README incluye las pruebas automatizadas como trabajo futuro. No se afirma cobertura de pruebas ni disponibilidad actual del despliegue."),
        evidence: b("Public repository documentation.", "Documentación pública del repositorio."),
        links: [{
                label: 'Repository',
                href: "https://github.com/GaitanJulian/StatusBoard"
            }]
    },
];
export const projectById = Object.fromEntries(projects.map(project => [project.id, project]));
