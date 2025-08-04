import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'
// import { Card } from '@/components/ui/card'

const ProjectsCarouselSkeleton = () => {
    return (
        <div className="flex flex-col justify-center">
            <Skeleton
                className='h-[200px] w-[200px] lg:w-[300px] rounded-xl aspect-video object-fill '
            />
            <Skeleton className="mt-4 flex flex-col h-9 mx-auto w-[220px] rounded-xl text-sky-400 ">
            <Skeleton className="mx-auto my-auto bg-sky-500 h-4 rounded-xl w-[190px]" />
            </Skeleton>
        </div>
    )
}

export default ProjectsCarouselSkeleton
