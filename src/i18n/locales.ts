export const SUPPORTED_LOCALES = ["en", "th", "ja"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const LOCALES: { code: Locale; label: string; flag: string }[] = [
  { code: "en", label: "EN", flag: "🇺🇸" },
  { code: "th", label: "ไทย", flag: "🇹🇭" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
];

export default {
  SUPPORTED_LOCALES,
  LOCALES,
};
