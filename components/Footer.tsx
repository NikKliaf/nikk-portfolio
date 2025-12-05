"use client";
import { useTranslation } from "@/components/TranslationProvider";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <section id="footer" className="pt-15 pb-15 px-5 border-t w-screen border-black/30 dark:border-white/10">
        <p className="text-xs text-left text-black/80 dark:text-white/80 max-w-5xl mx-auto">
            Copyright © {new Date().getFullYear()} Nikiforos Kliafas. All rights reserved.
        </p>
    </section>
  )
}

export default Footer