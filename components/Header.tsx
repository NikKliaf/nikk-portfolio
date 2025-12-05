'use client';

import Link from 'next/link';
import { useTranslation } from '@/components/TranslationProvider'; 
import { ThemeSwitcher } from './ThemeSwitcher'; 
import { Button } from "@/components/ui/button"

export default function Header() {
  
  const { t }= useTranslation(); 
  const buttonList = t('header.buttonList') || [];

  return (
    <header className="fixed top-0 left-0 w-full z-50 
                     dark:bg-black/80 
                       bg-transparent
                       backdrop-blur-md shadow-lg 
                       transition-colors duration-500
                       ">
      
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <Link 
          href={t("path")}
          className="text-xl font-extrabold text-black dark:text-white hover:opacity-80 transition"
        >
          {t("header.title")}
        </Link>


        <div className="hidden md:flex space-x-6">
        {buttonList.map((item: {id:number, path:string, title:string}) => (
          <a key={item.id} 
             href={`${item.path}`}>
            <Button className="cursor-pointer rounded-lg bg-white dark:bg-black text-black border border-black/30 dark:border-white/10 dark:text-white p-4">
                {item.title} 
            </Button>
          </a>
        ))}
        </div>

        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
        </div>

      </nav>
    </header>
  );
}