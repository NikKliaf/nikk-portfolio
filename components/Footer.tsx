"use client";
import { useTranslation } from "@/components/TranslationProvider";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <section id="footer" className="pt-15 pb-15 border-t w-screen border-black dark:border-white">
    </section>
  )
}

export default Footer