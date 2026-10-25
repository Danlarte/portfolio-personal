import { DEFAULT_LANG, isLang, type Lang } from "./config";
import es from "./dict/es.json";
import en from "./dict/en.json";

// Fails type-checking if the English dictionary is missing any key present in the Spanish one.
const enDict = en satisfies typeof es;

export const dictionaries: Record<Lang, typeof es> = {
    es,
    en: enDict,
};

export type Dictionary = typeof es;

export function dict(lang: Lang): Dictionary {
    return dictionaries[lang];
}

export function getLang(pathname: string): Lang {
    const segment = pathname.split("/")[1];
    return isLang(segment) ? segment : DEFAULT_LANG;
}

export function localizePath(lang: Lang, path: string): string {
    const clean = path.replace(/^\/+|\/+$/g, "");
    return clean ? `/${lang}/${clean}` : `/${lang}`;
}

export function stripLang(pathname: string): string {
    const stripped = pathname.replace(/^\/(es|en)(?=\/|$)/, "");
    const trimmed = stripped.replace(/\/+$/, "");
    return trimmed === "" ? "/" : trimmed;
}

export function otherLang(lang: Lang): Lang {
    return lang === "es" ? "en" : "es";
}

export { DEFAULT_LANG, LOCALES, LOCALE_META, isLang, type Lang } from "./config";
