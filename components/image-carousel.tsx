import { useState, useEffect } from "react"
import Image from "next/image"

import { type CarouselApi } from "@/components/ui/carousel"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


export function ImageCarousel({ images, className, onImageView, isCarouselButton = false, imgWidth, imgHeight }: any) {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)


    useEffect(() => {
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
        <>
            <Carousel
                setApi={setApi}
                opts={{
                    loop: true,
                }}
            >
                <CarouselContent>
                    {images?.map((image: any, index: number) => (
                        <CarouselItem key={image}>
                            <div className="p-1">
                                <Image
                                    width={imgWidth}
                                    height={imgHeight}
                                    src={image}
                                    alt={"image"}
                                    onClick={onImageView}
                                    className={`${className}`}
                                    priority
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {isCarouselButton && (
                    <>
                        {
                            images.length > 1 && <><CarouselPrevious /><CarouselNext /></>
                        }

                    </>
                )}

            </Carousel>
            <div className="py-2 text-center text-sm text-muted-foreground">
                Image {current} of {count}
            </div>
        </>
    )
}
