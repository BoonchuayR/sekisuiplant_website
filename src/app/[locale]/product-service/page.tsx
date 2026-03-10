"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight, CircleDot } from "lucide-react";
import ContactSection from "@/component/section/contactSection";

type ServiceItem = {
  key: string;
  image: string;
  href: string;
};

export default function ProductServicePage() {
  const t = useTranslations("productServicePage");

  const services: ServiceItem[] = [
    {
      key: "plantConstruction",
      image: "/images/product-service/plant-construction.jpg",
      href: "/contact",
    },
    {
      key: "panelTank",
      image: "/images/product-service/panel-tank.jpg",
      href: "/contact",
    },
    {
      key: "heatExchangeCoating",
      image: "/images/product-service/heat-exchange-coating.jpg",
      href: "/contact",
    },
  ];

  return (
    <main className="max-w-[90%] mx-auto pt-40 pb-24 w-full space-y-24 md:space-y-32">
      <section className="text-center max-w-5xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
          <span className="text-black">{t("hero.titleFirst")}</span>{" "}
          <span className="text-mainBlue">{t("hero.titleSecond")}</span>
        </h1>

        <div className="max-w-4xl mx-auto text-sm md:text-base leading-8 text-gray-600 space-y-3">
          <p>{t("hero.description1")}</p>
          <p>{t("hero.description2")}</p>
          <p>{t("hero.description3")}</p>
        </div>
      </section>

      <section className="space-y-24 md:space-y-32">
        {services.map((service, index) => {
          const reverse = index % 2 === 1;

          return (
            <article
              key={service.key}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
            >
              <div className={reverse ? "lg:order-2" : "lg:order-1"}>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#EEF2FA] px-4 py-2 text-[11px] md:text-xs text-gray-500">
                  <CircleDot className="w-4 h-4 text-mainBlue fill-mainBlue" />
                  <span>{t(`services.${service.key}.badge`)}</span>
                </div>

                <div className="mt-6 space-y-6">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">
                    {t(`services.${service.key}.title`)}
                  </h2>

                  <p className="text-sm md:text-base leading-8 text-gray-600 max-w-xl">
                    {t(`services.${service.key}.description`)}
                  </p>

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 rounded-full bg-mainBlue px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
                  >
                    {t("common.viewMore")}
                    <span className="inline-flex items-center justify-center rounded-full bg-white text-mainBlue w-5 h-5">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </div>
              </div>

              <div className={reverse ? "lg:order-1" : "lg:order-2"}>
                <div className="relative overflow-hidden rounded-[28px] w-full aspect-[16/10] shadow-sm">
                  <Image
                    src={service.image}
                    alt={t(`services.${service.key}.title`)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <ContactSection />
    </main>
  );
}
