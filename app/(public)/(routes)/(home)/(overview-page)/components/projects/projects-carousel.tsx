"use client"
import styles from './test.module.css'
import * as React from "react"
import AutoPlay from 'embla-carousel-autoplay'
import { Card, CardContent } from "@/components/ui/card"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"

import Image from "next/image"

import { useProjects } from '@/hooks/get-projects';
import ProjectCard from "@/components/public/projects/project-card";
import { Separator } from '@/components/ui/separator'
import ProjectsCarouselSkeleton from './projects-carousel-skeleton'
import { Project } from '@prisma/client'

export function ProjectsCarousel({ data }: { data: Project[] }) {

    // const [data, error, loading] = useProjects()

    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <div className=" overflow-hidden rounded-lg">
            <div className=" flex-1 [grid-area:stack] group-hover:opacity-90 transition-opacity text-white p-4 lg:p-8 justify-end flex flex-col gap-2">
                <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Projects</h3>
                <Separator className="my-2" />
                {/* {loading &&
                    <div className='mx-auto'>
                        <ProjectsCarouselSkeleton />
                    </div>
                } */}
                <Carousel
                    setApi={setApi}
                    opts={{
                        loop: true,
                    }}
                    plugins={[
                        AutoPlay({ delay: 2000 })
                    ]}
                    className="w-full mx-auto"
                >
                    <CarouselContent>
                        {data.map((item: any, index: number) => (
                            <CarouselItem key={index} >
                                {/* <ProjectCard key={item.id} item={item} /> */}
                                <Card className="p-1">
                                    <Image
                                        alt="In-flight shopping"
                                        className="aspect-video object-fill  rounded-xl bg-gray-600 p-1 object-center"
                                        height={400}
                                        src={item.images[0]?.url}
                                        width={1000}
                                        priority

                                    />
                                    <CardContent className="">
                                        <p className="hover:underline mt-4 cursor-pointer bg-gray-600 rounded-xl text-sky-400 text-xl font-bold tracking-tight text-center">{item.projectName}</p>

                                    </CardContent>

                                </Card>
                            </CarouselItem>
                        ))}

                    </CarouselContent>
                    {/* <CarouselPrevious />
                    <CarouselNext /> */}
                </Carousel>
                {/* <div className="py-2 text-white text-center text-sm text-muted-foreground">
                    Slide {current} of {count}
                </div> */}
            </div>
        </div>
    )
}
