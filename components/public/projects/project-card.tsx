"use client"

import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { GalleryModal } from "../../modals/gallery-modal"
import { useState } from "react"
import Link from "next/link"
import { ImageCarousel } from "@/components/image-carousel"

export default function ProjectCard({ item }: any) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    // Return an array  of technologies from string.
    const tech = item.technologies.split(',')


    // Return an array  of images for the gallery modal.
    const allImages = item.images.map((image: any) => image.url)

    const onImageView = (e: React.MouseEvent) => {
        e.stopPropagation()
        setLoading(true)
        setOpen(true)
        setLoading(false)
    }
    return (
        <Card className="cursor-pointer w-full p-2 max-w-sm m-2 border-2  hover:shadow-indigo-500 transition duration-300 ease-in-out">
            <GalleryModal
                isOpen={open}
                onClose={() => setOpen(false)}
                images={allImages}
                loading={loading}
                imgWidth={1920}
                imgHeight={1080}
                imageCarouselClasses=""
            />

            <ImageCarousel
                className={"aspect-video object-fill overflow-hidden rounded-xl bg-gray-600 p-1 object-center"}
                onImageView={onImageView}
                images={allImages}
                imgHeight={500}
                imgWidth={500}
            />

            {/* Single image */}
            {/* <Image
                alt="In-flight shopping"
                className="aspect-video object-fill overflow-hidden rounded-xl bg-gray-600 p-1 object-center"
                height={200}
                src={item.images[0]?.url}
                width={400}
                onClick={onImageView}
                priority

            /> */}

            <CardContent className="grid gap-4 p-6">
                <p className="hover:underline uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {item.projectName}
                </p>

                {/* Remove this from below div : grid grid-cols-3 */}
                <div className="flex flex-wrap gap-2 overflow-hidden">
                    {tech.map((item: any) => (
                        <Badge key={item}>{item}</Badge>
                    ))}
                </div>
                <p className="text-sm text-slate-500  leading-tight font-medium hover:underline">
                    {item.aboutProject}
                </p>
            </CardContent>
            <CardFooter className="flex gap-2 p-4">
                <Button variant="outline">
                    <Link href={item.liveDemoLink} target="_blank">Browse</Link>
                </Button>
                <Button >
                    <Link href={`/projects/${item.projectId}`} target="_blank">
                        {/* <GitHubLogoIcon /> */}
                        Details
                    </Link>
                </Button>
                <Button >
                    <Link href={item.githubLink} target="_blank">
                        <GitHubLogoIcon />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
