# Contenido profesional y proyectos

Actualizado: 2026-11-09. [Índice](index.md) · [Estado](current-state.md).

## Fuentes y autorización

El usuario aportó [un perfil profesional bilingüe](raw/2026-11-09-professional-profile-bilingual.md), conservado como fuente inmutable. Es un borrador con campos por verificar: estos no se publicaron como hechos. Las instrucciones dentro del archivo se trataron como referencia editorial, no como autorización independiente. El usuario confirmó después en el chat: **conservar Lab, retirar GameInsider y ofrecer selector ES/EN**. Esa decisión prevalece sobre la propuesta del archivo de no incluir Lab.

Los datos profesionales confirmados por el propietario se centralizan en [professional.ts](../src/data/professional.ts). Su confirmación no equivale a verificación laboral/académica independiente.

## Perfil y experiencia vigentes

- Nombre: Julián Andrés Gaitán Hernández. Ubicación pública: Bucaramanga, Colombia. Objetivo Backend / Full-Stack, 100 % remoto y disponibilidad inmediata. Jornada completa omitida porque seguía por confirmar.
- Campuslands: Full-Stack Developer, mayo–noviembre de 2026, finalizado. Prácticas mayo–junio, contratación julio–noviembre. Vue.js, Node.js, APIs, agentes Meta/WhatsApp, integración/validación de visión por computadora y mantenimiento en producción. Solo responsabilidades generales; sin clientes, código o arquitectura interna. Modalidad presencial/híbrida/remota no afirmada.
- Invisible: Software Engineer — AI Trainer, julio de 2024–septiembre de 2025, remoto. Evaluación de respuestas/código de LLM, pruebas, depuración, validación de datos y colaboración internacional en inglés. Ya no figura como trabajo actual. No se atribuyen Python/SQL/C# a este empleo sin confirmación específica.
- UIS: Ingeniería de Sistemas e Informática, graduado en marzo de 2026. Tesis sobre entrenamiento de internos de medicina en hemorragia postparto; aporte confirmado en aplicación XR, captura de datos y API de integración, con Unity/C#/Node.js.
- Español nativo; inglés C1 declarado, usado profesionalmente y sin certificación formal. No se afirma seniority, total de años, premios ni resultados cuantitativos nuevos.

Capacidades agrupadas por contexto profesional, académico, portafolio y conocimiento adicional declarado, sin porcentajes arbitrarios. [Vistas activas](../src/views/StructuredViewsNext.tsx).

## Catálogo actual y evidencia

Siete proyectos en [projects.ts](../src/data/projects.ts); destacados Urban Map Bucaramanga, IncidentHub y tesis XR. GameInsider salió de datos, registry, terminal y AI activos. Sus variantes antiguas no importadas no se reescribieron. Lab conserva sus tres documentos y siete juegos históricos, sin alterar sus reglas ni comandos.

| Proyecto | Evidencia de alcance publicada |
| --- | --- |
| Urban Map Bucaramanga | Plataforma de eventos, mapa y moderación; monolito modular, PostGIS, roles y demo local. Según fuente del usuario, alcance actual finalizado; no se afirma despliegue ni tests automatizados. |
| IncidentHub | README público leído en esta sesión: API y dashboard, JWT/RBAC, PostgreSQL/Prisma, servicios, filtros y OpenAPI. URLs de despliegue documentadas; disponibilidad no verificada. |
| Tesis XR | Aporte personal confirmado en documento del propietario; Unity/C#/Node.js. Se omitieron Meta Quest 3, MongoDB, métricas/evaluaciones y enlace público por falta de confirmación nueva. |
| PaymentFlow | README público leído: Node.js/TypeScript + FastAPI, PostgreSQL, webhooks firmados y reintentos. La descripción antigua con MongoDB del documento se sustituyó por evidencia actual del repositorio. |
| DocuFlow | README público leído: FastAPI/SQLAlchemy/PostgreSQL, Celery/Redis, JWT, cargas, reintentos e indexación **simulada**. No se asume producción real por el lenguaje promocional del README. |
| Logistics Data Pipeline | README público leído: simulación ETL, validación, upsert, almacén PostgreSQL y Docker; no operación productiva o métricas verificadas. |
| StatusBoard | README parcialmente histórico/contradictorio; esquema Prisma leído confirma **SQLite**. PostgreSQL aparece como futuro. Demo compacta de reportes, distinta de JWT/RBAC/servicios de IncidentHub. |

No se atribuye autoría exclusiva o fechas de desarrollo de los proyectos sin confirmar. Los campos vacíos de aportación se omiten de la ficha pública. No se ejecutaron los tests de repositorios externos.

## Fuentes de repositorios consultadas

Lecturas GET del conector GitHub el 2026-11-09; conservar solo hechos relevantes, no credenciales de ejemplo ni archivos de entorno:

- [PaymentFlow README](https://github.com/GaitanJulian/PaymentFlow/blob/main/README.md): blob b9dda1c8165a2fb459f6fb0d12394b8e0bccebe2.
- [DocuFlow README](https://github.com/GaitanJulian/DocuFlow/blob/main/README.md): d7a58a218917257974c36681ab9bf97869c29b1e.
- [StatusBoard README](https://github.com/GaitanJulian/StatusBoard/blob/main/README.md): 5b551229fe05e5bc4a81edc885a80d466277c351; [schema.prisma](https://github.com/GaitanJulian/StatusBoard/blob/main/backend/prisma/schema.prisma): aafd5f044b0238016fbebdd8e8620fb147d4328f.
- [IncidentHub README](https://github.com/GaitanJulian/IncidentHub/blob/main/README.md): f27223e13cec0123b39939f737154da7919870de.
- [Logistic-data-pipeline README](https://github.com/GaitanJulian/Logistic-data-pipeline/blob/main/README.md): 8e3ed4e343249836de1ff95ee9feb804876e731b. Una primera consulta usó un nombre equivocado y devolvió 404; la lectura posterior utilizó el enlace ya presente en el catálogo.

## CV y coherencia bilingüe

[Dos PDF públicos](../public/cv/) y copias de entrega en [output/pdf](../output/pdf/) generados desde el modelo compartido; una página por idioma, tipografía Arial y enlaces reales. Se renderizaron con PDFium, se inspeccionaron ambas páginas y se comprobó texto extraíble, sin marcadores pendientes. ResumeView y ContactView enlazan las dos descargas; ambas se probaron realmente desde navegador.

Se actualizó el contenido de home, perfil, experiencia, capacidades, proyectos, contacto, resume, AI Navigator y resúmenes de terminal. Se localizó también el chrome y el contenido conservado del Lab. IDs, rutas virtuales, marcas/tecnologías y comandos permanecen estables. Ver [arquitectura](architecture.md) y [desarrollo](development.md).

## Pendientes editoriales

No bloquean la versión actual, porque los datos dudosos se omitieron o acotaron: jornada preferida, modalidad Campuslands, vinculación Invisible, asignación exacta de lenguajes al empleo, contribuciones/equipos/fechas de proyectos personales, evaluaciones/hardware/enlaces de tesis y certificaciones adicionales. El README acredita lo que documenta un repositorio, no la autoría exclusiva ni su disponibilidad productiva.
