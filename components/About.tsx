"use client";
import React, { useState } from 'react'
import { useTranslation } from '@/components/TranslationProvider';
import Image from 'next/image';
import { Button } from './ui/button';
import { IconDownload, IconCheck } from "@tabler/icons-react";

const About = () => {

  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
        if (downloading) return;
        
        setDownloading(true);
      
        setTimeout(() => {
            setDownloading(false);
        }, 3000); 
    };

  const { t } = useTranslation();

  return (
    <section id="about">
      <div className="space-x-6 h-full justify-center pt-10 pb-10 pr-25 items-start flex">
        <Image 
          src='/me.jpg'
          alt="Picture of me"
          width={200}
          height={200}
          className="object-cover object-center rounded-lg"
        />
        <div>
          <h1 className="heading text-2xl font-bold pb-3">
              {t('about.title')}
          </h1>
          <p className="text-black/80 dark:text-white/80 text-justify pb-5  ">
              {t('about.profile')}
          </p>
          <div className="text-center pr-25">
            <a 
                //href="/Nikiforos_Kliafas_CV.pdf"
                download="Nikiforos_Kliafas_CV.pdf"
                target="_blank"
                rel ="noopener noreferrer"
                onClick={handleDownload}
                className="text-center inline-block"
              >
                <Button 
                  variant="outline" size="sm"
                  disabled={downloading}
                  className="rounded-lg p-5 m-5 transition-colors duration-500
                    overflow-hidden shadow-md flex justify-start items-center 
                    bg-purple-500 dark:bg-purple-500 text-black dark:text-white"
                >
                <span className="relative flex justify-center items-center mr-3">
                  <IconDownload className={`h-6 w-6 absolute transition-all duration-500 ease-in-out 
                                      ${downloading 
                                          ? 'opacity-0 rotate-180 scale-0'  
                                          : 'opacity-100 rotate-0 scale-100' 
                                      }`}/>
                  <IconCheck className={`h-6 w-6 absolute transition-all duration-500 ease-in-out 
                                      ${downloading 
                                          ? 'opacity-100 rotate-0 scale-100' 
                                          : 'opacity-0 -rotate-180 scale-0' 
                                      }`} 
                      />
                </span>
                <span className="text-left transition-colors duration-300">
                  {downloading ? "Download Complete!" : "Download my Resume"}
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