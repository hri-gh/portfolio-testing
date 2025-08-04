// "use client"

import { Separator } from "@/components/ui/separator";
import { useAboutMe } from "@/hooks/get-about-me"
import { GridCardSkeleton } from "../card-skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";


export const AboutMeCard = ({ data }: { data: string }) => {
    // const [data, error, loading] = useAboutMe()

    return (
        <>
            <div className=" border-2 border-dotted border-green-400 overflow-hidden h-72 rounded-lg">
                <div className="flex-1 [grid-area:stack] group-hover:opacity-90 transition-opacity text-gray-900 dark:text-white p-4 lg:p-8 justify-end flex flex-col gap-2">
                    {/* {loading && (<GridCardSkeleton />)} */}
                    {/* <h3 className="text-2xl font-bold  tracking-tight">{data[0]?.aboutMeHeader}</h3> */}
                    <h3 className="text-2xl font-bold  tracking-tight">About Me</h3>
                    {/* {loading ? null : <Separator />} */}
                    <Separator />
                    <ScrollArea className="h-52">
                        <p className="leading-none text-lg font-medium my-3">
                            {/* {data[0]?.aboutMeDescription} */}
                            {data}
                        </p>
                    </ScrollArea>
                </div>
            </div>
        </>
    )
}


