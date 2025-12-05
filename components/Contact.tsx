"use client";
import { useTranslation } from "@/components/TranslationProvider";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="pt-15 pb-15 border-black dark:border-white">
        <h3 className="heading text-2xl font-bold pb-15">
            {t("contact.title")}
        </h3>
    </section>
  )
}

export default Contact;