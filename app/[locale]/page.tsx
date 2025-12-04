import Image from "next/image";
import  Hero  from "@/components/Hero";
import { LanguageToggle }from "@/components/LanguageToggle";


export default function Home() {
  return (
    <main className="relative dark:bg-black bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 h-screen">
      <div className="max-w-7xl w-full h-full dark:bg-black bg-white">
        <Hero />
        <LanguageToggle />
      </div>
    </main>
  );
}
