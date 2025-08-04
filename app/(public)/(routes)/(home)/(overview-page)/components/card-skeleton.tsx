import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"

export function GridCardSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-6 w-[300px]" />
      <Separator className=""/>
      <div className="space-y-2">
        <Skeleton className="h-4 w-[270px]" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[230px]" />
        <Skeleton className="h-4 w-[210px]" />
        <Skeleton className="h-4 w-[190px]" />
      </div>
    </div>
  )
}
