import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { notFound } from 'next/navigation';
import  { i18n }  from '@/i18n.config'; 
import { TranslationProvider } from '@/components/TranslationProvider'; 
import Header from '@/components/Header';
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return [
    { locale: 'en' }, 
    { locale: 'el' },
  ];
}

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: "Nikiforos Kliafas | Portfolio",
    el: "Νικηφόρος Κλιάφας | Πορτφόλιο",
  };

  return {
    title: titles[locale] || titles.el,
    description: locale === 'en' 
      ? 'My personal developer portfolio.' 
      : 'Το προσωπικό μου portfolio.',
  };
}

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout(

  props: LocaleLayoutProps

) {

  const params = await props.params;
  const { locale } = params; 

  if (!i18n.locales.includes(locale)) {
    notFound(); 
  }
  const translations = await getTranslations(locale);

  return (
      <html lang={locale} suppressHydrationWarning>
        <head />
          <body className={`bg-white dark:bg-black ${inter.className}`}>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
            >
              <TranslationProvider translations={translations}>
                <Header />
                  {props.children}
                <Footer />
              </TranslationProvider>
            </ ThemeProvider>
          </body>
      </html>
  );
}


async function getTranslations(locale: string) {
  try {
    const translations = await import(`@/public/locales/${locale}.json`);
    return translations.default;
  } catch (error) {
    console.error(`Could not load translations for locale: ${locale}`);
    const defaultTranslations = await import(`@/public/locales/${i18n.defaultLocale}.json`);
    return defaultTranslations.default;
  }
}

