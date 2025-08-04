"use client"

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/custom-ui/bento-grid";
import { GalleryModal } from "@/components/modals/gallery-modal";


export function Certificate({ item }: any) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    // console.log(item);

    const onImageView = (e: React.MouseEvent) => {
        e.stopPropagation()
        setOpen(true)

    }

    return (
        <>
            <GalleryModal
                isOpen={open}
                onClose={() => setOpen(false)}
                images={[item.imageUrl]}
                loading={loading}
                imgHeight={1000}
                imgWidth={1000}
                imageCarouselClasses=""
            />
            <BentoGridItem
                key={item.id}
                title={item.title}
                description={item.provider}
                header={
                    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
                        <Image
                            alt=""
                            src={item.imageUrl}
                            height={400}
                            width={1000}
                            className="cursor-pointer"
                            onClick={onImageView}
                        />
                    </div>}
                icon={
                    <Image
                        alt=""
                        src={item.providerLogoUrl}
                        height={0}
                        width={0}
                        className="h-4 w-4"
                    />
                }
            // className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
        </>
    );
}
