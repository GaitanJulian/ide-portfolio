# Estado actual

Actualizado: **2026-11-09**, America/Bogota. [Índice](index.md) · [Registro](log.md).

## Objetivo y revisión

Rama main, HEAD observado 480b750 (sin commits nuevos). Se conservaron la mejora visual anterior, AGENTS y wiki previamente sin seguimiento. El usuario aportó [el perfil bilingüe](raw/2026-11-09-professional-profile-bilingual.md) y confirmó conservar Lab, retirar GameInsider y añadir ES/EN. Se implementó la actualización de contenido y los CV dentro de ese alcance. Sin commit, push ni publicación.

## Implementado

- Nombre completo, Bucaramanga, Backend / Full-Stack y disponibilidad inmediata remota; Invisible finalizado en septiembre de 2025, Campuslands con prácticas/contratación de mayo a noviembre de 2026; UIS y grado de marzo de 2026; C1 declarado sin certificación formal.
- Contenido compartido en [professional.ts](../src/data/professional.ts), siete proyectos en [projects.ts](../src/data/projects.ts), tres destacados. GameInsider retirado de rutas activas; Lab conservado con las mismas reglas/comandos. Capacidades sin puntuaciones.
- Selector ES/EN visible en desktop/móvil, persistencia local, lang/title/description actualizados. [i18n](../src/i18n/Language.tsx) traduce nodos React mediante diccionario explícito, sin mutación del DOM visible, IDs, hrefs, comandos o valores de formularios.
- [CV español](../public/cv/julian-gaitan-es.pdf) y [CV inglés](../public/cv/julian-gaitan-en.pdf), una página cada uno; descargas conectadas en resume/contacto. Generación reproducible desde los datos del sitio.
- Dirección visual anterior conservada: Syne/JetBrains Mono, carbón neutro, amarillo/cyan/lila y 13 SVG locales Tabler con MIT.

## Evidencia actual

Nueva matriz: **17 vistas × 2 idiomas × 5 tamaños = 170 lecturas**, sin overflow horizontal de editor/página y selector dentro del viewport (1440×900, 1280×720, 768×1024, 760×900 y 390×844). Se inspeccionaron capturas representativas y los dos PDF renderizados. No se afirma inspección visual de 170 capturas.

Cambio de idioma mantiene pestaña activa y texto introducido en AI; respuesta se localiza al cambiar. Preferencia persiste al recargar. Búsqueda bilingüe por curriculum sin tilde comprobada. Dos descargas reales de PDF verificadas. Comprobaciones de contenido/AI/IDs y build/TypeScript aprobadas; cobertura detallada en [desarrollo](development.md).

Se contrastaron README de PaymentFlow, DocuFlow, IncidentHub, Logistics y StatusBoard, más esquema SQLite de este último. No se ejecutaron sus tests ni se certificó disponibilidad de despliegues. [Fuentes, decisiones y pendientes](content.md). No se inventaron métricas ni se publicaron campos por verificar.

## Continuidad

Actualización completada localmente. Evidencia ignorada en .artifacts/content-update/ y .artifacts/cv/. Los informes visuales anteriores son históricos para su alcance. Falta solo revisión editorial del propietario si desea ampliar los datos omitidos. No hay autorización para publicar o hacer commit. Mantener las dos traducciones y regenerar ambos CV al cambiar el modelo.
