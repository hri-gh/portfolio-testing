"use client"

import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useState } from "react"


export default function PublicProfileCard({ item }: any) {


    return (
        <Card className="cursor-pointer  p-2 max-w-sm m-2 border-2  hover:shadow-indigo-500 transition duration-300 ease-in-out">

            <Image
                alt=""
                className="aspect-video object-fill overflow-hidden rounded-xl bg-gray-600 p-2 object-center"
                height={200}
                src={item.imageUrl}
                width={400}
                priority

            />
            <CardContent className="grid gap-4 p-6">
                <p className="hover:underline uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {item.publicProfileName}
                </p>
            </CardContent>
            <CardFooter className="flex gap-2 p-4">
                <Button variant="outline">
                    <Link href={item.publicProfileLink} target="_blank">Visit</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
