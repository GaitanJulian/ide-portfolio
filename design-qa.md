> Histórico: este informe corresponde a la adaptación visual anterior. La actualización posterior de contenido, ES/EN y CV se documenta en [wiki/development.md](wiki/development.md) y [wiki/current-state.md](wiki/current-state.md).

# QA visual — adaptación de la referencia

Fecha: 2026-11-09. Resultado: adaptación de estilado a un producto existente, no clon de contenido ni funciones. Fuente: https://www.aahanabobade.com/ . Se conservaron amarillo/cyan, textos, metadatos, navegación, tabs, terminal, AI y Lab propios.

## Evidencia comparada

Capturas nuevas y abiertas: referencia home/proyectos/perfil a 1440×900 y home a 390×844; aplicación real a esos tamaños, más 1280×720, 768×1024 y 760×900. Se inspeccionaron comparaciones combinadas, no solo imágenes separadas:

- [.artifacts/reference-refresh/comparison-desktop.png](.artifacts/reference-refresh/comparison-desktop.png): misma ventana de 1440×900 a cada lado; referencia izquierda, adaptación derecha. Composición general y tipografía de cabecera.
- [.artifacts/reference-refresh/comparison-mobile.png](.artifacts/reference-refresh/comparison-mobile.png): capturas de 390×844 a cada lado, legibles a escala original; referencia izquierda, adaptación derecha. Detalle de tipografía, iconos, badges, botones y márgenes.

Las diferencias de contenido, casing del nombre, número de pestañas y altura de chrome son intencionales: los datos/funciones se conservan. No se persigue identidad píxel a píxel. La fuente usa rosa/azul; la adaptación mantiene amarillo/cyan y añade lila únicamente en AI y algunos acentos.

## Hallazgos corregidos y revisión posterior

1. P2: el título CONTACT_PROTOCOL: OPEN se partía dentro del identificador en móvil por el ancho de Syne. Se añadieron dos spans exclusivamente de presentación: protocolo mono y OPEN como título. Mismo texto accesible. Evidencia posterior: [contacto móvil](.artifacts/reference-refresh/after-contact-390.jpg), además de cinco lecturas de geometría sin overflow y texto intacto.
2. P2: PaymentFlow perdía la última letra en otra línea con los tres paneles abiertos a 760px. Se ajustó el tamaño por ancho del editor. Evidencia posterior: [paneles a 760px](.artifacts/reference-refresh/after-panels-760.jpg); altura final 19.95px y line-height 19.96px: una línea completa, sin overflow. Se revisó la nueva captura.
3. P3 resuelto: en columna muy estrecha las tarjetas de señales y títulos necesitaban tamaños específicos. Container query a 320px con una columna de metadatos y títulos más compactos, manteniendo todos los datos.

## Superficies obligatorias

- Fuentes/tipografía: Syne 800 para títulos, JetBrains Mono para texto técnico y chrome; verificadas con estilos computados y capturas. Se conserva fallback Inter/sistema para display y Consolas para mono.
- Espaciado/layout: home abierta, contenedores planos, bordes finos, editor adaptable a paneles. Cinco viewports; 90 lecturas en 18 vistas sin overflow horizontal de editor/página. Capturas representativas de todas las áreas, no se afirma inspección de 90 imágenes.
- Color/tokens: carbón neutro de la fuente, texto gris más claro para legibilidad, amarillo/cyan propios y lila de AI. Estados hover/focus/active/disabled conservados y foco cyan observado mediante Tab.
- Imágenes/iconos: la referencia no requiere fotografía o ilustración para este lenguaje. Se usaron 13 SVG de Tabler, descargados del repositorio oficial y locales, con MIT incluida; sin dependencia de runtime. Capturas confirman iconos reales, no emoji de sustitución.
- Texto/contenido: datos y textos propios preservados; no se copiaron métricas, enlaces o biografía de la referencia. Único cambio JSX: spans de presentación en ContactView; sin modificaciones de handlers, estado, hooks o servicios.

## Interacciones y límites

Se probaron navegación por las 18 vistas, tabs largas/autoscroll, palette por filtro y Enter, Tab/foco, paneles abiertos/cerrados, AI con respuesta PaymentFlow, terminal help/historial/navegación, autorización/desbloqueo/bloqueo de Lab y copia de email/CV deshabilitado. Se restauró Lab bloqueado. Breakpoint 759/760/761 comprobado. Registro consultado del navegador sin warn/error.

Reduced motion se respeta mediante la regla existente !important, revisada en CSS; preferencia no emulada. Un navegador Chromium integrado, sin matriz multinavegador ni teclado virtual. Sin runner de tests; no se certifican enlaces externos ni accesibilidad integral. Build/TypeScript y revisión de diff se registran en la wiki.

No quedan hallazgos visuales P0/P1/P2 abiertos en las superficies inspeccionadas. Las diferencias intencionales descritas son parte del alcance.

final result: passed
