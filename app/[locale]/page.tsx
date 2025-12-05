import About  from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills"
import Contact from "@/components/Contact";
import { LanguageToggle }from "@/components/LanguageToggle";


export default function Home() {
  return (
    <main className="justify-center dark:bg-black bg-white text-black dark:text-white overflow-hidden sm:px-10 px-5 pt-16 min-h-screen">
      <div className="w-full mx-auto max-w-5xl">
        <About />
        <Projects />
        <Skills />
        <Contact />
        <LanguageToggle />
      </div>
    </main>
  );
}
