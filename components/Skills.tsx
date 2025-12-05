"use client";
import { useTranslation } from "@/components/TranslationProvider";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="pt-15 pb-15 border-b border-black dark:border-white">
        <h4 className="heading text-2xl font-bold pb-15">
            {t("skills.title")}
        </h4>
    </section>
  )
}

export default Skills