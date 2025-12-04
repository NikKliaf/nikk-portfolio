"use client";
import React from 'react'
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

const Projects = () => {

   const { t } = useTranslation(); 

  return (
    <section id="projects" className="pt-15 border-t">
        <div className="space-x-6 h-full">
            <h2 className="heading text-2xl font-bold pb-10">
                {t("projects.title")}
            </h2>
            <div className="max-w-3xl max-h-screen mx-auto">
                <Carousel className="w-full">
                    <CarouselContent>
                        {projects.map((project) => (
                            <CarouselItem key={project.id} className="md:basis lg:basis p-4">
                                <div className="p-1 ">
                                    <Card className="border-black dark:border-white/10">
                                        <CardContent className="flex flex-col max-h-96 items-start justify-center p-6">
                                            <span className="text-2xl font-semibold pb-6">{project.title}</span>
                                            <span className="text-justify"> {project.des} </span>
                                            
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="border-black bg-black/10 dark:bg-gray dark:border-white/10 "/>
                    <CarouselNext className="border-black bg-black/10 dark:bg-gray dark:border-white/10 "/>
                </Carousel>
            </div>
        </div>
    </section>
  )
}

export default Projects