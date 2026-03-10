import { useTranslations } from 'next-intl'
import Button from '../ui/button';

function ContactSection() {
    const t = useTranslations("contactSection");

  return (
    <div className='flex flex-col gap-10 max-w-[90%] w-full mx-auto py-20 items-center text-center'>
        <div className="flex items-center w-full h-auto rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('/images/contact-banner.png')" }}>
            <div className="flex flex-col gap-10 md:gap-20 max-w-[70%] w-full mx-auto py-20 items-center text-center">
                <div className="space-y-5 md:space-y-10">
                    <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold">{t("title")}</h2>
                    <p className="text-sm md:text-md max-w-[70%] md:max-w-[50%] mx-auto">{t("desc")}</p>
                </div>
                <Button
                    text={t("button")}
                    variant="primary"
                />
            </div>
        </div>
    </div>
  )
}

export default ContactSection