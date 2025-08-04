"use client"

import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useState } from "react"
import { MoveRight } from "lucide-react"
import { Separator } from '@/components/ui/separator'
import { FaFreeCodeCamp } from "react-icons/fa";

export default function PublicProfileCard({ item }: any) {


    return (
        <>
            <div className='font-bold flex gap-2 items-center my-auto justify-between'>
                <div className='hover:underline cursor-pointer flex gap-1 items-center text-gray-900 dark:text-white'>
                    {/* <FaFreeCodeCamp className="hover:p-0.5 w-5 h-6"/> */}
                    <Image
                        src={"/fcc_primary_small.svg"}
                        alt="Free Code Camp Icon"
                        width={24}
                        height={24}
                        className="w-5 h-6 invert dark:invert-0"
                        unoptimized={true}
                    />
                    {item?.publicProfileName}
                </div>
                <Link href={item.publicProfileLink} target="_blank">
                    <Button className=" mr-3 my-0.5 flex items-center gap-2 group " variant="outline">
                        <span className="transition-transform duration-300 ease-in-out text-gray-900 dark:text-white group-hover:translate-x-1">Visit</span>
                        <MoveRight className="h-4 w-4 text-gray-900 dark:text-white transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                    </Button>
                </Link>
            </div>
            <Separator className='my-2' />
        </>
    )
}


