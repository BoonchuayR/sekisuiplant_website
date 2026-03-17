import { useTranslations } from "next-intl"
import AcheivementCardSection from "@/component/section/acheivementCardSection";    

function AcheivementsPage() {
  return (
    <div>
        {/* Banner */}
        <div className="relative h-screen w-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/acheivements-banner.jpg')" }}>
            <h2 className="text-white font-bold text-6xl md:text-[100px] lg:text-[120px]">Acheivement</h2>
        </div>

        <div className="space-y0">
          <AcheivementCardSection align="center" />
          <AcheivementCardSection />
          <AcheivementCardSection />
        </div>
    </div>
  )
}

export default AcheivementsPage