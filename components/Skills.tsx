"use client";
import { useTranslation } from "@/components/TranslationProvider";
import { skills } from "@/data";
import Image from "next/image";
import { Button } from "./ui/button";
import  Link from "next/link";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="pt-15 pb-15 border-b border-black/30 dark:border-white/10">
        <h4 className="heading text-2xl font-bold pb-15 text-center md:text-justify">
            {t("skills.title")}
        </h4>
        <p className="pb-5 text-xl text-black/80 dark:text-white/80 text-center md:text-justify">
            {t("skills.description")}
        </p>
        <div className="flex flex-wrap justify-center mt-10">
            {skills.map((skill: {id:number, name:string, icon:string, link?:string}) => (
              <Link 
                key={skill.id} 
                href={skill.link || "/"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="no-underline" 
              >
                <Button variant="outline" key={skill.id} className="flex flex-col w-32 h-32 md:w-36 md:h-36 aspect-square 
                            items-center justify-center p-3 m-4 rounded-xl 
                            border-black/50 dark:border-white/20 hover:scale-105 cursor-pointer transition-transform bg-white/80" >
                    <Image src={skill.icon} alt={skill.name} width={64} height={64} className="mx-auto mb-2"/>
                    <span className="text-wrap text-center text-black/80 dark:text-white/80">
                      {skill.name}
                    </span>
                </Button>
              </Link>
            ))}
        </div>

    </section>
  )
}

export default Skills