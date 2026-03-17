"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import emailjs from "@emailjs/browser";
import InputField from "./inputField";
import Button from "./button";

type FormStatus = "idle" | "loading" | "success" | "error";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  privacyAccepted: boolean;
};

function ContactForm() {
  const t = useTranslations("contactPage.form");
  const formRef = useRef<HTMLFormElement>(null);

  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacyAccepted: false,
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  const isFormValid =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    formData.email.trim() !== "" &&
    emailValid &&
    formData.phone.trim() !== "" &&
    formData.subject.trim() !== "" &&
    formData.message.trim() !== "" &&
    formData.privacyAccepted;

  const isSubmitting = status === "loading";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" && e.target instanceof HTMLInputElement
          ? e.target.checked
          : value,
    }));

    if (status === "error" || status === "success") {
      setStatus("idle");
      setStatusMessage("");
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTouched((prev) => ({
      ...prev,
      [e.target.name]: true,
    }));
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current || !isFormValid) {
      setTouched({
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        subject: true,
        message: true,
        privacyAccepted: true,
      });
      return;
    }

    try {
      setStatus("loading");
      setStatusMessage(t("status.loadingMessage"));

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      );

      setStatus("success");
      setStatusMessage(t("status.successMessage"));

      formRef.current.reset();
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        privacyAccepted: false,
      });
      setTouched({});
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setStatusMessage(t("status.errorMessage"));
    }
  };

  return (
    <div className="w-full rounded-2xl border border-gray-100 bg-white p-5 shadow-sm md:p-6">
      <form
        ref={formRef}
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
        onSubmit={sendEmail}
      >
        <div>
          <InputField
            name="firstName"
            label={t("firstname")}
            placeholder={t("firstname")}
            required
            value={formData.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.firstName && !formData.firstName.trim() && (
            <p className="mt-1 text-sm text-red-600">{t("validation.firstNameRequired")}</p>
          )}
        </div>

        <div>
          <InputField
            name="lastName"
            label={t("lastname")}
            placeholder={t("lastname")}
            required
            value={formData.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.lastName && !formData.lastName.trim() && (
            <p className="mt-1 text-sm text-red-600">{t("validation.lastNameRequired")}</p>
          )}
        </div>

        <div>
          <InputField
            name="email"
            type="email"
            label={t("email")}
            placeholder={t("email")}
            required
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && !formData.email.trim() && (
            <p className="mt-1 text-sm text-red-600">{t("validation.emailRequired")}</p>
          )}
          {touched.email && formData.email.trim() && !emailValid && (
            <p className="mt-1 text-sm text-red-600">{t("validation.emailInvalid")}</p>
          )}
        </div>

        <div>
          <InputField
            name="phone"
            type="tel"
            label={t("phone")}
            placeholder={t("phone")}
            required
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.phone && !formData.phone.trim() && (
            <p className="mt-1 text-sm text-red-600">{t("validation.phoneRequired")}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <InputField
            name="subject"
            label={t("subject")}
            placeholder={t("subject")}
            required
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.subject && !formData.subject.trim() && (
            <p className="mt-1 text-sm text-red-600">{t("validation.subjectRequired")}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <InputField
            name="message"
            label={t("message")}
            placeholder={t("message")}
            required
            textarea
            rows={5}
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.message && !formData.message.trim() && (
            <p className="mt-1 text-sm text-red-600">{t("validation.messageRequired")}</p>
          )}
        </div>

        <div className="md:col-span-2 rounded-xl border border-[#1a4093]/10 bg-[#1a4093]/5 p-4">
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              name="privacyAccepted"
              checked={formData.privacyAccepted}
              onChange={handleChange}
              onBlur={() =>
                setTouched((prev) => ({ ...prev, privacyAccepted: true }))
              }
              className="mt-1 h-5 w-5 accent-[#1a4093]"
            />
            <span className="text-sm leading-6 text-gray-700">
              {t("privacy.label")}{" "}
              <a href="policy" className="font-medium text-[#1a4093] hover:underline">
                {t("privacy.link")}
              </a>
              .
            </span>
          </label>

          {touched.privacyAccepted && !formData.privacyAccepted && (
            <p className="mt-2 text-sm text-red-600">
              {t("validation.privacyRequired")}
            </p>
          )}
        </div>

        {(status === "success" ||
          status === "error" ||
          status === "loading") && (
          <div className="md:col-span-2">
            <div
              className={`flex items-start gap-3 rounded-xl border p-4 transition-all duration-300 ${
                status === "success"
                  ? "border-[#1a4093]/20 bg-[#1a4093]/5"
                  : status === "error"
                    ? "border-red-200 bg-red-50"
                    : "border-[#1a4093]/20 bg-[#1a4093]/5"
              }`}
            >
              <div
                className={`mt-0.5 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                  status === "success"
                    ? "bg-[#1a4093] text-white"
                    : status === "error"
                      ? "bg-red-500 text-white"
                      : "bg-[#1a4093] text-white"
                }`}
              >
                {status === "success" ? "✓" : status === "error" ? "!" : ""}
                {status === "loading" && (
                  <span className="block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                )}
              </div>

              <div>
                <p
                  className={`font-semibold ${
                    status === "success"
                      ? "text-[#1a4093]"
                      : status === "error"
                        ? "text-red-600"
                        : "text-[#1a4093]"
                  }`}
                >
                  {status === "success" && t("status.successTitle")}
                  {status === "error" && t("status.errorTitle")}
                  {status === "loading" && t("status.loadingTitle")}
                </p>
                <p className="mt-1 text-sm text-gray-600">{statusMessage}</p>
              </div>
            </div>
          </div>
        )}

        <div className="md:col-span-2 mt-5">
          <Button
            variant="primary"
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className={`flex items-center justify-center gap-2 ${
              !isFormValid || isSubmitting
                ? "cursor-not-allowed opacity-60"
                : ""
            }`}
          >
            {isSubmitting && (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            )}
            {isSubmitting ? t("status.sending") : t("submit")}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;