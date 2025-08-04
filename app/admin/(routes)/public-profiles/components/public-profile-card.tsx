"use client"

import React from 'react'
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import toast from "react-hot-toast";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";


// UI COMPONENTS
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";
import { AlertModal } from "@/components/modals/alert-modal";


// ICONS
import { Edit, Copy, Delete } from "lucide-react";


// DATA TYPE
import { PublicProfileCardData } from "../page";
import { Separator } from '@/components/ui/separator';

interface PublicProfileCardProps {
    data: PublicProfileCardData[];
}


export const PublicProfileCard: React.FC<PublicProfileCardProps> = ({ data }) => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    console.log(data);


    const router = useRouter()
    const params = useParams()


    const onCopy = (id: string) => {
        navigator.clipboard.writeText(id);
        toast.success('Id copied to clipboard.');
    }

    return (
        <div className="flex flex-wrap justify-evenly">
            {data.map((item: any) => (
                <div key={item.id} className="m-3">
                    <AlertModal
                        isOpen={open}
                        onClose={() => setOpen(false)}
                        onConfirm={async () => {
                            try {
                                setLoading(true);
                                await axios.delete(`/api/public-profiles/${item.id}`);
                                toast.success('Public profile deleted.');
                                router.refresh();
                            } catch (error) {
                                toast.error('Something went wrong');
                            } finally {
                                setOpen(false);
                                setLoading(false);
                            }
                        }}
                        loading={loading}
                    />
                    <Card className="w-[350px] rounded-lg cursor-pointer bg-gray-700 hover:bg-gray-600"
                    // onClick={() => router.push(`/admin/projects/${item.id}`)}
                    >
                        <CardContent className=''>
                            {item?.image && (
                                <Image
                                    alt="project_image"
                                    src={item?.image}
                                    width={300}
                                    height={100}
                                    className="aspect-auto my-2 mx-auto rounded-sm bg-gray-400 p-2"
                                    priority
                                />
                            )}

                            <CardTitle className='font-bold text-2xl mb-3'>{item?.publicProfileName}</CardTitle>
                            <Separator />
                            <CardTitle className='mt-2 text-blue-500'>
                                {/* <Link href={item?.publicProfileLink} target='_blank' >
                                    {item?.publicProfileLink}
                                </Link> */}
                            </CardTitle>
                        </CardContent>

                        <div className="m-1 space-y-1 text-black font-normal">
                            <div className="bg-stone-400 rounded-full pl-1 ">
                                <span className="text-blue-950 font-medium">Created At : </span>
                                {item.createdAt}
                            </div>
                            <div className="bg-stone-400 rounded-full pl-1">
                                <span className="text-blue-950 font-medium">Updated At : </span>
                                {item.updatedAt}
                            </div>
                        </div>

                        <div className="flex gap-3 m-1 p-2 bg-gray-800 rounded-md">
                            <Edit
                                className="hover:bg-gray-700 hover:rounded-sm hover:p-1"
                                onClick={(e: React.MouseEvent) => {
                                    e.stopPropagation()
                                    router.push(`/admin/public-profiles/${item.id}`)
                                }} />
                            <Copy
                                className="hover:bg-gray-700 hover:rounded-sm hover:p-1"
                                onClick={(e: React.MouseEvent) => {
                                    e.stopPropagation();
                                    onCopy(item.id)
                                }} />
                            <Delete
                                className="hover:bg-gray-700 hover:rounded-sm hover:p-1"
                                onClick={(e: React.MouseEvent) => {
                                    e.stopPropagation()
                                    setOpen(true)
                                }} />
                        </div>
                    </Card>
                </div>
            ))}
        </div>
    )
}

