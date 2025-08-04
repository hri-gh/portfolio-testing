import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from '@/components/ui/separator'

export const PublicProfileSkeleton = () => {
    return (
        <>
            <div className="flex gap-2 items-center my-auto justify-between">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-8 w-[80px] mr-3 my-0.5 " />
            </div>
            <Separator className='my-2' />
        </>
    )
}

