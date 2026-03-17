"use client";

import { useTranslations } from "next-intl";

export default function PrivacyPolicyPage() {
  const t = useTranslations("privacyPolicyPage");

  const dataCollectionItems = [
    t("dataCollection.items.0"),
    t("dataCollection.items.1"),
    t("dataCollection.items.2"),
    t("dataCollection.items.3"),
    t("dataCollection.items.4"),
    t("dataCollection.items.5"),
    t("dataCollection.items.6"),
    t("dataCollection.items.7"),
    t("dataCollection.items.8"),
    t("dataCollection.items.9"),
    t("dataCollection.items.10"),
    t("dataCollection.items.11"),
    t("dataCollection.items.12"),
    t("dataCollection.items.13"),
    t("dataCollection.items.14"),
    t("dataCollection.items.15"),
    t("dataCollection.items.16"),
    t("dataCollection.items.17"),
    t("dataCollection.items.18"),
    t("dataCollection.items.19"),
    t("dataCollection.items.20"),
    t("dataCollection.items.21"),
    t("dataCollection.items.22"),
    t("dataCollection.items.23")
  ];

  const reasonsItems = [
    t("reasons.items.0"),
    t("reasons.items.1"),
    t("reasons.items.2"),
    t("reasons.items.3")
  ];

  const purposesItems = [
    t("purposes.items.0"),
    t("purposes.items.1"),
    t("purposes.items.2"),
    t("purposes.items.3"),
    t("purposes.items.4"),
    t("purposes.items.5"),
    t("purposes.items.6"),
    t("purposes.items.7"),
    t("purposes.items.8"),
    t("purposes.items.9")
  ];

  const rightsItems = [
    t("rights.items.0"),
    t("rights.items.1"),
    t("rights.items.2"),
    t("rights.items.3"),
    t("rights.items.4"),
    t("rights.items.5"),
    t("rights.items.6")
  ];

  return (
    <main className="max-w-[90%] md:max-w-[80%] mx-auto pt-40 pb-24">
      <section className="max-w-5xl mx-auto">
        <div className="space-y-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-mainBlue leading-tight text-center">
            {t("title")}
          </h1>

          <div className="space-y-6 text-sm md:text-base leading-7 md:leading-8 text-gray-700">
            <p>{t("intro.0")}</p>
            <p>{t("intro.1")}</p>
            <p>{t("intro.2")}</p>
            <p>{t("intro.3")}</p>
          </div>
        </div>

        <div className="mt-12 space-y-10 text-sm md:text-base leading-7 md:leading-8 text-gray-700">
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-black">
              {t("terms.title")}
            </h2>
            <p>{t("terms.paragraph1")}</p>
            <p>{t("terms.paragraph2")}</p>
            <p>{t("terms.paragraph3")}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-black">
              {t("dataCollection.title")}
            </h2>
            <p>{t("dataCollection.paragraph1")}</p>

            <ul className="list-disc pl-6 space-y-2">
              {dataCollectionItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <p>{t("dataCollection.paragraph2")}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-black">
              {t("reasons.title")}
            </h2>
            <p>{t("reasons.paragraph1")}</p>

            <ul className="list-disc pl-6 space-y-2">
              {reasonsItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <p>{t("reasons.paragraph2")}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-black">
              {t("purposes.title")}
            </h2>
            <p className="font-semibold text-black">{t("purposes.subtitle")}</p>

            <ul className="list-disc pl-6 space-y-2">
              {purposesItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <p>{t("purposes.paragraph1")}</p>
            <p>{t("purposes.paragraph2")}</p>
            <p>
              {t("purposes.paragraph3.before")}{" "}
              <a
                href="https://marketingplatform.google.com/intl/en_uk/about/analytics/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mainBlue underline break-all"
              >
                https://marketingplatform.google.com/intl/en_uk/about/analytics/
              </a>
            </p>
            <p>{t("purposes.paragraph4")}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-black">
              {t("noProvide.title")}
            </h2>
            <p>{t("noProvide.paragraph1")}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-black">
              {t("sharing.title")}
            </h2>
            <p>{t("sharing.paragraph1")}</p>
            <p>{t("sharing.paragraph2")}</p>
            <p>{t("sharing.paragraph3")}</p>
            <p>{t("sharing.paragraph4")}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-black">
              {t("transfer.title")}
            </h2>
            <p>{t("transfer.paragraph1")}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-black">
              {t("retention.title")}
            </h2>
            <p>{t("retention.paragraph1")}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-black">
              {t("rights.title")}
            </h2>
            <p>{t("rights.paragraph1")}</p>

            <ul className="list-disc pl-6 space-y-2">
              {rightsItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <p>{t("rights.paragraph2")}</p>
            <a
              href={`mailto:${t("contactEmail")}`}
              className="text-mainBlue underline break-all"
            >
              {t("contactEmail")}
            </a>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-black">
              {t("inquiries.title")}
            </h2>
            <p>{t("inquiries.paragraph1")}</p>
            <a
              href={`mailto:${t("contactEmail")}`}
              className="text-mainBlue underline break-all"
            >
              {t("contactEmail")}
            </a>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-black">
              {t("changes.title")}
            </h2>
            <p>{t("changes.paragraph1")}</p>
            <p className="italic text-gray-600">{t("lastUpdated")}</p>
          </section>
        </div>
      </section>
    </main>
  );
}