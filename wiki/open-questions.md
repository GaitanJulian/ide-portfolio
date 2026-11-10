# Pendientes y preguntas abiertas

Actualizado: 2026-11-09. [Índice](index.md) · [Estado](current-state.md).

Estos puntos son propuestas, no un encargo de implementación. La mejora visual del 2026-11-09 resolvió la línea base y el breakpoint; los pendientes funcionales/editoriales permanecen fuera de alcance.

## Prioridad propuesta

1. **Completar CV real.** [ResumeView](../src/views/ResumeView.tsx) y [ContactView](../src/views/ContactView.tsx) declaran que falta. Se necesita el archivo aprobado y conectar una descarga; no basta con añadirlo a `public/`.
2. **Línea base actual completada.** Build, TypeScript, navegador y capturas nuevos en la mejora visual. Ver cobertura y límites en [desarrollo](development.md). Aún faltan revisión de enlaces externos y otros navegadores antes de certificar publicación.
3. **Confirmar contenido profesional y respaldo de proyectos.** La experiencia «actual», C1, roles, estados de despliegue y pruebas proceden del JSX/datos. Algunas referencias apuntan al portafolio anterior, excluido y ausente localmente. Confirmar fuentes sin inventar métricas ni tratar «production-minded» como operación en producción.
4. **Aclarar señales numéricas de capacidades.** `CapabilitiesViewNext` usa números/barras y disclaimer, pero el registry y vista anterior hablan de no usar porcentajes arbitrarios. Decidir con el usuario qué presentación desea y mantener el lenguaje consistente.
5. **Revisar bordes de UX y mantenimiento.** La mejora visual alineó CSS con JavaScript por debajo de 760 px y verificó 759/760/761, foco de tabs/palette y restauración al cerrar la última. App y storage no incluyen manejo de excepciones al acceder a `localStorage`; comprobar entornos restringidos si ese soporte es relevante.
6. **Resolver duplicación cuando se autorice trabajo técnico.** Hay variantes activas `Next` y archivos anteriores aún presentes. El README apunta a la terminal anterior. AI y terminal contienen resúmenes manuales que pueden divergir del catálogo (por ejemplo, la respuesta PostgreSQL no enumera Urban Map). No eliminarlos ni refactorizar durante esta documentación.

## Auditoría histórica frente al código actual

Fuente histórica: [AUDIT_REPORT.md, 2026-06-24](../audit/AUDIT_REPORT.md). Comparación por código al 2026-11-09; las comprobaciones actuales de ejecución se detallan en [desarrollo](development.md):

| Hallazgo histórico | Evidencia actual |
| --- | --- |
| Project Database oculto | `systems/index.md` figura en el [explorador](../src/components/FileExplorer.tsx); la [home](../src/views/ReadmeView.tsx) tiene Browse Systems. |
| Search / Ctrl K sin acción | [App](../src/App.tsx) conecta Search y atajo a [CommandPalette](../src/components/CommandPalette.tsx). |
| Root / More sin función | PORTFOLIO ahora expande/colapsa la raíz; no hay botón More en el explorer actual. |
| Architecture en rail sin handler | El [rail actual](../src/components/ActivityRail.tsx) no tiene ese control; las entradas genéricas están ocultas y las fichas tienen arquitectura. |
| AI y terminal compiten al iniciar | App las inicia cerradas. |
| Mobile permite paneles simultáneos | App usa overlay único y scrim. Exclusividad y scrim comprobados en navegador en la mejora visual. |
| Tab activa sin autoscroll | [EditorTabs](../src/components/EditorTabs.tsx) llama `scrollIntoView` y tiene atajos. Autoscroll, overflow, foco y cierre comprobados en la mejora visual. |
| Contacto sin acciones | Contact tiene enlaces GitHub/LinkedIn y copia de email; el CV continúa pendiente. |
| Casos secundarios genéricos | [projects](../src/data/projects.ts) ahora define contexto, rol, estado, decisiones, trade-offs, pruebas y evidencia; no se verificaron fuentes externas. |
| Lab sin contenido / runtime ausente | [LabViews](../src/views/LabViews.tsx) incluye archivo de juegos y enlaces al prototipo externo; no integra runtime. |
| Status ficticio / falta reduced motion | [StatusBar](../src/components/StatusBar.tsx) muestra metadatos del archivo; [CSS](../src/styles/index.css) incluye reduced motion. |

## Preguntas para orientar la siguiente tarea

- ¿Qué CV y evidencia de proyectos se desean publicar y con qué revisión de contenido?
- ¿Se conservarán las barras numéricas de capacidades y el desbloqueo lúdico del Lab?
- ¿Cuál será el destino de publicación? No se encontró configuración de hosting del portafolio en esta revisión.

No se preguntó durante la creación porque ninguna respuesta bloquea documentar lo observable. El siguiente paso sugerido es elegir con el usuario una prioridad; ejecutar cambios de producto requiere una nueva instrucción.

## Estado posterior al perfil aportado — 2026-11-09

Resueltos dentro del nuevo encargo: CV PDF real ES/EN con descargas, selector bilingüe, fechas de experiencia, UIS, capacidades sin porcentajes, retirada GameInsider y conservación Lab por confirmación directa. Se contrastaron fuentes de proyectos y se resolvió PostgreSQL en PaymentFlow y SQLite en StatusBoard. Las prioridades anteriores que los describen como pendientes son históricas.

Pendientes no bloqueantes y omitidos de las afirmaciones públicas: jornada completa preferida, modalidad Campuslands, vinculación Invisible, lenguajes exactos por empleo, contribuciones/equipos/fechas de proyectos, hardware/evaluación/repositorio de tesis, premios/certificaciones adicionales y disponibilidad de demos externas. Ver [contenido](content.md). El archivo del Lab se conserva como histórico; no se ha recertificado cada enlace de juego.
