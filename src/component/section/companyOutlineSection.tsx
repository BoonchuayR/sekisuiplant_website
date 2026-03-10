import { useTranslations } from "next-intl"

function CompanyOutlineSection() {
  const t = useTranslations("aboutUsPage.companyOutline")
  return (
    <div className='flex flex-col gap-10 max-w-[90%] w-full mx-auto py-20 items-center text-center'>
      <h2 className='text-4xl font-bold'>{t("title")}</h2>
      <div className="w-full border-t border-gray-300">

        <div className="py-10 flex flex-col md:flex-row text-start border-b border-gray-300">
          <div className="text-gray-500 md:w-1/6">{t("rows.0.label")}</div>
          <div className="md:flex-1">{t("rows.0.value")}</div>
        </div>

        <div className="py-10 flex flex-col md:flex-row text-start border-b border-gray-300">
          <span className="text-gray-500 md:w-1/6">{t("rows.1.label")}</span>
          <p className="md:flex-1">{t("rows.1.value")}</p>
        </div>

        <div className="py-10 flex flex-col md:flex-row text-start border-b border-gray-300">
          <span className="text-gray-500 md:w-1/6">{t("rows.2.label")}</span>
          <p className="md:flex-1">{t("rows.2.value")}</p>
        </div>

        <div className="py-10 flex flex-col md:flex-row text-start border-b border-gray-300">
          <span className="text-gray-500 md:w-1/6">{t("rows.3.label")}</span>
          <ul className="list-disc list-inside md:flex-1">
            <li>{t("rows.3.value.line1")}</li>
            <li>{t("rows.3.value.line2")}</li>
            <li>{t("rows.3.value.line3")}</li>
          </ul>
        </div>

        <div className="py-10 flex flex-col md:flex-row text-start border-b border-gray-300">
          <span className="text-gray-500 md:w-1/6">{t("rows.4.label")}</span>
          <ul className="list-disc list-inside md:flex-1">
            <li>{t("rows.4.value.line1")}</li>
            <li>{t("rows.4.value.line2")}</li>
            <li>{t("rows.4.value.line3")}</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default CompanyOutlineSection