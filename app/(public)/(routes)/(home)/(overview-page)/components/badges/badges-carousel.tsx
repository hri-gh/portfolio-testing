"use client"


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
import { useBadges } from "@/hooks/get-badges"
import { Separator } from "@/components/ui/separator"
import BadgesCarouselSkeleton from "./badge-carousel-skeleton"
import { Badge } from "@prisma/client"

export function BadgesCarousel({data}:{data:Badge[]}) {

    // const [data, error, loading] = useBadges()

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
            <div className=" flex-1 [grid-area:stack]  group-hover:opacity-90 transition-opacity p-4 lg:p-8 justify-end flex flex-col gap-2">
                <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Badges</h3>
                <Separator className="my-2" />
                {/* {loading &&
                    <div className="mx-auto">
                        <BadgesCarouselSkeleton />
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
                    className="w-full max-w-xs mx-auto ">
                    <CarouselContent>
                        {data.map((item: any, index: number) => (
                            <CarouselItem key={index} >
                                <Card className="">
                                    <Image
                                        alt="In-flight shopping"
                                        className="aspect-auto object-fill rounded-xl "
                                        height={200}
                                        src={item.imageUrl}
                                        width={400}
                                        priority

                                    />
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {/* <CarouselPrevious />
                    <CarouselNext /> */}
                </Carousel>
                {/* <div className="py-2 text-white text-center text-sm text-muted-foreground">
                    Slide {current} of {data.imageUrl.length}
                </div> */}
            </div>
        </div>
    )
}
