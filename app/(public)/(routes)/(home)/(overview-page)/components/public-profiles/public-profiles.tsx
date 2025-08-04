

import { Separator } from "@/components/ui/separator";
import { PublicProfileListList } from "./public-profile-list";
import { ScrollArea } from "@/components/ui/scroll-area";
import { fetchPublicProfiles } from '@/lib/services/fetch-public-profiles';

export const PublicProfiles = async () => {
    const publicProfiles = await fetchPublicProfiles()

    return (
        <>
            <div className="overflow-hidden border-2 border-dashed border-pink-500 rounded-lg h-80">
                <div className=" flex-1 [grid-area:stack]  group-hover:opacity-90 transition-opacity text-white p-4 lg:p-8 justify-end flex flex-col gap-2">
                    <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Public Profiles</h3>
                    <Separator />
                    <ScrollArea className="rounded-lg h-60">
                        <PublicProfileListList data={publicProfiles} />
                    </ScrollArea>
                </div>
            </div>
        </>
    )
}


