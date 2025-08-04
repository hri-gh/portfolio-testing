import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const BadgesCarouselSkeleton = () => {
    return (
        <div className="">
            <Skeleton
                className='h-[250px] w-[300px] rounded-xl aspect-auto object-fill '
            />
        </div>
    )
}

export default BadgesCarouselSkeleton
