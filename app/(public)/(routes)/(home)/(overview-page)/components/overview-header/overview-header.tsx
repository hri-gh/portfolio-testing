"use client"
import { Suspense } from "react"

import { useAboutMe } from "@/hooks/get-about-me"
import { ScrollArea } from "@/components/ui/scroll-area"
import OverviewSkeleton from "./overview-skeleton"


export const OverviewHeader = ({ data }: { data: string }) => {
    // const [data, error, loading] = useAboutMe()

    return (
        <>
            <ScrollArea className="dark:bg-black bg-gray-200 mb-2 rounded-xl border ">
                {/* {loading && (<OverviewSkeleton />)} */}
                {/* <p className='p-4 text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-800 dark:text-gray-300 relative z-20'>{data[0]?.overview}</p> */}
                <div className='p-4 text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-800 dark:text-gray-300 relative z-20' dangerouslySetInnerHTML={{__html:data}}/>
            </ScrollArea>
        </>
    )
}


