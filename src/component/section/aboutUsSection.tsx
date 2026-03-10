"use client";
import Button from '../ui/button'
import { useTranslations } from 'next-intl'

function AboutUsSection() {
  const t = useTranslations("aboutUs");
  
  return (
    <div className='flex flex-col gap-10 max-w-[90%] w-full mx-auto py-20 items-center text-center'>
        <Button text={t("button")} variant='outline'/>
        <span className='text-md leading-7'><span className='font-bold'>{t("companyName")}</span>{t("description")}</span>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20 lg:gap-40 mt-0 md:mt-5">
            <div className="flex flex-col gap-4">
                <p className='text-mainBlue text-4xl font-extrabold'>{t("stats.customers")}</p>
                <p className='uppercase text-gray-700 text-xs'>{t("stats.customersLabel")}</p>
            </div>
            <div className="flex flex-col gap-4">
                <p className='text-mainBlue text-4xl font-extrabold'>{t("stats.projects")}</p>
                <p className='uppercase text-gray-700 text-xs'>{t("stats.projectsLabel")}</p>
            </div>
            <div className="flex flex-col gap-4">
                <p className='text-mainBlue text-4xl font-extrabold'>{t("stats.awards")}</p>
                <p className='uppercase text-gray-700 text-xs'>{t("stats.awardsLabel")}</p>
            </div>
            <div className="flex flex-col gap-4">
                <p className='text-mainBlue text-4xl font-extrabold'>{t("stats.workers")}</p>
                <p className='uppercase text-gray-700 text-xs'>{t("stats.workersLabel")}</p>
            </div>
        </div>
    </div>
  )
}

export default AboutUsSection