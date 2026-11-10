import { Children, cloneElement, createContext, isValidElement, useContext, useEffect, useState, type ReactNode } from 'react';
import { translate } from './copy';
import './interfaceCopy';
type Language = 'es' | 'en';
const LanguageContext = createContext<{
    language: Language;
    setLanguage: (language: Language) => void;
}>({ language: 'es', setLanguage: () => undefined });
export function LanguageProvider({ children }: {
    children: ReactNode;
}) {
    const [language, setLanguage] = useState<Language>(() => {
        try {
            return localStorage.getItem('portfolio.language') === 'en' ? 'en' : 'es';
        }
        catch {
            return 'es';
        }
    });
    useEffect(() => {
        document.documentElement.lang = language;
        document.title = language === 'es' ? 'Julián Gaitán — Desarrollador Backend / Full-Stack' : 'Julián Gaitán — Backend / Full-Stack Developer';
        const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
        if (description)
            description.content = language === 'es'
                ? 'Julián Andrés Gaitán Hernández, desarrollador Backend y Full-Stack en Bucaramanga, Colombia. APIs, integraciones, aplicaciones web y evaluación técnica de IA.'
                : 'Julián Andrés Gaitán Hernández, Backend and Full-Stack Developer in Bucaramanga, Colombia. APIs, integrations, web applications and technical AI evaluation.';
        try {
            localStorage.setItem('portfolio.language', language);
        }
        catch { /* Language still works without storage. */ }
    }, [language]);
    return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}
export const useLanguage = () => useContext(LanguageContext);
// Translate React text nodes, never DOM state, IDs, hrefs, form values or handlers.
// Component boundaries opt in with their own Localized wrapper.
export function Localized({ children }: {
    children: ReactNode;
}) {
    const { language } = useLanguage();
    const visit = (nodes: ReactNode): ReactNode => Children.map(nodes, (node): ReactNode => {
        if (typeof node === 'string')
            return translate(node, language);
        if (!isValidElement<Record<string, unknown>>(node))
            return node;
        const props: Record<string, unknown> = {};
        if (typeof node.type === 'string') {
            for (const attribute of ['aria-label', 'title', 'placeholder']) {
                if (typeof node.props[attribute] === 'string')
                    props[attribute] = translate(node.props[attribute] as string, language);
            }
        }
        if ('children' in node.props)
            props.children = visit(node.props.children as ReactNode);
        return cloneElement(node, props);
    });
    return <>{visit(children)}</>;
}
