"use client";
import { useTranslation } from "@/components/TranslationProvider";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <section id="footer" className="pt-15 pb-15 border-t w-screen border-black/30 dark:border-white/10">
    </section>
  )
}

export default Footer