"use client";
import React from "react";
import Button from "@/component/ui/button"
import { Globe } from "lucide-react"
import { useTranslations } from "next-intl"

function ServiceSection() {
    const t = useTranslations('service')
    return (
        <div className="bg-foreground">
            <div className="flex flex-col gap-10 max-w-[70%] w-full mx-auto py-20 items-center text-center">
                <Button text={t('button')} variant='outline' />
                <h4 className="text-2xl font-semibold">{t('heading')}</h4>
                <div className="flex flex-wrap gap-10 md:gap-20 mt-0 sm:mt-10 justify-center">
                    <div className="bg-white rounded-2xl px-5 py-10 flex flex-col gap-8 items-center shadow-xl w-70 h-65 group hover:bg-mainBlue hover:scale-103 cursor-pointer transition duration-300">
                        <div className="w-12 h-12 rounded-full bg-mainBlue group-hover:bg-white flex items-center justify-center transition-colors duration-300">
                            <Globe className="text-white group-hover:text-mainBlue" />
                        </div>
                        <div className="text-center gap-3 flex flex-col group-hover:text-white">
                            <h5 className="font-semibold">{t('card.title')}</h5>
                            <p className="text-sm ">{t('card.desc')}</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl px-5 py-10 flex flex-col gap-8 items-center shadow-xl w-70 h-65 group hover:bg-mainBlue hover:scale-103 cursor-pointer transition duration-300">
                        <div className="w-12 h-12 rounded-full bg-mainBlue group-hover:bg-white flex items-center justify-center transition-colors duration-300">
                            <Globe className="text-white group-hover:text-mainBlue" />
                        </div>
                        <div className="text-center gap-3 flex flex-col group-hover:text-white">
                            <h5 className="font-semibold">{t('card.title')}</h5>
                            <p className="text-sm ">{t('card.desc')}</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl px-5 py-10 flex flex-col gap-8 items-center shadow-xl w-70 h-65 group hover:bg-mainBlue hover:scale-103 cursor-pointer transition duration-300">
                        <div className="w-12 h-12 rounded-full bg-mainBlue group-hover:bg-white flex items-center justify-center transition-colors duration-300">
                            <Globe className="text-white group-hover:text-mainBlue" />
                        </div>
                        <div className="text-center gap-3 flex flex-col group-hover:text-white">
                            <h5 className="font-semibold">{t('card.title')}</h5>
                            <p className="text-sm ">{t('card.desc')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection