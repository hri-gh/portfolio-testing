import { Skeleton } from "@/components/ui/skeleton"

import React from 'react'
import { BentoGridItem } from '@/components/custom-ui/bento-grid';

const CertificateCardSkeleton = () => {

    return (
        <>
            <div className="flex flex-col space-y-3 mb-4">
                <Skeleton className="lg:h-[125px] lg:w-[250px] h-[400px] md:w-[500px] rounded-xl" />
                <div className="space-y-2">
                    <Skeleton className="h-6 w-6" />
                    <Skeleton className="h-4 w-[230px]" />
                    <Skeleton className="h-2 w-[200px]" />
                </div>
            </div>
        </>
    )
}

export default CertificateCardSkeleton
