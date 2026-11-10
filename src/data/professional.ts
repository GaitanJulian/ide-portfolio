import { bilingual as b } from '../i18n/copy';
export const professional = {
    name: 'Julián Andrés Gaitán Hernández',
    location: 'Bucaramanga, Colombia',
    role: b('Backend / Full-Stack Developer', 'Desarrollador Backend / Full-Stack'),
    availability: b('Available immediately · Fully remote', 'Disponibilidad inmediata · 100 % remoto'),
    email: 'juliangaitan_h@hotmail.com',
    github: 'https://github.com/GaitanJulian',
    linkedin: 'https://www.linkedin.com/in/gaitanjuliandev/',
    intro: b('Backend and full-stack developer with experience building Vue.js and Node.js applications, integrating APIs and conversational agents, maintaining production software, and evaluating LLM-generated code and data with international teams.', 'Desarrollador backend y full-stack con experiencia en aplicaciones Vue.js y Node.js, integración de APIs y agentes conversacionales, mantenimiento de software en producción y evaluación de código y datos generados por LLM con equipos internacionales.'),
    summary: b('Systems and Computer Engineering graduate with experience in full-stack web development, API integrations and technical evaluation of AI systems. Worked with Vue.js and Node.js on business applications, integrated conversational agents through the Meta/WhatsApp API, and maintained production software. International remote experience evaluating LLM-generated responses and code, executing tests and validating data quality.', 'Ingeniero de Sistemas e Informática con experiencia en desarrollo full-stack, integración de APIs y evaluación técnica de sistemas de IA. He trabajado con Vue.js y Node.js en aplicaciones empresariales, integrado agentes conversacionales mediante la API de Meta/WhatsApp y mantenido productos en producción. Cuento con experiencia remota internacional evaluando respuestas y código de LLM, ejecutando pruebas y verificando calidad de datos.'),
    degree: b('Systems and Computer Engineering', 'Ingeniería de Sistemas e Informática'),
    university: 'Universidad Industrial de Santander (UIS)',
    graduation: b('Graduated · March 2026', 'Graduado · Marzo de 2026'),
    languages: b('Spanish: native · English: self-reported C1, used professionally; no formal certificate', 'Español: nativo · Inglés: C1 declarado, utilizado profesionalmente; sin certificación formal'),
    thesis: b('Application for Training Medical Interns in the Postpartum Hemorrhage Procedure', 'Aplicación para el entrenamiento de internos de medicina en el procedimiento de hemorragia postparto'),
    thesisContribution: b('Programmed the complete XR application, interaction flow and training data capture; integrated an API to upload and export student information to the broader student application.', 'Programé la aplicación XR completa, su flujo de interacción y la captura de datos del entrenamiento; integré una API para cargar y exportar información hacia la aplicación general de estudiantes.'),
};
export const experience = [
    {
        company: 'Campuslands',
        role: b('Full-Stack Developer', 'Desarrollador Full-Stack'),
        period: b('May 2026 – November 2026 · Ended', 'Mayo de 2026 – Noviembre de 2026 · Finalizado'),
        context: b('Internship: May–June 2026. Formal employment: July–November 2026. Business applications and internal platforms.', 'Prácticas: mayo–junio de 2026. Contratación formal: julio–noviembre de 2026. Aplicaciones empresariales y plataformas internas.'),
        bullets: [
            b('Developed and maintained frontend and backend features with Vue.js and Node.js, implementing API integrations and business logic.', 'Desarrollé y mantuve funcionalidades frontend y backend con Vue.js y Node.js, implementando integraciones de APIs y lógica de negocio.'),
            b('Integrated conversational agents with WhatsApp through the Meta API to enable automated communication workflows.', 'Integré agentes conversacionales con WhatsApp mediante la API de Meta para habilitar flujos automatizados de comunicación.'),
            b('Participated in implementing and validating computer vision models for camera-based detection; diagnosed and fixed defects in production applications.', 'Participé en la implementación y validación de modelos de visión por computadora para detección mediante cámaras; diagnostiqué y corregí errores en aplicaciones en producción.'),
        ],
        technologies: ['Vue.js', 'Node.js', 'REST APIs', 'Meta / WhatsApp API', b('AI integrations', 'Integraciones de IA'), b('Computer vision', 'Visión por computadora')],
    },
    {
        company: 'Invisible',
        role: 'Software Engineer — AI Trainer',
        period: b('July 2024 – September 2025 · Remote', 'Julio de 2024 – Septiembre de 2025 · Remoto'),
        context: b('Technical evaluation of LLM-generated responses, code and structured outputs. Remote collaboration with international teams in English.', 'Evaluación técnica de respuestas, código y datos estructurados generados por LLM. Colaboración remota con equipos internacionales en inglés.'),
        bullets: [
            b('Evaluated LLM-generated responses and code against technical requirements and expected behavior.', 'Evalué respuestas y código generados por LLM frente a requisitos técnicos y comportamientos esperados.'),
            b('Executed test cases, reviewed and debugged code to identify logical errors, edge cases and functional failures.', 'Ejecuté casos de prueba, revisé y depuré código para identificar errores lógicos, casos límite y fallos funcionales.'),
            b('Checked accuracy, consistency and integrity of structured data; documented findings and technical feedback.', 'Verifiqué exactitud, consistencia e integridad de datos estructurados; documenté hallazgos y retroalimentación técnica.'),
        ],
        technologies: [b('LLM evaluation', 'Evaluación de LLM'), b('Code testing', 'Pruebas de código'), b('Data validation', 'Validación de datos')],
    },
];
export const capabilityGroups = [
    {
        title: b('Professional web development', 'Desarrollo web profesional'),
        context: 'Campuslands · 2026',
        items: ['Vue.js', 'JavaScript', 'Node.js', 'REST APIs']
    },
    {
        title: b('Professional AI integrations', 'Integraciones de IA profesionales'),
        context: 'Campuslands · 2026',
        items: ['Meta / WhatsApp API', b('Conversational agents', 'Agentes conversacionales'), b('Computer vision integration and validation', 'Integración y validación de visión por computadora')]
    },
    {
        title: b('AI evaluation and software quality', 'Evaluación de IA y calidad de software'),
        context: 'Invisible · 2024–2025',
        items: [b('LLM output and code evaluation', 'Evaluación de respuestas y código de LLM'), b('Test cases and debugging', 'Casos de prueba y depuración'), b('Data validation', 'Validación de datos')]
    },
    {
        title: b('Academic XR development', 'Desarrollo XR académico'),
        context: b('UIS thesis · Graduated March 2026', 'Tesis UIS · Grado en marzo de 2026'),
        items: ['Unity', 'C#', 'Node.js', b('API integration and training data capture', 'Integración API y captura de datos del entrenamiento')]
    },
    {
        title: b('Portfolio project technologies', 'Tecnologías de proyectos de portafolio'),
        context: b('See each case study for scope and evidence', 'Consulta el alcance y la evidencia en cada ficha'),
        items: ['React', 'TypeScript', 'NestJS', 'TypeORM', 'PostgreSQL / PostGIS', 'Leaflet', 'Better Auth', 'Express', 'Prisma', 'Python', 'Docker']
    },
    {
        title: b('Additional declared knowledge', 'Conocimientos adicionales declarados'),
        context: b('Specific project context not yet documented', 'Contexto concreto de uso aún no documentado'),
        items: ['Java', 'MySQL', 'MongoDB', 'Git', 'GitHub', 'GitLab']
    },
];
