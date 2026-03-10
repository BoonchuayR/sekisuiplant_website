"use client";
import { useTranslations } from "next-intl";
import Button from "@/component/ui/button";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <div className="relative h-screen w-full flex items-center bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-banner.png')" }}>
      <div className="flex flex-col text-center md:text-start items-center md:items-start space-y-7 max-w-[90%] mx-auto text-white w-full ">
        <p className="text-mainBlue text-sm">{t("backed")}</p>
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold">{t("titleLine1")} <br /> {t("titleLine2")}</h2>
        <h3 className="font-bold md:text-2xl text-lg">{t("subtitle")}</h3>
        <Button text={t("contact")} variant="primary" />
      </div>
    </div>
  );
}