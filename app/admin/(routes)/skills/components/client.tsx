"use client"

import { useParams, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { Heading } from "@/components/ui/heading";

import {SkillCard} from "./skill-card";

import { PlusIcon } from "lucide-react";


import { SkillCardData } from "../page";

interface SkillClientProps {
    data: SkillCardData[]
}


export const SkillClient: React.FC<SkillClientProps> = ({
    data
}) => {
    const router = useRouter()
    const params = useParams()
    return (

        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`Skills (${data.length})`}
                    description="Manage Skills of your Portfolio"
                />
                <Button
                    onClick={() => router.push(`/admin/skills/new`)}>
                    <PlusIcon className="mr-2 h-4 w-4" /> Add New
                </Button>
            </div>
            <Separator />
            <SkillCard data={data} />
        </>
    )
}
