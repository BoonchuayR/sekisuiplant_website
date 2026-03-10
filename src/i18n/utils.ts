import { SUPPORTED_LOCALES, type Locale } from "@/i18n/locales";

export function getLocaleFromPath(pathname: string): Locale | undefined {
  if (!pathname) return undefined;
  const segs = pathname.split("/").filter(Boolean);
  if (segs.length === 0) return undefined;
  const first = segs[0] as string;
  if ((SUPPORTED_LOCALES as readonly string[]).includes(first)) return first as Locale;
  return undefined;
}

export default getLocaleFromPath;
