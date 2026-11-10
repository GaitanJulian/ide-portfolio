# Registro de la wiki

Historial append-only. [Índice](index.md) · [Estado](current-state.md) · [Convenciones](AGENTS.md).

## [2026-11-09] creación | Wiki inicial del portafolio IDE

Se incorporó la intención del usuario como fuente raw y se sintetizaron README, manifiestos, configuración, código de `src/` y auditoría histórica. Base observada: rama `main`, commit `480b750aa903ff25e98d0ac82146fc9b1ccb9653`, árbol inicialmente limpio.

Se crearon índice, estado, esquema, visión general, arquitectura, contenido, flujos, desarrollo, decisiones y preguntas abiertas. Se añadió AGENTS raíz mínimo para facilitar continuidad. Se distinguieron las rutas activas `Next`, el alcance local del AI/terminal, los ocho proyectos y los límites de la evidencia histórica. No se modificaron funcionalidades ni se instaló infraestructura, hizo commit o publicó contenido.

## [2026-11-09] revisión | Salud documental y alcance

Comprobación local con Node: 13 documentos Markdown (AGENTS raíz y 12 en wiki), 169 enlaces relativos revisados, cero destinos inexistentes y cero páginas de wiki fuera del catálogo. La revisión de consistencia corrigió el total de entradas del registry a 21.

`git diff --exit-code` sobre código, manifiestos, configuración, README y auditoría terminó con código 0 y sin diferencias; `git status --short` solo mostró `AGENTS.md` y `wiki/` nuevos. `git diff --check` terminó con código 0 para cambios rastreados; se revisó además el whitespace de los documentos nuevos. La fuente raw se conservó sin revisiones posteriores a su creación. No se ejecutaron pruebas de aplicación, lint/build ni validación visual; no había dependencias instaladas y el alcance fue documental.

## [2026-11-09] desarrollo | Dirección visual de consola de ingeniería

Encargo explícito exclusivamente de presentación. Se leyó wiki y fuentes activas; se comprobó rama main/HEAD 480b750 y se preservaron AGENTS.md/wiki previamente sin seguimiento. Se capturó una línea base nueva en navegador antes de editar. Se implementaron tokens y breakpoint en index.css, presentación coherente de todas las vistas activas en workspace.css e import CSS en main.tsx. No se cambiaron textos, datos, lógica, handlers, contratos, dependencias, reglas/comandos del Lab ni servicio AI. Sin commit, push o publicación.

Build y lint aprobados; navegador con 18 vistas × cinco tamaños, 90 lecturas sin overflow horizontal; capturas inspeccionadas y correcciones posteriores en móvil/paneles. Se verificaron navegación, tabs largas/cierre/última, palette/teclado/foco, terminal/historial, ciclo del Lab, AI, clipboard y disabled del CV. Se corrigió solo en CSS el borde exacto de 760 px y se comprobó 759/760/761. Evidencia local en .artifacts/visual-refresh/. Cobertura y límites en [desarrollo](development.md); no se emuló reduced motion ni se verificaron enlaces externos. Se actualizaron estado, arquitectura, desarrollo y pendientes pertinentes, conservando raw e historial.

Cierre de verificación: se repitieron npm run build y npm run lint tras los últimos ajustes, ambos con código 0; git diff --check sin errores y enlaces relativos de las páginas wiki sin destinos inexistentes. El diff de aplicación rastreado se limita a tokens/breakpoint e import CSS; workspace.css es nuevo. Capturas finales de home comparables en los cinco tamaños y revisión posterior de contacto móvil/terminal a 760 px. No se modificó AGENTS.md ni las fuentes raw previas.

## [2026-11-09] desarrollo | Adaptación del estilo de Aahana Bobade

El usuario aportó https://www.aahanabobade.com/ y autorizó adaptar el estilado y usar iconos si aportaban valor. Se inspeccionaron capturas actuales desktop/móvil de la fuente antes de editar. Se adaptaron títulos Syne, cuerpo mono, fondo carbón neutro, home abierta y tarjetas planas; se conservaron datos/textos, amarillo/cyan y funciones propios. Se añadieron 13 SVG oficiales locales de Tabler y MIT (sin paquete runtime). ContactView incorpora solo dos spans de presentación para evitar un corte del identificador del título; handlers/estado intactos.

Nuevas 90 lecturas de 18 vistas en cinco tamaños sin overflow horizontal; revisión visual con comparaciones combinadas, corrección de contacto móvil y título estrecho a 760px, más interacciones registradas en [desarrollo](development.md). [QA](../design-qa.md) aprobado para la adaptación. Evidencia en .artifacts/reference-refresh/. Se actualizaron estado, arquitectura y desarrollo pertinentes. Se conservaron cambios previos, raw y AGENTS. Sin commit, push ni publicación.

Verificación final de esta adaptación: npm run build y npm run lint terminaron con código 0 después de las correcciones; git diff --check sin errores; enlaces locales de wiki y design-qa.md sin destinos inexistentes. Consola consultada sin warn/error. El diff de ContactView se verificó limitado a spans del título, manteniendo CONTACT_PROTOCOL: OPEN exacto.

## [2026-11-09] desarrollo | Perfil profesional, sitio ES/EN y CV bilingüe

El usuario aportó un perfil bilingüe como fuente; se conservaron campos por verificar sin convertirlos en hechos públicos. Confirmó en el chat conservar Lab, retirar GameInsider y añadir selector ES/EN; no se ejecutó la propuesta interna del archivo de retirar Lab. Se centralizó contenido, corrigieron fechas de Invisible/Campuslands, formación UIS, C1 declarado y disponibilidad; se sustituyeron puntuaciones por contexto de capacidades.

Se contrastaron README actuales de cinco proyectos y esquema SQLite de StatusBoard mediante lecturas GitHub. Se corrigieron discrepancias frente a CV anterior sin inventar autoría, métricas o pruebas ejecutadas. Se añadieron selector/persistencia/localización React, búsqueda bilingüe sin tildes y respuestas AI coherentes. Lab conserva reglas y comandos.

Se generaron dos PDF de una página desde el modelo compartido, renderizados e inspeccionados; descargas reales comprobadas. Nueva matriz de 170 lecturas en 17 vistas, ES/EN y cinco tamaños sin overflow. Scripts de comprobación de contenido y build/lint aprobados; límites en [desarrollo](development.md). Se conservaron cambios locales anteriores, AGENTS y fuentes raw previas. Sin commit, push ni publicación.

Cierre: npm run build, npm run lint y node scripts/check-content.cjs aprobados tras los últimos ajustes. Se confirmó búsqueda curriculum sin tilde, CV con texto extraíble y descargas reales, AI con disponibilidad correcta en ambos idiomas y conservación del input al cambiar idioma. Se repitió bloqueo/rechazo/desbloqueo/apertura/bloqueo del Lab; open gameinsider ya no resuelve y no hay barras numéricas de capacidades. Lab restaurado bloqueado al finalizar.
