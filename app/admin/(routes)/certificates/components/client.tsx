"use client"

import { useParams, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { Heading } from "@/components/ui/heading";

import {CertificateCard} from "./certificate-card";

import { PlusIcon } from "lucide-react";


import { CertificateCardData } from "../page";

interface CertificateClientProps {
    data: CertificateCardData[]
}


export const CertificateClient: React.FC<CertificateClientProps> = ({
    data
}) => {
    const router = useRouter()
    const params = useParams()
    return (

        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`Certificates (${data.length})`}
                    description="Manage Certificates of your Portfolio"
                />
                <Button
                    onClick={() => router.push(`/admin/certificates/new`)}>
                    <PlusIcon className="mr-2 h-4 w-4" /> Add New
                </Button>
            </div>
            <Separator />
            <CertificateCard data={data} />
        </>
    )
}
