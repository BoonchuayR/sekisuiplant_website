"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

type CookieSettings = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

const defaultSettings: CookieSettings = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

export default function CookieConsent() {
  const t = useTranslations("cookieConsent");
  const [showCustomize, setShowCustomize] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const [settings, setSettings] = useState<CookieSettings>(() => {
    if (typeof window === "undefined") return defaultSettings;

    const saved = localStorage.getItem("cookie-settings");
    if (!saved) return defaultSettings;

    try {
      const parsed = JSON.parse(saved);
      return {
        necessary: true,
        analytics: Boolean(parsed.analytics),
        marketing: Boolean(parsed.marketing),
        preferences: Boolean(parsed.preferences),
      };
    } catch {
      return defaultSettings;
    }
  });

  const hasConsent =
    typeof window !== "undefined" && !!localStorage.getItem("cookie-settings");

  const save = (data: CookieSettings) => {
    localStorage.setItem("cookie-settings", JSON.stringify(data));
    window.location.reload();
  };

  const toggleSetting = (key: "analytics" | "marketing" | "preferences") => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (hasConsent) return null;

  return (
    <div className="fixed bottom-5 left-1/2 z-[999] w-[calc(100%-24px)] max-w-[680px] -translate-x-1/2">
      <div className="rounded-[24px] border border-neutral-200 bg-white p-5 shadow-xl">
        {!showCustomize ? (
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-lg font-semibold text-neutral-900">
                {t("title")}
              </h2>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                {t("description")}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowDetails((prev) => !prev)}
              className="inline-flex items-center gap-1 text-sm font-medium text-blue-600"
            >
              {showDetails ? t("hideDetails") : t("showDetails")}
              <ChevronRight
                size={16}
                className={`transition-transform ${
                  showDetails ? "rotate-90" : ""
                }`}
              />
            </button>

            {showDetails && (
              <div className="rounded-2xl bg-neutral-50 px-4 py-3 text-sm leading-6 text-neutral-600">
                <p>{t("shortDetail")}</p>
              </div>
            )}

            <div className="flex justify-center gap-3 flex-wrap">
              <button
                type="button"
                onClick={() => {
                  setShowCustomize(true);
                  setShowDetails(true);
                }}
                className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-800"
              >
                {t("customize")}
              </button>

              <button
                type="button"
                onClick={() =>
                  save({
                    necessary: true,
                    analytics: true,
                    marketing: true,
                    preferences: true,
                  })
                }
                className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white"
              >
                {t("allowAll")}
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-lg font-semibold text-neutral-900">
                {t("customizeTitle")}
              </h2>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                {t("customizeDescription")}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowDetails((prev) => !prev)}
              className="inline-flex items-center gap-1 self-start text-sm font-medium text-blue-600"
            >
              {showDetails ? t("hideDetails") : t("showDetails")}
              <ChevronRight
                size={16}
                className={`transition-transform ${
                  showDetails ? "rotate-90" : ""
                }`}
              />
            </button>

            {[
              { key: "necessary", disabled: true },
              { key: "analytics", disabled: false },
              { key: "marketing", disabled: false },
              { key: "preferences", disabled: false },
            ].map(({ key, disabled }) => (
              <div
                key={key}
                className="rounded-2xl border border-neutral-200 p-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-neutral-900">
                      {t(`${key}Title`)}
                    </p>
                    <p className="mt-1 text-sm text-neutral-600">
                      {t(`${key}Short`)}
                    </p>
                  </div>

                  <button
                    type="button"
                    disabled={disabled}
                    onClick={() => {
                      if (disabled) return;
                      toggleSetting(
                        key as "analytics" | "marketing" | "preferences"
                      );
                    }}
                    className={`relative h-6 w-11 rounded-full transition ${
                      settings[key as keyof CookieSettings]
                        ? "bg-blue-600"
                        : "bg-gray-300"
                    } ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
                  >
                    <span
                      className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                        settings[key as keyof CookieSettings]
                          ? "right-1"
                          : "left-1"
                      }`}
                    />
                  </button>
                </div>

                {showDetails && (
                  <p className="mt-3 text-sm leading-6 text-neutral-500">
                    {t(`${key}Description`)}
                  </p>
                )}
              </div>
            ))}

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setShowCustomize(false)}
                className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800"
              >
                {t("back")}
              </button>

              <button
                type="button"
                onClick={() => save(settings)}
                className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white"
              >
                {t("saveSettings")}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}