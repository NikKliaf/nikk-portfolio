"use client";
import { useTranslation } from "@/components/TranslationProvider";
import { socials } from "@/data";
import Image from "next/image";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="pt-15 pb-15 border-black dark:border-white">
        <h3 className="heading text-2xl font-bold pb-15">
            {t("contact.title")}
        </h3>
        <p className="pb-10 text-xl text-black/80 dark:text-white/80 text-justify">
            {t("contact.description")}
        </p>
        <div className="">
          {socials.map((social: {id:number, name:string, icon:string, link:string}) => (
            <a 
              key={social.id} 
              href={social.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mr-6 mb-4 p-4 border border-black/30 dark:border-white/10 rounded-lg bg-white/80 dark:bg-black/80 hover:scale-105 transition-transform"
            >
              <div className="flex items-center space-x-4">
                <Image src={social.icon} alt={social.name} width={24} height={24}/>
                <span className="text-black/80 dark:text-white/80">{social.name}</span>
              </div>
            </a>
          ))}
        </div>
    </section>
  )
}

export default Contact;