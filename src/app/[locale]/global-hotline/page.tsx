"use client"
import React from 'react'
import { useTranslations } from "next-intl";

function GlobalHotline() {
    const t = useTranslations("globalHotline");
  return (
    <div className="max-w-[90%] md:max-w-[80%] mx-auto pt-40 pb-24">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-mainBlue leading-tight text-center">{t("title")}</h1>
        <div className="max-w-sm mx-auto mt-10 mb-15 text-red-400">
            <hr className="border-t-3 border-red-400"/>
        </div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-mainBlue leading-tight text-center">- {t("subtitle")} -</h2>
        <div className="max-w-2xl mx-auto space-y-7 mt-10">
            <div className="">
                <h3 className="text-mainBlue font-medium text-xl">{t("paragraph1.title")}</h3>
                <ul className="list-disc pl-10 mt-4 space-y-3">
                    <li>{t("paragraph1.0")}</li>
                    <li>{t("paragraph1.1")}</li>
                    <li>{t("paragraph1.2")}</li>
                    <li>{t("paragraph1.3")}</li>
                    <li>{t("paragraph1.4")}</li>
                    <li>{t("paragraph1.5")}</li>
                </ul>
            </div>
            <div className="">
                <h3 className="text-mainBlue font-medium text-xl">{t("paragraph2.title")}</h3>
                <p className="pl-5 mt-4">{t("paragraph2.0")}</p>
            </div>
            <div className="">
                <h3 className="text-mainBlue font-medium text-xl">{t("paragraph3.title")}</h3>
                <p className=" mt-4 pl-5">{t("paragraph3.0")}</p>
                <ul className="list-disc pl-10 my-8 space-y-1">
                    <li>{t("paragraph3.1")}</li>
                    <li>{t("paragraph3.2")}</li>
                    <li>{t("paragraph3.3")}</li>
                    <li>{t("paragraph3.4")}</li>
                    <li>{t("paragraph3.5")}</li>
                    <li>{t("paragraph3.6")}</li>
                    <li>{t("paragraph3.7")}</li>
                    <li>{t("paragraph3.8")}</li>
                    <li>{t("paragraph3.9")}</li>
                </ul>
                <p className="pl-5">{t("paragraph3.10")}</p>
                <p className="pl-5">{t("paragraph3.11")}</p>
            </div>
            <div className="">
                <h3 className="text-mainBlue font-medium text-xl">{t("paragraph4.title")}</h3>
                <p className="pl-5 mt-4">{t("paragraph4.0")}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <button onClick={() => window.location.href = "https://portal.dq-helpline.com/sekisui-supplier/en/"} className=" px-5 py-2 text-sm bg-mainBlue rounded-sm text-white space-y-2 cursor-pointer">
                    <p className="font-medium">{t("cta.0")}</p>
                    <p>- {t("cta.1")}- </p>
                </button>
                <img className='mt-3' src="/images/qrcode01.jpg" alt="QR Code" width={200} height={200} />
            </div>
            <hr className="mt-10" />
        </div>
    </div>
  )
}

export default GlobalHotline