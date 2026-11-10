# Desarrollo y validación

Actualizado: 2026-11-09. [Índice](index.md) · [Estado](current-state.md).

## Entorno y dependencias

[package.json](../package.json) define un proyecto ESM privado `julian-gaitan-ide-portfolio` versión `1.0.0`: React/React DOM `^19.0.1`, Vite `^6.2.3`, TypeScript `~5.8.2` y plugin React `^5.0.4`; los tipos React están en devDependencies. Son rangos declarados, no una afirmación sobre la última versión disponible. [package-lock.json](../package-lock.json), formato 3, fija el árbol reproducible.

No se observan backend, variables de entorno consumidas ni SDK externo de AI. Las tecnologías que figuran en las fichas profesionales no son dependencias del frontend. No hay script `test`, configuración de runner ni archivos de pruebas en el inventario versionado inspeccionado.

## Comandos disponibles

Desde la raíz, según [README](../README.md) y manifiesto:

```sh
npm ci
npm run dev
npm run lint
npm run build
npm run preview
```

`npm ci` es la opción propuesta para instalar respetando el lockfile; el README documenta `npm install`. Ninguno se ejecutó al crear la wiki.

| Comando | Contrato real |
| --- | --- |
| `dev` | Ejecuta Vite, puerto 4173; abrir `http://127.0.0.1:4173`. |
| `lint` | Ejecuta `tsc --noEmit`; no hay ESLint ni lint de estilos. |
| `build` | Ejecuta `tsc -b && vite build`; recorre referencias TypeScript antes de empaquetar. |
| `preview` | Sirve el build existente con Vite, puerto 4173. |

Precaución de cobertura: el [tsconfig raíz](../tsconfig.json) tiene `files: []` y referencias a app/node. `lint` no usa `-b`: no dar por comprobados todos los proyectos por ese comando solo. El build sí invoca modo de proyectos. Esta observación es estática; no se ejecutó el compilador en esta sesión.

[tsconfig.app.json](../tsconfig.app.json) incluye `src`, modo estricto, ES2022, JSX React y resolución Bundler. [tsconfig.node.json](../tsconfig.node.json) cubre `vite.config.ts`. [Vite](../vite.config.ts) usa plugin React, host `0.0.0.0`, puerto estricto 4173 y un hostname ngrok explícito permitido para desarrollo/preview. No se observa configuración de despliegue ni pipeline CI en los archivos versionados.

## Verificaciones de esta creación

- Inspección de archivos versionados, imports, scripts, configuración y estado Git.
- `git status --short` inicial: sin cambios; rama `main`, HEAD `480b750aa903ff25e98d0ac82146fc9b1ccb9653`.
- Entorno observado mediante comandos de versión: Node `v24.18.0`, npm `11.16.0`. No se declara aquí una versión mínima compatible.
- No existe `node_modules/` en el inventario inicial. No se instalaron dependencias ni ejecutaron lint/build, tests o navegador para esta tarea documental.
- Se comprobó la resolución de enlaces locales de la wiki y del AGENTS raíz, su cobertura desde el índice y el alcance documental del diff al finalizar. Resultado detallado en [registro](log.md).

La [auditoría de 2026-06-24](../audit/AUDIT_REPORT.md) informa lint/build aprobados, tamaños de bundle y consola limpia para aquella revisión. No reutilizar esos resultados como validación del HEAD actual ni las capturas como evidencia visual actual.

## Validación propuesta para una futura tarea de aplicación

Tras instalar dependencias dentro de una tarea autorizada, ejecutar build y las comprobaciones pertinentes al cambio. Validar home y proyectos a 1280×720, 1440×900 y 390×844; comprobar también el borde de 760 px. Recorrer apertura/cierre de pestañas, última pestaña, palette, teclado/foco, paneles móviles, persistencia/bloqueo Lab, AI local y copia de email. Revisar consola, overflow y enlaces públicos. Son pasos propuestos, no resultados obtenidos ni autorización de implementación.

## Mejora visual verificada el 2026-11-09

Se utilizaron las dependencias ya presentes y el servidor Vite existente en http://127.0.0.1:4173; el intento de npm run dev informó puerto ocupado y no se sustituyó el proceso del usuario. No se instalaron dependencias. npm run build (tsc -b y Vite) y npm run lint (tsc --noEmit) terminaron con código 0. La cobertura de compilación se apoya en el build, no solo en lint.

Se creó una línea base actual antes de editar y se inspeccionó el resultado real. Capturas y matriz quedan en .artifacts/visual-refresh/, excluido por el gitignore existente. La matriz viewport-matrix.json contiene 90 lecturas de geometría: 18 vistas (home, perfil, experiencia, capacidades, catálogo, ocho proyectos, tres Lab, contacto y resume) a 1440×900, 1280×720, 768×1024, 760×900 y 390×844. Ninguna lectura mostró overflow horizontal del editor/página; esto no equivale a 90 capturas revisadas visualmente. Se revisaron capturas representativas de todas las áreas, documentos extensos y finales de documento, más paneles y palette. Tras esa matriz se ajustaron status móvil, tarjetas de contacto, etiquetas y terminal estrecha, con revisión visual posterior de las áreas afectadas.

Interacciones comprobadas: explorer y paneles abiertos/cerrados; AI + terminal + explorer simultáneos en desktop; exclusividad y scrim móvil; 759/760/761; tabs largas y autoscroll, Tab con foco visible, cierre de pestañas y restauración de README al cerrar la última; Ctrl K, filtro, sin resultados, ArrowDown, Enter y Escape; help, historial ArrowUp, navegación desde terminal, rechazo del Lab bloqueado, scan/authorize/unlock/open/lock lab; sugerencia AI y respuesta PaymentFlow; copia de email confirmada en clipboard y feedback; Resume pending deshabilitado. Se restauró Lab bloqueado al acabar. Registro consultado del navegador sin warn/error.

Límites: un navegador Chromium integrado; no se hizo matriz multinavegador, no se emuló reduced motion ni teclado virtual móvil. La regla reduced motion conserva prioridad !important sobre las transiciones nuevas. No hay script test ni runner. Los enlaces externos, afirmaciones profesionales, hosting y descarga de CV no fueron certificados. Ningún test histórico se presenta como resultado de esta sesión.

## Adaptación de referencia del 2026-11-09

Se inspeccionaron home, proyectos, perfil y móvil de https://www.aahanabobade.com/ con capturas nuevas. Se adaptó la tipografía Syne/JetBrains Mono, fondo neutro, composición abierta y superficies planas al proyecto; no se clonaron datos ni funciones. 13 SVG oficiales de Tabler incluidos en public/icons/tabler, licencia MIT y procedencia documentadas. Unos 8 KB entre SVG y licencia, sin instalar dependencias. Google Fonts sigue siendo el proveedor de fuentes ya utilizado, ahora incluyendo Syne.

Matriz nueva de 18 vistas por cinco tamaños: 90 lecturas sin overflow horizontal de editor/página. Se compararon referencia y resultado en imágenes combinadas desktop/móvil y se inspeccionaron capturas de perfil, catálogo, experiencia, capacidades, arquitectura, contacto, Lab y paneles. Se corrigió el título de contacto móvil sin cambiar texto (cinco comprobaciones posteriores) y PaymentFlow en columna estrecha con los tres paneles a 760px (captura y altura de una línea verificadas). Se repitieron palette/Enter, foco con Tab, respuesta AI PaymentFlow, terminal help/ArrowUp, navegación/autorización/desbloqueo/bloqueo Lab y copia de email/disabled. Se comprobó exclusividad de overlays móviles y el borde 759/760/761. Se dejó Lab bloqueado.

Evidencia en .artifacts/reference-refresh/ y [design-qa.md](../design-qa.md), con resultado passed para la adaptación inspeccionada; no significa identidad píxel a píxel ni certificación de accesibilidad. Reduced motion no emulado y sin pruebas multinavegador. No se añadieron tests ni dependencias. Sin commit/push/publicación.

## Actualización de contenido, ES/EN y CV — 2026-11-09

No se añadieron dependencias frontend. Se usaron TypeScript existente y runtime Python empaquetado (ReportLab, pypdf, PDFium) para documentos, sin instalaciones. El servidor anterior estaba detenido; se inició npm run dev y se abrió una pestaña nueva después del error de conexión de la anterior.

Comandos reproducibles: node scripts/export-cv-content.cjs genera .artifacts/cv/content.json desde los modelos; scripts/build-resumes.py genera output/pdf y copia a public/cv, validando una página, texto extraíble y ausencia de marcadores pendientes. Usa Arial de Windows y ReportLab/pypdf/PDFium del runtime. node scripts/check-content.cjs comprueba catálogo/destacados, SQLite/PostgreSQL, datos/traducciones, conservación de comandos/IDs, rutas AI (incluida disponibilidad) y equivalencia binaria de las copias PDF. Son comprobaciones nuevas, no una suite general de la aplicación.

Se aprobaron build (tsc -b + Vite), lint y check-content. Dos PDF renderizados e inspeccionados, una página cada idioma sin cortes/solapamientos, con enlaces y texto seleccionable. Dos descargas reales del navegador terminaron en Downloads.

Matriz 17 vistas × dos idiomas × cinco tamaños: 170 lecturas de geometría sin overflow horizontal y con selector dentro del viewport. Se comprobaron persistencia ES/EN, html.lang, conservación de pestaña y texto de AI, respuesta localizada, búsqueda curriculum sin tilde, navegación de catálogo completo, ausencia GameInsider, capacidades sin barras numéricas y ciclo Lab. Capturas representativas en .artifacts/content-update/; renders en .artifacts/cv/. No equivale a revisar 170 imágenes.

Límites: un navegador Chromium integrado; reduced motion revisado por regla CSS existente, sin emular preferencia ni teclado virtual. No se ejecutaron tests ni despliegues de repositorios externos. Las verificaciones documentales del contenido no certifican empleo, grado ni nivel de inglés de forma independiente.
