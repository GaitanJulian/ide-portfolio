# Estado actual

Actualizado: **2026-11-10**, America/Bogota. [Índice](index.md) · [Registro](log.md).

## Objetivo y revisión

La actualización bilingüe y los CV se registraron en el commit `2a68257` y se enviaron a `origin/main`. El usuario aportó [el perfil bilingüe](raw/2026-11-09-professional-profile-bilingual.md) y confirmó conservar Lab, retirar GameInsider y añadir ES/EN.

## Implementado

- Nombre completo, Bucaramanga, Backend / Full-Stack y disponibilidad inmediata remota; Invisible finalizado en septiembre de 2025, Campuslands con prácticas/contratación de mayo a noviembre de 2026; UIS y grado de marzo de 2026; C1 declarado sin certificación formal.
- Contenido compartido en [professional.ts](../src/data/professional.ts), siete proyectos en [projects.ts](../src/data/projects.ts), tres destacados. GameInsider retirado de rutas activas; Lab conservado con las mismas reglas/comandos. Capacidades sin puntuaciones.
- Selector ES/EN visible en desktop/móvil, persistencia local, lang/title/description actualizados. [i18n](../src/i18n/Language.tsx) traduce nodos React mediante diccionario explícito, sin mutación del DOM visible, IDs, hrefs, comandos o valores de formularios.
- Inglés por defecto para visitas sin preferencia guardada y para el HTML inicial; se conserva la elección previa de español. Cambio local sin commit.
- [CV español](../public/cv/julian-gaitan-es.pdf) y [CV inglés](../public/cv/julian-gaitan-en.pdf), una página cada uno; descargas conectadas en resume/contacto. Generación reproducible desde los datos del sitio.
- Dirección visual anterior conservada: Syne/JetBrains Mono, carbón neutro, amarillo/cyan/lila y 13 SVG locales Tabler con MIT.
- Las fichas con repositorio GitHub muestran un acceso destacado bajo el identificador del caso, con icono y etiqueta traducible; los proyectos sin enlace no lo muestran. Cambio local pendiente de commit.
- La vista [Interactive Portfolio](../src/views/LabViews.tsx) carga bajo demanda la compilación Unity WebGL local en un iframe, conservando enlaces externos. El canvas ocupa todo el iframe y se oculta el pie blanco de la plantilla, incluido su control de pantalla completa. Los archivos comprimidos ocupan aproximadamente 53 MB. Cambio local sin commit.
- Preparado el despliegue a GitHub Pages mediante [workflow](../.github/workflows/deploy.yml), con base de producción `/ide-portfolio/` y rutas adaptadas para CV, iconos y Unity. Pendiente subir cambios, activar GitHub Actions como fuente de Pages y verificar el despliegue público.

## Evidencia actual

Nueva matriz: **17 vistas × 2 idiomas × 5 tamaños = 170 lecturas**, sin overflow horizontal de editor/página y selector dentro del viewport (1440×900, 1280×720, 768×1024, 760×900 y 390×844). Se inspeccionaron capturas representativas y los dos PDF renderizados. No se afirma inspección visual de 170 capturas.

Cambio de idioma mantiene pestaña activa y texto introducido en AI; respuesta se localiza al cambiar. Preferencia persiste al recargar. Búsqueda bilingüe por curriculum sin tilde comprobada. Dos descargas reales de PDF verificadas. Comprobaciones de contenido/AI/IDs y build/TypeScript aprobadas; cobertura detallada en [desarrollo](development.md).

Se contrastaron README de PaymentFlow, DocuFlow, IncidentHub, Logistics y StatusBoard, más esquema SQLite de este último. No se ejecutaron sus tests ni se certificó disponibilidad de despliegues. [Fuentes, decisiones y pendientes](content.md). No se inventaron métricas ni se publicaron campos por verificar.

## Continuidad

El 2026-11-10 `npm run build` y `node scripts/check-content.cjs` pasaron; se inspeccionaron rutas base generadas y presencia de CV y Unity en `dist`. El workflow y el despliegue público aún no se han ejecutado. En navegador local se observó la pantalla inicial de Unity; no se verificaron la escena final ni sus controles. Debe comprobarse la entrega de archivos comprimidos en el hosting definitivo. Evidencia anterior ignorada en .artifacts/content-update/ y .artifacts/cv/. Mantener las dos traducciones y regenerar ambos CV al cambiar el modelo.
