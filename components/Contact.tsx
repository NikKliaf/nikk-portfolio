"use client";
import { useTranslation } from "@/components/TranslationProvider";
import { socials } from "@/data";
import Image from "next/image";
import { Button } from "./ui/button";
import  Link from "next/link";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="pt-15 pb-15 border-black dark:border-white">
        <h3 className="heading text-2xl font-bold pb-15 text-center md:text-justify">
            {t("contact.title")}
        </h3> 
        <p className="pb-10 text-xl text-center md:text-left text-black/80 dark:text-white/80">
            {t("contact.description")}
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          {socials.map((social: {id:number, name:string, icon:string, link:string}) => (
            <Link 
                key={social.id} 
                href={social.link || "/"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="no-underline cursor-pointer" 
              >
                <Button variant="outline" key={social.id} className="flex items-center space-x-3 w-36 h-12 border-black/30 dark:border-white/10 rounded-lg hover:scale-105 transition-transform cursor-pointer" 
                >
                    
                      <Image src={social.icon} alt={social.name} width={24} height={24} className="shrink-0"/>
                      <span className="text-center text-black/80 dark:text-white/80">
                        {social.name}
                      </span>
                </Button>
              </Link>
            
          ))}
        </div>
    </section>
  )
}

export default Contact;