# Visión general

Actualizado: 2026-11-09. [Índice](index.md) · [Estado](current-state.md).

## Intención y presentación

El usuario define el producto como un portafolio personal para presentar proyectos, experiencia y otros aspectos profesionales, basado en un IDE. Fuente: [solicitud inicial](raw/2026-11-09-project-intent.md).

El [README](../README.md), [HTML de entrada](../index.html) y [home](../src/views/ReadmeView.tsx) lo presentan como `SYSTEM://JULIAN_GAITAN`: Julián Andrés Gaitán Hernández, desarrollador Backend / Full-Stack, con experiencia en aplicaciones web, integraciones, calidad de software y evaluación de IA. El contenido está disponible en español e inglés con selector persistente. Reclutadores, equipos técnicos y posibles colaboradores son el público previsto por inferencia de los llamados a contacto y del lenguaje profesional; no hay investigación de usuarios incorporada.

## Experiencia central

El visitante navega por un explorador de archivos virtuales, abre documentos en pestañas y consulta casos de estudio. La home prioriza Urban Map Bucaramanga, IncidentHub y la tesis XR, con acceso al contacto. Una terminal interpreta comandos locales de navegación y un AI Navigator ofrece respuestas curadas. El Lab añade exploraciones de Unity y XR como contenido secundario. Ver [flujos](flows.md) y [contenido](content.md).

La estética combina fondos oscuros, amarillo para énfasis y cyan para información, tipografía Syne/JetBrains Mono, superficies planas y SVG locales Tabler. No hay motor de IDE, edición de código ni shell del sistema. La metáfora de archivos organiza vistas React: `resume.pdf` y `profile.yaml`, por ejemplo, son identificadores de UI, no documentos de esos formatos guardados por el visitante. Fuente: [registry](../src/data/fileRegistry.tsx), [fondo](../src/components/CyberpunkBackground.tsx), [estilos](../src/styles/index.css).

## Alcance comprobado

Es un frontend React + TypeScript + Vite, sin backend propio, base de datos ni conexión a un modelo AI en el código inspeccionado. Los servicios de pagos, incidentes o ETL descritos son proyectos presentados; no son dependencias de ejecución de este portafolio. Las fuentes externas de tipografía y los enlaces a GitHub, LinkedIn, demos e Itch.io sí están declarados. Ver [arquitectura](architecture.md).

El CV está disponible en dos PDF locales (ES/EN), generados desde los datos compartidos. El prototipo Unity se enlaza externamente. Las descripciones profesionales y de proyectos son contenido del repositorio: esta wiki no certifica empleo, nivel de inglés, autoría ni disponibilidad de despliegues externos. [Resume](../src/views/ResumeView.tsx) · [Lab](../src/views/LabViews.tsx) · [pendientes](open-questions.md).

## Alcance y continuidad

La wiki nació como documentación; después el usuario autorizó una mejora visual, adaptación de referencia y actualización profesional bilingüe con CV. Estas tareas están implementadas localmente. No se autorizó commit, push, publicación, modelo AI remoto ni ejecución automática del backlog. Ver el estado y el registro para distinguir el trabajo actual de las fuentes históricas.
