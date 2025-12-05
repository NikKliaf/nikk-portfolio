"use client";
import React, { useState, useEffect}from 'react'
import Image from 'next/image';
import { useTranslation } from "@/components/TranslationProvider"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { projects } from '@/data'

const Projects = () => {

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
     if (!api) {
       return;
     }
     setCount(api.scrollSnapList().length);
     setCurrent(api.selectedScrollSnap() + 1);

     api.on("select", () => {
       setCurrent(api.selectedScrollSnap() + 1);
     });
   }, [api]);

  const { t } = useTranslation(); 
  const projectList = t('projects.projectData') || [];

  return (
    <section id="projects" className="pt-15 pb-15 border-t border-b border-black/30 dark:border-white/10">
        <div className="h-full">
            <h2 className="heading text-2xl font-bold pb-15 text-center md:">
                {t("projects.title")}
            </h2>
            <div className="md:max-w-3xl lg:max-w-4xl max-h-screen mx-auto">
                <Carousel setApi={setApi} className="w-full">
                    <CarouselContent className="ml-0">
                        {projects.map((project) => (
                            <CarouselItem key={project.id} className="p-4">
                                <div className="p-1 ">
                                    <Card className="border-black dark:border-white/10">
                                        <CardContent className="flex flex-col min-h-96 items-start justify-center p-6">
                                            <span className="text-2xl font-semibold pb-6">{projectList[project.id - 1].title}</span>
                                            <span className="text-justify pb-6"> {projectList[project.id - 1].description} </span>
                                            <div className="flex items-center w-full mt-auto justify-between">
                                                <div className="flex "> 
                                                    {project.iconLists.map((icon : { src: string, name: string }, index : number) => (
                                                        <div 
                                                            key={icon.src} 
                                                            className="group relative border border-black rounded-full bg-white dark:bg-[#232323]/80 lg:w-14 lg:h-14 md:w-14 md:h-14 w-12 h-12 flex justify-center items-center"
                                                            style={{ transform:`translateX(-${5 * index * 2}px)` }}
                                                        >
                                                            <Image src={icon.src} alt={`Icon ${index}`} width={64} height= {64} className="p-2"/>
                                                            
                                                            <span className="absolute bottom-full mb-2 px-3 py-1 border border-black bg-white dark:bg-black text-black dark:text-white text-xs rounded-lg opacity-0 transition-opacity duration-300 pointer-events-none
                                                                            group-hover:opacity-100 whitespace-nowrap z-50">
                                                                {icon.name}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>

                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="ml-auto flex justify-center items-center">
                                                    <Image src="/github.svg" width={24} height={24}  alt=""/>
                                                    <p className="pl-2 flex lg:text-xl md:text-xs text-sm">Github Link</p>
                                                </a>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="cursor-pointer hidden md:flex border-black dark:bg-gray dark:border-white/10 "/>
                    <CarouselNext className="cursor-pointer hidden md:flex border-black dark:bg-gray dark:border-white/10 "/>
                </Carousel>

                <div className="py-4 text-center">
                    <div className="flex justify-center space-x-2">
                        {Array.from({ length: count }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => api?.scrollTo(index)}
                                className={`cursor-pointer w-3 h-3 rounded-full transition-colors duration-300 ${
                                    index + 1 === current
                                        ? "bg-purple-500"
                                        : "bg-gray-300 dark:bg-gray-600 hover:opacity-80"
                                }`}
                                aria-label={`Πήγαινε στη σελίδα ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects