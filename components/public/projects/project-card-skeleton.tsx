import { Skeleton } from "@/components/ui/skeleton"

import React from 'react'
import { CardContent, CardFooter, Card } from "@/components/ui/card"
const ProjectCardSkeleton = ({item}:any) => {


    return (
        <>
            <Card className="cursor-pointer w-full p-2 max-w-sm m-2 border-2  hover:shadow-indigo-500 transition duration-300 ease-in-out">
                     <Skeleton className="aspect-video object-fill overflow-hidden rounded-xl  p-2 object-center" />

                        <CardContent className="grid gap-4 p-6">
                            <Skeleton className="h-5 w-[200px]" />
                            {/* Remove this from below div : flex flex-wrap */}
                            <div className=" flex flex-wrap gap-2">
                                <Skeleton className="h-4 w-[50px]" />
                                <Skeleton className="h-4 w-[50px]" />
                                <Skeleton className="h-4 w-[50px]" />
                                {/* <Skeleton className="h-4 w-[50px]" /> */}
                            </div>
                            <Skeleton className="h-2 w-[160px]" />
                            <Skeleton className="h-2 w-[140px]" />


                        </CardContent>
                        <CardFooter>
                        <div className="flex gap-2 pt-4">
                                <Skeleton className="h-8 w-[100px] " />
                                <Skeleton className="h-8 w-[60px] " />
                            </div>
                        </CardFooter>
            </Card>
        </>
    )
}

export default ProjectCardSkeleton
