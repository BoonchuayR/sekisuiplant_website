import HeroSection from "@/component/section/heroSection";
import AboutUsSection from "@/component/section/aboutUsSection";
import ServiceSection from "@/component/section/serviceSection";
import MyProjectSection from "@/component/section/myProjectSection";
import ContactSection from "@/component/section/contactSection";

export default function LocalizedPage() {
  return (
    <>
      <div className="">
        <HeroSection />
        <AboutUsSection />
        <ServiceSection />
        <MyProjectSection />
        <ContactSection />
      </div>
    </>
  );
}
