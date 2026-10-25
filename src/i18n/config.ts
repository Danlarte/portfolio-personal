export const LOCALES = ["es", "en"] as const;

export type Lang = (typeof LOCALES)[number];

export const DEFAULT_LANG: Lang = "es";

export const LOCALE_META: Record<Lang, { ogLocale: string; label: string; htmlLang: string }> = {
    es: { ogLocale: "es_AR", label: "Español", htmlLang: "es" },
    en: { ogLocale: "en_US", label: "English", htmlLang: "en" },
};

export function isLang(value: string): value is Lang {
    return (LOCALES as readonly string[]).includes(value);
}
