"use client"

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/custom-ui/bento-grid";
import { GalleryModal } from "@/components/modals/gallery-modal";
import { Button } from "@/components/ui/button";


export function Badge({ item }: any) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

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
                imgHeight={500}
                imgWidth={500}
                imageCarouselClasses="mx-auto"
            />
            <BentoGridItem
                key={item.id}
                title={item?.title}
                description={item.platformName}
                header={
                    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
                        <Image
                            alt=""
                            src={item.imageUrl}
                            height={400}
                            width={400}
                            className="cursor-pointer mx-auto object-contain p-1"
                            onClick={onImageView}
                        />
                    </div>}
                icon={[]}
                // className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
        </>
    );
}
