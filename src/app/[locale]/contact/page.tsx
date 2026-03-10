"use client";
import { useTranslations } from "next-intl";
import ContactForm from "@/component/ui/contactForm";
import { FacebookIcon } from "@/component/ui/icon";

export default function ContactPage() {
  const t = useTranslations("contactPage");

  return (
    <div className="max-w-[90%] mx-auto pt-40 pb-20 w-full space-y-20">
        <div className="text-center space-y-7">
            <h2 className="text-md md:text-xl text-mainBlue">{t("title")}</h2>
            <h3 className="text-2xl md:text-4xl lg:text-6xl font-bold">{t("subtitle")}</h3>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 w-full mx-auto">
            <div className="w-full lg:w-1/2">
                <ContactForm />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col text-center items-center lg:text-start lg:items-start justify-center bg-mainBlue rounded-2xl p-20 space-y-15">
                <div className="text-white space-y-4">
                    <h3 className="text-2xl font-bold">{t("info.address.title")}</h3>
                    <p>{t("info.address.desc")}</p>
                </div>

                <div className="text-white space-y-4">
                    <h3 className="text-2xl font-bold">{t("info.contact.title")}</h3>
                    <div className="">
                        <p>{t("info.contact.phone")}</p>
                        <p>{t("info.contact.email")}</p>
                    </div>
                </div>

                <div className="text-white space-y-4">
                    <h3 className="text-2xl font-bold">{t("info.social.title")}</h3>
                    <div className="flex gap-5">
                        <FacebookIcon />
                        <FacebookIcon />
                        <FacebookIcon />
                        <FacebookIcon />
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full flex justify-center">
            <div className="rounded-xl w-full max-w-[85%] h-[400px] overflow-hidden">
                <iframe
                    src={`https://www.google.com/maps?q=${encodeURIComponent(t("info.address.desc"))}&output=embed`}
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={t("info.address.title")}
                    className="border-0"
                />
            </div>
        </div>
    </div>
  );
}
