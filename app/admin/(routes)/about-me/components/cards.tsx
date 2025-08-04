"use client"

import React from 'react'
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";


// UI COMPONENTS
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertModal } from "@/components/modals/alert-modal";


// ICONS
import { Edit, Copy, Delete } from "lucide-react";


// DATA TYPE
import { AboutmeCardData } from "../page";


interface AboutmeCardProps {
    data: AboutmeCardData[]
}


export const AboutmeCard: React.FC<AboutmeCardProps> = ({ data }) => {

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const router = useRouter()
    const params = useParams()


    const onCopy = (id: string) => {
        navigator.clipboard.writeText(id);
        toast.success('Id copied to clipboard.');
    }

    return (
        <div className="flex">
            {data.map((item: any) => (
                <div key={item.id} className="m-3">
                    <AlertModal
                        isOpen={open}
                        onClose={() => setOpen(false)}
                        onConfirm={async () => {
                            try {
                                setLoading(true);
                                await axios.delete(`/api/about-me/${item.id}`);
                                toast.success('Content deleted.');
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
                    // onClick={() => router.push(`/admin/overview/${item.id}`)}
                    >
                        <CardHeader>
                            <CardTitle>{item?.aboutMeHeader}</CardTitle>
                        </CardHeader>

                        <CardContent>
                            <CardTitle>{`Name`}: {item?.name}</CardTitle>
                            <CardTitle>{`Location`}: {item?.location}</CardTitle>
                            <CardTitle>{`Bio`}: {item?.bio}</CardTitle>
                        </CardContent>

                        <CardFooter className="m-1">
                        </CardFooter>
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
                                    router.push(`/admin/about-me/${item.id}`)
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
