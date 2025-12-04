'use client';

import Link from 'next/link';
import { useTranslation } from '@/components/TranslationProvider'; 
import { ThemeSwitcher } from './ThemeSwitcher'; 
import { Button } from "@/components/ui/button"

export function ButtonOutline() {
    return <Button variant="outline"> Outline</Button>
}

export default function Header() {
  
  const { t }= useTranslation(); 
  const buttonList = t('header.buttonList') || [];

  return (
    <header className="fixed top-0 left-0 w-full z-50 
                     dark:bg-black/80 
                       bg-transparent
                       backdrop-blur-md shadow-lg 
                       transition-colors duration-500
                       border">
      
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <Link 
          href={t("path")}
          className="text-xl font-extrabold text-black dark:text-white hover:opacity-80 transition"
        >
          {t("header.title")}
        </Link>


        <div className="hidden md:flex space-x-6">
        {buttonList.map((item: any) => (
            <Button className="rounded-lg bg-white dark:bg-black text-black dark:text-white border-2" key={item.id}>
                <Link 
                href={`${item.path}`} 
                className="text-gray-700 dark:text-gray-300 font-medium 
                            hover:text-black dark:hover:text-white 
                            transition-colors duration-200 p-2 rounded-lg"
                >
                {item.title} 
                </Link>
            </Button>
        ))}
        </div>

        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
        </div>

      </nav>
    </header>
  );
}