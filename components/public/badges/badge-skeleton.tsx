import { Skeleton } from "@/components/ui/skeleton"

import React from 'react'

const BadgeSkeleton = () => {
    const numSKill = [1, 2, 3, 4, 5, 6]

    return (
        <>
        {/* Remove this from below div : flex flex-wrap justify-center */}
            {/* <div className=" grid grid-cols-3 gap-4"> */}
                {/* {numSKill.map((numitem) => ( */}
                    <div className="flex flex-col space-y-3 mb-4">
                    <Skeleton className="lg:h-[125px] lg:w-[250px] h-[400px] md:w-[500px] rounded-xl" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[200px]" />
                    </div>
                  </div>

                {/* ))} */}
            {/* </div> */}
        </>
    )
}

export default BadgeSkeleton
