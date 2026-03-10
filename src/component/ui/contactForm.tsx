"use client";
import { useTranslations } from "next-intl";
import InputField from "./inputField";
import Button from "./button";

function ContactForm() {
  const t = useTranslations("contactPage.form");
  return (
    <div className="p-5 w-full">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
        <InputField
          name="firstName"
          label={t("firstname")}
          placeholder={t("firstname")}
          required
        />

        <InputField
          name="lastName"
          label={t("lastname")}
          placeholder={t("lastname")}
          required
        />

        <InputField
          name="email"
          type="email"
          label={t("email")}
          placeholder={t("email")}
          required
        />

        <InputField
          name="phone"
          type="tel"
          label={t("phone")}
          placeholder={t("phone")}
          required
        />

        <div className="md:col-span-2">
          <InputField
            name="subject"
            label={t("subject")}
            placeholder={t("subject")}
            required
          />
        </div>

        <div className="md:col-span-2">
          <InputField
            name="message"
            label={t("message")}
            placeholder={t("message")}
            required
            textarea
            rows={5}
          />
        </div>

        <div className="md:col-span-2 flex items-center">
            <input type="checkbox" className="w-10 h-10 " />
            <span className="text-sm text-gray-500">{t("privacy.label")} <a href="#" className="text-mainBlue">{t("privacy.link")}.</a></span>
        </div>

      </form>
        <div className="mt-5">
            <Button 
                text={t("submit")}
                variant="primary"
                className=""
            />
        </div>
    </div>
  );
}

export default ContactForm;