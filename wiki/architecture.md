# Arquitectura y áreas del repositorio

Base: revisión `480b750`, observada el 2026-11-09. [Índice](index.md) · [Flujos](flows.md).

## Composición y datos

[index.html](../index.html) carga [main.tsx](../src/main.tsx), que monta `App` bajo `StrictMode` e importa el CSS global. [App.tsx](../src/App.tsx) compone topbar, rail, explorador, pestañas, editor, terminal, AI, scrim móvil, status bar y palette. No se observó router de URL: la selección se expresa como `activeFileId` en memoria.

[fileRegistry.tsx](../src/data/fileRegistry.tsx) define `PortfolioFile`: ID, ruta virtual, nombre, tipo, categoría, resumen, etiquetas, palabras clave, visibilidad y renderer. Exporta `filesById`, `visibleFileRegistry` y `labFileIds`. Es la unión entre navegación y contenido. `hidden` excluye una entrada de `visibleFileRegistry`; no elimina su renderer ni constituye control de acceso.

Hay 20 entradas: seis de raíz, índice de sistemas y siete proyectos, tres de arquitectura y tres de Lab. Las tres de arquitectura están ocultas. Las entradas Lab se filtran adicionalmente por desbloqueo en las superficies de navegación. README tiene renderer nulo en el registry, y Systems un callback vacío de reserva; `renderActiveFile` en App trata ambos IDs de forma especial e inyecta los callbacks reales. Al crear nuevas vistas que necesiten navegación, revisar esta diferencia.

[projects.ts](../src/data/projects.ts) contiene los siete `Project` y `projectById`. [types.ts](../src/types.ts) define contratos de proyectos, archivos, líneas de terminal, respuestas AI y estado Lab. Los datos son estáticos; perfil y experiencia viven directamente en JSX.

## Estado y responsabilidades

| Área | Fuente y responsabilidad |
| --- | --- |
| Workspace | [useWorkspace](../src/hooks/useWorkspace.ts): archivos abiertos, selección, deduplicación y cierre. |
| Coordinación de UI | [App](../src/App.tsx): apertura protegida del Lab, paneles desktop, overlay móvil único, palette y resize. |
| Explorador | [FileExplorer](../src/components/FileExplorer.tsx): expansión de raíz/carpetas y selección visible. |
| Pestañas | [EditorTabs](../src/components/EditorTabs.tsx): autoscroll, animación de apertura/cierre y atajos. |
| Búsqueda | [CommandPalette](../src/components/CommandPalette.tsx): filtro del registry y navegación de resultados. |
| Terminal activa | [TerminalPanelNext](../src/components/TerminalPanelNext.tsx): intérprete local, historial y comandos Lab. |
| AI | [AiNavigator](../src/components/AiNavigator.tsx) y [queryPortfolioContext](../src/services/aiNavigator.ts): consulta y respuesta por coincidencia de términos. |
| Chrome | [TopBar](../src/components/TopBar.tsx), [ActivityRail](../src/components/ActivityRail.tsx), [StatusBar](../src/components/StatusBar.tsx): controles y metadatos del archivo. |

Pestañas, historial y respuesta AI no persisten entre recargas. Solo `portfolio.labUnlocked` se lee/escribe en `localStorage`; `challengePassed` se reconstruye desde ese valor al iniciar. No hay persistencia remota. El bloqueo de Lab es un recurso de exploración del frontend, sin autenticación de servidor.

En móvil (`innerWidth < 760`) App usa `activeOverlay: 'explorer' | 'terminal' | 'ai' | null`; los tres paneles son mutuamente excluyentes. En desktop conserva booleanos independientes. AI y terminal empiezan cerradas; explorer empieza abierto desde 760 px. Desde la mejora visual del 2026-11-09, CSS usa `width < 760px`, alineado con JavaScript sin cambiar App. Se comprobó el borde 759/760/761 en navegador.

## Presentación y vistas

- [ReadmeView](../src/views/ReadmeView.tsx): home, datos compactos, destacados y navegación.
- [StructuredViewsNext](../src/views/StructuredViewsNext.tsx): perfil, experiencia, capacidades y base de proyectos.
- [ProjectCard](../src/components/ProjectCard.tsx) y [ProjectDetail](../src/views/ProjectDetail.tsx): catálogo y detalle, con tratamiento específico para PaymentFlow.
- [ContactView](../src/views/ContactView.tsx) y [ResumeView](../src/views/ResumeView.tsx): canales públicos, copia de email y aviso de CV pendiente.
- [LabViews](../src/views/LabViews.tsx): Unity/XR, launcher externo y archivo de juegos.
- [ArchitectureViews](../src/views/ArchitectureViews.tsx): notas genéricas conservadas en entradas ocultas; no describen un backend del portafolio.

Existen variantes anteriores [TerminalPanel.tsx](../src/components/TerminalPanel.tsx) y [StructuredViews.tsx](../src/views/StructuredViews.tsx). La inspección de imports muestra que App y registry usan las variantes `Next`. No borrar las anteriores ni modificarlas suponiendo que son la ruta activa. El [README](../README.md) aún apunta a la terminal anterior.

## Estilos, configuración y documentación original

[index.css](../src/styles/index.css) conserva los estilos base, tokens compartidos y `prefers-reduced-motion`. [workspace.css](../src/styles/workspace.css), importado después desde main, define la presentación activa: superficies opacas, jerarquía editorial, controles comunes y container queries a 920/640/400 px según el ancho real del editor. Los tokens cubren paleta, tipografía, espaciado, bordes, radios, sombras y movimiento. El responsive de viewport usa móvil por debajo de 760 px; desktop conserva paneles independientes. El status móvil distribuye todos sus metadatos en dos filas. Las fuentes llegan de Google Fonts con fallbacks. El [fondo](../src/components/CyberpunkBackground.tsx) usa divs decorativos: no hay canvas/WebGL integrado.

El [manifiesto](../package.json), [lockfile](../package-lock.json), [Vite](../vite.config.ts) y los tsconfig controlan desarrollo y compilación; ver [desarrollo](development.md). [.gitignore](../.gitignore) excluye builds, dependencias, entornos, capturas locales y la referencia `julian-gaitan-portfolio/`, ausente en esta inspección. [.gitattributes](../.gitattributes) normaliza texto.

[audit/AUDIT_REPORT.md](../audit/AUDIT_REPORT.md) y sus capturas son evidencia histórica de 2026-06-24. Conservarlos; su evaluación y prompt final no son instrucciones vigentes para esta tarea ni prueba del comportamiento actual. [Comparación de pendientes](open-questions.md).

La adaptación visual posterior del 2026-11-09 usa Syne para display y JetBrains Mono para cuerpo/chrome. Home sin tarjeta exterior; superficies carbón neutras y acentos amarillo/cyan/lila. [Iconos locales Tabler](../public/icons/tabler/README.md) por CSS masks, con licencia MIT y sin paquete runtime. ContactView solo añade spans de presentación al título para mantener el identificador legible en móvil. Evidencia y límites en [QA](../design-qa.md).

## Actualización profesional y ES/EN — 2026-11-09

El registry vigente tiene 20 entradas (tres de arquitectura ocultas), 17 vistas navegables contando Lab y siete proyectos. Se retiró GameInsider de los datos activos; no se cambiaron IDs de otros archivos ni el desbloqueo de Lab. Las descripciones anteriores de ocho proyectos y 21 entradas son la base histórica previa.

[professional.ts](../src/data/professional.ts) centraliza perfil, experiencia, formación y capacidades para sitio y CV. [copy.ts](../src/i18n/copy.ts) registra pares EN/ES; [LanguageProvider y Localized](../src/i18n/Language.tsx) proporcionan estado de idioma y traducción explícita de nodos React/atributos accesibles. No se traducen IDs, hrefs, valores de formularios ni comandos. Componentes activos optan por Localized; selector en TopBar y persistencia portfolio.language protegida frente a errores de storage. Idioma inicial español, con preferencia EN conservada si existe.

Las vistas Next siguen activas; capacidades muestran contexto/evidencia sin porcentajes. La aportación de un proyecto solo se muestra si hay dato confirmado. AI Navigator incorpora consultas en español y los datos actualizados, sin modelo remoto. Los resúmenes de terminal se alinean con el modelo; gramática y reglas Lab intactas. ResumeView/ContactView ahora enlazan dos PDF locales. [Generación y validación](development.md).
