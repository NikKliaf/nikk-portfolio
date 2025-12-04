"use client";
import React from 'react'
import { useTranslation } from '@/components/TranslationProvider';

const About = () => {

  const { t } = useTranslation();

  return (
    <section id="about">
      <div className="h-full justify-center p-3">
          <h1 className="heading text-2xl font-bold pb-3">
              {t('about.title')}
          </h1>
          <p className="text-black/80 dark:text-white/80">
              {t('about.profile')}
          </p>
      </div>
    </section>
  )
}

export default About