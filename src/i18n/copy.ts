// English copy is the stable key. Technical names, IDs and commands are not translated.
export const spanishCopy: Record<string, string> = {};
export function bilingual(en: string, es: string): string {
    spanishCopy[en.replace(/\s+/g, ' ').trim()] = es;
    return en;
}
export function translate(value: string, language: 'en' | 'es'): string {
    if (language === 'en')
        return value;
    const key = value.replace(/\s+/g, ' ').trim();
    const translated = spanishCopy[key];
    if (translated !== undefined)
        return value.replace(/\S[\s\S]*\S|\S/, translated);
    if (/^\d+ Systems Indexed$/.test(key))
        return value.replace('Systems Indexed', 'proyectos indexados');
    if (/^\d+ RECORDS$/.test(key))
        return value.replace('RECORDS', 'REGISTROS');
    if (key.startsWith('Close '))
        return value.replace('Close ', 'Cerrar ');
    if (key.endsWith(' technologies'))
        return value.replace(' technologies', ': tecnologías');
    if (key.startsWith('open: ') || key.startsWith('cat: ') || key.startsWith('command not found:'))
        return value.replace('command not found:', 'comando no encontrado:').replace('lab archive is locked. Run:', 'el archivo Lab está bloqueado. Ejecuta:').replace('not found. Try', 'no encontrado. Prueba').replace('file not found', 'archivo no encontrado').replace(' or ', ' o ').replace('Did you mean', 'Quizá quisiste decir').replace('Type "help".', 'Escribe "help".');
    if (key.includes('Use "open systems"'))
        return value.replace('Use "open systems" to browse the Project Database.', 'Usa "open systems" para explorar el catálogo de proyectos.');
    if (key.startsWith('opened '))
        return value.replace('opened ', 'abierto ');
    return value;
}
