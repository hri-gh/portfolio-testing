"use client"

import { Button } from '@/components/ui/button'
import React from 'react'

import { MdOutlineAttachEmail } from "react-icons/md";
import { Mail, Phone, Linkedin, Github, Copy } from 'lucide-react';
import { FaRegCopy } from "react-icons/fa";
import { MdCopyAll } from "react-icons/md";
import { BiSolidCopy } from "react-icons/bi";
// import { FaCopy } from "react-icons/fa";
import { Badge } from '@/components/ui/badge';
import { FaCopy } from "react-icons/fa6";
import toast from 'react-hot-toast';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

interface Props {
    email: string
    mobile: string
}

export const ContactInfo: React.FC<Props> = ({email, mobile}) => {
    return (
        <>
            <div className='flex items-center gap-4 mx-auto my-1 px-1' >
                <Mail className="p-0.5 h-6 w-6 text-gray-500 dark:text-gray-400" />
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <div className="text-sm ">{email}</div>
                        <div
                            className="text-gray-500 hover:text-gray-900 mr-1 dark:text-gray-400 dark:hover:text-gray-900"

                        >
                            <Copy className="h-4 w-4 cursor-pointer"
                                onClick={() => {
                                    navigator.clipboard.writeText("hrithikgh.edu@gmail.com")
                                    toast.success('Email copied to clipboard.');
                                }}
                            />
                            <span className="sr-only">Copy email</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex items-center gap-4 my-1 px-1'>
                <Phone className="p-0.5 h-6 w-6 text-gray-500 dark:text-gray-400" />
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <div className=" text-sm ">{mobile}</div>
                        <div
                            className="text-gray-500 mr-1 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-900"

                        >
                            <Copy className="h-4 w-4 cursor-pointer"
                                onClick={() => {
                                    navigator.clipboard.writeText("9382020441")
                                    toast.success('Number copied to clipboard.');
                                }}
                            />
                            <span className="sr-only">Copy email</span>
                        </div>
                    </div>
                </div>
            </div>


            {/* <p className='lg:hidden md:block sm:block text-white'>Show more..</p>

            <TooltipProvider delayDuration={100}>
                <Tooltip >
                    <TooltipTrigger className='flex  lg:hidden'>
                        <Badge
                            onClick={() => {
                                navigator.clipboard.writeText("9382020441")
                                toast.success('Email copied to clipboard.');
                            }}
                            className='lg:hidden  bg-sky-400 rounded-full gap-1 m-0.5 cursor-pointer'>
                            <Phone /> 9382020441

                        </Badge>
                        <MdCopyAll className='flex  justify-end hover:p-1 my-auto bg-gray-400 rounded-md  p-0.5 w-8 h-7' />
                    </TooltipTrigger>
                    <TooltipContent className='bg-black text-white'>
                        <p>Click to copy</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider> */}


            {/* <div
                className='cursor-pointer flex my-0.5 gap-1 bg-gray-500 rounded-full p-1 text-sm mx-1'>
                <Phone /> 9382020441
                <MdCopyAll
                    onClick={() => {
                        navigator.clipboard.writeText("9382020441")
                        toast.success('Mobile Number copied to clipboard.');
                    }}
                    className='hover:p-1 my-auto bg-white rounded-lg float-end p-0.5 w-8 h-5' />
            </div> */}
            {/*
            <div className='flex my-1 gap-2 bg-gray-500 rounded-md p-1 text-sm mx-1'>
                <Linkedin /> linkedin.com/in/hri-gh
            </div>
            <div className='flex my-1 gap-2 bg-gray-500 rounded-md p-1 text-sm mx-1'>
                <Github /> github.com/in/hri-gh
            </div> */}
            {/* <Button variant="secondary" className='rounded-full m-1'>Send Message</Button> */}
        </>
    )
}

