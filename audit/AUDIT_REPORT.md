# Portfolio Audit — Julian Gaitan

Fecha: 24 de junio de 2026  
Producto auditado: raíz de `ide-portfolio/`  
Referencia primaria: [aahanabobade.com](https://www.aahanabobade.com)  
Referencia secundaria: `julian-gaitan-portfolio/`

## 1. Executive Summary

La aplicación de la raíz ya cumple buena parte de la promesa central: se comporta como un workspace, no como una landing disfrazada. Tiene explorer funcional, folders expandibles, tabs dinámicas y cerrables, terminal determinística, AI Navigator separado, registry central de archivos y una adaptación mobile real.

La primera impresión es profesional y comunica en segundos:

- Backend Engineer.
- Colombia.
- English C1.
- Remote-ready.
- Enfoque en sistemas confiables.

El producto está aproximadamente a un ciclo sólido de refinamiento de sentirse top tier. Lo que más lo frena ya no es la arquitectura de frontend, sino la densidad visual y algunos contratos UX incompletos:

1. En 1280×720, explorer + AI + terminal abiertos dejan solo 682 px de editor. El hero queda cortado y el contenido importante desaparece debajo del fold.
2. Search, Architecture, `Ctrl K`, acciones del explorer y workspace root parecen interactivos, pero no hacen nada.
3. El Project Database existe, pero no aparece como archivo accesible en el explorer.
4. Tabs y filenames largos generan scrollbars horizontales visibles y el tab activo puede quedar fuera de vista.
5. Muchos textos de chrome usan 8–10 px y contraste bajo.
6. Contact y Resume todavía no convierten: no hay email accionable, enlaces reales ni CV.
7. Los case studies secundarios tienen contenido demasiado genérico.
8. En mobile, los paneles funcionan, pero terminal, AI y explorer pueden competir entre sí.

Evaluación general:

- Dirección visual: 8/10.
- Comportamiento workspace: 8/10.
- Contenido profesional: 7/10.
- Responsive: 7.5/10.
- Accesibilidad/legibilidad: 6/10.
- Pulido técnico: 8/10.

## 2. Current Product Assessment

### Visual direction

La dirección cyberpunk es sobria y consistente. El amarillo funciona como acción primaria y selección; el cyan identifica metadata, archivos markdown y AI. Los fondos oscuros, bordes finos y tipografía mono construyen una atmósfera técnica sin parecer un videojuego completo.

La implementación actual usa gradientes CSS y una grid estática en `CyberpunkBackground.tsx`, no un canvas o shader continuo. Esto es positivo para performance y mantiene la atmósfera sin coste gráfico innecesario.

Problemas:

- El hero usa una escala diseñada para un editor ancho, pero el editor real puede reducirse a 682 px.
- La terminal y AI abiertas por defecto compiten con el contenido principal.
- Hay exceso de texto pequeño y muted.
- Los paneles se distinguen por bordes, pero algunos niveles tienen contraste demasiado similar.
- El workspace se ve más pulido en 1440 px que en el viewport común de 1280×720.

### UX workspace behavior

Fortalezas verificadas:

- `useWorkspace.ts` mantiene `openFiles` y `activeFileId`.
- Abrir un archivo existente lo enfoca sin duplicarlo.
- Cerrar el tab activo selecciona el tab vecino anterior.
- Los folders systems, architecture y lab expanden/colapsan.
- El archivo activo se refleja en explorer y tabs.
- README abre inicialmente.
- Terminal y AI Navigator son componentes separados.
- Terminal conserva historial y soporta flechas y `Ctrl+L`.
- Mobile convierte explorer en drawer y terminal/AI en paneles inferiores.

Problemas:

- Search y Architecture en `ActivityRail.tsx` no tienen handlers.
- El command center anuncia `Ctrl K`, pero no existe command palette.
- `More explorer actions` y `PORTFOLIO` parecen botones funcionales, pero no tienen acción.
- `systems` existe en `fileRegistry.tsx`, pero `FileExplorer.tsx` lo excluye al renderizar el folder.
- El tab `systems/` solo es accesible mediante una acción del AI Navigator.
- No hay autoscroll del tab activo cuando la barra tiene overflow.
- El botón de cierre permanece en el único tab aunque `closeFile()` impide cerrarlo.

### Content quality

La raíz es considerablemente más responsable que la referencia interna:

- No usa títulos senior o architect.
- No usa métricas arbitrarias.
- Explicita que Resume y Unity runtime no están adjuntos.
- Presenta experiencia como Software Engineer AI Trainer.
- Mantiene Lab como contexto secundario.

La debilidad principal es la falta de profundidad:

- Solo PaymentFlow tiene decisiones de arquitectura específicas.
- Los demás proyectos reutilizan texto genérico sobre límites, testing y documentación.
- No se muestra contexto del proyecto, contribución exacta, estado, trade-offs o evidencia.
- “Production-minded case studies” puede interpretarse como producción real aunque no se identifica el tipo de proyecto.
- Los stacks se muestran, pero no se distingue qué tecnologías fueron centrales, experimentales o integradas por terceros.

### Technical polish

- React 19 + TypeScript + Vite.
- Build aprobado.
- `npm run lint` aprobado.
- Consola del navegador sin errores durante la auditoría.
- Bundle aproximado: 229 kB JS / 71 kB gzip y 23 kB CSS / 6 kB gzip.
- No hay servidor AI ni dependencia de una API externa en runtime.
- AI Navigator es determinístico y usa contexto local.
- No hay canvas animado ni WebGL permanente.

Nota menor: `package.json` no tiene script `type-check`, aunque `lint` ejecuta `tsc --noEmit`. No es un error funcional, pero el nombre del script podría ser más explícito.

### Responsive

La estrategia responsive es correcta:

- `<760px`: explorer, AI y terminal se cierran inicialmente.
- Explorer se vuelve drawer.
- Terminal se vuelve bottom sheet de 45 vh.
- AI se vuelve panel inferior de hasta 75 vh.
- Tabs permanecen horizontales.
- Breadcrumb se oculta.
- Grids pasan a una columna.

Problemas:

- AI, terminal y explorer usan estados independientes; se pueden abrir simultáneamente y solaparse.
- El topbar mobile solo ofrece explorer y AI. Terminal depende de descubrir la barra colapsada inferior.
- La AI abierta conserva contenido visible detrás sin scrim.
- Los rows de explorer miden 27 px, por debajo de un touch target cómodo.
- Los textos del status bar y tabs siguen siendo muy pequeños en móvil.

## 3. Reference Benchmark Findings

### Referencia web

Patrones útiles de `aahanabobade.com`:

- El chrome tiene responsabilidades claras: activity rail, explorer, tabs, breadcrumb, editor y status.
- La command palette es un control real.
- Mobile conserva un botón explícito de explorer y accesos directos a herramientas.
- Las tabs activas permanecen visibles.
- El contenido principal tiene más aire y no convive siempre con todos los paneles abiertos.
- El workspace se percibe funcional porque cada affordance produce una respuesta.

No copiar:

- Identidad, colores o estructura exacta.
- Múltiples roles en el hero.
- Métricas personales o sociales.
- Clon literal de VS Code.
- Cantidad de iconografía o controles que no aporten al objetivo de contratación.

### Referencia interna `julian-gaitan-portfolio/`

La raíz mejora sustancialmente esa versión:

- Reemplaza tabs estáticas por tabs reales.
- Separa AI y terminal.
- Elimina claims y métricas inventadas.
- Introduce file registry.
- Mejora mobile.
- Reduce el shader WebGL a una solución CSS más eficiente.
- Hace el contenido más honesto.

La referencia interna aún aporta algunos patrones visuales útiles:

- Home con facts compactos.
- Project Database visualmente destacado.
- Filtros por categoría.
- Cards grandes para PaymentFlow.

No se debe recuperar:

- Chatbot dentro de la terminal.
- Simulaciones de infraestructura.
- Roles Architect/Lead.
- Métricas no verificadas.
- Formularios y demos simulados.

## 4. Critical Issues

### C-01 — Editor demasiado estrecho con paneles por defecto

- Evidencia: [01-home-desktop.png](screenshots/01-home-desktop.png).
- Medición en 1280×720:
  - activity rail: 46 px;
  - explorer: 252 px;
  - AI Navigator: 300 px;
  - editor: 682 px;
  - terminal: 178 px.
- Impacto: el hero queda cortado y los proyectos destacados no aparecen en el primer viewport.
- Recomendación: cerrar AI por defecto por debajo de 1440 px, o reducir explorer a 232–240 px y terminal a 150–160 px. El contenido debe disponer de al menos 780–840 px.

### C-02 — Controles que prometen funcionalidad inexistente

- Archivos: `TopBar.tsx`, `ActivityRail.tsx`, `FileExplorer.tsx`.
- Controles:
  - Search.
  - Architecture.
  - `Ctrl K`.
  - More explorer actions.
  - PORTFOLIO root.
- Impacto: reduce confianza en el concepto de workspace.
- Recomendación: implementar la acción o convertir el control en elemento no interactivo. Prioridad: command palette y shortcut de Architecture.

### C-03 — Project Database oculto

- Evidencia: [06-project-database-desktop.png](screenshots/06-project-database-desktop.png).
- Archivo: `FileExplorer.tsx`.
- Hallazgo: la vista `systems` se excluye con `entry.id !== 'systems'`.
- Impacto: una de las pantallas principales solo es descubrible mediante AI.
- Recomendación: representar la vista como `systems/index.md`, `projects.db` o un botón de folder con acción secundaria clara.

### C-04 — Conversión profesional incompleta

- Evidencia: [12-contact-desktop.png](screenshots/12-contact-desktop.png).
- Archivos: `ContactView.tsx`, `ResumeView.tsx`.
- Hallazgo:
  - GitHub y LinkedIn son texto, no enlaces.
  - Email es “Available on request”.
  - Resume no está adjunto.
- Impacto: un recruiter no puede completar la acción principal del portfolio.
- Recomendación: añadir enlaces reales, email o mecanismo de contacto verificable y CV descargable antes de publicar.

### C-05 — Overflow de tabs y explorer

- Evidencia: [04-terminal-desktop.png](screenshots/04-terminal-desktop.png), [13-lab-desktop.png](screenshots/13-lab-desktop.png).
- Hallazgo:
  - Tabs largas generan scrollbar horizontal persistente.
  - El tab activo puede quedar fuera del área visible.
  - Filenames largos generan scrollbar horizontal en explorer.
- Impacto: el chrome se siente sin terminar.
- Recomendación: truncar con ellipsis, limitar tabs a 160–180 px, autoscroll al tab activo y ocultar scrollbar visual manteniendo scroll por rueda/trackpad.

### C-06 — Mobile permite paneles solapados

- Evidencia: [10-terminal-mobile.png](screenshots/10-terminal-mobile.png), [11-ai-mobile.png](screenshots/11-ai-mobile.png).
- Archivos: `App.tsx`, CSS mobile.
- Impacto: explorer, terminal y AI pueden competir, ocultar contenido o producir estados confusos.
- Recomendación: usar un único estado `activeOverlay: 'explorer' | 'terminal' | 'ai' | null`.

## 5. Important Improvements

- Reducir la escala del hero cuando AI o explorer estén abiertos.
- Mostrar el Project Database directamente desde explorer y README.
- Implementar command palette para justificar `Ctrl K`.
- Conectar Architecture rail button con `diagrams.md` o `decisions.log`.
- Añadir búsqueda real o retirar el botón Search.
- Truncar filenames largos.
- Hacer que la tab activa siempre entre en viewport.
- Ocultar close en el único tab o permitir un empty state.
- Convertir contactos en enlaces semánticos.
- Adjuntar CV real.
- Ocultar módulos futuros como `interactive-portfolio.unity` hasta que exista contenido útil, o etiquetarlos como roadmap fuera del explorer principal.
- Profundizar todos los case studies sin inventar información.

## 6. Polish / Delight Improvements

- Persistir tabs activas en `sessionStorage`.
- Permitir `Ctrl/Cmd+W` para cerrar tab activa.
- `Ctrl/Cmd+P` o `Ctrl/Cmd+K` para buscar archivos.
- ArrowLeft/ArrowRight dentro del tablist.
- Mostrar close al hover/focus en desktop y siempre en touch.
- Añadir tooltip a iconos de activity rail.
- Cambiar status bar según el archivo y eliminar valores simulados como `Ln 1, Col 1` si no representan nada.
- Mostrar cantidad real de errores/warnings solo si existe un sistema que los calcule.
- Añadir botón explícito de Terminal al topbar mobile.
- Añadir scrim y bloqueo de scroll detrás de AI/terminal mobile.
- Usar una transición de 140–180 ms para drawers y sheets.

## 7. Screen-by-Screen Audit

### README / Home

Evidencia: [01-home-desktop.png](screenshots/01-home-desktop.png), [07-home-mobile.png](screenshots/07-home-mobile.png).

Funciona:

- Rol y propuesta claros.
- CTAs directos a PaymentFlow y Contact.
- Facts relevantes.
- Identidad visual sólida.

Mejorar:

- Reducir heading 10–15% con editor menor a 800 px.
- AI cerrada inicialmente en 1280 px.
- Mostrar al menos el título de Featured Systems en el primer viewport.
- “Production-minded” debería acompañarse de tipo/estado real del proyecto.

### File Explorer

Evidencia: [08-explorer-mobile.png](screenshots/08-explorer-mobile.png).

Funciona:

- Folders expand/collapse.
- Active state.
- Archivos abren tabs reales.
- Drawer mobile.

Mejorar:

- Añadir Project Database.
- Quitar acciones sin handler.
- Evitar scrollbar horizontal.
- Aumentar rows a 30–32 px desktop y 40–44 px mobile.
- Oscurecer más el scrim mobile.

### Editor Tabs

Evidencia: [02-tabs-desktop.png](screenshots/02-tabs-desktop.png), [09-project-mobile.png](screenshots/09-project-mobile.png).

Funciona:

- Tabs dinámicas.
- No duplica.
- Close y foco vecino correctos.
- Scroll horizontal disponible.

Mejorar:

- Ellipsis y ancho máximo.
- Autoscroll al activo.
- Ocultar scrollbar.
- No mostrar close inoperante en la única tab.
- Añadir navegación por teclado y `aria-controls`.

### Systems / Project Database

Evidencia: [06-project-database-desktop.png](screenshots/06-project-database-desktop.png).

Funciona:

- Presenta los seis proyectos.
- PaymentFlow, Logistics e IncidentHub tienen prioridad natural.
- Cards consistentes.

Mejorar:

- Hacerla accesible fuera del AI.
- Permitir filtros Backend/Data/AI/Lab solo si aportan.
- Reducir competencia de AI y terminal mientras se explora.
- Añadir estado real del proyecto: personal, académico, equipo, prototype o deployed.

### PaymentFlow Detail

Evidencia: [03-paymentflow-desktop.png](screenshots/03-paymentflow-desktop.png), [09-project-mobile.png](screenshots/09-project-mobile.png).

Funciona:

- Es el case study más fuerte.
- Arquitectura, decisiones y testing tienen jerarquía clara.
- Mobile se lee correctamente.

Mejorar:

- Añadir contexto real, responsabilidad, constraints y trade-offs.
- Distinguir tecnología principal de tecnología auxiliar.
- Añadir enlaces verificables o indicar repositorio privado/no disponible.
- Evitar repetir la descripción en Overview.

### Terminal

Evidencia: [04-terminal-desktop.png](screenshots/04-terminal-desktop.png), [10-terminal-mobile.png](screenshots/10-terminal-mobile.png).

Funciona:

- Es determinística.
- Implementa todos los comandos solicitados.
- Tiene historial y `Ctrl+L`.
- Está separada del AI.
- Mobile bottom sheet.

Mejorar:

- `cat README.md` debería mostrar contenido útil, no solo summary.
- `projects` podría abrir Project Database o imprimir IDs utilizables.
- Añadir botón Terminal visible en mobile.
- Evitar coexistencia con AI.

### AI Navigator

Evidencia: [05-ai-navigator-desktop.png](screenshots/05-ai-navigator-desktop.png), [11-ai-mobile.png](screenshots/11-ai-mobile.png).

Funciona:

- Separado de terminal.
- Respuestas determinísticas.
- Acciones para abrir archivos.
- No requiere API externa.

Mejorar:

- 320–340 px desktop para lectura.
- Cerrado por defecto en 1280 px.
- Tipografía mínima de 11–12 px.
- Scrim mobile.
- Cerrar terminal/explorer al abrirlo.

### Contact

Evidencia: [12-contact-desktop.png](screenshots/12-contact-desktop.png).

Funciona:

- Lenguaje profesional.
- No simula envío.
- No publica datos inventados.

Mejorar:

- Enlaces clicables.
- Email accionable.
- CV.
- Botón copiar email.
- CTA explícito para recruiters.

### Lab

Evidencia: [13-lab-desktop.png](screenshots/13-lab-desktop.png).

Funciona:

- Se presenta como secundario.
- No carga runtime pesado.
- Declara honestamente que el módulo no existe.

Mejorar:

- El launcher futuro ocupa demasiado espacio para no ofrecer contenido.
- Priorizar XR Medical Training Thesis y material real.
- Ocultar archivos vacíos/incompletos del explorer publicado.

### Mobile

Funciona:

- No miniaturiza toda la UI desktop.
- Explorer drawer.
- Tabs horizontales.
- Terminal y AI como sheets.
- Cards y case study en una columna.
- No se observó overflow horizontal global.

Mejorar:

- Touch targets.
- Paneles mutuamente excluyentes.
- Botón Terminal en topbar.
- Status bar simplificada.
- Tipografía mono pequeña.
- Close buttons con área táctil mínima de 40 px.

## 8. Size and Spacing Recommendations

| Elemento | Actual | Recomendación |
|---|---:|---:|
| Topbar | 42 px | 42–44 px desktop; 48 px mobile |
| Activity rail | 46 px | 46–48 px |
| Explorer | 252 px | 232–248 px |
| AI Navigator | 300 px | 320–340 px, cerrado por defecto <1440 px |
| Tabs | 34 px | 34–36 px desktop; 40 px mobile |
| Tab max width | sin límite práctico | 160–180 px |
| Explorer row | 27 px | 30–32 px desktop; 40–44 px mobile |
| Terminal abierto | 178 px | 150–180 px desktop; 42–48 vh mobile |
| Status bar | 24 px | 22–24 px desktop; versión mobile simplificada |
| Hero padding | 36×40 px | 28–36 px en editor estrecho |
| Hero H1 | hasta 78 px | 52–68 px desktop; 40–52 px tablet; 36–44 px mobile |
| Body copy | 10–15 px según panel | mínimo 14 px contenido; 11–12 px chrome |
| Card padding | 22 px | 20–24 px |
| Editor document | 1080 px / 72 px gutter | 920–1040 px, gutter 32–64 px |

Breakpoints recomendados:

- `<760 px`: mobile shell.
- `760–1099 px`: explorer opcional; AI cerrada.
- `1100–1439 px`: explorer visible; AI cerrada por defecto.
- `>=1440 px`: AI puede abrir por defecto.

## 9. Interaction Recommendations

1. Mantener `fileRegistry` como única fuente de verdad.
2. Añadir un archivo accesible para Project Database.
3. Implementar command palette usando ese registry.
4. Hacer funcional Search o retirarlo.
5. Hacer que Architecture abra `diagrams.md`.
6. Autoscroll del tab activo con `scrollIntoView({ inline: 'nearest' })`.
7. Estado único para overlays mobile.
8. Persistencia de sesión opcional.
9. Keyboard navigation del tablist.
10. Contact links y CV deben ser acciones reales.

## 10. Visual Style Recommendations

- Conservar dark/cyan/yellow.
- Mantener fondo CSS; no introducir WebGL.
- Usar amarillo solo para acción primaria y archivo activo.
- Usar cyan para información, links y AI.
- Subir contraste de `--muted` aproximadamente 8–12%.
- Limitar texto de 8 px a decoraciones no esenciales.
- Reducir glow del status dot y evitar animación permanente si no comunica cambio.
- Hacer que paneles superpuestos mobile tengan scrim de `rgba(0,0,0,.68–.76)`.
- Reducir radios y sombras; la estética actual funciona mejor con geometría seca.
- Añadir `prefers-reduced-motion` aunque las animaciones actuales sean moderadas.

## 11. Content Recommendations

Mantener:

- Backend Engineer.
- Software Engineer AI Trainer.
- Systems and Computer Engineering graduate.
- English C1.
- Remote-ready.
- Colombia.
- Los seis proyectos definidos.

Completar para cada proyecto:

- Tipo: personal, académico, equipo o profesional.
- Estado: prototype, completed, maintained o deployed.
- Responsabilidad específica.
- Problema real.
- Decisiones.
- Trade-offs.
- Testing real.
- Evidencia disponible.

Evitar:

- Añadir métricas sin fuente.
- Usar “production” como hecho si solo describe una mentalidad.
- Listar tecnologías no utilizadas directamente.
- Publicar módulos vacíos como si fueran entregables.
- Claims de escalabilidad sin contexto.

## 12. Prioritized Backlog

### P0 — Must fix

1. Añadir email/contacto accionable, LinkedIn/GitHub como links y CV.
2. Hacer accesible Project Database desde explorer y README.
3. Implementar o retirar Search, Architecture, Ctrl K, More y PORTFOLIO button.
4. Cerrar AI por defecto en viewports menores a 1440 px.
5. Resolver overflow visual de tabs y explorer.
6. Hacer overlays mobile mutuamente excluyentes.
7. Aumentar legibilidad de textos de chrome esenciales.

### P1 — Should improve

1. Profundizar case studies secundarios.
2. Reducir hero dinámicamente según ancho real del editor.
3. Autoscroll de tab activa.
4. Añadir botón Terminal mobile.
5. Mejorar touch targets.
6. Añadir scrim al AI mobile.
7. Mejorar output de `cat` y `projects`.
8. Ocultar módulos Lab incompletos del portfolio publicado.
9. Simplificar status bar y eliminar estados decorativos no reales.
10. Añadir command palette.

### P2 — Nice polish

1. Persistir sesión.
2. Atajos de teclado.
3. Resizing de panels.
4. Empty editor state.
5. Tooltip de activity rail.
6. Copiar email.
7. Animaciones de panel.
8. Tema high-contrast.

## 13. Implementation Prompt for Builder Codex

```text
Trabaja sobre la aplicación en la raíz de `ide-portfolio/`. No uses `julian-gaitan-portfolio/` como producto: esa carpeta es solo referencia secundaria.

Lee `audit/AUDIT_REPORT.md` y conserva:
- React + TypeScript + Vite.
- `fileRegistry`.
- tabs dinámicas y cerrables.
- terminal determinística.
- AI Navigator separado.
- identidad dark cyberpunk amarillo/cyan.
- contenido sin métricas o seniority inventados.

No hagas un rediseño completo. Implementa P0 y P1:

1. En `src/App.tsx`, inicia AI cerrada para widths menores a 1440 px. Mantén explorer abierto en desktop y terminal abierta solo cuando exista suficiente altura.
2. Crea un único estado de overlays mobile:
   `activeOverlay: 'explorer' | 'terminal' | 'ai' | null`.
   Abrir uno debe cerrar los otros.
3. En `src/data/fileRegistry.tsx` y `src/components/FileExplorer.tsx`, haz visible la vista Project Database como `systems/index.md` o `projects.db`.
4. Añade un CTA “Browse all systems” en `ReadmeView.tsx`.
5. Implementa command palette para el control `Ctrl K` usando `fileRegistry`. Si no se implementa Search o More actions, retira esos botones.
6. Conecta el botón Architecture de `ActivityRail.tsx` con `diagrams.md`.
7. En `EditorTabs.tsx`:
   - max-width 160–180 px;
   - ellipsis;
   - close en hover/focus desktop;
   - close siempre visible touch;
   - autoscroll del tab activo;
   - ocultar scrollbar visual;
   - no mostrar close inoperante cuando solo queda una tab.
8. En `FileExplorer.tsx`:
   - ellipsis para filenames;
   - eliminar overflow horizontal;
   - rows 30–32 px desktop y 40–44 px mobile;
   - oscurecer scrim mobile.
9. Añade botón Terminal al topbar mobile.
10. Reduce hero 10–15% cuando el editor mida menos de 800 px. Featured Systems debe empezar a aparecer en el primer viewport de 1280×720.
11. Sube textos esenciales de chrome a 11–12 px y mejora contraste de muted text.
12. En `ContactView.tsx`, convierte GitHub y LinkedIn en enlaces reales, añade email verificado y CV descargable. No inventes datos.
13. Si el CV o Unity runtime no existen, no presentes controles principales que parezcan entregables activos.
14. Profundiza los proyectos no-PaymentFlow solo con información real: contexto, rol, decisiones, trade-offs, testing y estado.
15. En `TerminalPanel.tsx`, mejora:
   - `cat README.md` con contenido útil;
   - `projects` con IDs y opción de abrir Project Database.
16. Simplifica `StatusBar.tsx`: no muestres “0 errors”, “0 warnings” o posición de cursor si son valores puramente decorativos.
17. Añade navegación por teclado a tabs y `prefers-reduced-motion`.

Verifica:
- `npm run lint`
- `npm run build`
- desktop 1280×720 y 1440×900
- mobile 390×844
- tabs largas
- foco al cerrar tabs
- Project Database accesible sin AI
- command palette
- explorer, terminal y AI mobile sin solaparse
- links de contacto y CV
- consola sin errores
- ausencia de overflow horizontal global.
```

## Evidence

Producto auditado:

- [Home desktop](screenshots/01-home-desktop.png)
- [Tabs desktop](screenshots/02-tabs-desktop.png)
- [PaymentFlow desktop](screenshots/03-paymentflow-desktop.png)
- [Terminal desktop](screenshots/04-terminal-desktop.png)
- [AI Navigator desktop](screenshots/05-ai-navigator-desktop.png)
- [Project Database desktop](screenshots/06-project-database-desktop.png)
- [Home mobile](screenshots/07-home-mobile.png)
- [Explorer mobile](screenshots/08-explorer-mobile.png)
- [PaymentFlow mobile](screenshots/09-project-mobile.png)
- [Terminal mobile](screenshots/10-terminal-mobile.png)
- [AI Navigator mobile](screenshots/11-ai-mobile.png)
- [Contact desktop](screenshots/12-contact-desktop.png)
- [Lab desktop](screenshots/13-lab-desktop.png)

Referencias:

- [Referencia web desktop](screenshots/14-reference-web-desktop.png)
- [Referencia interna desktop](screenshots/15-reference-internal-desktop.png)
