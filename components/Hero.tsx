"use client";
import React from 'react'
import { useTranslation } from '@/components/TranslationProvider';

const Hero = () => {

  const { t } = useTranslation();

  return (
    <div className="text-center h-full justify-center">
        
        <h1>
            {t('hero.title')}
        </h1>
    </div>
  )
}

export default Hero