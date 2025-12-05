"use client";
import { useTranslation } from '@/components/TranslationProvider';
import Image from 'next/image';
import { Button } from './ui/button';
import { IconFile } from "@tabler/icons-react";

const About = () => {

  const { t } = useTranslation();

  return (
    <section id="about" className="pb-15 pt-10">
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 h-full items-center md:items-start">
        <Image 
          src='/me.jpg'
          alt="Picture of me"
          width={200}
          height={200}
          className="object-cover object-center rounded-lg shrink-0"
        />
        <div className="grow max-w-full">
          <h1 className="heading text-2xl font-bold pb-3 dark:text-white text-center text-black md:text-left">
              {t('about.title')}
          </h1>
          <p className="text-black/80 dark:text-white/80 text-justify pb-5">
              {t('about.profile')}
          </p>
          <div className="text-center md:text-center pt-5">
            <a 
                href="/Nikiforos_Kliafas_CV.pdf"
                target="_blank"
                rel ="noopener noreferrer"
                className="text-center inline-block"
              >
                <Button 
                  variant="outline" size="sm"
                  className="cursor-pointer rounded-lg p-5 m-5 transition-colors duration-500
                    overflow-hidden shadow-md flex justify-start items-center border border-black/30 dark:border-white/10
                    bg-purple-500 dark:bg-purple-500 text-black/80 dark:text-white/80"
                >
                <span className="relative flex justify-center items-center mr-3">
                  <IconFile className="-6 w-6 absolute transition-all duration-500 ease-in-out"/>
                </span>
                <span className="text-left transition-colors duration-300">
                  {t("about.resume")}
                </span>
              </Button>
              </a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About