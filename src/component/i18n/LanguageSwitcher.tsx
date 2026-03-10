"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { LOCALES, type Locale } from "@/i18n/locales";
import getLocaleFromPath from "@/i18n/utils";

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname() ?? "/";
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentLocale = getLocaleFromPath(pathname) ?? "en";
  const currentLocaleObj = LOCALES.find((l) => l.code === currentLocale);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [open]);

  const changeLocale = (locale: Locale) => {
    const segs = pathname.split("/").filter(Boolean);
    let newPath = "/" + locale;
    const current = getLocaleFromPath(pathname);
    if (current) {
      segs[0] = locale;
      newPath = "/" + segs.join("/");
    } else {
      newPath = `/${locale}${pathname === "/" ? "" : pathname}`;
    }
    const search = searchParams ? (searchParams.toString() ? `?${searchParams.toString()}` : "") : "";
    setOpen(false);
    router.push(newPath + search);
  };

  return (
    <div className={className} ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="p-0 rounded-full hover:bg-gray-100"
      >
        <img
          src={`/flags/${currentLocale}.svg`}
          alt={`${currentLocale} flag`}
          className="inline-block w-8 h-8 rounded-full object-cover bg-white"
        />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded shadow-lg z-50">
          {LOCALES.map((l) => (
            <button
              key={l.code}
              className={`w-full text-left px-3 py-2 hover:bg-gray-100 flex items-center gap-3 ${currentLocale === l.code ? 'font-bold' : ''}`}
              onClick={() => changeLocale(l.code)}
            >
              <img src={`/flags/${l.code}.svg`} alt={`${l.code} flag`} className="w-6 h-6 rounded-full object-cover" />
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
