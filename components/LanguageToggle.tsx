"use client";

import { useRouter, usePathname } from "next/navigation";
import { i18n } from "@/i18n.config";
import path from "path";

const LANGUAGES = [
    { code: "en", label: "🇬🇧" },
    { code: "el", label: "🇬🇷" },
]

export const LanguageToggle = () => {
    const router = useRouter();
    const pathname = usePathname();

    const pathSegments = pathname.split('/');
    const currentLocale = pathSegments[1] && i18n.locales.includes(pathSegments[1]) 
        ? pathSegments[1] 
        : i18n.defaultLocale;

    const changeLanguage = (newLocale: string) => {
        if (newLocale == currentLocale) return;

        let newPathName = pathname;

        if(i18n.locales.includes(currentLocale)) {
            newPathName = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
        } else {
            newPathName = `/${newLocale}${pathname}`;
        }
        
        router.replace(newPathName);
    };

    return (
        <div className="fixed bottom-6 right-6 z-999 flex items-center bg-white dark:bg-black backdrop-blur-sm rounded-full p-1 border border-black/30 dark:border-white/10">
            {LANGUAGES.map(({code, label}) => {
                const isActive = code === currentLocale;
                
                return (
                    <button 
                        key={code}
                        onClick={() => changeLanguage(code)}
                        className= {`
                            px-4 py-2 rounded-full font-semibold transition-all duration-300 text-sm 
                            ${isActive 
                                ? 'bg-purple-500 text-black shadow-md' 
                                : 'text-white/70 hover:bg-white/10 hover:text-white cursor-pointer' 
                            }
                        `}
                    >
                        {label}
                    </button>
                );
            })}
        </div>
    );
};