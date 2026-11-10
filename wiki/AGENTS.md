# Esquema y mantenimiento de la wiki

## Propósito y rutas

Esta wiki mantiene contexto acumulativo del portafolio IDE. El catálogo es [index.md](index.md), la reentrada es [current-state.md](current-state.md) y el historial es [log.md](log.md). El [AGENTS de raíz](../AGENTS.md) facilita su descubrimiento. No hace falta cargar toda la wiki en cada tarea.

Las páginas temáticas sintetizan conocimiento; el código y la documentación original son fuentes. Las fuentes vivas están en `../src/`, los manifiestos de raíz y `../audit/`. [raw/2026-11-09-project-intent.md](raw/2026-11-09-project-intent.md) conserva únicamente el contexto inicial necesario que no existía en el repositorio. No copiar el código completo a `raw/`.

## Evidencia y convenciones

- Escribir en español; mantener identificadores y comandos exactos.
- Usar enlaces Markdown relativos al archivo que los contiene. Acompañar el enlace con el símbolo relevante cuando ayude, por ejemplo `useWorkspace` en [su hook](../src/hooks/useWorkspace.ts).
- Fechar estados y afirmaciones variables. La base inicial es el commit `480b750aa903ff25e98d0ac82146fc9b1ccb9653`, observado el 2026-11-09 en `main`.
- Separar hecho observado en código, intención del usuario, inferencia y propuesta. Que la UI diga «verified» no constituye verificación independiente.
- Anotar comando, fecha, resultado y cobertura de las comprobaciones realmente ejecutadas. Lectura estática no equivale a validación en navegador ni a pruebas aprobadas.
- No leer ni copiar secretos o archivos de entorno sensibles. No documentar exhaustivamente dependencias instaladas, builds, binarios ni código generado.
- Los archivos en `raw/` son inmutables: guardar una revisión nueva como otra fuente, sin sobrescribir la anterior. El código es una fuente viva y puede cambiar con el desarrollo autorizado.

## Ingerir

Leer la fuente y contrastarla con la versión vigente. Actualizar las síntesis pertinentes y sus relaciones; registrar contradicciones explícitamente. Dar de alta páginas nuevas en el índice. Actualizar estado y añadir al final del log una entrada `## [AAAA-MM-DD] operación | asunto`. No reemplazar el historial.

## Consultar

Comenzar por índice y estado, abrir las páginas relevantes y comprobar la evidencia viva cuando pueda haber cambiado. Responder con enlaces. Incorporar una síntesis duradera cuando aporte conocimiento reutilizable; no registrar cada intercambio trivial. No asumir acceso a chats anteriores.

## Mantener después de desarrollar

Dentro del trabajo autorizado, actualizar arquitectura, contenido, flujos o desarrollo según lo que cambió. Reflejar en el estado qué está implementado, qué se verificó, cambios locales, pendientes y próximo paso. Añadir un registro breve. Preservar decisiones históricas: si se sustituyen, marcarlas como tales y enlazar la vigente. No convertir observaciones del código en decisiones históricas atribuidas sin evidencia.

## Revisar salud

Comprobar enlaces internos, páginas huérfanas, consistencia entre índice/estado/log y fuentes, afirmaciones obsoletas y vacíos. Comparar auditorías históricas con el código actual. Registrar incertidumbre y proponer fuentes; no instalar herramientas ni buscar servicios sin necesidad. Para cambios solo documentales basta validar documentos y alcance; no ejecutar toda la batería de aplicación. No declarar éxito sin evidencia ni hacer commits o publicar sin autorización.
