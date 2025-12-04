"use client";

import { useRouter, usePathname } from "next/navigation";
import React from "react";
import { cn } from "@/lib/utils";
import { i18n } from "@/i18n.config";

const LANGUAGES = [
    { code: "en", label: "🇬🇧" },
    { code: "el", label: "🇬🇷" },
]

export const LanguageToggle = () => {
    const router = useRouter();
    const pathname = usePathname();

    const currentLocale = pathname.split('/')[1] || i18n.defaultLocale;

    const changeLanguage = (newLocale: string) => {
        if (newLocale == currentLocale) return;
        
        const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
        router.replace(newPathname);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[999] flex items-center bg-black/20 backdrop-blur-sm rounded-full p-1 border border-white/10">
            {LANGUAGES.map(({code, label}) => {
                const isActive = code === currentLocale;
                
                return (
                    <button 
                        key={code}
                        onClick={() => changeLanguage(code)}
                        className={cn(
                            "px-4 py-2 rounded-full font-semibold transition-colors duration-200",
                            isActive ? "bg-my-purple text-white" : "text-white hover:bg-white/10"
                        )}
                    >
                        {label}
                    </button>
                );
            })}
        </div>
    );
};