# Decisiones y criterios

Actualizado: 2026-11-09. [Índice](index.md) · [Pendientes](open-questions.md).

No se encontró un historial formal de decisiones del frontend. Las siguientes son elecciones observadas, sin atribuirles fecha original, autor o motivaciones no documentadas.

| ID | Estado y elección | Evidencia e implicación |
| --- | --- | --- |
| OBS-01 | Observada: organizar el portafolio como IDE. | [Intención del usuario](raw/2026-11-09-project-intent.md) y [App](../src/App.tsx). Archivos y comandos son metáforas de navegación. |
| OBS-02 | Observada: registry central y datos estáticos de proyectos. | [fileRegistry](../src/data/fileRegistry.tsx), [projects](../src/data/projects.ts). Nuevas entradas deben mantener IDs, renderers y navegación coherentes. |
| OBS-03 | Observada: terminal local separada del AI. | [TerminalPanelNext](../src/components/TerminalPanelNext.tsx), [AiNavigator](../src/components/AiNavigator.tsx), [servicio local](../src/services/aiNavigator.ts). Ninguno requiere un servidor propio. |
| OBS-04 | Observada: overlay único en móvil. | [App](../src/App.tsx). Se evita coexistencia de explorer/terminal/AI en ese modo. |
| OBS-05 | Observada: runtime Unity externo y decoración CSS. | [LabViews](../src/views/LabViews.tsx), [CyberpunkBackground](../src/components/CyberpunkBackground.tsx). La vista launcher explica que evita cargar un runtime grande en la sesión principal. |
| OBS-06 | Observada: arquitectura integrada en fichas y entradas genéricas ocultas. | [ProjectDetail](../src/views/ProjectDetail.tsx), [registry](../src/data/fileRegistry.tsx), terminal. No hay acceso de Architecture en el rail actual. |
| DOC-01 | Adoptada en esta tarea: wiki Markdown enlazada en `wiki/`. | [Solicitud](raw/2026-11-09-project-intent.md) y [esquema](AGENTS.md). Se separan fuentes, síntesis, estado e historial sin añadir infraestructura. |

Las etiquetas `ADR-*` de [ArchitectureViews](../src/views/ArchitectureViews.tsx) son contenido profesional de la UI acerca de principios de sistemas. No usarlas como registros históricos de decisiones del desarrollo de este frontend. Las tarjetas ADR de PaymentFlow también pertenecen al caso de estudio.

La [auditoría histórica](../audit/AUDIT_REPORT.md) recomienda contenido sin métricas ni seniority inventados. Se conserva como criterio editorial con esa atribución; no demuestra que toda la UI actual lo cumpla. Las capacidades activas ahora tienen señales numéricas que requieren aclaración, y los enlaces «Verified» son una etiqueta del producto, no una certificación de esta wiki.

Si se sustituye una elección, conservar su entrada, marcarla como sustituida y enlazar la nueva decisión con evidencia. No convertir recomendaciones de la auditoría o de esta wiki en desarrollo autorizado.
