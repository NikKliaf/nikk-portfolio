import Image from "next/image";
import  About  from "@/components/About";
import { LanguageToggle }from "@/components/LanguageToggle";


export default function Home() {
  return (
    <main className="mx-100 dark:bg-black bg-white text-black dark:text-white overflow-hidden sm:px-10 px-5 pt-16 min-h-screen">
      <div className="w-full mx-auto">
        <About />
        <LanguageToggle />
      </div>
    </main>
  );
}
