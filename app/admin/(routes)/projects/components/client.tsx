"use client"

import { useParams, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { Heading } from "@/components/ui/heading";

import {ProjectCard} from "./project-card";

import { PlusIcon } from "lucide-react";


import { ProjectCardData } from "../page";

interface ProjectClientProps {
    data: ProjectCardData[]
}


export const ProjectClient: React.FC<ProjectClientProps> = ({
    data
}) => {
    const router = useRouter()
    const params = useParams()
    return (

        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`Projects (${data.length})`}
                    description="Manage Project's data"
                />
                <Button
                    onClick={() => router.push(`/admin/projects/new`)}>
                    <PlusIcon className="mr-2 h-4 w-4" /> Add New
                </Button>
            </div>
            <Separator />
            <ProjectCard data={data}/>
        </>
    )
}
