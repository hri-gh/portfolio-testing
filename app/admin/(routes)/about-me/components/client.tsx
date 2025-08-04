"use client"

import { PlusIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { Heading } from "@/components/ui/heading";

import { AboutmeCard } from "./cards";

import { AboutmeCardData } from "../page";
import Link from "next/link";


interface AboutmeClientProps {
    data: AboutmeCardData[]
}


export const AboutmeClient: React.FC<AboutmeClientProps> = ({
    data
}) => {
    const router = useRouter()
    const params = useParams()
    return (

        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`About Me (${data.length})`}
                    description="Manage AboutMe of default page"
                />
                <Button
                    onClick={() => router.push(`/admin/about-me/new`)}>
                    <PlusIcon className="mr-2 h-4 w-4" /> Add New
                </Button>
            </div>
            <Separator />
            <AboutmeCard data={data}/>
        </>
    )
}
