"use client";
import React from 'react'
import Image from 'next/image';
import { useTranslation } from "@/components/TranslationProvider"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { projects } from '@/data'
import { IconBrandGithub } from '@tabler/icons-react';

const Projects = () => {

   const { t } = useTranslation(); 

  return (
    <section id="projects" className="pt-15 pb-15 border-t border-b border-black/30 dark:border-white/10">
        <div className="space-x-6 h-full">
            <h2 className="heading text-2xl font-bold pb-15">
                {t("projects.title")}
            </h2>
            <div className="max-w-3xl max-h-screen mx-auto">
                <Carousel className="w-full">
                    <CarouselContent>
                        {projects.map((project) => (
                            <CarouselItem key={project.id} className="md:basis lg:basis p-4">
                                <div className="p-1 ">
                                    <Card className="border-black dark:border-white/10">
                                        <CardContent className="flex flex-col min-h-96 items-start justify-center p-6">
                                            <span className="text-2xl font-semibold pb-6">{project.title}</span>
                                            <span className="text-justify pb-6"> {project.des} </span>
                                            <div className="flex items-center w-full mt-auto justify-between">
                                                <div className="flex "> 
                                                    {project.iconLists.map((icon : { src: string, name: string }, index : number) => (
                                                        <div 
                                                            key={icon.src} 
                                                            className="group relative border border-black rounded-full bg-white dark:bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
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
                                                    <IconBrandGithub />
                                                    <p className="pl-2 flex lg:text-xl md:text-xs text-sm">Github Link</p>
                                                </a>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="border-black dark:bg-gray dark:border-white/10 "/>
                    <CarouselNext className="border-black dark:bg-gray dark:border-white/10 "/>
                </Carousel>
            </div>
        </div>
    </section>
  )
}

export default Projects