import { Skeleton } from "@/components/ui/skeleton"

import React from 'react'

const SkillSkeleton = () => {
    const numSKill = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20, 21]
    return (
        <>
            <div className=" flex flex-wrap justify-center gap-2">
                {numSKill.map((numitem) => (
                    <div key={numitem} className="flex flex-col items-center">
                        <Skeleton className="h-12 w-12 rounded-full mb-2" />
                        <Skeleton className="h-6 w-[80px]" />

                    </div>
                ))}
            </div>
        </>
    )
}

export default SkillSkeleton
