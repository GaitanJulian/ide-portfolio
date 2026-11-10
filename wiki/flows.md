# Flujos de interacción

Comportamiento inferido por lectura del código al 2026-11-09; pendiente de comprobación visual actual. [Índice](index.md) · [Validación](development.md).

## Abrir y cerrar documentos

La sesión arranca con `readme` abierto y activo en [useWorkspace](../src/hooks/useWorkspace.ts). Los botones de home, explorador, palette, terminal y AI llaman a `openFile` de [App](../src/App.tsx). Este rechaza archivos Lab bloqueados, delega al hook y cierra el overlay móvil. El hook ignora IDs desconocidos, evita duplicar pestañas y activa el archivo.

Al cerrar la activa, se selecciona la vecina anterior o la primera disponible. Al cerrar la última, el hook deja una lista vacía de forma transitoria y reabre README mediante un timeout. [EditorTabs](../src/components/EditorTabs.tsx) demora el cierre 160 ms para animarlo, desplaza la activa al área visible, acepta flechas izquierda/derecha y `Ctrl/Cmd+W`. La selección de la UI y el foco real del teclado deben comprobarse por separado.

## Buscar y alternar paneles

Search, el command center y `Ctrl/Cmd+K` abren [CommandPalette](../src/components/CommandPalette.tsx). Busca por substring normalizado en nombre, ruta, título, resumen, tags y keywords de las entradas visibles. Filtra Lab bloqueado y limita la salida a nueve resultados. Flechas y Enter seleccionan; Escape, botón de cierre o clic fuera cierran. No es búsqueda dentro del texto renderizado de todas las vistas.

En desktop explorer, terminal y AI tienen estados independientes; AI y terminal arrancan cerradas. En móvil un único overlay alterna entre los tres, con scrim y bloqueo de scroll del body. Escape lo cierra. Resize en modo móvil limpia el overlay y, en desktop desde 1100 px, puede volver a abrir el explorer. Fuente: [App](../src/App.tsx). La [TopBar](../src/components/TopBar.tsx) incluye acceso móvil explícito a terminal.

## Terminal local

La implementación activa es [TerminalPanelNext](../src/components/TerminalPanelNext.tsx). Convierte el comando completo a minúsculas, separa verbo/argumentos y ejecuta ramas locales. No ejecuta procesos ni lee archivos del equipo. `pwd` y las rutas que imprime pertenecen a la metáfora del portafolio.

| Comando | Resultado implementado |
| --- | --- |
| `help`, `pwd`, `ls` | Ayuda, directorio virtual e inventario; `ls` omite Lab bloqueado. |
| `cat <file>` | Resumen del registry; README tiene salida ampliada. |
| `open <file|project>` | Resuelve aliases o nombre visible y abre el documento. Ejemplos: `open urban`, `open systems`. |
| `projects` | Lista IDs y sugiere `open systems`. |
| `stack`, `experience`, `contact`, `resume` | Abren las vistas correspondientes; resume informa que falta el PDF. |
| `architecture`, `open architecture`, `cat architecture` | Recomiendan consultar arquitectura dentro de los casos de estudio. |
| `scan lab`, `authorize lab`, `unlock lab`, `lock lab` | Manejan el descubrimiento y estado del Lab. |
| `open lab`, `lab` | Abren Unity experiments si está desbloqueado. |
| `clear` / `Ctrl+L` | Limpian la salida; flechas arriba/abajo recorren historial en memoria. |

Las entradas ocultas de arquitectura no participan en el resolver visible de esta terminal. No asumir que cualquier ID del registry se puede abrir mediante `open <id>`: el comando usa aliases y nombres, y App protege Lab adicionalmente.

## Desbloqueo del Lab

Secuencia sugerida: `scan lab` → `authorize lab` → `unlock lab` → `open lab`. `scan` reinicia el challenge cuando está bloqueado; `authorize` marca `challengePassed`; `unlock` exige esa marca y expone el Lab. El código permite ejecutar `authorize lab` directamente: no hay evaluación de credenciales ni reto real. `lock lab` limpia ambas marcas; App retira sus tabs y vuelve a README si la activa era Lab.

El desbloqueo se guarda bajo `portfolio.labUnlocked` y se restaura al recargar. Modificar almacenamiento local puede cambiarlo: es una interacción lúdica del frontend, no una barrera de seguridad. [App](../src/App.tsx) · [TerminalPanelNext](../src/components/TerminalPanelNext.tsx).

## Consulta AI y contacto

[AiNavigator](../src/components/AiNavigator.tsx) pasa texto a `queryPortfolioContext`, que aplica reglas ordenadas de consulta en español e inglés en [aiNavigator.ts](../src/services/aiNavigator.ts). Devuelve texto fijo y, opcionalmente, una acción para abrir un archivo. El orden de las reglas afecta la respuesta; no hay petición HTTP, modelo generativo, historial de conversación ni recuperación documental.

El contacto abre GitHub/LinkedIn en pestaña externa o intenta copiar el email mediante Clipboard API. Muestra feedback durante 1800 ms si la copia funciona; el catch no muestra un mensaje de error específico. No hay formulario ni envío de correo. El CV está conectado mediante dos enlaces PDF locales (ES/EN). Fuente: [ContactView](../src/views/ContactView.tsx).

## Flujos actualizados — 2026-11-09

Selector ES/EN en la barra superior: cambia contenido y etiquetas sin cerrar pestañas, borrar consultas o alterar paneles. Se conserva idioma al recargar; el workspace sigue sin persistencia de pestañas. La búsqueda indexa títulos en ambos idiomas e ignora tildes. Rutas virtuales y comandos siguen en inglés por estabilidad.

resume.pdf abre una vista con dos descargas PDF (ES/EN); contacto ofrece los mismos archivos. Ambas se probaron descargando desde navegador. Ya no hay CV pendiente/deshabilitado. GameInsider deja de figurar en catálogo, búsqueda, aliases y AI. Se conserva Lab y su secuencia scan lab / authorize lab / unlock lab / lock lab. Las notas previas sobre ocho proyectos o CV placeholder son históricas.
