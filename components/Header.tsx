'use client';

import Link from 'next/link';
import { useTranslation } from '@/components/TranslationProvider'; 
import { ThemeSwitcher } from './ThemeSwitcher'; 

export default function Header() {

  const {t }= useTranslation(); 

  return (
    <header className="fixed top-0 left-0 w-full z-50 
                       bg-white/80 dark:bg-black/80 
                       backdrop-blur-md shadow-lg 
                       transition-colors duration-500">
      
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <Link 
          href="/" 
          className="text-xl font-extrabold text-black dark:text-white hover:opacity-80 transition"
        >
          Nikiforos Kliafas
        </Link>

        {/* Κέντρο: Σύνδεσμοι Πλοήγησης */}
        <div className="hidden md:flex space-x-6">
          {['about', 'projects', 'contact'].map((path) => (
            <Link 
              key={path}
              href={`/${path}`} 
              className="text-gray-700 dark:text-gray-300 font-medium 
                         hover:text-black dark:hover:text-white 
                         transition-colors duration-200 p-2 rounded-lg"
            >
              {t(path)} 
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
        </div>

      </nav>
    </header>
  );
}