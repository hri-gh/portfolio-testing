import { Skeleton } from "@/components/ui/skeleton"

import React from 'react'

const PublicProfileSkeleton = () => {
    const numSKill = [1, 2, 3, 4, 5, 6]

    return (
        <>

            {/* Remove this from below div : flex flex-wrap justify-center */}
            {/* <div className=" grid grid-cols-3 gap-4"> */}
                {/* {numSKill.map((numitem) => ( */}
                    <div className=" flex flex-col space-y-3">
                        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                        <div className="space-y-2">
                            <Skeleton className="h-5 w-[250px]" />
                            <Skeleton className="h-8 w-[100px] " />
                        </div>

                    </div>

                {/* ))} */}
            {/* </div> */}
        </>
    )
}

export default PublicProfileSkeleton
