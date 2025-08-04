// "use client"

import { Separator } from "@/components/ui/separator";
import { SkillList } from '@/components/public/skills/skill-list'
import { ScrollArea } from "@/components/ui/scroll-area";

export const Skills = () => {

    return (
        <>
            <div className="border-2 overflow-hidden border-dashed border-pink-500 rounded-lg h-80">
                <div className=" flex-1 [grid-area:stack] group-hover:opacity-90 transition-opacity text-white p-4 lg:p-8 justify-end flex flex-col gap-2">
                    <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Skills</h3>
                    <Separator />
                    <ScrollArea className="rounded-lg h-60">
                        <SkillList />
                    </ScrollArea>
                </div>
            </div>
        </>
    )
}


