"use client"

import { useParams, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { Heading } from "@/components/ui/heading";

import {BadgeCard} from "./badge-card";

import { PlusIcon } from "lucide-react";


import { BadgeCardData } from "../page";

interface IBadgeClientProps {
    data: BadgeCardData[]
}


export const BadgeClient: React.FC<IBadgeClientProps> = ({
    data
}) => {
    const router = useRouter()
    const params = useParams()
    return (

        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`Badges (${data.length})`}
                    description="Manage badges of your Portfolio"
                />
                <Button
                    onClick={() => router.push(`/admin/badges/new`)}>
                    <PlusIcon className="mr-2 h-4 w-4" /> Add New
                </Button>
            </div>
            <Separator />
            <BadgeCard data={data} />
        </>
    )
}
