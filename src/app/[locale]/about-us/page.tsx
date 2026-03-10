import AboutUsSection from "@/component/section/aboutUsSection";
import CompanyOutlineSection from "@/component/section/companyOutlineSection";

function AboutUs() {
  return (
    <div className="space-y-10">
      <div className="min-h-screen flex items-center">
        <div className="pt-25 w-[90%] mx-auto min-h-screen rounded-2xl overflow-hidden bg-white">
          <div className="w-full rounded-xl overflow-hidden h-[85vh]">
            <img src="/images/hero-banner.png" alt="Hero banner" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="bg-foreground">
        <AboutUsSection />
      </div>

      <div className="">
        <CompanyOutlineSection />
      </div>
    </div>
  );
}

export default AboutUs;